import { Navbar } from "../components/Navbar";
import { LoginProvider } from "../context/LoginProvider";
import { OrdersProvider } from '../context/DataProvider';


export function IsHomeView ({children}) {

    const links = [{
        url:    '/',
        title:  'Home'
    }];

    return (
        <>
            <Navbar links={links}/>
            <LoginProvider>
                <OrdersProvider>
                    {children}
                </OrdersProvider>
            </LoginProvider>
        </>
    )
};