import {OrderAlert} from './Order.Alert';
import { Fragment, useState } from 'react';
import {ModalConfirmation} from './ModalConfirmation';
import { useOrdersContext } from '../context/DataProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OrderPopover } from './Order.Popover';
import { OrderStatus } from './Order.Status';


export function OrdersList () {

    const {orders, docAdded} = useOrdersContext();

    const translateDate = ( evt ) => {
        return evt.toDate().toDateString()
    };
    
    const translateTime = ( evt ) => {
        return evt.toDate().toLocaleTimeString(['es-MX'], { hour: "2-digit", minute: "2-digit" })
    };

    const [modal, setModal] = useState({
        order:      null,
        type:       null
    });

    return (
        <>
            <div className="table-responsive" style={{height: '100vh'}}>
                <table className="table">
                    <thead className='sticky-top'>
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
                                        <p className="fs-6 m-0">
                                            {order.details.map ( (dtl, idx) => (
                                                <Fragment key={idx} >
                                                    {dtl.variants.map ( (v, i) => (
                                                        <Fragment key={i}>
                                                            {`${v.quantity} x `}{dtl.product}{v.name && `, ${v.name}`}{idx < (order.details.length-1) && <br/>}
                                                        </Fragment>
                                                    ))}
                                                </Fragment>
                                            ) )}
                                        </p>
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
                                                    <FontAwesomeIcon title='Entrega estimada' icon='fa-solid fa-truck' />
                                                </span>
                                                {` ${translateTime(order.schedule.time)}`}
                                            </small>
                                        }
                                        {
                                            order.status.delivered
                                            &&
                                            <small className="d-block font-weight-bold">
                                                <span className='text-success'>
                                                    <FontAwesomeIcon title='Hora de Entrega' icon="fa-regular fa-circle-check" />
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
                docAdded
                &&
                <OrderAlert />
            }
            { modal.type === 'delivered' &&
                <>
                    <ModalConfirmation modal={modal} setModal={setModal} />
                    <div className='modal-backdrop fade show'></div>
                </>
            }

        </>
    )
}