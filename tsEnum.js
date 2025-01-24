"use strict";
// enum(열거형)
// ts에서 enum 요즘은 자주안씀.
//  -> 전제조건이 있음
// 1. 해당환경이 tree shaking을 지원하는지를 체크.(이거 없으면 쓰지말라 권장함.)
// tree shaking : 실제로 쓰지 않는 코드들을 제외하는 개념.
//  -> 웹 성능 최적화와 관련이 있음.
// 2. 작성한 코드가 사용되지 않을수도 있다라는 전제조건이 있는 경우.
exports.__esModule = true;
exports.StatCode = void 0;
// enum은 ts 관점으로는 성능상으로는 불리함.
// 다만 코드 생산성을 매우 높일수는 있음.
// 무조건 생산성만 최고다, 성능만 최고다를 얘기하는것보다는
// 벨런스를 맞추고 타협안을 제시할수 있어야함.
// enum : 상수들이 모이면 enum
//  -> 상수들이 모여서 enum이라는 하나의 집합을 구성한다.
// export enum num1{
//     one = 1,
//     two = 2,
//     three = 3
// }
// console.log(num1.one);
// console.log(num1.two);
// console.log(num1.three);
var StatCode;
(function (StatCode) {
    StatCode[StatCode["NotFound"] = 404] = "NotFound";
    StatCode[StatCode["Success"] = 200] = "Success";
    StatCode[StatCode["Accepted"] = 202] = "Accepted";
    StatCode[StatCode["ErrorCode"] = 500] = "ErrorCode";
})(StatCode = exports.StatCode || (exports.StatCode = {}));
console.log(StatCode.Accepted);
