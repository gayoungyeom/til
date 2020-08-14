> ### Nomad [초보를 위한 React JS #8] 강의 내용 정리

# Styled Components and Typescript

## 🍞개요

styled-components에 props를 넘기고자 할 때, props의 타입을 알려야 한다. 함수형 컴포넌트처럼 인터페이스를 통해 타입을 알리는 것도 가능하지만, styled-components의 경우 종류가 매우 많아서 inline으로 알리는 것이 효율적이다.

## 🍞실습

아래 코드는 isBlue라는 props가 boolean이라는 것을 inline으로 알린 것이다. Number 컴포넌트처럼 인터페이스를 통해 알려도 괜찮다.

```typescript
import React from "react";
import styled from "styled-components";

const Container = styled.span<{ isBlue: boolean }>`
  color: ${(props) => (props.isBlue ? "blue" : "black")};
`;

interface IProps {
  count: number;
}

const Number: React.FunctionComponent<IProps> = ({ count }) => (
  <Container isBlue={count > 10}>{count}</Container>
);

export default Number;
```

## 🍞styled components themes

styled components themes는 변수를 정의하는 방법이다.
theme에서 자동 완성 기능을 제공하므로, 변수명을 매번 복사 & 붙여넣기 하지 않아도 되는 효율적인 방법이다.

##### styled.d.ts

우선 `styled.d.ts`파일을 만들어야 한다. 파일에 아래와 같이 틀을 작성하고 DefaultTheme안에 theme을 설정하면 된다.
아래 코드는 blueColor가 string이라고 설정한 것이다.

```typescript
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    // 여기에 원하는 theme 설정하면 된다.
    blueColor: string;
  }
}
```

##### theme.ts

`theme.ts`파일도 만들고 DefaultTheme에서 설정한 변수의 값을 설정하면 된다. 아래 코드는 blueColor의 값을 설정한 것이다.

```typescript
export default {
  blueColor: "blue",
};
```

##### Number.ts

`props.theme.blueColor`에서 `props.theme.`까지만 작성하면 `blueColor`를 자동으로 추천해준다.

```typescript
const Container = styled.span<{ isBlue: boolean; isRed: boolean }>`
  color: ${(props) => (props.theme.blueColor ? "blue" : "black")};
`;
```
