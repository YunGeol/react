## chapter 8.3.2 - 01.file-loader

* 넥스트에서는 정적 파일을 서비스하기 위해 프로젝트 루트의 static 폴더를 이용 한다. 
* 지금까지 살펴본 예제 코드에서는 정적 파일의 내용과 상관없이 항상 같은 파일 경로가 사용된다. 
* 브라우저 캐싱을 최대로 활용하기 위해서는 파일의 내용이 변경되면 파일의 경로도 변경되는 게 좋다. 
* 웹팩의 file-loader를 사용해서 이 기능을 구현해 보자.

* initializing
```
mkdir 01.file-loader 
cd 01.file-loader
npm init -y
npm install next react react-dom
```

* install file-loader
```
npm install file-loader
```

* 웹팩 설정을 변경하기 위해 next.config.js 추가

```
echo '' > next.config.js
vi next.config.js
```

```
module.exports = {
    webpack: config => { // ❶
        config.module.rules.push({ // ❷
            test: /.(png|jpg)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]?[hash]', // ❸
                        emitFile: false, // ❹
                        publicPath: '/',
                    },
                },
            ],
        });
        return config;
    },
};
```

* page1.js 수정
  * 이미지를 모듈로 사용하기
    ```
    import Icon from '../static/icon.png';
    
    function Page1() { return (
      <div>
      // ...
        <img src={Icon} /> // ...
    
    ```
    
* 개발모드 실행 : `npx next`
* 브라우저에서 `http://localhost:3000/page1` 로 확인