import React from 'react';
import { Button } from 'react-bootstrap';
import {useDispatch} from 'react-redux'
import {registrarUserAsync } from '../redux/actions/actionUsuario';
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
    nombre: Yup.string().min(2, 'Nombre muy corto').max(20, 'Nombre muy Largo').required("Este nombre es requerido"),
    email: Yup.string().email('debe ser del tipo ana@ana.com').required("Este email se requiere"),
    pass1: Yup.string().min(6, 'Password muy corto').max(20, 'Password muy Largo').required("este campo es obligatorio").oneOf([Yup.ref('pass2')], 'Los Password No coinciden'),
    pass2: Yup.string().min(6, 'Password muy corto').max(20, 'Password muy Largo').required("este campo es obligatorio").oneOf([Yup.ref('pass1')], 'Los Password No coinciden')
})


const Register = () => {
    const dispatch = useDispatch()
   
   return (
        <div style={{ margin: '5%', marginLeft: '10%', marginRight: '10%' }}>
        <h1>Registrar Usuario</h1>
            <Formik
                initialValues={
                    {
                        nombre: '',
                        email: '',
                        pass1: '',
                        pass2: ''
                    }
                }
                validationSchema={SignupSchema}
                onSubmit={values => {
                    console.log(values.nombre, values.email, values.pass1)
                    dispatch(registrarUserAsync(values.email, values.pass1, values.nombre))
                }}
            >
                {({ errors, touched, handleReset}) => (

                    <Form>
                        <Field type="texto" placeholder="Nombre" name="nombre" style={{margin: "2%"}}/>
                        {errors.nombre && touched.nombre ?
                            (<div>{errors.nombre}</div>) : null}

                        <Field type="email" placeholder="Email" name="email" style={{margin: "2%"}}/>
                        {errors.email && touched.email ?
                            (<div>{errors.email}</div>) : null}

                        <Field type="password" placeholder="Password 1" name="pass1" style={{margin: "2%"}}/>
                        {errors.pass1 && touched.pass1 ?
                            (<div>{errors.pass1}</div>) : null}

                        <Field type="password" placeholder="Password 1" name="pass2" style={{margin: "2%"}}/>
                        {errors.pass2 && touched.pass2 ?
                            (<div>{errors.pass1}</div>) : null}

                        <Button variant="contained" color="success" type="submit" style={{margin: "2%"}}>
                            Registrar
                        </Button>
                        <Button variant="contained" color="success" onClick={handleReset} style={{margin: "2%"}}>
                            Reset
                        </Button>

                    </Form>
                )}
            </Formik>

    </div>
    );
};

export default Register;