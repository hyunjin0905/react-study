// 프로미스
// // 프로미스는 비동기 상태를 값으로 다룰수 있는 객체다 프로미스를 사용하면 비동기 프로그래밍을 할 때 동기 프로그래밍 방식으로 코드를 작성할수 있다

// 프로미시는 자바스크립트 비동기 처리에 사용되는 객체입니다. 여기서 자바스크립트의 비동기 처리란 '특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행하는 자바르킵트의 특정'의미


// function requestData1(callback) {
//     //...
//     callback(data)// 2
// }
// function requestData2(callback) {
//     callback(data)//4
// }
// function  onSuccess1(data) {
//     console.log(data)
//     requestData2(onSuccess2);//3
// }
// function onSuccess2(data) {
//     console.log(data)
//     //...
//
// }
// requestData1(onSuccess1) //1
// 콜백 패터은 코드의 흐름이 순차적이지 않기 때문에 코드를 읽기가 상당히 힘들다


const requestData1 = (data) =>  {
    return new Promise(function (resolve, reject){
        if (data < 0) {
            resolve(data)
        } else {
            reject(data)
        }
    })
}
const requestData2 = (data) =>  {
    return new Promise(function (resolve, reject){
        if (data > 0) {
            resolve(data)
        } else {
            reject(data)
        }
    })
}
//프로미스르로 순차적으로 실행할수 있다
requestData2(11)
    .then(data => {
        console.log("request_data_" ,data)
        return requestData2(-1)
    })
    .then(data => {
        console.log("request_data_", data)
    })
    .catch(e => {
        console.error("catch request_data ", e)
    })


/*
* pending(이행중): 결과 기다리는 중
* fulfilled(이행됨): 수행이 정상적으로 끝났고 결괏값을 가지고 있음
* rejected(거부됨): 수행이 비정상적으로 끝났음
*
* 이행됨, 거부됨 상태를 처리됨(settled)상태라고 부른다 프로미스는 처리됨 상태가 되면 더이상 다른 상태로 변경되지 않는다
*
* */

const p1 = Promise.resolve(123)
console.log("p1 === 123",p1 === 123)
// p1은 123 데이터로 가진 프로미스다
const p2 = new Promise(resolve => setTimeout(() => resolve(10),1000));
console.log("Promise.resolve(p2) === p2",Promise.resolve(p2) === p2)
// Promise.resolve 함수에 프로미스가 입력되면 그 자신이 반환된다

// 순차적으로 실행되는 비동기코드
requestData2(12)
    .then(data => {
        console.log("data", data)
        return requestData2(13)
    })
    .then(data => {
        console.log("data", data * 2)
    })


// 병렬로 실행되는 코드
requestData1(-10).then(data => console.log("1번 2번과 동시에 ", data))
requestData2(10).then(data => console.log("2번 1번과 동시에", data))
// 로 대신

Promise.all([requestData1(-100), requestData2(100)]).then(([data1, data2]) => {
    console.log(data1, data2)
})
// Promise.Race 가장 빨리 처리된 프로미스 가져오기

Promise.race([requestData2(122), new Promise((_, reject) => {
    setTimeout(reject, 3000)})
]).then(data => console.log(data))
.catch(error => console.error(error))

let cachedPromise;
function getData() {
    cachedPromise = cachedPromise || requestData2(1111)
    return cachedPromise
}
getData().then(v => console.log(v))
getData().then(v => console.log(v))
