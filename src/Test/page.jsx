import React from "react";
import { ComponentClass } from "../리액트200제/part_01/PureComponentClass";
import ShallowEqual from "../리액트200제/part_01/ShallowEqual";
import SpreadOperator from "../리액트200제/part_01/spread";
import {Flow} from "./flow";




const Page = () => {

    return (
        <Flow>
            <ComponentClass/>
            <ShallowEqual/>
            <SpreadOperator/>
        </Flow>

    )
}

export default Page;


