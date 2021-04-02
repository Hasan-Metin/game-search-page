import React, { useState, useEffect } from "react";
import "./styles/main.scss";
import { Header, SearchBanner, Main, Footer } from "./components";
import { dataList } from "./demoData";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataList);
  }, []);

  return (
    <div className="App">
      <Header />
      <SearchBanner data={dataList} list={(list) => setData(list)} />
      <Main data={data} />
      <Footer />
    </div>
  );
}

export default App;
