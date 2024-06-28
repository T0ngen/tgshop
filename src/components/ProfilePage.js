
import React, { useState, useEffect } from 'react';
import Spinner from './SpinnerLoader';

import Footer from './Footer';
import Header from './Header'
import Profile from './Profile'


export default function ProfilePage(){
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const fakeData = {
   id: 1, tg_id: 1231441, name: 'Legacy.dev', balance: 0, buys: 0
  
  
  };



 // Функция для получения данных
 const fetchData = async () => {
   try {
     const response = await fetch('http://89.23.98.183:8000/user/1231441'); // Путь к вашему API
     const result = await response.json();
     console.log(result);
     setData(result);
   } catch (error) {
     console.error('Ошибка при загрузке данных:', error);
   } finally {
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

