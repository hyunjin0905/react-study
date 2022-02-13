import React, { FC, useState } from "react";


const colors = [
    "red",
    "blue",
    "black",
    "purple"
];


const ages = [
    "10",
    "20",
    "30",
    "40"
]

interface State {
    age: string;
    color: string;
}


// closure
export const FormComponent: FC = () => {
    const [ form, setForm ] = useState<State>({
        age: "",
        color: ""
    })

    const onChangeColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target
        setTimeout(() => {
            let age: string
            if (value === "red") {
                age = "10"
            } else if (value === "blue") {
                age = "20"
            } else if (value === "black") {
                age = "30"
            } else {
                age = "40"
            }
            setAge(age)
        }, 1000)
        setForm({ ...form, color: value })
    }

    const setAge = (age: string) => {
        setForm(prev => {
            return { ...prev, age }
        })
    }

    // const onChangeAge = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //     const { value } = e.target;
    //     setForm({ ...form, age: value });
    // }

    return (
        <form>
            <select name="color" value={form.color} onChange={onChangeColor}>
                {
                    colors.map((color) => {
                        return <option key={color} value={color}>{color}</option>;
                    })
                }
            </select>
            <select name="age" value={form.age}>
                {
                    ages.map((age) => {
                        return <option key={age} value={age}>{age}</option>;
                    })
                }
            </select>
        </form>
    )
}


// higher order function (HOF)
let obje: any = {}
const myState = (): [ any, ((val: any) => void) ] => {
    const setMyState = (state: any) => {
        obje.age = state;
    }
    return [ obje, setMyState ];
}

const myClosure = () => {
    const [ obj, setObject ] = myState();
    return function Lucy() {
        setObject(10)
        return obj
    }
}

const a = myClosure()
const b = myClosure()

console.log(a === b)
console.log(a() === b())
console.log(a())
console.log(b())