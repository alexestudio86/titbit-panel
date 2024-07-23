import { Modal } from "bootstrap";
import { useEffect, useMemo, useRef } from "react"


export function ModalConfirmation({setModal}) {

    const modal = useRef();

    useEffect( () => {
        new Modal(modal.current,{backdrop:false}).toggle();
    },[]);

    return (
        <div
            ref={modal}
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
                        <h5 className='modal-title text-uppercase'>¿Marcar como entregado?</h5>
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
                        <button className='btn btn-outline-danger' data-bs-dismiss='modal' data-ident='0' type='button' >Confirmar</button>
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