> 원문: [2020년과 이후 JavaScript의 동향 - JavaScript(ECMAScript)](https://d2.naver.com/helloworld/4268738)

# Trends of JavaScript

자바스크립트는 약 10년마다 커다란 변화가 이루어졌다.

## 첫 번째 주기 (1997 ~ 2007)

- 자바스크립트의 첫 등장과 다양한 DOM/helper 라이브러리의 등장으로 동적인 웹 개발이 시작되었던 시기이다.
- 표준화에 대한 중요성이 크게 부각되지 않았지만, 언어적 표준화(ECMAScript 1)가 시작되었다.
- 언어적 측면의 완성을 위해 노력했던 시기이다.

## 두 번째 주기 (2009 ~ 2019)

- 사용자들이 자바스크립트를 탐험하고 새로운 영역으로 확장시킨 시기이다.
- ECMAScript 5가 발표되었다.
- Node.js/ NPM/ Transpiler 등의 다양한 프레임워크가 등장했다.

## 세 번째 주기 (2020 ~ present)

- 레거시 영역의 정리, 여러 도구로 인해 형성된 레이어의 제거가 이루어질 것으로 예측된다.
- 타입 사용을 통한 안정성 확보와 성능 향상을 무시하기 어려워졌다. (by TypeScript)
- Deno나 Rely의 경우처럼, 자바스크립드가 아닌 새로운 언어인 Rust가 사용되고 있다.

> **Deno**: A secure runtime for JavaScript and TypeScript. <br>
> **Rely**: A JavaScript framework for building data-driven React applications.<br>
> **Rust**: A language empowering everyone to build reliable and efficient software.

## ECMAScript 2020

2020년 6월 18일 ECMAScript 2020이 공식적으로 릴리스되었다.

#### 주요 스펙

- String.prototype.matchAll
- 동적 import() 구문
- import.meta
- globalThis
- BigInt
- Promise.allSettled
- for-in mechanics
- Optional Chaining `?.`
- Nullish coalescing Operator `??`
- export \* as ns from "mod"
