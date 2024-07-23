import { useOrdersContext } from '../context/DataProvider';
import { OrdersPlaceholder } from '../components/Orders.Placeholder';
import { OrdersList } from '../components/Orders.List';


export function HomeLayout () {

    const {orders} = useOrdersContext();

    return (
        <>
            {
                orders.loading
                ?
                <OrdersPlaceholder/>
                :
                <OrdersList/>
            }
        </>
    )
};