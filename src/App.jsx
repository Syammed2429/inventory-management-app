import logo from './logo.svg';
import './App.css';
import { DashBoard } from './component/Shop/DashBoard/DashBoard';

function App() {
  return (
    <div className="App">
      <h1 className="text-warning">Inventory Management App</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <DashBoard />


    </div>
  );
}

export default App;
