

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import {Route} from "react-router-dom";
import RouterComponent from "./실전리액트프로그래밍/RouterComponent";

const queryClient = new QueryClient()

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterComponent/>
        </QueryClientProvider>
    )
}
