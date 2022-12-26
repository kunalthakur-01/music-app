import './App.css';

import Home from './components/homepage/Home'; 
import Dashboard from './Dashboard';

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  console.log(code)
  return (
    <>
      {!code && <Dashboard />}
      {code && <Home code={code}/>}
    </>
  );
}

export default App;
