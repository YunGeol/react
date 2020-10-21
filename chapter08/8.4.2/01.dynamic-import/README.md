# 8.4 넥스트 고급편
## 8.4.2 넥스트에서의 코드 분할
### 동적 임포트로 코드 분할하기

```코드 8-50 src/sayHello.js
export function sayHello() { 
    return 'hello~!';
}
```

``` pages/page2.js
export default function Page2({text, data}) {
    function onClick() {
        import('../src/sayHello')
            .then(
                ({sayHello}) => console.log(sayHello())
            );
    }

    return (
        <div>
            <button onClick={onClick}>sayHello</button>
        </div>
    );
}
```

```
npx next build && npx next start
```