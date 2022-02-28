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
   <h1>Encuesta a egresados</h1>
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
    <label for="Nombre">Nombre:</label>
    <input type="text" placeholder='Nombre' name='name' value={name} onChange={(e=>setName(e.target.value))} className="form-control" />
    <label for="Correo Electrónico">Correo Electrónico:</label>
    <input type="email" placeholder='ejemplo@hotmail.com' name='email' className="form-control"/>
    <label for="telefono">Teléfono:</label>
    <input type="tel" placeholder='Teléfono' name='tel' className="form-control"/>
    <label for="fecha">Fecha de egreso:</label>
    <input type="date" placeholder='Fecha' name='date' className="form-control"></input>
    <label for="sabinas">¿Vives actualmente en Sabinas?</label>
    <div className='radios'>
    <input type="radio" value="Si" name='sabinas' class="form-check-input position-static" ></input>
    <label>Si</label>
    <input type="radio" value="No" name='sabinas' class="form-check-input position-static" ></input>
    <label>No</label><br/>
    </div>
  <label>Carrera:</label>
   <Select options={options} value={selectItem} onChange={handleChangeSelect}  ></Select>
   <input type="submit" className="btn btn-success"></input>
  </form>



);
 }


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
