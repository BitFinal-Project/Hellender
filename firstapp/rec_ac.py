import re

def rec_ac(chat_response):
    print(f"Type of chat_response: {type(chat_response)}")
    exercise_section1 = re.search(r'1\. 추천 운동 3개:(.*?)(?=\d\.)', chat_response, re.DOTALL)

    # 추출된 부분 출력
    recommended_exercises1 = ""
    if exercise_section1:
        recommended_exercises1 = exercise_section1.group(1).strip()
    else:
        print("추천 운동 부분을 찾을 수 없습니다.")

    lines1 = recommended_exercises1.splitlines()

    rec_ac1 = []
    for line in lines1:
        # 각 운동 목록에 대해 ':'의 존재 여부 확인
        if ':' in line:
            result = line.split(': ')[-1].split(', ')[0]
            rec_ac1.append(result)
        else:
            rec_ac1.extend([exercise.strip() for exercise in line.split(',')])
    
    return rec_ac1


def rec_fd(chat_response):
    print(f"Type of chat_response: {type(chat_response)}")
    exercise_section2 = re.search(r'식단표(.*?)(?=\d\.)', chat_response, re.DOTALL)

    # 추출된 부분 출력
    recommended_exercises2 = ""
    if exercise_section2:
        recommended_exercises2 = exercise_section2.group(1).strip()
    else:
        print("추천 식단 부분을 찾을 수 없습니다.")
    
    lines2 = recommended_exercises2.splitlines()

    rec_f = []
    for i in range(1, 4):
        exercise_list2 = [exercise.strip() for exercise in lines2[i].split('\n')]
        first_menu = exercise_list2[0].split(': ')[1]
        exercise_list2 = exercise_list2[1:]
        exercise_list2.append(first_menu)
        rec_f.append(exercise_list2)
    
    return rec_f

def rec_pd(chat_response):
    print(f"Type of chat_response: {type(chat_response)}")
    start_index = chat_response.find("4")
    end_index = chat_response.find("5.", start_index)  # 다음 항목의 시작 전까지 추출
    rec_pd = chat_response[start_index:end_index].strip()
    rec_pd=rec_pd.replace('4. ','')
    return rec_pd

def rec_ta(chat_response):
    print(f"Type of chat_response: {type(chat_response)}")
    start_index1 = chat_response.find("3.")
    end_index1 = chat_response.find("4.", start_index1)  # 다음 항목의 시작 전까지 추출
    feedback_text = chat_response[start_index1:end_index1].strip()

    lines3 = feedback_text.splitlines()
    re_st = []
    for i in range(1, 3):
        feedback_list = [exercise.strip() for exercise in lines3[i].split('\n')]
        feedback_list = feedback_list[0].split(': ')[1]
        re_st.append(feedback_list)
    
    return re_st

# def desc():
#     sv1=float(input("키 입력:"))
#     sv2=float(input("몸무게 입력:"))
#     sv3=input("현재 신체 활동 수준 입력:")
#     sv4=input('운동 선호:')
#     sv5=input('운동 목적:')
#     sv6=input('하루 운동 선호 시간:')
#     sv7=input('일주일간 운동 선호 횟수:')
#     sv8=input('운동 장소 선호:')
#     sv9=input('건강 상태:')
#     sv10=input('오늘의 일기:')

#     input_text=f"""
#     <설문지>
#     1. 키: {sv1}
#     2. 몸무게: {sv2}
#     3. 현재 신체 활동 수준: {sv3}
#     4. 운동 선호 :{sv4}
#     5. 운동 목적 :{sv5}
#     6. 하루 운동 선호 시간 :{sv6}
#     7. 일주일 운동 선호 횟수:{sv7}
#     8. 운동 장소 선호 :{sv8}
#     9. 건강 상태 :{sv9}
#     <오늘의 일기>
#     {sv10}
#     """
#     return input_text

