import { useOrdersContext } from "../context/DataProvider"


export function OrderStatus({options, setModal}) {

    const {updateOrder} = useOrdersContext();

    const filterResponse = (val,ord) => {
        const excluded  = ['id'];
        const filtered  = Object.keys(ord).filter(key => !excluded.includes(key));
        switch (val) {
            case 'delayed':
                const delayed = filtered.reduce((obj, key) => {
                    return {
                        ...obj,
                        [key]: ord[key],
                        status: {
                            'delayed':      true,
                            'working':      false,
                            'delivered':    false
                        },
                        timestamp: {...ord.timestamp, modified: new Date()}
                    };
                },{});
                updateOrder( ord.id, delayed);
                break;
            case 'working':
                const working = filtered.reduce((obj, key) => {
                    return {
                        ...obj,
                        [key]: ord[key],
                        status: {
                            'delayed':      false,
                            'working':      true,
                            'delivered':    false
                        },
                        timestamp: {...ord.timestamp, modified: new Date()}
                    };
                },{});
                updateOrder( ord.id, working);
                break;
            case 'delivered':
                setModal({
                    orderId:    ord.id,
                    type:       'delivered'
                })
                break;
            default:
                break;
        }
    };

    if (options) {            
        switch (options.statusKey) {
            case 'delayed':
                return (
                    <>
                        <div className="form-check form-switch" >
                            <label htmlFor={`${(options.order.guestName).replace(/ /g, "")}-0`} className="form-check-label" >
                                Retrasado
                            </label>
                            <input
                                type="radio"
                                value='delayed'
                                name={`${(options.order.guestName).replace(/ /g, "")}${options.index}`}
                                id={`${(options.order.guestName).replace(/ /g, "")}-0`}
                                checked
                                className="form-check-input bg-danger"
                                onChange={ e => {
                                    filterResponse(e.target.value, options.order)
                                }}
                            />
                        </div>
                        <div className="form-check form-switch">
                            <label htmlFor={`${(options.order.guestName).replace(/ /g, "")}-1`} className="form-check-label" >
                                Trabajando
                            </label>
                            <input
                                type="radio"
                                value='working'
                                name={`${(options.order.guestName).replace(/ /g, "")}${options.index}`}
                                id={`${(options.order.guestName).replace(/ /g, "")}-1`}
                                className="form-check-input"
                                onChange={ e => {
                                    filterResponse(e.target.value, options.order)
                                }}
                            />
                        </div>
                        <div className="form-check form-switch">
                            <label htmlFor={`${(options.order.guestName).replace(/ /g, "")}-1`} className="form-check-label" >
                                Entregado
                            </label>
                            <input
                                type="radio"
                                value='delivered'
                                name={`${(options.order.guestName).replace(/ /g, "")}${options.index}`}
                                id={`${(options.order.guestName).replace(/ /g, "")}-2`}
                                className="form-check-input"
                                onChange={ e => {
                                    filterResponse(e.target.value, options.order)
                                }}
                            />
                        </div>
                    </>
                )
                break;
            case 'working':
                return (
                    <>
                        <div className="form-check form-switch">
                            <label htmlFor={`${(options.order.guestName).replace(/ /g, "")}-0`} className="form-check-label" >
                                Retrasado
                            </label>
                            <input
                                type="radio"
                                value='delayed'
                                name={`${(options.order.guestName).replace(/ /g, "")}${options.index}`}
                                id={`${(options.order.guestName).replace(/ /g, "")}-0`}
                                className="form-check-input w3-danger"
                                onChange={ e => {
                                    filterResponse(e.target.value, options.order)
                                }}
                            />
                        </div>
                        <div className="form-check form-switch">
                            <label htmlFor={`${(options.order.guestName).replace(/ /g, "")}-1`} className="form-check-label" >
                                Trabajando
                            </label>
                            <input
                                type="radio"
                                value='working'
                                name={`${(options.order.guestName).replace(/ /g, "")}${options.index}`}
                                id={`${(options.order.guestName).replace(/ /g, "")}-1`}
                                checked
                                className="form-check-input bg-warning"
                                onChange={ e => {
                                    filterResponse(e.target.value, options.order)
                                }}
                            />
                        </div>
                        <div className="form-check form-switch">
                            <label htmlFor={`${(options.order.guestName).replace(/ /g, "")}-2`} className="form-check-label" >
                                Entregado
                            </label>
                            <input
                                type="radio"
                                value='delivered'
                                name={`${(options.order.guestName).replace(/ /g, "")}${options.index}`}
                                id={`${(options.order.guestName).replace(/ /g, "")}-2`}
                                className="form-check-input w3-danger"
                                onChange={ e => {
                                    filterResponse(e.target.value, options.order)
                                }}
                            />
                        </div>
                    </>
                )
                break;
            case 'delivered':
                return (
                    <>
                        <div className="form-check form-switch">
                            <label htmlFor={`${(options.order.guestName).replace(/ /g, "")}-0`} className="form-check-label text-secondary" >
                                Retrasado
                            </label>
                            <input
                                type="radio"
                                value='delayed'
                                name={`${(options.order.guestName).replace(/ /g, "")}${options.index}`}
                                id={`${(options.order.guestName).replace(/ /g, "")}-1`}
                                disabled
                                className="form-check-input w3-danger"
                            />
                        </div>
                        <div className="form-check form-switch">
                            <label htmlFor={`${(options.order.guestName).replace(/ /g, "")}-1`} className="form-check-label text-secondary" >
                                Trabajando
                            </label>
                            <input
                                type="radio"
                                value='working'
                                name={`${(options.order.guestName).replace(/ /g, "")}${options.index}`}
                                id={`${(options.order.guestName).replace(/ /g, "")}-1`}
                                disabled
                                className="form-check-input w3-danger"
                            />
                        </div>
                        <div className="form-check form-switch" >
                            <label htmlFor={`${(options.order.guestName).replace(/ /g, "")}-2`} className="form-check-label text-secondary" >
                                Entregado
                            </label>
                            <input
                                type="radio"
                                value='delivered'
                                name={`${(options.order.guestName).replace(/ /g, "")}${options.index}`}
                                id={`${(options.order.guestName).replace(/ /g, "")}-0`}
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


