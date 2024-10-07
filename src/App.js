
import adatlista from './components/adat';
import './App.css';
import Jatekmezo from './components/Jatekmezo';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Amőba</h1>
        <article>
        <Jatekmezo lista={adatlista}/>
       </article>
      </header>
    
       <footer>Pádi-Mladoneczki Vivien</footer>
    </div>
  );
}

export default App;
