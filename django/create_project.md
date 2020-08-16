# Create Django Project

## 🍞가상환경 & 장고 설치

장고 프로젝트를 시작하기 전에 무조건 가상환경을 만들어야 한다. 가상환경 안에 장고를 설치해서 사용하기 위함이다. 가상환경을 쓰는 이유는 모듈의 버전을 관리하기 쉽기 때문이다. 가상환경 없이 django 1.1이라는 버전으로 프로젝트를 진행해 배포까지 완료한 상태라고 생각해보자. 이때 django 2.1버전이 등장해 업그레이드를 했다면 배포중이던 프로젝트의 기능 중 동작하지 않는 것이 생길 수 있다.

##### 1. 가상환경 설치

```
python -m vnev myvenv
```

##### 2. 가상환경 활성화

```
source myvenv/Scripts/activate //Windows 기준
source myvenv/bin/activate //mac 기준
```

##### 3. 장고 설치

```
pip install django
```

## 🍞프로젝트 & 앱 만들기

##### 4. 프로젝트 생성

```
django-admin startproject myproject
```

##### 5. 앱 생성

```
cd myproject //프로젝트 폴더 내에서 앱 생성
python manage.py startapp myapp
```

## 🍞설정

##### 6. settings.py에 앱 생성 알리기

```
INSTALLED_APPS = [
    //둘 중에 하나 선택해서 쓰면 됨
    'myapp',
    'myapp.apps.MyappConfig',
]
```

##### 7. 앱 폴더 안에 templates 폴더 생성 + templates안에 html 파일 생성

```
home.html이라 가정
```

##### 8. views.py에서 요청이 들어왔을 때 보여줄 파일 설정

```
def home(request):
    retrun render(request, 'home.html')
```

##### 9. urls.py에서 경로 설정

```
import myapp.views
path('', myapp.view.home, name="home")
```
