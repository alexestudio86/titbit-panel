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
                    order:      ord,
                    type:       'delivered'
                })
                break;
            default:
                break;
        }
    };

    if (options) {            
        return (
            <>
                <div className="form-check form-switch" >
                    <label htmlFor={`${(options.order.guestName).replace(/ /g, "")}-0`} className={"form-check-label"+(options.statusKey === 'delivered' ? ' text-secondary' : '')} >
                        Retrasado
                    </label>
                    <input
                        type="radio"
                        value='delayed'
                        name={`${(options.order.guestName).replace(/ /g, "")}${options.index}`}
                        id={`${(options.order.guestName).replace(/ /g, "")}-0`}
                        checked={options.statusKey === 'delayed'}
                        disabled={options.statusKey === 'delivered'}
                        className={"form-check-input"+(options.statusKey !== 'delivered' ? (options.statusKey === 'delayed'?' bg-danger':'') : ' disabled')}
                        onChange={ e => {
                            filterResponse(e.target.value, options.order)
                        }}
                    />
                </div>
                <div className="form-check form-switch">
                    <label htmlFor={`${(options.order.guestName).replace(/ /g, "")}-1`} className={"form-check-label"+(options.statusKey === 'delivered' ? ' text-secondary' : '')} >
                        Trabajando
                    </label>
                    <input
                        type="radio"
                        value='working'
                        name={`${(options.order.guestName).replace(/ /g, "")}${options.index}`}
                        id={`${(options.order.guestName).replace(/ /g, "")}-1`}
                        checked={options.statusKey === 'working'}
                        disabled={options.statusKey === 'delivered'}
                        className={"form-check-input"+(options.statusKey !== 'delivered' ? (options.statusKey === 'working'?' bg-warning':'') : ' disabled')}
                        onChange={ e => {
                            filterResponse(e.target.value, options.order)
                        }}
                    />
                </div>
                <div className="form-check form-switch">
                    <label htmlFor={`${(options.order.guestName).replace(/ /g, "")}-2`} className={"form-check-label"+(options.statusKey === 'delivered' ? ' text-secondary' : '')} >
                        Entregado
                    </label>
                    <input
                        type="radio"
                        value='delivered'
                        name={`${(options.order.guestName).replace(/ /g, "")}${options.index}`}
                        id={`${(options.order.guestName).replace(/ /g, "")}-2`}
                        checked={options.statusKey === 'delivered'}
                        disabled={options.statusKey === 'delivered'}
                        className={"form-check-input disabled"+(options.statusKey === 'delivered' ? ' bg-success' : '')}
                        onChange={ e => {
                            filterResponse(e.target.value, options.order)
                        }}
                    />
                </div>
            </>
        )
    };
};


