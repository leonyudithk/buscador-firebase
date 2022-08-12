import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { google } from "../../firebase/firebaseConfig"
import { typesLogin } from "../types/types"

//--------------Login con email y pass-----------------------/
export const actionLoginAsync = (email, pass)=>{
        return (dispatch)=>{
        const auth =getAuth()
        signInWithEmailAndPassword(auth, email, pass)
        .then(({user})=>{
                dispatch(actionLoginSync(email, pass))
                console.log(user.displayName, 'Bienvenido')
        })
        .catch(error =>{
            console.warn('NO encontrado')
        })

    }
}

export const actionLoginSync = (email, pass)=>{
    return {
        type: typesLogin.verificarLogin,
        payload:{
            email, pass
        }
    }
}




//--------------Ingresar con Google-----------------------/
export const loginGoogle = ()=>{
    return (dispatch)=> {
            console.log("estoy dentro de google")
           const auth = getAuth()
          signInWithPopup(auth, google)
          .then(({user})=>{
            console.log(user, 'Bienvenido')
             dispatch(actionLoginSync(user))
          })
          .catch(({error})=>{
            console.warn(error, 'No autorizado')
          })
    }
}

//--------------Cerrar Sesión----------------------/
//--------------Logout---------------------------//
export const actionLogoutAsyn = ()=>{
    console.log('dentrooooo accc')
    return (dispatch)=>{
        const auth = getAuth();
        signOut(auth)
        .then(()=>{
            dispatch(actionLogoutSyn())
            console.log('Chao')
        })
        .catch((error)=>{console.warn(error, '')});
    }
}


export const actionLogoutSyn = ()=>{
    return {
        type: typesLogin.Logout
    }
}