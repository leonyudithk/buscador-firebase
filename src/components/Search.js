import React from 'react'
import { Button } from 'react-bootstrap';
import { useFormik} from 'formik';
import * as Yup from 'yup'
import {useDispatch} from 'react-redux'
import {buscarCitaAsync} from '../redux/actions/actionCitas'
import ListarCitas from './ListarCitas';

const Search = ()=>{

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
          buscar: ''
        },
        validationSchema: Yup.object({
            buscar: Yup.string().required('Ingresar texto a buscar por favor!')
        }),
        onSubmit: ({buscar})=> {
            console.log(buscar)
              dispatch(buscarCitaAsync(buscar))
        },
      })

        return(
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <input placeholder="Search" type="text" name="buscar" onChange={formik.handleChange}/>
                   
                    <Button type="submit">
                        Buscar
                    </Button>
                </form>
                <ListarCitas/>
            </div>
        )
}
export default Search