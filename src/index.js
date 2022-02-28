import React,{useState, Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Select from 'react-select';


ReactDOM.render(
 <React.Fragment>
   <div className='marco'>
   <div className='encabezado'>
     <img src='http://187.216.2.135/tutorias/logo/itesrc.png'/>
   <h1>Catálogo de carreras</h1>
   </div>
   <MyQuizForm/>
   </div>
   
 </React.Fragment>,
  document.getElementById('root')
);
function handleChange(evt) {
  const value = evt.target.value;
  setState({
    ...state,
    [evt.target.name]: value
  });
}
 function MyQuizForm(){
const [name,setName]=useState();
let [selectItem,setSelectItem]=useState();
let handleChangeSelect=(event)=>{
const selectIt=event.target.value;
setSelectItem(selectIt);

}
const handleSubmit=(event)=>{event.preventDefault();alert('tu eres '+name+' de la carrera '+selectItem.value);}
const options = [
  { value: 'Ingeniería Mecatrónica', label: 'Ingeniería Mecatrónica' },
  { value: 'Ingeniería en Sistemas Computacionales', label: 'Ingeniería en Sistemas Computacionales' },
  { value: 'Ingeniería en Administración de empresas', label: 'Ingeniería en Administración de empresas' },
  { value: 'Ingeniería Industrial', label: 'Ingeniería Industrial' },
  { value: 'Ingeniería Electromecánica', label: 'Ingeniería Electromecánica' }
]
return(
  <form onSubmit={handleSubmit}>
    <label for="name">Nombre de la carrera:</label>
    <input type="text" placeholder='Nombre de la carrera' name='name' value={name} onChange={(e=>setName(e.target.value))} className="form-control" />
    <label for="Correo Electrónico">Correo Electrónico del jefe de departamento:</label>
    <input type="email" placeholder='ejemplo@hotmail.com' name='email' className="form-control"/>
    <label for="password">Contraseña</label>
    <input type="password" placeholder='Contraseña' name='password' className='form-control'></input>
    <input type="submit" className="btn btn-success"></input>
 </form>
);
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
