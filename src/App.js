import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CardFilterSection from './components/CardFilterSection';

function App() {
  return (
    <div className="father-container">
      <NavBar />
      <CardFilterSection />
    </div>
  );
}

export default App;
