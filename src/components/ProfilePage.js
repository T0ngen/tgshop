
import React, { useState, useEffect } from 'react';
import Spinner from './SpinnerLoader';

import Footer from './Footer';
import Header from './Header'


export default function ProfilePage(){
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const fakeData = [
  { id: 1, tg_id: 1231441, name: 'Legacy.dev', balance: 0},
  
  
];

// Функция для получения данных
const fetchData = async () => {
  try {
    // Искусственная задержка для имитации сетевого запроса
    await new Promise((resolve) => setTimeout(resolve, 500));
    setData(fakeData);
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error);
  } finally {
    setLoading(false);
  }
};

//  // Функция для получения данных
//  const fetchData = async () => {
//    try {
//      const response = await fetch('https://api.example.com/data'); // Путь к вашему API
//      const result = await response.json();
//      setData(result);
//    } catch (error) {
//      console.error('Ошибка при загрузке данных:', error);
//    } finally {
//      setLoading(false);
//    }
//  };

  useEffect(() => {
    fetchData(); // Загружаем данные при монтировании компонента
  }, []);

  return (
    <>
      {loading ? <Spinner /> : <div>
      <Header/>
      
      <Footer active={'active2'}/>
      </div>}
      
    </>
  );
};

