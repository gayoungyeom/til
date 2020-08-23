# URL Include

App 별로 URL을 관리할 수 있도록 구조화 하는 방법이다.
project 폴더 내부의 urls.py에서 모든 url을 관리하기 어려울 때 사용한다.

## 🍞App 별로 url 관리하기

##### 1. app 폴더 내부에 urls.py 파일 생성

##### 2. appName/urls.py 작성

project 폴더 내부에 있던 urls.py와 유사하게 작성하면 된다. 해당 app에 관련된 url을 따로 떼서 관리하는 것이다.

```python
from django.conf.urls improt path
from . import views # 현재 위치에서 views import

urlpatterns = [
    # 해당 app에 관련된 url 설정하기
    path('', view.home, name="home") # 예시
]
```

##### 3. project/urls.py 수정

appName/urls.py로 넘어간 url을 삭제하고 해당 앱을 포함하는 작업을 한다.

```python
from django.urls import include # include 메소드 import

urlpatterns = [
    path('admin/', admin.site.urls), # 이건 그대로 두고
    #path('', appName.views.home, name="home") # 넘어간 부분 삭제
    path('', include('appName.urls')), # app의 url 포함하기
]

```
