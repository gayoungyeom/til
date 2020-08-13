> ### Nomad [초보를 위한 React JS #8] 강의 내용 정리

# React Props and Typescript

## 🍞개요

React props를 사용할 때 컴포넌트에게 props의 타입을 알려야 한다.
인터페이스를 통해 타입을 알린다.

## 🍞실습

함수형 컴포넌트 Number에서 props를 가지고 이를 App 컴포넌트에 넘기고자 한다. 하지만 다음과 같이 입력하면 counter porps의 타입을 알 수 없다는 에러가 발생한다.

```typescript
const Container = styled.span``;
const Number = ({ counter }) => <Container>{count}</Container>;

export default App;
```

따라서 interface를 이용해 컴포넌트에게 props의 타입을 알려줘야 한다. 함수형 컴포넌트에게 타입을 알릴 때는 컴포넌트명 뒤에 `: React.FunctionComponent<Props Type>`를 붙이면 된다.

```typescript
interface Iprops {
  count: number;
}

const Number: React.FunctionComponent<IProps> = ({ count }) => (
  <Container>{count}</Container>
);
```
