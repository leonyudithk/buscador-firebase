import React, { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { listaCitaAsync } from '../redux/actions/actionCitas';


const ListarCitas = () => {
    const dispatch = useDispatch()
    const { Cita } = useSelector(store => store.cita)

    useEffect(() => {
        dispatch(listaCitaAsync())
    }, [dispatch])
    
    return (
        <div  style={{margin: '5%', marginLeft: '10%', marginRight: '10%'}}>
            <Table striped bordered hover variant="info">
                <thead>
                    <tr style={{textAlign: 'center'}}>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Telefono</th>
                        <th>Síntoma</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            Cita.map((c, id)=>(
                                    <tr>
                                <td>{c.nombre}</td>
                                <td>{c.email}</td>
                                <td>{c.fecha}</td>
                                <td>{c.hora}</td>
                                <td>{c.telefono}</td>
                                <td>{c.sintomas}</td>
                                <td>
                                    
                                    <Button type="button" variant="outline-danger" >Eliminar</Button>
                                    <Button type="button" variant="outline-info" >Editar</Button>
                                    <Button type="button" variant="outline-warning" >Detalle</Button>
                                </td>
                            </tr>
                            ))                    }
                       
                    
               
                    
                </tbody>
            </Table>
          
        </div>
    );
};

export default ListarCitas;