import { Modal } from "bootstrap";
import { useEffect, useRef } from "react"
import { useOrdersContext } from "../context/DataProvider";


export function ModalConfirmation({modal, setModal}) {

    const modalWindow = useRef();
    const {order} = modal;
    const {updateOrder} = useOrdersContext();
    const handleDelivered = () => {
        const excluded  = ['id'];
        const filtered  = Object.keys(order).filter(key => !excluded.includes(key));
        const delivered = filtered.reduce((obj, key) => {
            return {
                ...obj,
                [key]: order[key],
                status: {
                    'delayed':      false,
                    'working':      false,
                    'delivered':    true
                },
                timestamp: {...order.timestamp, modified: new Date()}
            };
        },{});
        updateOrder( order.id, delivered);
        setModal({
            order:      null,
            type:       null
        })
    }

    useEffect( () => {
        new Modal(modalWindow.current,{backdrop:false}).toggle();
    },[]);

    return (
        <div
            ref={modalWindow}
            className='modal fade'
            id='modalConfirmation'
            data-bs-keyboard="false"
            tabIndex='-1'
            aria-labelledby='modalConfirmation'
            aria-hidden='true'
        >
            <div className='modal-dialog modal-dialog-centered'>
                <div className="modal-content">
                    <div className="modal-header d-flex justify-content-center">
                        <h5 className='modal-title text-uppercase text-center'>¿Marcar {order.guestName} como entregado?</h5>
                    </div>
                    <div className='modal-body text-center d-flex justify-content-around'>
                        <button
                            className='btn btn-outline-secondary'
                            data-bs-dismiss='modal'
                            data-bs-target='#modalConfirmation'
                            type='button'
                            onClick={ () => {
                                setModal({
                                    orderId:    null,
                                    type:       null
                                })
                            }}
                        >Cancelar</button>
                        <button
                            className='btn btn-outline-danger'
                            data-bs-dismiss='modal'
                            data-ident='0'
                            type='button'
                            onClick={ handleDelivered }
                        >Confirmar</button>
                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                        <small>¡Esta acción no se puede deshacer!</small>
                        <span className='d-none'>&#161;Hecho!</span>
                    </div>
                </div>
            </div>
        </div>
    )   
};