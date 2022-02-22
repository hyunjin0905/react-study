
function* f1() {
    yield 10;
    yield 10;
    return "finished";
}
// * 별표와 함께 정의된 함수 제너레이터 함수 이다
// * yield 키워드를 사용하면 멈출수 있다
// * 제너레이터 함수를 실행하면 제너레이터 객체가 반환된다
//
// 제너레이터 객체의 next 메서드 사용하기
function * f1() {
    console.log('f1-1');
    yield 10;
    console.log('f1-1');
    yield 20;
    console.log('f1-3');
    return 'finshed'
}
const gen = f1();
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
// f11-1
// { value: 10 done: false }
// f11-2
// { value: 20 done: false }
// f11-3
// { value: "finished" done: true }

// 제너레이터 객체의 return 메서드 호출하기
const gen = f1();
console.log(gen.next())
console.log(gen.return("abc"))
console.log(gen.next())
// f1-1
// { value: 10 , done: false }
// { value: "abc" , done: true }
// { value: undefined , done: true }
//
// 제너레이터 객체의 throw 메서드 호출하기
function* f1() {
    try {
        console.log("f1-1")
        yield 10;
        console.log("f1-2")
        yield 20;
    } catch (e) {
        console.log("f1-catch", e);
    }
    const gen = f1();
    console.log(gen.next())
    console.log(gen.throw("some error"))
    // f1-1
    // { value: 10, done: false }
    // f1-catch some error
    // { value: undefiend, done: true }
}
//
// 다음 조건을 만족하는 객체는 반복자이다
// * next 메서드를 갖고 있다
// * next 메서드는 value done 속성값을 가진 객체를 반환한다
// * done 속성값은 작업이 끝났을때 참이 된다
//
//
// 다음 조건을 만족하면 반복가능 한 객체다
// * Symbol.iterator 속성값으로 함수를 가지고 있다
// * 해당 함수를 호출하면 반복자를 반환한다
//
//
// 배열은 반복가능한 객체다
const arr = [10, 20, 30];
const iter = arr[Symbol.iterator]()
console.log(iter.next()) // { value: 10, done: false }
// 제너레이터객체는 반복 가능한 객체다
function* f1() {

}
const gen = f1()
console.log(gen[Symbol.iterator]() === gen)

// 반복 가능한 객체를 이용하는 코드
function* f1() {
    yield 10;
    yield 20;
    yield 30;
}
for (const v of f1()) {
    console.log(v)
}
const arr = [...f1]
console.log(arr) // [10, 20, 30]

// 제너레이트 활용하기
// 제너레이터로 구현한 map, filter, take 함수
function* map(iter, mapper) {
    for (const v of iter) {
        yield mapper(v)
    }
}

function* filter(iter, test) {
    for (const v of iter) {
        if (test(v)) yield v;
    }
}

function* take(n, iter) {
    for (const v of iter){
        if (n <= 0) return;
        yield v;
        n--;
    }
}

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = take(3, map(filter(values, n => n % 2 === 0), n => n * 10))
console.log([...result]) // [20, 40, 60]
// 제너레이터 함수로 자연수의 집합표현
function* natralNumber() {
    let v = 1;
    while (true){
        yield v++
    }
}
const values = natralNumber()
const result = take(3, map(filter(values, n => n % 2 === 0), n => n * 10))
console.log([...result]) // [20, 40, 60]
//
// 제너레이터 함수끼리 호출하기
//
// 제너레이터 함수가 다른 제너레이터 함수 호출하기
function* g1() {
    yield 2;
    yield 3
}
function* g2() {
    yield 1;
    yield* g1();
    yield 4;
}
console.log(...g2())
// 반복 가능한 객체를 처리하는 yield* 키워드
function* g2_second() {
    yield 1;
    for (const value of g1()) {
        yield value;
    }
    yield 4;
}
function* g2_third() {
    yield 1;
    yield* [2, 3];
    yield 4;
}
// next 메서드를 이용해서 제너레이터 함수로 데이터 전달하기
function f1() {
    const data1 = yield;
    console.log(data1)
    const data2 = yield;
    console.log(data2)
}
const gen = f1();
gen.next()
gen.next(10);
gen.next(20);

// 협업 멀티태스킹
// 제너레이터는 실행을 멈추고 재개 할수 있기 때문에 멀티 태스킹 가능하다
// 협업이라는 단어가 붙는 이유는 제러네이터가 실행을 멈추는 시점을 자발적으로 선택하기 때문
//
//
// 제러네이터 함수를 이용한 협업 멀티태스킹
function* minsu() {
    const myMsgList = [
        "안녕 나는 민수야",
        "만나서 반가워",
        "내일 영화 볼래?",
        "시간 안되니?",
        "내일모레는 어때"
    ];
    for (const msg of myMsgList) {
        console.log("수지: ", yield msg)
    }

    function suji() {
        const myMsgList = ["", "안녕 나는 수지야 ","그래 반가워", "..."]
        const gen = minsu();
        for (const msg of myMsgList) {
            console.log("민수 ", gen.next(msg).value)
        }

    }
    suji()

}

function* getFunc() {
    throw new Error("some error")
}
function func() {
    const gen = genFunc();
    try {

    }catch (e) {
        console.log("in catch:", e);
    }
}
func()
