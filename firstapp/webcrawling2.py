from urllib.parse import quote_plus
from bs4 import BeautifulSoup
import requests
import os

def photo(text,num):

    encode = quote_plus(text)
    url = f"https://search.naver.com/search.naver?sm=tab_hty.top&where=image&query={encode}"
    req = requests.get(url, headers={'User-agent': 'Mozilla/5.0'})
    soup = BeautifulSoup(req.text, "html.parser")

    img_tags = soup.find_all('img')
    n = 1
    now_directory=os.getcwd()


    for img_tag in img_tags:
        src_value = img_tag.get('src')
        src_value = src_value.replace('f54_54', 'a340')
        print(src_value)
        if src_value:
            img_data = requests.get(src_value).content
            with open(f"{now_directory}\\front\\public\\{text}_{num}.jpg", 'wb') as f:
                f.write(img_data)
            n += 1

            # 첫 번째 이미지를 다운로드한 후 루프에서 나옵니다.
            break