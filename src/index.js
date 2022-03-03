import React,{useState, Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Select from 'react-select';
import { Routes, Route, Link } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import {useTable} from 'react-table';
import {Tablas} from './components/Tables'


ReactDOM.render(
  <BrowserRouter>
 <React.Fragment>
   <div className='marco'>
   <div className='encabezado'>
     <img src='http://187.216.2.135/tutorias/logo/itesrc.png'/>
   <h1>Catálogo de carreras</h1>
   <nav>
     <Link to="/" className='Link'>Inicio</Link>
     <Link to="/Editar" className='Link'>Editar</Link>
     <Link to="/Eliminar" className='Link'>Eliminar</Link>
   </nav>
   </div>
   <div className='d-flex flex-row'>
   <Routes >
        <Route path="/" element={<FormAgregar className="p-2"/>} exact/>   
        <Route path="editar" element={<FormEditar className="p-2" />} />
        <Route path="eliminar" element={<Eliminar className="p-2" />} />
    </Routes>
    <Routes >
        <Route path="/" element={<Tabla className="p-2"/>} exact/>
        <Route path="eliminar" element={<Tablas className="p-2"/>} exact/>
        <Route path="editar" element={<Tablas className="p-2" />} />
       
    </Routes>
   </div>
   </div>
 </React.Fragment>
 </BrowserRouter>,
  document.getElementById('root')
);
function handleChange(evt) {
  const value = evt.target.value;
  setState({
    ...state,
    [evt.target.name]: value
  });
}
 function FormAgregar(){
const [name,setName]=useState();
let [selectItem,setSelectItem]=useState();
let handleChangeSelect=(event)=>{
const selectIt=event.target.value;
setSelectItem(selectIt);
}
const handleSubmit=(event)=>{event.preventDefault();alert('tu eres '+name+' de la carrera '+selectItem.value);}

return (
  <form onSubmit={handleSubmit}>
       <label>Agregar</label><br/>
    <label for="name">Nombre de la carrera:</label>
    <input type="text" placeholder='Nombre de la carrera' name='name' value={name} onChange={(e=>setName(e.target.value))} className="form-control" />
    <label for="Correo Electrónico">Correo electrónico del coordinador:</label>
    <input type="email" placeholder='ejemplo@hotmail.com' name='email' className="form-control"/>
    <label for="password">Contraseña</label>
    <input type="password" placeholder='Contraseña' name='password' className='form-control'></input>
    <input type="submit" className="btn btn-success" ></input>
 </form>
);
}

function Tabla (){

  return(
<table className='table table-striped '>
  <tr>
  <th scope='col'>Nombre de carrera</th>
  <th scope='col'>Correo electrónico</th>   
  <th scope='col'>Contraseña</th>
  </tr>
<tr>
  <td>Sistamas</td>
  <td>sistemas@rcarbonifera.tecnm.mx</td>
  <td>ciscoAdmin</td>
</tr>
</table>
);

}
function FormEditar()
{

  const [name,setName]=useState();
  let [selectItem,setSelectItem]=useState();

  let handleChangeSelect=(event)=>{
  const selectIt=event.target.value;
  setSelectItem(selectIt);
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    alert('tu eres '+name+' de la carrera '+selectItem.value);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label>Editar</label><br/>
      <label for="name">Nombre de la carrera:</label>
      <input type="text" placeholder='Nombre de la carrera' name='name' value={name} onChange={(e=>setName(e.target.value))} className="form-control" />
      <label for="Correo Electrónico">Correo electrónico del coordinador:</label>
      <input type="email" placeholder='ejemplo@hotmail.com' name='email' className="form-control"/>
      <label for="password">Contraseña</label>
      <input type="password" placeholder='Contraseña' name='password' className='form-control'></input>
      <input type="submit" className="btn btn-success" ></input>
   </form>
  );
}
  function Eliminar(){

    const options = [
      { value: 'Ingeniería Mecatrónica', label: 'Ingeniería Mecatrónica' },
      { value: 'Ingeniería en Sistemas Computacionales', label: 'Ingeniería en Sistemas Computacionales' },
      { value: 'Ingeniería en Administración de empresas', label: 'Ingeniería en Administración de empresas' },
      { value: 'Ingeniería Industrial', label: 'Ingeniería Industrial' },
      { value: 'Ingeniería Electromecánica', label: 'Ingeniería Electromecánica' }
    ]
    return(
      <form>
        <Select options={options}/>
        <input type="submit"/>
      </form>
    );
  }
 





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
