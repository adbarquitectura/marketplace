import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CardFilterSection from './components/CardFilterSection';

function App() {
  return (
    <div className="father-container">
      <NavBar />
      <CardFilterSection />

      <h1>Prueba</h1>
      <p>Probando texto</p>
    </div>
  );
}

export default App;
