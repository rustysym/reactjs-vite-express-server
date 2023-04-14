import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [backendData, setBackendData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("/products");
      setBackendData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {typeof backendData.products === "undefined" ? (
        <p>Loading</p>
      ) : (
        backendData.products.map((products, i) => (
          <div key={i}>
            <p>{products.title}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
