export function OrderAlert () {
    return (
        <div aria-labelledby='modalOrderAlert' className='modal fade show d-block bg-white bg-opacity-50' data-bs-backdrop='static' id='modalOrderAlert' tabIndex='-1'>
            <div className='modal-dialog modal-dialog-centered'>
                <div className="modal-content">
                    <div className="alert alert-success m-0 d-flex justify-content-between align-items-center" role="alert">
                        <span>¡Nueva Order llegando!</span>
                        <i className="far fa-bell fa-lg"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}