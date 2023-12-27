
import matplotlib.pyplot as pyplot
import matplotlib 
matplotlib.use('Agg')
from matplotlib import pyplot
from .models import UserData
import os
def plot_bmi_graph(user_data_list):
    date_values = list(range(1,8))
    bmi_values = [user_data_list.bmi_value,user_data_list.b_one,user_data_list.b_two,user_data_list.b_three,user_data_list.b_four,user_data_list.b_five,user_data_list.b_six]

    pyplot.rcParams['font.family'] = 'Malgun Gothic'
    pyplot.rcParams['axes.unicode_minus'] = False

    pyplot.plot(date_values, bmi_values, color='green', marker='o', linestyle='solid')
    pyplot.title("날짜별 BMI 지수")
    pyplot.xlabel("날짜")
    pyplot.ylabel("BMI")
    pyplot.yticks(range(0, 101, 5))

    # 각 지점 위에 텍스트 레이블 추가
    for date, bmi_value in zip(date_values, bmi_values):
        pyplot.text(date, bmi_value, f'{bmi_value:.2f}', ha='left', va='bottom', rotation=45)
    now_directory=os.getcwd()
    latest_id = UserData.objects.values_list('uid', flat=True).order_by('uid').last()
    pyplot.savefig(f'{now_directory}\\front\\public\\bmi_graph_{latest_id}.png')
    pyplot.close()