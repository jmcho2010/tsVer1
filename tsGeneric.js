//tsGeneric.js
var _a, _b, _c, _d, _e, _f;
// Java같은 언어들은 사실 타입이 굉장히 정적
//  -> 정적 : 처음에 타입을 지정해줘야함.
//  -> TS에서는 타입이 정적으로 이용되기때문에 Ts에서는 
//     제네릭을 출시.
//  제네릭 : 클래스를 정의하는 시점에 파라미터나 리턴값 타입이 필수.
//   -> 코드를 짜다보면 타입 지정이 어려울때도있음.
//   -> 물론 TS에는 any가 있긴함.(any는 상황에따라 에러가 발생할수도있음)
//   -> TS에서 다양한 타입을 지원해야하는 경우는 제네릭을 사용
// 큐의 동작원리는?
// class Queue {
//     // any를 쓰게되면 일단 어떤 타입이든 저장은 가능
//     // push를 한 데이터를 보면 처음에 number가 들어와서
//     // 그 후는 number가 아닌경우 런타임에러 발생가능성이 높음.
//     // 해결방안
//     // Queue 클래스를 상속하여 number 타입이 들어왔을때 처리 하는 방안을 따로...
//     protected data: any[] = []; 
//     push(item: any) {
//       this.data.push(item);
//     }
//     pop() {
//       return this.data.shift();
//     }
//   }
//   // 위의 Queue 클래스를 상속받아
//   // 아래의 코드가 문제없이 동작할수있도록
//   // NumberQueue 클래스를 작성.
//   // 힌트 : 부모클래스에서 내용을 끌고와야하기떄문에
//   //   부모클래스의 속성과 메서드에 접근이 가능한
//   //   super라는 키워드를 활용.
//   // 힌트 : pop할시 
//   //  -> return super.pop();
// class NumberQueue extends Queue{
//     push(item: number) {
//         super.push(item);
//     }
//     pop(): number {
//         return super.pop();
//     }
// }
//   const queue = new NumberQueue();
//   queue.push(0);
//   // 의도하지 않은 실수를 사전 검출 가능
//   // error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
//   //queue.push('1');
//   queue.push(+'1'); // 실수를 사전 인지하고 수정할 수 있다
//   console.log(queue.pop().toFixed()); // 0
//   console.log(queue.pop().toFixed()); // 1
//   // 사실 위의 코드도 문제가 있음.
//   // 에러만 감지할수 있는거지 그거외에는 큰 차이가 없음
//   //  -> 다양한 타입을 지원할라면 타입별로 클래스를 상속받아서
//   //     다시 만들어줘야함.
// 제네릭이 위와같은 문제점을 해결해줄수 있음.
// 제네릭을 써서 Queue 클래스를 재정의
// 제네릭 = 타입에 파라미터 지정.
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (item) {
        this.data.push(item);
    };
    Queue.prototype.pop = function () {
        return this.data.shift();
    };
    return Queue;
}());
// number 전용 Queue
var numberQueue = new Queue();
numberQueue.push(0);
// numberQueue.push('1'); // 의도하지 않은 실수를 사전 검출 가능
numberQueue.push(+'1'); // 실수를 사전 인지하고 수정할 수 있다
// ?. => optional chaining
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining
console.log((_a = numberQueue.pop()) === null || _a === void 0 ? void 0 : _a.toFixed()); // 0
console.log((_b = numberQueue.pop()) === null || _b === void 0 ? void 0 : _b.toFixed()); // 1
console.log((_c = numberQueue.pop()) === null || _c === void 0 ? void 0 : _c.toFixed()); // undefined
// string 전용 Queue
var stringQueue = new Queue();
stringQueue.push('Hello');
stringQueue.push('World');
console.log((_d = stringQueue.pop()) === null || _d === void 0 ? void 0 : _d.toUpperCase()); // HELLO
console.log((_e = stringQueue.pop()) === null || _e === void 0 ? void 0 : _e.toUpperCase()); // WORLD
console.log((_f = stringQueue.pop()) === null || _f === void 0 ? void 0 : _f.toUpperCase()); // 
// 커스텀 객체 전용 Queue
var myQueue = new Queue();
myQueue.push({ name: 'Lee', age: 10 });
myQueue.push({ name: 'Kim', age: 20 });
console.log(myQueue.pop()); // { name: 'Lee', age: 10 }
console.log(myQueue.pop()); // undefined
