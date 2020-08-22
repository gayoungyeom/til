# Model

> Model은 응용프로그래의 데이터 구조를 정의하고 데이터베이스의 기록을 관리(CRUD)하고 쿼리하는 방법을 제공하는 파이썬 객체이다. 즉, 데이터베이스에 저장되는 데이터를 관리하는 곳이다. [출처: Django MDN]

## 🍞Model 생성

**모델명의 첫 글자는 대문자로!**

##### 1. 모델 만들기

models.py

```python
class Post(models.Model):
    image = models.ImageField(upload_to="images/") #이미지 필드 생성 & 이미지 파일은 images/에 저장하겠다고 설정
    title = models.CharField(max_length=50) # 캐릭터 필드 생성 & 최대 50 자로 설정
    description = models.TextField() # 텍스트 필드 생성

    # 생성된 instance의 제목을 설정한 title로 보여주기 위한 메소드
    def __str__(self):
        return self.title
```

## 🍞Model 적용

장고는 모델이 무엇인지 알지만 DB는 그렇지 않다. 따라서 DB에게 모델을 알려주는 과정이 필요하다. 터미널에 다음을 순서대로 입력한다.

##### 2. DB가 알아듣도록 번역하기

`$ python manage.py makemigrations`

##### 3. 번역한 내용을 DB에 적용하기

`$ python manage.py migrate`

## 🍞Admin 설정

##### 4. 관리자 계정 만들기

`$ python manage.py createsupersuer`

##### 5. admin에게 model 알리기

admin.py

```python
from .models import Post # 만든 모델 ipmort
admin.site.register(Post) # 만든 모델 admin에 등록
```
