# MTV Pattern

## 🍞MTV

#### Model

Model은 응용프로그래의 데이터 구조를 정의하고 데이터베이스의 기록을 관리(CRUD)하고 쿼리하는 방법을 제공하는 파이썬 객체이다. 즉, 데이터베이스에 저장되는 데이터를 관리하는 곳이다.

#### Template

Template은 파일의 구조나 레이아웃을 정의하고(예: HTML 페이지), 실제 내용을 보여주는 데 사용되는 플레이스홀더를 가진 텍스트 파일이다. 즉, 실제 사용자에게 보여지는 페이지를 관리하는 곳이다.

#### View

View는 HTTP Request를 수신하고 HTTP Response을 반환하는 요청 처리 함수이다. 즉, 요청 받는 데이터를 처리하는 곳이다.

## 🍞동작 과정

![django_mtv1](./img/mtv_1.png)

1. 클라이언트에서 요청(HTTP Request) 받은 페이지를 URLconf를 통해 view에서 처리한다.
2. view에서 필요한 데이터는 model에서 가져온다.
3. view에서 어떤 화면을 보여줄지에 대한 정보를 template에 넘긴다.
4. template에서 html 파일을 view에게 넘긴다.
5. view는 최종 결과를 클라이언트에게 반환(HTTP Response)한다.

## 📌Reference

https://developer.mozilla.org/ko/docs/Learn/Server-side/Django/Introduction
https://m.blog.naver.com/nuberus/221747636515
