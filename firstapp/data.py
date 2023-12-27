import mysql.connector
import json
from datetime import datetime,date

# MySQL 연결 설정
def Data():
    conn = mysql.connector.connect(
        host="127.0.0.1",
        user="root",
        password="root1234",
        database="bit"
    )

    # 커서 생성
    cursor = conn.cursor()

    # 쿼리 실행
    query = "SELECT * FROM member"
    cursor.execute(query)

    # 결과 가져오기
    result = cursor.fetchall()

    # 컬럼 이름 가져오기
    columns = [desc[0] for desc in cursor.description]

    # 결과를 딕셔너리 리스트로 변환 (datetime을 문자열로 변환)
    data = [dict(zip(columns, row)) for row in result]
    for item in data:
        for key, value in item.items():
            if isinstance(value, datetime):
                item[key] = value.strftime('%Y-%m-%d %H:%M:%S')
            elif isinstance(value, date):
                item[key] = value.strftime('%Y-%m-%d')
    # JSON 파일로 저장
    with open('./firstapp/output.json', 'w') as json_file:
        json.dump(data, json_file, indent=4)

    # 연결 종료
    cursor.close()
    conn.close()
