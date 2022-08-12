import { typesLogin, typesUsuario } from "../types/types";

export const reducersLogin = (state = {}, action)=>{
    switch (action.type) {
        case typesLogin.verificarLogin:
            return {
                email: action.payload.email,
                pass: action.payload.pass,
            }
            
        case typesLogin.Logout:
            return {

            }
            case typesUsuario.register:
                return {
                    email: action.payload.email,
                    pass: action.payload.pass,
                    nombre: action.payload.nombre,
                   
                }
        default:
            return state
    }
}