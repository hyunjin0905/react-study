import React from "react";
import { ComponentClass } from "../part_01/PureComponentClass";
import ShallowEqual from "../part_01/ShallowEqual";
import SpreadOperator from "../part_01/spread";
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

