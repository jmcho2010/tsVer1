// ts를 공부할때 주의사항
//  ->  js랑 별도라고 생각.
//  -> 설명이 js에서 추가된 부분들 위주로만 진행.

// 추상화.
// 객체지향의 설계와 관련된 개념.
//  - 여러가지 사물이나 개념에서 공통되는 특성이나 속성들을 추출하여
//    파악하는 작용.
//  - 핵심적이거나 공통되는 속성 및 기능을 간추리는것.
//  - 다만 코드로 쓸때는 체감되는 느낌이 많이 다름.
//  - 코드로 쓸때는 어떤 메서드를 쓸지에 대한 가이드 라인.
//    (설계도의 설계도.) -> 어디에대한 가이드 라인?
//  - 부모클래스를 추상클래스로 정의한후
//    메서드들중 추상 메서드들을 정의
//    -> 해당 추상클래스를 상속받은 자식클래스들은
//       추상메서드를 무조건 써야하는 특성을 가져감.

// 타입스크립트 세팅

 
// 준비물 : nodejs

// ts도 노드 패키지를 설치하는것처럼 진행.

// npm i -g typescript
// npm install -g typescript@2.7.2 <--- 원하는 버전이 있을때.
//  -> 버전별 설치가 중요한 이유 : 기존에 구축된 환경에서 작업을 해야한다하면
//     기존에 구축된 서버의 버전과 맞출 필요가 있음.

// ts와 node를 바로 연결
// npm install -g ts-node
//  -> tsx로 대체.

// ts 컴파일
// tsc ts파일명.ts




// 컴파일없이 node를 활용하여 ts 실행
// ts-node ts파일명.ts
//  -> 노드 버전이 18버전이상일 경우
// npm install -g tsx
// tsx ts파일명.ts

// vscode에서 ts를 쓸때 편리한 확장팩
// 1. code runner(ts 바로실행)
// 2. TypeScript Hero(패치 중단)
// 3. TypeScript Toolbox
//   -> 캡슐화 도움 도구
// 4. AnnotationLens
//   -> 오버로딩 지원도구
// 5. moveTs
//   -> 프로젝트 일부 파일을 리팩토링하고 재구성할때 사용.
// 6. Path Intellisense
//   -> 경로 자동 탐색시 도움이 되는 플러그인
// 7. Json to TS
//   -> JSON 코드를 ts로 변환
//   shift + ctrl + alt + v
//   shift + ctrl + alt + s -> json의 내용을 ts 인터페이스로 변환
// 8. add jsdoc comments
//   -> 함수의 파라미터 설명 주석 추가
// 9. Typescript String literal enums Tools
//   -> TS에서 enum 관리 확장팩
// 10. classdiagram-ts
//   -> 구성되어있는 ts 클래스 내용들을 다이어그램으로 자동 변환.
// 11. TS interface from class
//   -> 클래스에서 인터페이스를 따로 분리할때 사용하는 확장팩
// 12. Sass/Less/Typescript/Jade/Pug Compile-Superhero