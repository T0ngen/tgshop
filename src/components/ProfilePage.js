import { useState, useEffect } from 'react';
import Spinner from './SpinnerLoader';
import Footer from './Footer';
import Header from './Header';
import Profile from './Profile';

export default function ProfilePage() {
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    if (window.Telegram){
      const tg = window.Telegram.WebApp;
      tg.ready();
      setId(tg.initDataUnsafe.user.id);
    }else{
      setId(1328149214);
    }
    // const fetchUserId = () => {
    //   if (window.Telegram) {
    //     const tg = window.Telegram.WebApp;
    //     tg.ready();
    //     console.log("Telegram WebApp доступен");

    //     if (tg.initDataUnsafe && tg.initDataUnsafe.user && tg.initDataUnsafe.user.id) {
    //       setId(tg.initDataUnsafe.user.id);
    //       console.log("Установлен id из initDataUnsafe: ", tg.initDataUnsafe.user.id);
    //     } else {
    //       console.log("Не удалось получить id пользователя из initDataUnsafe.");
    //       setId(1328149214);
    //     }
    //   } else {
    //     console.log("Telegram WebApp недоступен.");
    //     setId(1328149214);
    //   }
    // };

    // fetchUserId();
  }, []); // Выполняется только один раз при монтировании

  useEffect(() => {
    const fetchData = async (userId) => {
      try {
        const response = await fetch(`https://codelounge.ru/user/${userId}`); // Путь к вашему API
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      } finally {
        await new Promise((resolve) => setTimeout(resolve, 300));
        setLoading(false);
      }
    };

    if (id !== null) {
      fetchData(id); // Загружаем данные только если id уже установлен
    }
  }, [id]); // Выполняется только при изменении id

  console.log("Текущее значение id:", id);
  console.log("Данные:", data);

  return (
    <>
      {loading ? <Spinner /> : <div>
        <Header />
        <Profile data={data} />
        <Footer active={'active2'} />
      </div>}
    </>
  );
};