# RESTful API

## 🍞 정의

`RESTful`이란 [REST](./rest.md)의 제약 조건을 모두 만족하는 것을 의미한다. 따라서 **`RESTful API`란 REST 아키텍처를 기반으로 설계된 API**이다. 요즘 많은 OpenAPI도 REST API를 제공하며, `REST`의 원리를 따르는 시스템을 `RESTful`하다고 한다.

<details>
<summary>API란?</summary>

`API`는 `Application Programming Interface`의 약자로 응용 프로그램에서 사용할 수 있도록, 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스를 뜻한다. 즉, 다른 서버로부터 쉽게 데이터를 가져올 수 있는 수단이라고 보면 된다.

</details>

## 🍞 설계 규칙

RESTful API를 설계하는 규칙이다. URI를 정의하는 방법으로 보면 된다.

1. **URI는 정보의 자원을 표현해야 한다.**

   - 자원의 이름은 동사보다 명사를 사용한다.
   - URI에 행위에 대한 표현이 들어가면 안된다.

   ```
       GET /users/1         (o)
       GET /users/delete/1  (x)
   ```

2. **자원에 대한 행위는 `HTTP Method`로 표현한다.**
   ```
   DELETE /users/1      # id=1인 유저 삭제
   POST /users          # 유저 생성
   ```
3. 슬래시(/)는 계층 관계를 나타내는데 사용한다.
4. URI 마지막은 슬래시(/)를 사용하면 안된다.
5. 하이픈(-)은 URI의 가독성을 높이는데 사용한다.
6. 언더바(\_) 혹은 밑줄은 URI에 사용하지 않는다.
   - 밑줄 때문에 문자가 가려지기 때문에
7. URI 경로는 소문자가 적합하다.
   - 대소문자를 각자 다른 리소스로 인식하기 때문에
8. 파일 확장자는 URI에 포함하지 않는다.
   - 파일 확장자의 표현은 Accept header를 사용하자
9. 리소스 간의 관계를 표현하는 방법
   - /리소스명/리소스 ID/관계가 있는 다른 리소스명
   ```
   GET : /users/{userid}/devices
   ```

## 🍞 Collection & Document

효율적인 URI 설계를 위해 `Collection`과 `Document`의 개념을 알면 좋다. 둘다 리소스의 표현이며 collection은 문서/객체들의 집합, document는 문서/객체 자체라고 생각하면 된다. collection이 document를 포함하는 큰 개념인듯 하다.

```
http://restapi.example.com/sports/soccer
```

위 예시서 sports는 collection, soccer는 document이다. 중요한 점은 **collection은 복수로, document는 단수**로 표현한다는 것이다.

## 🍞 왜 RESTful API를 쓰는가?

- 쉽게 이해하고 사용하기 위한 API이기 때문에
- 일관적인 컨벤션을 통한 API의 이해도 및 호환성을 높이기 위해서
- REST의 장점을 살펴보자!

## 📌 Reference

https://velog.io/@stampid/REST-API%EC%99%80-RESTful-API<br>
https://meetup.toast.com/posts/92<br>
https://gmlwjd9405.github.io/2018/09/21/rest-and-restful.html<br>
