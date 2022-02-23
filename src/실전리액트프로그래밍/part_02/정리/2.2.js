const log = console.log
// 객체와 배열의 사용성 개선
// 단축 속성명
const name = "mike";
const obj = {
    age: 21,
    name,
    getName() {
        return this.name
    }
}
log(obj.age)
log(obj.name)

// 단축 속성명을 사용한 경우
function makePerson1(age, name) {
    return { age: age, name: name }
}
// 단축 속성명을 사용하지 않는 경우
function makePerson2(age, name) {
    return { age, name }
}

// 콘솔로그 출력시 단축 속성명 활용
console.log({ name, obj })

// 계산된 속성명
function makeObject1(key, value) {
    const obj = {}
    obj[key] = value;
    return obj;
}
function makeObject2(key, value) {
    return { [key]: value }
}


console.log(makeObject1("name", "lucy"))
console.log(makeObject2("name", "lucy"))

// 전개 연산자
const arr1 = [1, 2, 3]
const obj1 = { age: 23, name: "mike" }
const arr2 = [...arr1];
const obj2 = {...obj1};

console.log(arr2, obj2)


// 배열 비구조화
const arr = [1, 2];
const [a, b] = arr;
console.log(a)
console.log(b)

const arr3 = [1];
const [c = 10, d = 20] = arr3;
console.log(c)
console.log(d);



