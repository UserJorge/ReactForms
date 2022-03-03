import React from "react";
import { ReactDOM } from "react-dom";
import { useTable } from 'react-table'
 
export function Tablas() {
  const data = React.useMemo(
    () => [
      {
        col1: 'Sistemas Computacionales',
        col2: 'sistemas@rcarbonifera.tecnm.mx',
        col3: '*****'
      },
      {
        col1: 'Mecatrónica',      
        col2: 'mecatronica@rcarbonifera.tecnm.mx',
        col3: '*******'      
      },
      {
        col1: 'Electromecánica',
        col2: 'electromecanica@rcarbonifera.tecnm.mx',    
        col3: '********',
      },
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Nombre de carrera',
        accessor: 'col1',
      },
      {
        Header: 'Correo electrónico',
        accessor: 'col2',
      },
      {
        Header: 'Contraseña',
        accessor: 'col3',
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px blue' }} className="table table-striped" >
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: 'solid 3px red',
                  background: 'aliceblue',
                  color: 'black',
                  fontWeight: 'bold',
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: 'solid 1px gray',
                      background: '#B7C3F3'
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

class TablesCarrera extends React.Component{
    constructor(data){
        this.nombre=data.nombre;
        this.correo=data.correo;
        this.password=data.password;

    }
}
/*const datos=new TablesCarrera({nombre:"Sistemas",correo:"sistemas@rcarbonifera.tecnm.mx",password:"****"})*/
export default Tablas;