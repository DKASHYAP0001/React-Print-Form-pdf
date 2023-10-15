import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './components/pages/Form';
import Table from './components/pages/table';


function App() {
  
  return (
    <>
      <BrowserRouter> 
        <Routes>
            <Route exact path="/" element={<Form />} />
            <Route exact path="/table" element={<Table/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
