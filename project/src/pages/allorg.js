import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TopMenu from "../components/HeaderAdmin";
import '../css/LoginForm.css'
import SearchBar from "../components/SearchBar";

function AllOrg() {
  return (
    <div>
        <TopMenu/>      
         <div  style={{ margin: '30px auto', display: 'flex', justifyContent: 'center' }}>
        <SearchBar/>
       </div>
        <table>
            <thead>
            <tr>
                <th>Наименование организации</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>ФИО сотрудника</td>
                <td>логин</td>
                <td>
                    <form>
                        <button type ="submit" class="button-36" role="button">Удалить</button>
                    </form>
                </td>
            </tr>
            <tr>
                <td>ФИО сотрудника</td>
                <td>логин</td>
                <td>
                    <form>
                        <button type ="submit" class="button-36" role="button">Удалить</button>
                    </form>
                </td>
            </tr>
            </tbody>
        </table>
        <table>
            <thead>
            <tr>
                <th>Наименование организации</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>ФИО сотрудника</td>
                <td>логин</td>
                <td>
                    <form>
                        <button type ="submit" class="button-36" role="button">Удалить</button>
                    </form>
                </td>
            </tr>
            <tr>
                <td>ФИО сотрудника</td>
                <td>логин</td>
                <td>
                    <form>
                        <button type ="submit" class="button-36" role="button">Удалить</button>
                    </form>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
  );
}

export default AllOrg;
