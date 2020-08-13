> ### Nomad [초보를 위한 React JS #8] 강의 내용 정리

# React State and Typescript

## 🍞개요

React state를 사용할 때 컴포넌트에게 state의 타입을 알려야 한다.
인터페이스를 통해 타입을 알린다.

## 🍞실습

IState를 통해 counter라는 state의 타입을 number라고 설정하고, 컴포넌트에게 counter의 타입을 알려야 한다.
클래스 컴포넌트의 경우, `<{props type}, {state type}>`를 붙이면 된다. 아래 코드에서는 props가 없으므로 `<{}, IState>` 이렇게 비워두고 state type만 설정한 인터페이스로 넣어주면 된다.

```typescript
interface IState {
  counter: number;
}

class App extends Component<{}, IState> {
  state = { counter: 0 };
  render() {
    const { counter } = this.state;
    return (
      <div>
        {counter}
        <button onClick={this.add}>+</button>
      </div>
    );
  }
}

add = () => {
  this.setState((prev) => {
    return { counter: prev.counter + 1 };
  });
};

export default App;
```
