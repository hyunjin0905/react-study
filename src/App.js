

import { QueryClient, QueryClientProvider } from 'react-query'
import RouterComponent from "./실전리액트프로그래밍/RouterComponent";
import { Provider } from "react-redux"
const queryClient = new QueryClient();

export default function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <RouterComponent/>
        </QueryClientProvider>
    )
}
