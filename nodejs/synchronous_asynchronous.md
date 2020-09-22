# Nodejs에서 동기와 비동기

## 🍞 Synchronous vs Asynchronous

`Synchronous(동기)`란 일을 순차적으로 처리하는 것을 말한다. 한 번에 한 가지의 일을 하는 것이다. 반면, `Asynchronous(비동기)`란 한 쪽에서 어떤 일을 처리하면서 다른 쪽에서 다른 일을 처리하는 것을 말한다. 한 번에 여러 가지의 일을 하는 것이다. 처리하는데 오랜 시간이 걸리는 일이 있을 때 동기적 처리는 이 일이 끝날 때까지 기다렸다가 다음 일을 처리하고, 비동기적 처리는 이 일을 실행시키고 바로 다음 일을 진행한다. 끝날 때까지 기다리지 않는 것이다. 따라서 이런 경우 비동기적 처리의 효율이 높다. **Nodejs는 이러한 비동기적 처리의 기능을 많이 가지고 있다.**

## 🍞 Code level에서 살펴보기

<details>
<summary>sample.txt</summary>

```
B
```

</details>

#### 동기적 처리

`readFileSync`는 동기적으로 파일을 읽는 메소드이다.

```javascript
const fs = require("fs");

console.log("A");
const result = fs.readFileSync("sample.txt", "utf8");
console.log(result);
console.log("C");
```

output

```
A
B
C
```

#### 비동기적 처리

`readFile`는 비동기적으로 파일을 읽는 메소드이다. 비동기 메소드는 `return` 값이 없고, 마지막 인자로 `callback`함수를 받는다.

```javascript
const fs = require("fs");

console.log("A");
fs.readFile("sample.txt", "utf8", (err, result) => {
  console.log(result);
});
console.log("C");
```

output

```
A
C
B
```

## 🍞 Callback function

- 다른 함수의 인자로 넘겨지는 함수
- 어떤 이벤트에 의해 호출되는 함수

```javascript
//함수를 값으로 처리 가능함을 보여준다.
const a = function () {
  console.log("A");
};

function slowfunc(callback) {
  callback();
}

slowfunc(a);
```

위 코드에서 slowfunc의 인자로 a함수가 넘겨진다. 이때 a를 callback 함수라 한다. <br>

`readFile`의 경우 파일을 모두 읽으면(일이 끝나면) `callback`함수를 실행한다. 즉, `callback`함수는 어떤 함수의 일이 **끝나고 나서 실행되야 하는 일**을 처리하는 함수라고 볼 수 있다.

## 📌 Reference

https://opentutorials.org/course/3332/21132<br>
https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_readdirsync_path_options<br>
