import {ColPlaceholder} from './Col.Placeholder'

export function OrdersPlaceholder () {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Cliente</th>
                    <th scope="col">Pedido</th>
                    <th scope="col">Estatus</th>
                    <th scope="col">Entrega</th>
                    <th scope='col'>Comentarios</th>
                </tr>
            </thead>
            <tbody>
            <ColPlaceholder />
            <ColPlaceholder />
            <ColPlaceholder />
            <ColPlaceholder />
            <ColPlaceholder />
            </tbody>
        </table>
    )
}