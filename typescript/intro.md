> ### Nomad [초보를 위한 React JS #8] 강의 내용 정리

# What is Typescript

## 🍞Concept

<strong>Typescript는</strong>

- javascript의 superset인 오픈소스 프로그래밍 언어이다.
- .ts .tsx 확장자를 사용한다.
- 변수의 타입을 설정하고, 변수가 기대값과 다른 경우 에러를 낸다.
- 우리의 실수를 줄여주고 더 좋은 코드를 짤 수 있게 도와준다.

## 🍞Typescript vs Javascript

사용자가 plus라는 함수를 호출해서 덧셈 연산을 수행하고자 할 때,

##### index.js

```
const plus = (a, b) => a + b;
console.log(plus(“abc”, 2)) // “abc2”
```

자바스크립트의 경우 다음 명령을 에러없이 실행시킨다.
작동은 하지만 사용자의 의도를 파악하지 못한다.

##### index.ts

```
const plus = (a: number, b: number) => a + b;
console.log(plus(“abc”, 2)) //error
```

타입스크립트는 다음 명령어에 대해 에러를 발생시킨다.
‘a는 number잖아’라고 알리며 사용자의 의도를 파악한다.

## 🍞Function Type

우리는 타입스크립트에게 변수의 타입을 알려줘야 한다.
함수의 전달 인자와 리턴 값의 타입도 설정할 수 있다.

##### Interface의 사용

```
const Gayoung = {
    name; “Gayoung”,
    age: 23,
    hungry: true
}

interface IHuman{
    name: string;
    age: number;
    hungry: boolean;
}

const helloToHuman = (human: IHuman) => {
    console.log(`Hello ${human.name} you are ${human.age} old`)
} //result: Hello Gayoung you are 23 old
```

helloToHuman이라는 함수에 human인자를 넘길 때, 이 인자는 IHuman이라는 타입이라고 알리는 것이다. human의 타입을 설정하지 않으면 함수는 human이 뭔지 몰라서 에러를 발생시킨다.

##### Optional Values

```
const Tim= {
    name: ‘Tim’,
    hungry: false
}

interface IHuman{
    name: string;
    age?: number;
    hungry: boolean;
}

const helloToHuman = (human: IHuman) => {
    console.log(`Hello ${human.name} you are ${human.age} old`)
} //result: Hello Tim you are undefined old
```

인터페이스를 만들 때, age?: number라고 하면, age는 number 이거나 undefined이란 뜻이다. 이렇게 설정하지 않으면 함수에 Tim을 인자로 전달했을 때, Tim은 age 값이 없는 IHuman이라며 에러를 발생시킬 것이다.

## 📌Reference

https://nomadcoders.co/react-for-beginners
https://ko.wikipedia.org/wiki/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8
