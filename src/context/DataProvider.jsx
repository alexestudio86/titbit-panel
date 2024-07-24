import { createContext, useContext, useEffect, useState } from "react";
import {db} from '../config/firebase.js';
import {query, collection, where, onSnapshot, doc, updateDoc, orderBy} from 'firebase/firestore';


const ordersContext = createContext();
export function useOrdersContext () {
    return useContext(ordersContext);
};

export const OrdersProvider = ({children}) => {

    const [orders, setOrders] = useState(
        {
            items:              [],
            loading:            false
        }
    );
    const [docAdded, setDocAdded] = useState(false);

    const getOrders = async() => {
        const dayFiltered = new Date();
        dayFiltered.setHours(0,0,0,0);
        setOrders({
            ...orders,
            loading:            true
        });
        try {
            //For make a request inside object, you need create index (this can be created pushing in link console), is not necesary short by, 
            const queryOrders   =   await query(collection(db, "orders"), where("timestamp.created", '>=', dayFiltered), orderBy("timestamp.created", "desc"));
            
            //const queryOrders   =   await query(collection(db, 'orders'), where('created', '>=', dayFiltered), orderBy('created', 'desc'));
            onSnapshot(queryOrders, (querySnapshot) => {
                setOrders({
                    ...orders,
                    items:      querySnapshot.docs.map( doc => (
                        {id: doc.id, ...doc.data()}
                    )),
                    loading:    false
                });
                querySnapshot.docChanges().forEach( change => {
                    if (change.type === "added") {
                        setDocAdded(true);
                    }
                })
            });
        } catch (error) {
            return error
        }
    };

    const updateOrder = async( itemID, item ) => {
        try {
            await updateDoc(doc(db, "orders", itemID), item);
        } catch (error) {
            return error
        }
    };

    useEffect( () => {
        getOrders();
    }, []);

    useEffect( () => {
        docAdded &&
        new Audio('/bell.mp3').play();
        setTimeout( () => {
            setDocAdded(false);
        }, 1000);
    },[docAdded]);

    return (
        <ordersContext.Provider value={{orders, updateOrder, docAdded}}>
            {children}
        </ordersContext.Provider>
    )

};