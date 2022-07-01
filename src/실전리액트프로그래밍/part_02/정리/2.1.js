// var 가 가진 문제
// 첫번쨰 함수 스코프
//1. 정의 된 변수가 함수 스코프를 가진다
// 스코프를 벗어나서 변수를 사용하면 에러가 발생
function example() {
    var i = 1
}
// console.log(i) //ReferenceError: i is not defined


// 2. var 키워드 없이 변수를 정의하면 전역 변수가 된다
function example1() {
    j = 1
}
function example2() {
    console.log(j)
}
example1()
example2()
//3. for 문을 벗어나도 변수가 사라지지 않는다
for( var i = 0; i <= 10; i++) {
    console.log(i)
}
console.log(i);
//해결 방법 즉시 실행 함수 사용
(function () {
    var z = "즉시실행함수";
  console.log(z);
}());
//console.log(z) // ReferenceError: z is not defined
//-> 해결은가능하나 작성하기 번거롭고 가독성 떨어짐
// 두번쨰 호이스팅
// 호이스팅은 코드가 실행하기 전 변수선언/함수선언이 해당 스코프의 최상단으로 끌어 올려진 것 같은 현상을 말한다.
// 자바스크립트 엔진은 코드를 실행하기 전 실행 가능한 코드를 형상화하고 구분하는 과정(*실행 컨텍스트를 위한 과정)을 거친다.
// 자바스크립트 엔진은 코드를 실행하기 전 실행 컨텍스트를 위한과정에서 모든 선언(var, let, const, function, class)을 스코프에 등록한다
// console.log(myVar) // myVar is not defined 참조에러
///...
console.log(myVar2) // myVar is not defined 참조에러
var myVar2 = "1"; // undefined
// 세번째
// var 변수는 재정의가 가능하다
// 해결 해줄 const , let 블록 스코프다
if (true) {
    const k = 0
}
// console.log(k) // 참조 에러 ReferenceError: k is not defined


// 블록 스코프에서 같은 이름을 갖는 변수의 사용 예
let foo = "bar1";
console.log(foo)
if (true) {
    let foo = "bar2"
    console.log(foo)
}

// const 변수 재할당이 불가능하다
// 객체의 내부 속성값은 수정 가능하다

