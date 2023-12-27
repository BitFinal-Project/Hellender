
import matplotlib
matplotlib.use('Agg')
from matplotlib import pyplot
import matplotlib.font_manager as fm
import numpy as np
from sklearn.cluster import KMeans
from io import BytesIO
import base64
from PIL import Image
from .models import *
import os
def plot_pentagon_with_kmeans(a):
    font_path = r'C:\Windows\Fonts\HMKMMAG.ttf' 
    fontprop = fm.FontProperties(fname=font_path)

    num_areas = 5

    # 부위의 이름
    body_parts = ['등', '어깨', '허리', '팔', '다리']
    helo_parts = ['수치', '수치', '수치', '수치', '수치']

    # Reshape the a array for KMeans input
    X = np.array(a).reshape(-1, 1)

    # Apply k-means clustering with k=2 (you can adjust k as needed)
    kmeans = KMeans(n_clusters=2, n_init=10, random_state=42)
    kmeans.fit(X)

    # Get the cluster labels and cluster centers
    cluster_labels = kmeans.labels_
    cluster_centers = kmeans.cluster_centers_

    # Assign each body part to a cluster based on the k-means result
    cluster_assignments = np.array([body_parts[i] for i in cluster_labels])

    # 다이어그램을 그리기 위한 초기화
    fig, ax = pyplot.subplots(figsize=(6, 6), subplot_kw=dict(polar=True))
    ax.set_theta_offset(np.pi / 2)
    ax.set_theta_direction(-1)

    # 각 부위에 대해 다이어그램에 가중치 표시
    for i, (body_part, weight, cluster_assignment, helo_part) in enumerate(zip(body_parts, a, cluster_assignments, helo_parts)):
        angle = i * (2 * np.pi / num_areas)
        ax.plot(angle, weight, marker='o', label=f'{body_part} ({cluster_assignment})')
        ax.annotate(helo_part, xy=(angle, weight), ha='center', va='center', fontproperties=fontprop)

        # 이전 부위와 현재 부위를 선으로 연결
        if i > 0:
            prev_angle = (i - 1) * (2 * np.pi / num_areas)
            ax.plot([prev_angle, angle], [a[i - 1], weight], color='blue')

    # 처음과 마지막 부위를 선으로 연결
    ax.plot([(num_areas - 1) * (2 * np.pi / num_areas), 0], [a[-1], a[0]], color='blue')

    # 다각형 내부를 하늘색으로 채우기 (다각형 모드로 수정)
    ax.fill(np.linspace(0, 2 * np.pi, num_areas, endpoint=False), a, color='skyblue', alpha=0.3)

    # 그리드와 레이블 설정
    ax.set_rlabel_position(0)
    ax.set_yticklabels([])
    ax.set_xticks(np.arange(0, 2 * np.pi, (2 * np.pi) / num_areas))
    ax.set_xticklabels(body_parts, fontproperties=fontprop)
    pyplot.rcParams['axes.unicode_minus'] = False
    # 타이틀 및 레전드 추가
    pyplot.title("부위별 가중치 클러스터링 다이어그램", fontproperties=fontprop)
    pyplot.legend(loc='upper right', bbox_to_anchor=(0.1, 0.1), prop=fontprop)
    latest_id = UserData.objects.values_list('uid', flat=True).order_by('-uid').first()
    now_directory=os.getcwd()
# 가져온 UserData 인스턴스의 id를 사용하여 그래프를 생성
    if latest_id:
        save_path = f'{now_directory}\\front\\public\\bodygraph_{latest_id}.png'
        pyplot.savefig(save_path)
        pyplot.close()
    # save_path='C:\Users\ysc96\tutorial\community'
    # plt.savefig(save_path,format='png')
    #plt.show()
    # 다이어그램 표시
    
    
    # BytesIO를 base64로 인코딩한 문자열로 변환