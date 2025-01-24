// 접근제어자
// 클래스 내부의 변수나 메서드의 접근 범위를 지정
//  - 다른 패키지(폴더)나 아예 한 파일에서만 쓸수 있도록 범위를 지정

// 접근제어자의 종류
// public, protected, private
// public : 어디든 접근가능(접근가능이란 말이 어렵다면 사용가능이라 봐도됨).
// protected : 클래스 내부, 상속한 클래스 내부까지 가능.
// private : 클래스 내부에서만 사용 가능.

// static : 정적인 메서드를 정의할때 사용.
//  -> 정적 메서드는 어디에서나 접근 가능한 메서드
//     (인스턴스 생성 없이도 클래스명만 알아도 접근이 가능.)

//Math.floor();
// class Test2{
    
//     static method1(){

//     }


// }
// let test111 = new Test2();
// Test2.method1();


// 추상클래스 만들어보기
// abstract class Animal{

//     // 추상 메서드
//     abstract howl(): void;

//     // 일반 메서드
//     eat(): void{
//         console.log("열심히 먹는중 우걱우걱");
//     }

// }

// class Dog extends Animal{
//     howl(){
//         console.log("멍멍 컹컹~~~");
//     }
//     eat(): void{
//         console.log("누렁이가 좋아하는 사료 우걱우걱 먹는중");
//     }
// }

// const nureongi = new Dog();
// nureongi.howl();
// nureongi.eat();

// 추상클래스와 인터페이스
//  -> 추상화를 좀더 편하고 강력하게 쓰기위해 나온 개념이 인터페이스
//  abstract, interface는 ts 전용 키워드.
// ts에서의 인터페이스는 약간 느낌이 다름.
//  -> 객체 기반으로 타입을 커스텀하는 느낌.
interface Test3{
    id: number;
    content: string;
    completed: boolean;
    abstMethod(): void;
}
// 변수 test123의 타입으로 Test3 인터페이스를 선언.
// let test123: Test3;

// // 인터페이스 기반으로 타입이 선언되면
// // 해당 변수는 인터페이스에 맞게 내용들을 정의.
// test123 = {id: 9724, content:'ts', completed: false}

// console.log(test123);

// 인터페이스를 상속받을때는 extend가 아닌 implements라는 키워드를 써줘야함.

// 인터페이스는 정확하게 상속 개념이 아닌 구현 이라는 표현을 사용.
class test4 implements Test3{
    abstMethod(): void {
        throw new Error("Method not implemented.");
    }
    id: number;
    content: string;
    completed: boolean;
    
}