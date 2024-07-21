import { Navbar } from "../components/Navbar";


export function IsErrorView ({children}) {
    return (
        <>
            <Navbar/>
            {
                children
            }
        </>
    )
}