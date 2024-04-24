import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TopMenu from "../components/HeaderAdmin";
import UserForm from "../components/UserForm";

//там в таблице уберите studyPlan это я из практики брала

function AllPerson() {
  return (
    <div>
        <TopMenu/>
        <thead>
            <tr>
                <th>Фамилия</th>
                <th>Имя</th>
                <th>Отчество</th>
                <th>Организация</th>
                <th>Логин</th>
                <th>Пароль</th>
            </tr>
            </thead>
            <tbody>
            <tr> 
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <form method="post">
                        <button type ="submit" class="button-17" role="button">Удалить</button>
                    </form>
                </td>
            </tr>
            </tbody>
    </div>
  );
}

export default AllPerson;
