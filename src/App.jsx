import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CountryDetail from './Components/CountryDetail';
import Layout from './Components/Layout';

function App() {


  return (

    <Router>
      <Routes >
        <Route path="/" element={<Layout />} />
        <Route path="/country/:countryName" element={<CountryDetail />} />
      </Routes >
    </Router>
  );
}

export default App;
