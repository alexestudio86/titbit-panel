import { useEffect, useRef } from "react";
import { Popover } from 'bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function OrderPopover ({title, content}) {
    
    const popover = useRef();

    useEffect( () => {
        new Popover(popover.current,{
            trigger: 'focus'
        });
        //popover.current = document.querySelectorAll('[data-bs-toggle="popover"]');
        //[...popover.current].map(popover => new Popover(popover));
    },[]);

    return (
        <button
            ref={popover}
            type="button"
            className="btn"
            data-bs-toggle="popover"
            data-bs-title={title}
            data-bs-content={content}
        >
            <FontAwesomeIcon icon="far fa-question-circle" />
        </button>
    )

}