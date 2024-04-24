import React, { useState } from 'react';
import '../css/LoginForm.css'
import TopMenu from '../components/HeaderSmall';
import { isAuthed } from '../utils/auth';
import { Link, Navigate } from 'react-router-dom';
import { getProfile } from '../utils/api';
//  все, что указано под "профилем" идет из базы, но я пока не до конца поняла, как это правильно написать, так что простите, пожалуйста 

function Profile() {
  const [isLogged, setIsLogged] = useState(null);
  const [profile, setProfile] = useState(null);

  isAuthed().then((res) => setIsLogged(res));
  if (isLogged === false) {
    return <Navigate to="/login" replace/>;
  }
  
  if (isLogged && profile === null) {
    setProfile(undefined)
    getProfile().then((res) => {
      setProfile(res);
      console.log(res)
    });
  }
  // localStorage.setItem("token", null)
  return (
    <div>
      <TopMenu/>
      <h1 class='pro'>ПРОФИЛЬ</h1>
      <p class='p1'>{profile?.lastname || "ФАМИЛИЯ"}</p>
      <p class='p2'>{profile?.firstname || "ИМЯ"}</p>
      <p class='p3'>{profile?.patronymic || "ОТЧЕСТВО"}</p>
      <p class='p4'>{profile?.login || "ЛОГИН"}</p>
      <p class='p5'>{profile?.organisation?.title || "ОРГАНИЗАЦИЯ НЕ ОПРЕДЕЛЕНА"}</p>
      <div class='longBox'/>
      <div>
      <Link to='/sent'>
        <button class='button-26'>Отправленные</button>
      </Link>
      <Link to='/received'>
        <button class='button-26'>Полученные</button>
      </Link>
      <Link to='/load'>
        <button class='button-26'>Загрузить</button>
      </Link>
      </div>
    </div>
  );
}

export default Profile;
  