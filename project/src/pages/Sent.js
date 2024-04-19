import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Table from "../components/Table";
import SearchBar from "../components/SearchBar";

function Sent() {
  return (
    <div>
       <Header />
       <div  style={{ margin: '30px auto', display: 'flex', justifyContent: 'center' }}>
        <SearchBar/>
       </div>
       <div style={{ margin: '70px auto', display: 'flex', justifyContent: 'center' }}>
        <Table />
       </div>
    </div>
  );
}

export default Sent;
