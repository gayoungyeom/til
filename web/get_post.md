# GET/ POST Method

`HTTP Method` 중 웹 개발에서 주로 사용하는 `GET Method`와 `POST Method`는
**클라이언트에서 서버로 요청을 보내는 방법**이다.

<details>
<summary>👀사전 지식</summary>

#### HTTP 패킷

클라이언트가 서버로 요청을 했을 때 보내는 데이터를 HTTP 패킷이라고 한다.
HTTP 패킷의 구조는 크게 `Header`와 `Body`로 나뉜다.

- Header에는 다음과 같은 정보를 담는다.
  - HTTP method 방식
  - 클라이언트의 정보
  - 브라우저의 정보
  - 접속할 URL
- Body
  - 대부분 비어있지만 특정 데이터를 담아서 서버에게 요청을 보낼 수 있다.

</details>

## 🍞 GET

- 데이터를 URL에 포함시켜 전송한다.
- URL은 HTTP 패킷의 `header`에 포함된다. 즉, `body`는 빈 상태이다.
- 전송하는 길이에 제약이 있다.
- 캐싱이 가능하다. 따라서 속도가 빠르다.
- REST에서 데이터 조회`(Read)` 활용된다.

## 🍞 POST

- 데이터를 `body`에 넣어 전송한다. (URL에 노출되지 않는다.)
- 전송하는 길이에 제약이 없다.
- 캐싱이 불가능하다. 따라서 GET보다 느리다.
- REST에서 데이터 생성`(Create/Update)`에 활용한다.

## 📌Reference

https://mommoo.tistory.com/60?category=582808
