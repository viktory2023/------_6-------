import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TopMenu from "../components/HeaderAdmin";
import UserForm from "../components/UserForm";

function NewPerson() {
  return (
    <div>
        <TopMenu/>
        <UserForm/>
    </div>
  );
}

export default NewPerson;
