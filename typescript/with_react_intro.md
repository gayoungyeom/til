> ### Nomad [초보를 위한 React JS #8] 강의 내용 정리

# Typescript and React Introduction

React에서 Typescript를 쓰는 방법

## 🍞프로젝트 생성

React application에서 typescript를 사용하고자 할 때, -typescript를 붙여서 생성한다.

```
npx create-react-app <app name> —typescript
```

프로젝트 생성 이후 파일을 살펴보면, 기존 react의 jsx/ js 파일 대신 tsx/ ts 파일이 있다.

## 🍞tsconfig.json

tsconfig.json에는 타입스크립트의 규칙이 있는 곳이다. 여기서 타입스크립트가 얼마나 strict 할지 정할 수 있다. create-react-app을 할때 —typescript를 붙이면 tsconig파일을 자동으로 생성한다.

## 🍞Definitely typed

Definitely typed는 모든 리액트의 functionality를 타입스크립트로 설명해주는 것이다. definitely typed에는 수많은 타입과 인터페이스들이 있다. 이를 통해 해당 프로젝트가 타입스크립트를 잘 이해할 수 있도록 한다.

예를 들어, styled-components를 다운받고(yarn add styled-components) import 할 때 타입스크립트는 styled-components가 어떤 타입인지 몰라서 에러를 발생시킨다. 이때 @types/를 설치(yarn add @types/styled-components)한다면 에러가 사라진다. 타입스크립트가 styled-components의 모든 타입을 아는 상태로 바뀐 것이다.

> 여기서 필요한 라이브러리의 타입을 찾아서 설치하면 된다.
> https://github.com/DefinitelyTyped/DefinitelyTyped

하지만 사용하고자 하는 라이브러리의 타입에 대해 누군가 만들어 놓은 것이 없다면(위 링크에서 찾을 수 없다면) ‘nolmplicitAny’:true를 적용하면 된다. 이는 타입스크립트에게 타입을 못 찾았다고 알리는 것이다.
