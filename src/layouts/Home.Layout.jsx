import { useOrdersContext } from '../context/DataProvider';
import { OrdersPlaceholder } from '../components/Orders.Placeholder';
import { OrdersList } from '../components/OrdersList';


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