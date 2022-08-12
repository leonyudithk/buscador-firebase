import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useForm from '../Hooks/useForm';
import ListarCitas from './ListarCitas';
import {useDispatch} from 'react-redux'
import {addCitaAsync} from '../redux/actions/actionCitas'



const AgregarCita = () => {
    const dispatch = useDispatch()
    const [formValue, handleInputChange, reset] = useForm({
        nombre: '',
        email: '',
        fecha: '',
        hora: '',
        telefono: '',
        sintomas: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValue)
        dispatch(addCitaAsync(formValue))
        reset()
    }
    return (
        <div>
               <Form onSubmit={handleSubmit} style={{ margin: '5%', marginLeft: '10%', marginRight: '10%' }}>
                <h1 style={{ textAlign: 'center', color: 'blue' }}>Agendar cita con el Nutricionista</h1>
                <hr />
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Nombre del Paciente</Form.Label>
                    <Form.Control type="text" name="nombre" value={formValue.nombre} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" name="email" value={formValue.email} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control type="date" name="fecha" value={formValue.fecha} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Hora</Form.Label>
                    <Form.Control type="time" name="hora" value={formValue.hora} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Telefono del Paciente</Form.Label>
                    <Form.Control type="tel" name="telefono" value={formValue.telefono} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Síntomas u Observaciones</Form.Label>
                    <Form.Control as="textarea" rows={3} name="sintomas" value={formValue.sintomas} onChange={handleInputChange} />
                </Form.Group>
                <Button type="submit" variant="info" >Agendar</Button>
            </Form>
            <ListarCitas/>
        </div>
    );
};

export default AgregarCita;