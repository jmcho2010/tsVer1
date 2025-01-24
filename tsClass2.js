// 접근제어자
// 클래스 내부의 변수나 메서드의 접근 범위를 지정
//  - 다른 패키지(폴더)나 아예 한 파일에서만 쓸수 있도록 범위를 지정
// 변수 test123의 타입으로 Test3 인터페이스를 선언.
// let test123: Test3;
// // 인터페이스 기반으로 타입이 선언되면
// // 해당 변수는 인터페이스에 맞게 내용들을 정의.
// test123 = {id: 9724, content:'ts', completed: false}
// console.log(test123);
// 인터페이스를 상속받을때는 extend가 아닌 implements라는 키워드를 써줘야함.
// 인터페이스는 정확하게 상속 개념이 아닌 구현 이라는 표현을 사용.
var test4 = /** @class */ (function () {
    function test4() {
    }
    test4.prototype.abstMethod = function () {
        throw new Error("Method not implemented.");
    };
    return test4;
}());
