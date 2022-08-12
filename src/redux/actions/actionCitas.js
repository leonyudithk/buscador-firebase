import { addDoc, collection, getDocs } from 'firebase/firestore'
import {DB} from '../../firebase/firebaseConfig.js'
import { typesCitas } from "../types/types"


export const listaCitaAsync = () =>{
    return async (dispatch)=>{
        const collectionListar = await getDocs(collection(DB, "Citas"))  
        console.log(collectionListar)
        const Citas= []
        collectionListar.forEach(lista =>{
            Citas.push({
                ...lista.data()
            })
        })
        console.log(Citas)
        dispatch(listaCitaSync(Citas))
    }
}
export const listaCitaSync = (Cita)=>{
        return{
            type: typesCitas.list,
            payload: Cita
        }
}

//--------------------------------------------------/
export const addCitaAsync = (Cita) => {
    return async (dispatch)=>{
        addDoc(collection(DB, "Citas"), Cita)
        .then(resp => {
            dispatch(addCitaSync(Cita))
            //dispatch(listCitaAsync())

        }
           )
        .catch(error => console.warn(error))

    }
}
export const addCitaSync = (Cita) => {
    return {
        type: typesCitas.add,
        payload: Cita
    }
}


//-----------------------------------------------------------------/
export const buscarCitaSync = (buscar) => {
    return {
        type: typesCitas.buscar,
        payload: buscar
    }
}