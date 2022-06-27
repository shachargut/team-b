import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
// import Main from './components/layout/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
