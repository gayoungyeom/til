# REST

## 🍞 정의

REST(Representational State Transfer)는 **분산 시스템 설계를 위한 아키텍처 스타일**이다. 엄격한 의미로는 **네트워크 아키텍처 원리의 모음**이다. 여기서 '네트워크 아키텍처 원리'란 **자원을 정의하고 자원에 대한 주소를 지정하는 방법 전반**을 일컫는다. 간단한 의미로는 **웹 상의 자원을 별도의 전송 계층 없이 전송하기 위한 인터페이스**를 말한다.

## 🍞 제한 조건

다음의 6가지 제한 조건을 준수하면 REST 아키텍처라고 할 수 있다.

- **클라이언트/서버 구조**: 일관적인 인터페이스로 분리되어야 한다.
- **무상태(Stateless)**: 각 요청 간 클라이언트의 콘텍스트가 서버에 저장되어서는 안 된다.
- **캐시 처리 가능(Cacheable)**: www에서와 같이 클라이언트는 응답을 캐싱할 수 있어야 한다.
- **계층화(Layered System)**: 클라이언트는 보통 대상 서버에 직접 연결되었는지, 또는 중간 서버를 통해 연결되었는지 알 수 없다.
- **Code on demand**: 자바 애플릿이나 자바스크립트의 제공을 통해 서버가 클라이언트가 실행시킬 수 있는 로직을 전송하여 기능을 확장시킬 수 없다.
- **인터페이스 일관성**: 아키텍처를 단순화시키고 작은 단위로 분리함으로써 클라이언트-서버의 각 파트가 독립적으로 개선될 수 있도록 한다.

## 🍞 구성요소

- Resource (자원): `URI`
- Verb (행위): `HTTP Method`
- Representations (표현): `데이터 형태`

REST는 `URI`와 `HTTP Method`를 통해 자원을 정의하고 해당 자원의 행위를 정하면, 그 결과를 `JSON, XML, Text, RSS`와 같은 데이터 형식으로 표현한다.

<details>
<summary>URI란?</summary>

URI(Uniform Resource Identifier)이란 통합 자원 식별자로 인터넷에 있는 자원을 나타내는 유일한 주소이다. URI의 존재는 인터넷에서 요구되는 기본조건으로서 인터넷 프로토콜에 항상 붙어 다닌다. 참고로 URI은 URL과 URN의 개념을 포함하고 있다.

</details>

<details>
<summary>가능한 HTTP Method</summary>

- GET: 리소스 생성
- POST: 리소스 조회
- PUT: 리소스 수정
- DELETE: 리소스 삭제

</details>

## 🍞 REST 장단점

#### 장점

- HTTP 프로토콜을 그대로 활용하기 때문에 웹의 장점을 최대한으로 활용할 수 있는 아키텍처 스타일이다.
- 의도하는 바를 명확하게 나타낸다.
- 서버와 클라이언트의 역할을 명확하게 분리한다.

#### 단점

- 표준이 없다.
- 사용 가능한 `HTTP Method`가 4개로 제한적이다.
- 구형 브라우저가 아직 지원하지 못하는 부분이 존재한다.

## 🍞 왜 REST를 쓰는가?

- 어플리케이션의 분리 및 통합
  - 거대한 어플리케이션을 모듈, 기능별로 분리하기 쉽다.
  - 이에따라 모듈 간의 통신이 가능하다.
- 다양한 클라이언트의 등장
  - 하나의 서버로 다양한 클라이언트와 통신이 가능하다.
  - 즉, 프론트와 백의 완전한 분리가 가능하다.

## 📌 Reference

https://ko.wikipedia.org/wiki/REST<br>
https://ko.wikipedia.org/wiki/%ED%86%B5%ED%95%A9_%EC%9E%90%EC%9B%90_%EC%8B%9D%EB%B3%84%EC%9E%90<br>
https://gmlwjd9405.github.io/2018/09/21/rest-and-restful.html<br>
https://velog.io/@stampid/REST-API%EC%99%80-RESTful-API<br>
