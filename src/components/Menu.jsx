import { Link } from "react-router-dom";

function Menu() {

    return (
        <header>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li>Contacto</li>
                <li><Link to="/list">Listado bebidas</Link></li>
            </ul>
        </header>
    )
}
export default Menu;