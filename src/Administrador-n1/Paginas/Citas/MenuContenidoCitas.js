import React from 'react'
import { useState } from 'react';
import "../../css/MenuContenido.css"
import { Icon } from '@iconify/react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import MenuCitas from './MenuCitas.jsx'



import HistoriaClinica from './HistoriaClinica';


function MenuContenidoCitas() {
    /*========================== Mostrar/Ocultar =========================*/
    const [show, setShow] = useState(true);
    const [show2, setShow2] = useState(true);
    const [show3, setShow3] = useState(true);
    const [show4, setShow4] = useState(true);
    return (
        <div className='Paginas'>
            <MenuCitas />

            <div className='menu-contenido'>

                <Table >
                    {/*========================== Titulos Tabla ==========================*/}
                    <thead>
                        <tr >
                            <th > Historia clínica</th>
                            <th > Consultas externas</th>
                            <th > Interconsulta</th>
                            <th > Estudios de laboratorio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td>
                                <button
                                    className="sn-boton"
                                    type="button"
                                    onClick={() => {
                                        setShow(!show);
                                        setShow2(true);
                                        setShow3(true);
                                        setShow4(true);
                                    }}
                                >
                                    {" "}
                                    {show ? <Icon icon="bi:journal-medical" color="gray" width="40" /> : <Icon icon="bi:journal-medical" color="#0d6efd" width="50" />}{" "}


                                </button>
                                {show ? (
                                    <div></div>
                                ) : (
                                    <div className="personal">

                                     
                                       <HistoriaClinica />


                                    </div>
                                )}
                            </td>



                            <td>
                                <button
                                    className="sn-boton"
                                    type="button"
                                    onClick={() => {
                                        setShow2(!show2);
                                        setShow(true);
                                        setShow3(true);
                                        setShow4(true);
                                    }}
                                >
                                    {show2 ? <Icon icon="fa-solid:notes-medical" color="gray" width="34" /> : <Icon icon="fa-solid:notes-medical" color="#0d6efd" width="40" />}{" "}
                                </button>
                                {show2 ? (
                                    <div></div>
                                ) : (
                                    <div className="personal">

                                        {/*========================== Llamado al Componente ==========================*/}

                                     

                                    </div>
                                )}
                            </td>


                            <td>
                                <button
                                    className="sn-boton"
                                    type="button"
                                    onClick={() => {
                                        setShow3(!show3);
                                        setShow2(true);
                                        setShow4(true);
                                        setShow(true);
                                    }}
                                >
                                    {" "}
                                    {show3 ? <Icon icon="fa-solid:notes-medical" color="gray" width="34" /> : <Icon icon="fa-solid:notes-medical" color="#0d6efd" width="40" />}{" "}
                                </button>
                                {show3 ? (
                                    <div></div>
                                ) : (
                                    <div className="personal">

                                        {/*========================== Llamado al Componente ==========================*/}



                                    

                                    </div>
                                )}
                            </td>

                            <td>
                                <button
                                    className="sn-boton"
                                    type="button"
                                    onClick={() => {
                                        setShow4(!show4);
                                        setShow3(true);
                                        setShow2(true);
                                        setShow(true);
                                    }}
                                >
                                    {" "}
                                    {show4 ? <Icon icon="bi:file-earmark-medical" color="gray" width="40" /> : <Icon icon="bi:file-earmark-medical" color="#0d6efd" width="50" />}{" "}
                                </button>
                                {show4 ? (
                                    <div></div>
                                ) : (
                                    <div className="personal">

                                        {/*========================== Llamado al Componente ==========================*/}



                                        {/* <RegisterPatients  /> */}


                                    </div>
                                )}
                            </td>
                        </tr>
                    </tbody>
                </Table>


            </div>
        </div>
    )
}

export default MenuContenidoCitas