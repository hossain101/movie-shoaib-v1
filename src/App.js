import logo from "./logo.svg";
import "./App.css";
import api from "./api/axiosConfig";
import { useState, useEffect } from "react";
import Layout from "./component/layout";
import { Routes,Route } from "react-router-dom";
import Home from "./component/home/Home";

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      console.log(response.data);
      setMovies(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <div className="App">
    <Routes>
      <Route path="/" element={<Layout></Layout>} >
        <Route path="/" element={<Home />} />
         </Route>
    </Routes>
  </div>;
}

export default App;
