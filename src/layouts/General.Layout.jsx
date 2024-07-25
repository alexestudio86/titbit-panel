import { Outlet } from "react-router-dom";


export function GeneralLayout ({children}) {
    return (
        <>
            <div className="container-md">
                {
                children
                ??
                <Outlet/>
                }
            </div>
        </>
    )
}