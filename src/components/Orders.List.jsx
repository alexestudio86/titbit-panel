import {OrderAlert} from './Order.Alert';
import { useState } from 'react';
import {ModalConfirmation} from './ModalConfirmation';
import { useOrdersContext } from '../context/DataProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OrderPopover } from './Order.Popover';
import { OrderStatus } from './Order.Status';


export function OrdersList () {

    const {orders} = useOrdersContext();

    const translateDate = ( evt ) => {
        return evt.toDate().toDateString()
    };
    
    const translateTime = ( evt ) => {
        return evt.toDate().toLocaleTimeString('es-MX')
    };

    const [modal, setModal] = useState({
        orderId:    null,
        type:       null
    });

    return (
        <>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Cliente</th>
                            <th scope="col">Orden</th>
                            <th scope="col">Estatus</th>
                            <th scope="col">Entrega</th>
                            <th scope='col'>Comentarios</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.items.map( (order, index) => (
                                <tr key={index}>
                                    {/* Número */}
                                    <th scope="row">{index + 1}</th>
                                    {/* Cliente */}
                                    <td>{order.guestName}</td>
                                    {/* Pedido */}
                                    <td>
                                        {order.details.map ( (ord, idx) => (
                                            <p className="fs-6 m-0" key={idx} >{ord.product}</p>
                                        ) )}
                                    </td>
                                    {/* Estatus */}
                                    <td>
                                        {/* Object */}
                                        <form
                                            onSubmit={ e => e.preventDefault()}
                                        >
                                            {
                                                Object.entries(order.status).map( ([key, value], idx) => (
                                                    value &&
                                                    <OrderStatus key={idx} options={ { order, index:idx, statusKey:key } } setModal={setModal} />
                                                ))
                                            }
                                        </form>
                                    </td>
                                    {/* Entrega */}
                                    <td>
                                        {
                                            order.schedule.collect
                                            &&
                                            <small className="d-block font-italic">
                                                <span className='text-secondary'>
                                                    <FontAwesomeIcon icon='fa-regular fa-clock' />
                                                </span>
                                                {` ${translateTime(order.schedule.time)}`}
                                            </small>
                                        }
                                        {
                                            order.status.delivered
                                            &&
                                            <small className="d-block font-weight-bold">
                                                <span className='text-success'>
                                                    <FontAwesomeIcon icon="fa-regular fa-circle-check" />
                                                </span>
                                                {` ${translateTime(order.timestamp.modified)}`}
                                            </small>
                                        }
                                    </td>
                                    {/* Comentarios */}
                                    <td>
                                        {
                                            order.comments
                                            &&
                                            <OrderPopover title={order.guestName} content={order.comments} />
                                        }
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {
                orders.changedDocument
                &&
                <OrderAlert />
            }
            { modal.type === 'delivered' &&
                <>
                    <ModalConfirmation setModal={setModal} />
                    <div className='modal-backdrop fade show'></div>
                </>
            }
            <audio id="bell" >
                <source src="/bell.mp3" type="audio/mpeg" />
            </audio>
        </>
    )
}