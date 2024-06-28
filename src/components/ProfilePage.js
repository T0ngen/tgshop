
import React, { useState, useEffect } from 'react';
import Spinner from './SpinnerLoader';

import Footer from './Footer';
import Header from './Header'
import Profile from './Profile'


export default function ProfilePage(){
  let id = 1328149214;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const fakeData = {
   id: 1, tg_id: 1231441, name: 'Legacy.dev', balance: 0, buys: 0
  
  
  };



 // Функция для получения данных
 const fetchData = async () => {
   try {
     const response = await fetch(`http://localhost:8000/user/${id}`); // Путь к вашему API
     const result = await response.json();
     setData(result);
   } catch (error) {
     console.error('Ошибка при загрузке данных:', error);
   } finally {
     await new Promise((resolve) => setTimeout(resolve, 300));
     setLoading(false);
   }
 };

  useEffect(() => {
    fetchData(); // Загружаем данные при монтировании компонента
  }, []);

  return (
    <>
      {loading ? <Spinner /> : <div>
      <Header/>
      <Profile data={data}/>
      <Footer active={'active2'}/>
      </div>}
      
    </>
  );
};

