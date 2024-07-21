import { Outlet } from "react-router-dom";


export function GeneralLayout ({children}) {
    return (
        <>
            <div className="container">
                {
                children
                ??
                <Outlet/>
                }
            </div>
        </>
    )
}