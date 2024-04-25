import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TopMenu from "../components/HeaderAdmin";
import '../css/LoginForm.css'
import SearchBar from "../components/SearchBar";
import { isAuthed } from "../utils/auth";
import { Navigate } from "react-router-dom";

function AllOrg() {
  const [isLogged, setIsLogged] = useState(null);

  isAuthed().then((res) => setIsLogged(res));
  if (isLogged === false) {
    return <Navigate to = '/login' replace />;
  }
  if (isLogged === true && !localStorage.getItem('isAdmin')) {
    return <Navigate to = '/' replace />;
  }
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
