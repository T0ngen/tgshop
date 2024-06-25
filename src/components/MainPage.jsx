import React, { useState, useEffect } from 'react';
import Spinner from './SpinnerLoader';
import Categories from './Categories';
import Footer from './Footer';
import Header from './Header'


const MainPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const fakeData = [
  { id: 1, name: 'Email', img: 'email.jpeg', description: 'Лучшие email'},
  { id: 2, name: 'Vpn', img: 'vpn.png', description: 'Лучшие VPN' },
  { id: 3, name: 'Скрипты', img: 'scripts.png', description: 'Лучшие скрипты' },
  { id: 4, name: 'Прокси', img: 'proxy.png', description: 'Лучшие прокси' },
  
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
      <Categories data={(data)}/>
      <Footer active={'active'}/>
      </div>}
      
    </>
  );
};

export default MainPage;