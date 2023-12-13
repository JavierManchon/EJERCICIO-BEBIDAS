import { Navigate, useLocation } from "react-router-dom";

function AuthRoute({user, component}) {
    const location = useLocation();
    console.log(location);

    if (user) return component;
    if (!user) return <Navigate to="/" state={{ prevRoute: location.pathname }}/>

    //Meto el state para asignarle el estado, ruta previa a location para que cuando no haya user no me deje en la url list, sino que me devuelva a la home (inicio)

}
export default AuthRoute