> ### Nomad [초보를 위한 React JS #8] 강의 내용 정리

# React Events and Typescript

## 🍞개요

React evnet를 사용할 때 컴포넌트에게 event의 타입을 알려야 한다.
인터페이스를 통해 타입을 알린다.

## 🍞실습

자식 컴포넌트인 Input에서 onchange 이벤트가 있을 때, 부모인 App 컴포넌트에서는 `: React.SyntheticEvent<HTMLInputElement>`를 붙여 이벤트의 타입을 설정해야 한다. 해당 이벤트의 인자로 넘어온 값(event)이 HTMLInputElement의 이벤트라고 알리는 것이다.

##### Input.tsx

```typescript
interface IInputProps {
  value: string;
  onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

export const Input: React.FunctionComponent<IInputProps> = ({
  value,
  onChange,
}) => (
  <input type="text" placeholder="name" value={value} onChange={onChange} />
);
```

##### App.tsx

```typescript
onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
  console.log(event.target);
};
```
