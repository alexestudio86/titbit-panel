import { createContext, useContext, useEffect, useState } from "react";
import {db} from '../config/firebase.js';
import {query, collection, where, onSnapshot} from 'firebase/firestore';


const ordersContext = createContext();
export function useOrdersContext () {
    return useContext(ordersContext);
};

export const OrdersProvider = ({children}) => {
    const [orders, setOrders] = useState({items:[], loading:false});
    const getOrders = async() => {
        const dayFiltered = new Date();
        dayFiltered.setHours(0,0,0,0);
        setOrders({
            ...orders,
            loading:            true,
            changedDocument:    false
        });
        try {
            //For make a request inside object, you need create index (this can be created pushing in link console), is not necesary short by, 
            const queryOrders   =   await query(collection(db, "orders"), where("timestamp.created", '>=', dayFiltered));
            
            //const queryOrders   =   await query(collection(db, 'orders'), where('created', '>=', dayFiltered), orderBy('created', 'desc'));
            onSnapshot(queryOrders, (querySnapshot) => {
                setOrders({
                    items: querySnapshot.docs.map( doc => (
                        {id: doc.id, ...doc.data()}
                    )),
                    loading:false,
                    changedDocument: querySnapshot.docChanges().map( change => {
                        if (change.type === "added") {
                            return true;
                        }
                    } )
                });
            });
        } catch (error) {
            return error
        }
    };
    useEffect( () => {
        getOrders();
    }, []);
    useEffect( () => {
        new Audio('/bell.mp3').play();
        orders. changedDocument &&
        setTimeout( () => {
            setOrders({...orders, changedDocument:false});
        }, 1000);
    },[orders.changedDocument]);
    return (
        <ordersContext.Provider value={{orders}}>
            {children}
        </ordersContext.Provider>
    )
};