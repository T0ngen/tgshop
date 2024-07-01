import { useState, useEffect } from 'react';
import Spinner from './SpinnerLoader';
import Footer from './Footer';
import Header from './Header';
import Profile from './Profile';

export default function ProfilePage() {
  const [id, setId] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    if (window.Telegram) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      if (tg.initDataUnsafe && tg.initDataUnsafe.user && tg.initDataUnsafe.user.id) {
        setId(tg.initDataUnsafe.user.id);
        console.log('Telegram WebApp initialized:', tg.initDataUnsafe.user.id);
      } else {
        console.log('Telegram WebApp user data is not available.');
        // Использовать заглушку данных, если данные Telegram недоступны
        setId(1328149214);
      }
    } else {
      // Если Telegram WebApp не доступен
      console.log('Telegram WebApp не доступен');
      setId(1328149214);
    }
  }, []);

  // Функция для получения данных
  const fetchData = async (userId) => {
    try {
      console.log(`Fetching data for user ID: ${userId}`);
      const response = await fetch(`https://codelounge.ru/user/${userId}`); // Путь к вашему API
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log('Data fetched:', result);
      setData(result);
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    } finally {
      await new Promise((resolve) => setTimeout(resolve, 300));
      setLoading(false);
      console.log('Loading finished');
    }
  };

  useEffect(() => {
    if (id !== 0) { // Загружаем данные только если id установлен
      fetchData(id);
    }
  }, [id]);

  return (
    <>
      {loading ? <Spinner /> : 
      <div>
        <Header />
        <Profile data={data} />
        <Footer active={'active2'} />
      </div>}
    </>
  );
};