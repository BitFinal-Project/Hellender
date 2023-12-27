import openai
from .body_graph import *
from django.conf import settings
def chatgpt(input_text):
    content=f'''
        {input_text}

        이 <설문지> 와 <오늘의 일기>를 토대로 
        1. 추천 운동 3개 ==> 각 운동에 대해서 설명 안해도 되고 운동 이름만 말해줘
        2. 식단표 아침,점심,저녁
        3. 스트레스 해소 방법중 추천해주고 싶은 차 종류 1개 와 운동 1개 ==> 차 와 운동에 대해서 설명 안해도 되고 차 이름 과 운동 이름만 말해줘
        4. <설문지>와<오늘의 일기>에 대한 피드백
        알려줄래?
        정확히 
        1. 추천 운동 3개: 
        - 추천 운동1: 
        - 추천 운동2: 
        - 추천 운동3: 

        2. 식단표:
        - 아침: 
        - 점심: 
        - 저녁: 

        3. 스트레스 해소관련 추천 차 종류 와 추천운동: 
        - 추천 차 종류: 
        - 추천 운동: 

        4. <오늘 하루> 피드백


        이런 형식과 동일하게 알려줘.
        '''
    return content

def result_bodyparts(a,b,c):
    openai.api_key=settings.OPENAI_API_KEY
    messages=[]
    prompt=f'''
        1.{a}
        2.{b}
        3.{c}
        이 각각의 3개의 운동은 [등,어꺠,허리,팔,다리] 중에 어떤것에 도움이 되는거지
        5가지안에서만 선택해서 말해줄래?

        {a}은 ~~에 도움이 됩니다.
        {b}은 ~~에 도움이 됩니다.
        {c}은 ~~에 도움이 됩니다.

        정확히 이러한 형식을 말해줄래?
        '''
    messages.append({"role":"user","content":prompt})

    completion=openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=messages
    )

    body_parts=completion.choices[0].message.content
    print(f'ChatGPT:\n{body_parts}')
    messages.append({"role":"assistant","content":body_parts})
    return body_parts

def body_check(input_text):    
    
    body_parts_to_check = ['등', '어꺠', '허리', '팔', '다리']
    counters = [0, 0, 0, 0, 0]

    lines = input_text.splitlines()

    for line in lines:
        for i, part in enumerate(body_parts_to_check):
            if part in line:
                counters[i] += 1

    weights = counters
    image_data=plot_pentagon_with_kmeans(weights)
    return image_data