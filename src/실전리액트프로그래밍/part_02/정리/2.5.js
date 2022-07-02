// async await  함수는 프로미스를 반환한다
// 비동기 프로그래밍을  동기프로그래밍처럼  작성할수 있는 함수에 추가된 기능이다
// 프로미스 then 메서드를 체인 형식으로 호출하는 것보다 가독성이 좋아진다
//
// async function getData(){
//     return 123;
// }
// getData().then(data => console.log(data))
function requestData(value) {
    return new Promise(resolve => {
        setTimeout(()=> {
            console.log("requestData", value);
            resolve(value)
        }, 100)
    })
}


async function getData2() {
    const data1 = await requestData(10);// ㅂ함수가 반환하는 프로미스가 처리됨 상태가 될때까지
    const data2 = await requestData(11);
    console.log(data1, data2) // <- 실행되지 않음
    return [data1, data2]
}

// getData2()
// await 는 async 키워드 없이 사용 할수 없다

// async await 는 프로미스보다 가독성이 좋다
function asyncFunc1 () {
    return new Promise((resolve, reject) => {
        resolve("asyncFunc1")
        reject("error")
    })
}
function asyncFunc2 (data1) {
    return new Promise((resolve, reject) => {
        resolve("asyncFunc2", data1)
        reject("error")
    })
}
function asyncFunc3 (data1, data2) {
    return new Promise((resolve, reject) => {
        resolve(`asyncFunc3${data1 +  data2}`)
        reject("error")
    })
}
function getDataPromise() {
    asyncFunc1()
        .then(data => {
            console.log(data)
            return asyncFunc2()
        })
        .then(data => {
            console.log(data)
        })
}
getDataPromise();


async function getDataAsync () {
    const data1 = await asyncFunc1();
    console.log(data1);
    const data2 = await asyncFunc2();
    console.log(data2);
}
getDataAsync();


// 의존성 높은 코드에서 가독성 비교하기
function getDataPromise2() {
    return asyncFunc1()
        .then(data1 => Promise.all([data1, asyncFunc2(data1)]))
        .then(([data1, data2]) => {
            return asyncFunc3(data1, data2);
        });
}
getDataPromise2()
async function getDataAsync2 () {
    const data1 = await asyncFunc1()
    const data2 = await asyncFunc2(data1)
    return asyncFunc3(data1, data2)
}
getDataAsync2()

async function getData2 () {
    const p1 = asyncFunc1()// 두개의 프로미스가 생성되고 각자의 비동기 코드가 실행된다
    const p2 = asyncFunc2()// 두개의 프로미스가 생성되고 각자의 비동기 콛 가 실행된다
    const data = await p1; // 두프로미스가 생성된후 기다리기 때문에 두개의 비동기 함수가 병렬로 처리 된다
    const data2 = await p2;
}


class ThenableExample {
    then(resolve, reject){
        setTimeout(() => resolve(123), 100)
    }
}
async function asyncfunc () {
    const result = await new ThenableExample()
    console.log(result)// 123
}





