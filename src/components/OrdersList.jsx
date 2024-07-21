import { Fragment } from 'react';
import {OrderAlert} from './OrderAlert';
import {ModalConfirmation} from './ModalConfirmation';
import { useOrdersContext } from '../context/DataProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CommentPopover } from '../Orders.Minis';


export function OrdersList () {

    const {orders} = useOrdersContext();

    const returnRadio = ( evt ) => {
        if (evt.value) {            
            switch (evt.key) {
                case 'delayed':
                    return (
                        <>
                            <div className="form-check form-switch" key={0}>
                                <label htmlFor={`${(evt.order.guestName).replace(/ /g, "")}-0`} className="form-check-label" >
                                    Retrasado
                                </label>
                                <input
                                    type="radio"
                                    value='delayed'
                                    name={`${(evt.order.guestName).replace(/ /g, "")}${evt.index}`}
                                    id={`${(evt.order.guestName).replace(/ /g, "")}-0`}
                                    checked
                                    className="form-check-input bg-danger"
                                    onChange={ e => {
                                        console.log('e: ', e.target.value)
                                    }}
                                />
                            </div>
                            <div className="form-check form-switch" key={1}>
                                <label htmlFor={`${(evt.order.guestName).replace(/ /g, "")}-1`} className="form-check-label" >
                                    Trabajando
                                </label>
                                <input
                                    type="radio"
                                    value='working'
                                    name={`${(evt.order.guestName).replace(/ /g, "")}${evt.index}`}
                                    id={`${(evt.order.guestName).replace(/ /g, "")}-1`}
                                    className="form-check-input"
                                    onChange={ e => {
                                        console.log('e: ', e.target.value)
                                    }}
                                />
                            </div>
                            <div className="form-check form-switch" key={2}>
                                <label htmlFor={`${(evt.order.guestName).replace(/ /g, "")}-1`} className="form-check-label text-secondary" >
                                    Entregado
                                </label>
                                <input
                                    type="radio"
                                    value='delivered'
                                    name={`${(evt.order.guestName).replace(/ /g, "")}${evt.index}`}
                                    id={`${(evt.order.guestName).replace(/ /g, "")}-2`}
                                    className="form-check-input"
                                    onChange={ e => {
                                        console.log('e: ', e.target.value)
                                    }}
                                />
                            </div>
                        </>
                    )
                    break;
                case 'working':
                    return (
                        <>
                            <div className="form-check form-switch" key={0}>
                                <label htmlFor={`${(evt.order.guestName).replace(/ /g, "")}-0`} className="form-check-label" >
                                    Retrasado
                                </label>
                                <input
                                    type="radio"
                                    value='delayed'
                                    name={`${(evt.order.guestName).replace(/ /g, "")}${evt.index}`}
                                    id={`${(evt.order.guestName).replace(/ /g, "")}-1`}
                                    className="form-check-input w3-danger"
                                    onChange={ e => {
                                        console.log('e: ', e.target.value)
                                    }}
                                />
                            </div>
                            <div className="form-check form-switch" key={1}>
                                <label htmlFor={`${(evt.order.guestName).replace(/ /g, "")}-1`} className="form-check-label" >
                                    Trabajando
                                </label>
                                <input
                                    type="radio"
                                    value='working'
                                    name={`${(evt.order.guestName).replace(/ /g, "")}${evt.index}`}
                                    id={`${(evt.order.guestName).replace(/ /g, "")}-0`}
                                    checked
                                    className="form-check-input bg-warning"
                                    onChange={ e => {
                                        console.log('e: ', e.target.value)
                                    }}
                                />
                            </div>
                            <div className="form-check form-switch" key={2}>
                                <label htmlFor={`${(evt.order.guestName).replace(/ /g, "")}-2`} className="form-check-label" >
                                    Entregado
                                </label>
                                <input
                                    type="radio"
                                    value='delivered'
                                    name={`${(evt.order.guestName).replace(/ /g, "")}${evt.index}`}
                                    id={`${(evt.order.guestName).replace(/ /g, "")}-1`}
                                    className="form-check-input w3-danger"
                                    onChange={ e => {
                                        console.log('e: ', e.target.value)
                                    }}
                                />
                            </div>
                        </>
                    )
                    break;
                case 'delivered':
                    return (
                        <>
                            <div className="form-check form-switch" key={0}>
                                <label htmlFor={`${(evt.order.guestName).replace(/ /g, "")}-0`} className="form-check-label text-secondary" >
                                    Retrasado
                                </label>
                                <input
                                    type="radio"
                                    value='delayed'
                                    name={`${(evt.order.guestName).replace(/ /g, "")}${evt.index}`}
                                    id={`${(evt.order.guestName).replace(/ /g, "")}-1`}
                                    disabled
                                    className="form-check-input w3-danger"
                                />
                            </div>
                            <div className="form-check form-switch" key={1}>
                                <label htmlFor={`${(evt.order.guestName).replace(/ /g, "")}-1`} className="form-check-label text-secondary" >
                                    Trabajando
                                </label>
                                <input
                                    type="radio"
                                    value='working'
                                    name={`${(evt.order.guestName).replace(/ /g, "")}${evt.index}`}
                                    id={`${(evt.order.guestName).replace(/ /g, "")}-1`}
                                    disabled
                                    className="form-check-input w3-danger"
                                />
                            </div>
                            <div className="form-check form-switch" key={2}>
                                <label htmlFor={`${(evt.order.guestName).replace(/ /g, "")}-2`} className="form-check-label text-secondary" >
                                    Entregado
                                </label>
                                <input
                                    type="radio"
                                    value='delivered'
                                    name={`${(evt.order.guestName).replace(/ /g, "")}${evt.index}`}
                                    id={`${(evt.order.guestName).replace(/ /g, "")}-0`}
                                    disabled
                                    checked className="form-check-input bg-success"
                                />
                            </div>
                        </>
                    )
                    break;
                default:
                    break;
            };
        };
    };

    const translateDate = ( evt ) => {
        return evt.toDate().toDateString()
    };
    
    const translateTime = ( evt ) => {
        return evt.toDate().toLocaleTimeString('es-MX')
    };


    return (
        <div className="container">
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
                                                    <Fragment key={idx}>
                                                        {returnRadio({order, key, value, index})}
                                                    </Fragment>
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
                                            <CommentPopover title={order.guestName} content={order.comments} />
                                        }
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                {
                    orders.changedDocument
                    &&
                    <OrderAlert />
                }
                <ModalConfirmation />
                <audio id="bell" >
                    <source src="/bell.mp3" type="audio/mpeg" />
                </audio>
            </div>
        </div>
    )
}