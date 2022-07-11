import React from 'react'
import { useState } from 'react';
import "../css/MenuContenido.css"
import { Icon } from '@iconify/react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Personal from './Personal/Personal';
import Clinicas from './Clinicas/AdministrarClinicas'


function AdministrarMenuContenido() {
      /*========================== Mostrar/Ocultar =========================*/
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  return (
    <div className='Paginas'>

        <div  className='menu-contenido'>

    <Table >
      {/*========================== Titulos Tabla ==========================*/}
      <thead>
        <tr >
          <th > Clinicas</th>
          <th > Personal</th>
          <th > Pacientes</th>
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
                }}
              >
                {" "}
                {show ? <Icon icon="emojione-monotone:hospital"  width={"40px"}/>: <Icon icon="emojione:hospital" width={"50px"} />  }{" "}


              </button>
              {show ? (
                <div></div>
              ) : (
                <div className="personal">
                  <Clinicas />

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
                }}
              >
                {" "}
                {show2 ? <Icon icon="fa6-solid:user-doctor" width={"40px"}  /> : <Icon icon="fa6-solid:user-doctor"  color='orange'  width={"50px"} />  }{" "}
              </button>
              {show2 ? (
                <div></div>
              ) : (
                <div className="personal">
 
                  {/*========================== Llamado al Componente ==========================*/}
                       
              {/*     <Personal /> */}
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
                  setShow(true);
                }}
              >
                {" "}
                {show3 ? <Icon icon="ri:health-book-fill"   width={"40px"} /> :  <Icon icon="icon-park:health"  width={"50px"}/>           }{" "}
              </button>
              {show3 ? (
                <div></div>
              ) : (
                <div className="personal">
 
                  {/*========================== Llamado al Componente ==========================*/}
                       
             

             {/*      <Personal />

 */}
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

export default AdministrarMenuContenido