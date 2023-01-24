
import './App.css';
import NavBar from './components/NavBar.js';


/*
class => className
<input> => <input/>
`${}` => {}
style = "nombreClase" => style= {{"nombrePropiedad" : "valor"}}
mayor parte de Propiedades => camelCase
*/

function App() {
  const user = "Tota";
  return (
    <div>
      <header>
        <NavBar />
      </header>
      hola!
      <input type="text"/>
    </div>
  );
}

export default App;
