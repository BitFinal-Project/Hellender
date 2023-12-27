from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserDataSerializer,ResultFeedbackSerializer
import openai
from .rec_ac import rec_ac, rec_fd, rec_ta,rec_pd
from .models import UserData,ResultFeedback
from .chatgpt import chatgpt,result_bodyparts,body_check
from .webcrawling2 import photo
from .data import Data
import json
from datetime import datetime
from .bmishow import *
from django.conf import settings
class InputUserData(APIView):
    def post(self, request):
        # data.py에서 생성한 output.json 파일을 읽어옵니다.
        Data()
        with open('./firstapp/output.json', 'r') as json_file:
            data = json.load(json_file)

        # JSON 데이터를 기반으로 UserData 모델의 인스턴스 생성 및 저장
        for item in data:
            # 문자열로 변환된 datetime을 datetime 객체로 다시 변환
            for key, value in item.items():
                if isinstance(value, str):
                    try:
                        item[key] = datetime.strptime(value, '%Y-%m-%d %H:%M:%S')
                    except ValueError:
                        pass

            # UserData 모델의 인스턴스 생성
            user_data_instance = UserData(**item)

            # 인스턴스를 데이터베이스에 저장
            user_data_instance.save()

        # 데이터 저장이 완료된 후, 요청에 대한 응답을 생성합니다.
        serializer = UserDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=400)

class UserDataList(APIView):
    def get(self, request):
        latest_data = UserData.objects.all().order_by('-uid').first()
        if latest_data:
            serializer = UserDataSerializer(latest_data)
            return Response(serializer.data)
        else:
            return Response({"message": "No data available"}, status=404)

class ResultFeedbackList(APIView):
    def get(self, request):
        latest_data = UserData.objects.all().order_by('-uid').first()
        input_text = f"""
        <설문지>
        1. 키: {latest_data.height}
        2. 몸무게: {latest_data.weight}
        3. 현재 신체 활동 수준: {latest_data.health_level}
        4. 운동 선호: {latest_data.flavor}
        5. 운동 목적: {latest_data.purpose}
        6. 하루 운동 선호 시간: {latest_data.health_time}
        7. 일주일 운동 선호 횟수: {latest_data.health_num}
        8. 운동 장소 선호: {latest_data.location_num}
        9. 건강 상태: {latest_data.etc_hist}
       
        <오늘의 일기>
        오늘 진행한 운동:{latest_data.exercise}
        오늘 먹은 식단: {latest_data.food}
        오늘의 전체적 기분: {latest_data.feel} 입니다.
        """
        return Response({"input_text": input_text})

    def post(self, request):
        input_text = request.data.get('input_text', '')  # 클라이언트에서 전달한 input_text 가져오기

        openai.api_key = settings.OPENAI_API_KEY 

        messages = []
        content = chatgpt(input_text)

        

        messages.append({"role": "user", "content": content})

        completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=messages
        )

        chat_response = completion.choices[0].message.content
        rec_pd1 = rec_pd(chat_response)
        rec_ac1 = rec_ac(chat_response)[0]
        rec_ac2 = rec_ac(chat_response)[1]
        rec_ac3 = rec_ac(chat_response)[2]
        rec_fd1 = rec_fd(chat_response)[0][0]
        rec_fd2 = rec_fd(chat_response)[1][0]
        rec_fd3 = rec_fd(chat_response)[2][0]
        rec_ta1 = rec_ta(chat_response)[0]
        rec_ta2 = rec_ta(chat_response)[1]

        latest_data = UserData.objects.all().order_by('-uid').first()
        result_data = {
            "user_data":latest_data.uid,
            "rec_ac1": rec_ac1,
            "rec_ac2": rec_ac2,
            "rec_ac3": rec_ac3,
            "rec_fd1": rec_fd1,
            "rec_fd2": rec_fd2,
            "rec_fd3": rec_fd3,
            "rec_ta1": rec_ta1,
            "rec_ta2": rec_ta2,
            "rec_pd1" : rec_pd1,
            
        }
        
        result_feedback_serializer = ResultFeedbackSerializer(data=result_data)
        if result_feedback_serializer.is_valid():
            result_feedback_serializer.save()
        else:
            print('데이터 오류:', result_feedback_serializer.errors)
        body_parts=result_bodyparts(rec_ac1,rec_ac2,rec_ac3)
        # body_check(body_parts)
        # photo(rec_ac1,latest_data.uid)
        # photo(rec_ac2,latest_data.uid)
        # photo(rec_ac3,latest_data.uid)
        # latest_data = UserData.objects.all().order_by('-uid').first()
        # plot_bmi_graph(latest_data)
        return Response(result_feedback_serializer.data)
    
class FeedbackList(APIView):
    def get(self, request):
        latest_data = ResultFeedback.objects.all().order_by('-user_data').first()
        if latest_data:
            serializer = ResultFeedbackSerializer(latest_data)
            return Response(serializer.data)
        else:
            return Response({"message": "No data available"}, status=404)
        
