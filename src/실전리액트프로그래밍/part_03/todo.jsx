import React, {useCallback, useState} from "react"

function Todo() {
    const [desc, setDesc] = useState("");
    const [currentId, setCurrentId] = useState(1);
    const [todoList, setTodoList] = useState([]);
    const [count, setCount] = useState(0); // todo 함수 외부에 선언
    // 컴포넌트 메모이제이션을 위한 렌더링 최적화 발표하기
    // todolist 메모처리 안한거랑
    // 메모처리 한거 성능 비교!
    function onAdd() {
        const todo = {id: currentId, desc}
        setCurrentId(currentId + 1)
        setTodoList([...todoList, todo])
    }
    // onAdd도 새로 만들어진다 tdoo 안에서 만들어진 함수다
    function onClick() {
        setCount(prev => prev + 1)
    }
    // onclick 도 새로 만들어진다
    const onDelete = useCallback((e) =>  {
        const id = Number(e.target.dataset.id)
        const newTodoList = todoList.filter(todo => todo.id !== id);
        setTodoList(newTodoList)
    }, [ todoList ])
    // Todo 함수가 실행될떄 onDelete 함수가 새로 만들어진다
    const onData = () => {
        console.log(1234)
    }

    return (
        <div>
            <TitleComponent title={`현재 카운트 :${count}`}/>
            <button onClick={onClick}>증가</button>
            <ul>
                <TodoList deleteTodo={onDelete} todoList={todoList} />
            </ul>
            <input type="text" value={desc} onChange={e=> setDesc(e.target.value)}/>
            <button onClick={onAdd}>추가</button>
        </div>
    )
}

function Title(props) {
    return <p>{props.title}</p>
}

function TodoListItem({ todoList, deleteTodo }) {
    return (
        <>
            {
                todoList.map(todo => {
                    return (<li key={todo.id}>
                        <span>{todo.desc}</span>
                        <button data-id={todo.id} onClick={deleteTodo}>삭제</button>
                    </li>)
                })
            }
        </>
    )
}

const TodoList = React.memo(TodoListItem)

const TitleComponent = React.memo(Title)

// 최적화 기준
// 리액트 화면 어떻게 그릴까?
// 가상돔을 만들겠지 ...
// 그이전에 가상돔과 현재 가상돔 비교하는 과정 으로 리퀀실레이션
// 바뀐 부분은 화면 업데이트
// 가상돔은 어떻게 만드는데??
// 함수형 컴포넌트 클래스 컴포넌트를 실행함으로서 가상돔을 만든다
// 함수형 컴포넌트 가상돔을 만들어주는 함수다
// 화면에 바뀐부분이 없으면 가상돔을 만들 필요가 없다!!!!!!!!!!!!!=== 함수형 컴포넌트가 실행할 필요없다

// 뭘기준으로 리렌더링 되어야되고

// state setState 함수로만 변경이 가능하다

/*
*
let value;

const useState = (initialValue) => {
    if (!value) {
        value = initialValue
    }

    const setState = (next) => {
        value = next
        func()
    }

    return [ value, setState ]
}

const func = () => {
    const [count, setCount] = useState(0)
    setCount(count + 1)
    return count
}
* */

export default Todo
