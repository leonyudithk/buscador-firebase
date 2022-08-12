import React from 'react'
import { Button } from 'react-bootstrap';
import { useFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import {useDispatch} from 'react-redux'
import {buscarCitaSync} from '../redux/actions/actionCitas'

const Search = ()=>{

const dispatch= useDispatch()

    const formik = useFormik({
        initialValues: {
          buscar: ''
        },
        validationSchema: Yup.object({
            buscar: Yup.string().required('Ingresar texto a buscar por favor!')
        }),
        onSubmit: values => {
         console.log('values', values)
         dispatch(buscarCitaSync(values))

        },
      })

        return(
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <input placeholder="Search" type="text" name="buscar" onChange={formik.handleChange}/>
                    <ErrorMessage component="div" name="buscar" />
                    <Button type="submit">
                        Buscar
                    </Button>
                </form>
            </div>
        )
}
export default Search