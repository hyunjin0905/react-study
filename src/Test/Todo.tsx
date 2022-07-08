import { useAppDispatch, useAppSelector } from "../store/config";
import { useState } from "react";
import { setTodo } from "../store/slices/TodoSlice";

interface TodoItem {
    id: number;
    title: string;
    checked: boolean
}
function Todo() {
    const { todoList } = useAppSelector(state => state.todo)
    const [ inputTitle, setInputTitle ] = useState("");
    const dispatch = useAppDispatch()
    //
}

