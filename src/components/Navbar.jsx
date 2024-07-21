import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const defaultLinks = [{
    url:    '/',
    title:  'Página no encontrada'
}];

export function Navbar( {links = defaultLinks} ) { 
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container d-flex justify-content-between align-items-center">
                {links.map( (link, index) => (
                    <Fragment key={index}>
                        <NavLink to={link.url} className="navbar-brand">
                            <h1 className="text-uppercase fs-3 py-1">
                                {link.title}
                            </h1>
                        </NavLink>
                        <img alt="Logo Titbit" src="/logo-titbit.png" width="70" height='54' />
                    </Fragment>
                ))}
            </div>
        </nav>
    )
}