# ORM

## 🍞 ORM이란?

ORM(Object-relational mapping)은 **객체 지향 프로그래밍 언어와 관계형 데이터베이스 간의 호환되지 않는 데이터를 변환하는 프로그래밍 기법**이다. 객체 지향 프로그래밍에서는 클래스를, 관계형 데이터베이스에서는 테이블을 사용하기 때문에 두 모델 간의 불일치가 발생한다. ORM을 통해 객체 간의 관계를 바탕으로 SQL을 자동 생성하여 불일치를 해결한다. 즉, ORM은 **객체와 관계형 데이터베이스의 데이터를 자동으로 연결해주는 역할**을 한다.

참고) ORM을 사용하면, 객체를 통해 간접적으로 데이터베이스의 데이터를 다루기 때문에 SQL과 같은 언어를 따로 쓸 필요가 없다.

## 🍞 ORM 장단점

#### 👍장점

- 객체 지향적인 코드로 인해 직관적이고 비지니스 로직에만 집중할 수 있다.
- 재사용 및 유지보수에 좋다.
- DBMS에 대한 종속성이 감소한다.

#### 👎단점

- ORM이 완벽하지는 않다.
- 프로시저가 많은 시스템에서는 객체 지향의 장점을 활용하기 어렵다.

## 🍞 ORM Framework

### Sequelize

- **Node.js**에서 가장 많이 사용되고 있는 ORM
- MySQL, PostgreSQL, MariaDB, SQLite, MSSQL 등을 지원
- `Promise`(비동기작업 제어방식)를 기본적으로 지원
- 변경점이 생길 때마다 모델과 마이그레이션을 따로 관리해야 함
- DB 호스트에 직접적인 connection을 이루어 트랜잭션 수행

### Prisma

- `GraphQL` 기반으로 DB 자동 생성
- GraphQL, REST API의 구현체 제공
- 자체 Admin 페이지 제공
- Scala로 작성된 prisma 서버가 DB호스트를 관리

### Hibernate

- **Java** ORM
- 자체적으로 쿼리 생성
- MySQL, Oracle, Sybase, Derby, PostgreSQL 등을 지원
- POJO기반의 모델과도 원활하게 동작

## 🍞 고려사항

ORM이 객체(OOP)와 관계형 데이터베이스(RDB) 간의 풀지 못한 숙제들

- Granularity (세분성)
  - OOP와 RDB가 정의한 모델의 수가 다른 경우 존재
- Inheritance (상속)
  - RDB에는 상속의 개념이 없음
- Identity (동일성)
  - RDB는 `pk`로 정의
  - Java의 경우 `==`와 `equales`로 정의
- Associations (연관)
  - RDB는 연관성을 `foreign key`로 표현 (방향성 x)
  - OOP는 `reference`를 사용하는 연관성 표현
- Navigation (탐색)
  - RDB는 JOIN을 통해 엔티티 선택
  - OOP는 그래프 형태로 탐색

## 📌 Reference

https://velog.io/@alskt0419/ORM%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%9C...-iek4f0o3fg<br>
https://jins-dev.tistory.com/entry/ORMObject-Relational-Mapping%EC%9D%B4%EB%9E%80-ORM-%ED%8C%A8%EB%9F%AC%EB%8B%A4%EC%9E%84%EC%9D%98-%EA%B0%9C%EB%85%90<br>
https://gmlwjd9405.github.io/2019/02/01/orm.html<br>
