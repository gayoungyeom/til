# 패키지 종속성 관리 - python

현재 개발 환경에서 어떤 패키지를 어떤 버전으로 사용하고 있는지 알려주는 것이다. 혼자서 개발을 진행할 때는 상관이 없지만, 협업을 할 때 개발 환경 통일을 위해 필요하다. 이때 requirements.txt 파일을 사용한다.

## 🍞requirements.txt

##### 내 개발 환경을 다른 사람에게 전달할 때

- 구성환경 알아보기

```
> $ pip freeze
```

- 패키지 정의

```
> $ pip freeze > requirements.txt
```

##### 내 개발 환경을 다른 사람의 개발 환경으로 만들때

- 패키지 설치

```
> $ pip install -r requirements.txt
```
