import './App.css';
import 'boxicons';
import 'bootstrap/dist/css/bootstrap.css';
import { Home } from './pages/Home';
import {Routes,Route} from "react-router-dom"
import { NotFound } from './pages/NotFound';
import { Main } from './pages/Main';
import { New } from './pages/New';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/secret/main' element={<Main/>}/>
      <Route path='/secret/new' element={<New/>}/>
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
