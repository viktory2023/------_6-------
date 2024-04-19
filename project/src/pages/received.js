import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Table from "../components/Table";

function Received() {
  return (
    <div>
       <Header />
       <div style={{ margin: '30px auto', display: 'flex', justifyContent: 'center' }}>
        <Table />
       </div>
    </div>
  );
}

export default Received;
