# Static File

Static File은 이미지나 CSS, JS 파일처럼 내용이 고정되어 있어, 응답을 할 때 파일 그대로를 보내주면 되는 파일이다. 장고에서는 static file을 `Static`과 `Media`로 분류한다.

- Static: 웹 서비스를 위해 <strong>개발자가 준비해두는 파일</strong>
- Media: 웹 서비스 <strong>이용자들이 업로드하는 파일</strong>

## 🍞Static 처리하기

##### 1. Static 폴더 생성

App 폴더 내에 static 폴더를 생성하고 파일을 생성한다.

##### 2. settings.py 수정하기

settings.py파일에 아래 코드를 추가한다.

```python
import os

# static file들이 들어있는 경로 알리기
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'App 이름', 'static'),
]

# static file을 모을 디렉토리 설정하기
STATIC_ROOT = [
    os.path.join(BASE_DIR, 'static')
]
```

##### 3. static 파일 모으기

터미널에 다음 명령어를 입력한다. 모든 static file을 모아서 settings.py의 `STATIC_ROOT`에서 설정한 경로로 static 폴더를 만들어 준다.

```
$ python manage.py collectstatic
```

##### 4. template 설정하기

html 파일 맨위에 다음을 추가한다.

```html
{% load static %}
```

static file의 경로를 템플릿 언어로 작성한다.

```html
<!-- example -->
<link href="{% static 'path' %}" ... />
<img src="{% static 'image.jpg' %}" alt="iamge" />
```

## 🍞Media 처리하기

##### 1. settings.py 수정하기

settings.py파일에 아래 코드를 추가한다.

```python
import os

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'
```

##### 2. urls.py 수정하기

urlpatterns의 마지막에 다음 한 줄을 추가한다.

```python
import django.conf.import settings
from django.conf.urls.static import static

urlpatterns = [
    ...
] + static(settings.Media_URL, document_root=settings.MEDIA_ROOT)
```

##### 3. template 설정하기

html 파일 맨위에 다음을 추가한다.

```html
{% load static %}
```

views에서 넘어온 객체를 템플릿 언어로 뿌려준다.
(이용자들이 업로드한 파일을 화면에 뿌리는 과정이다.)

> 이게 무슨말이냐? [model](./model.md)을 먼저 알아보자!

```html
<!-- example -->
<div class="posts">
  {% for post in posts.all %}
  <h1>{{ post.title }}</h1>
  <p>{{ post.description }}</p>
  {% endfor %}
</div>
```
