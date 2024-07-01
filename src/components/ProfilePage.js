import { useState, useEffect } from 'react';
import Spinner from './SpinnerLoader';
import Footer from './Footer';
import Header from './Header';
import Profile from './Profile';

export default function ProfilePage() {
  const [id, setId] = useState(1328149214);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (window.Telegram) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      console.log("Telegram WebApp доступен");

      if (tg.initDataUnsafe) {
        console.log("initDataUnsafe доступен", tg.initDataUnsafe);
      }

      if (tg.initDataUnsafe && tg.initDataUnsafe.user && tg.initDataUnsafe.user.id) {
        setId(tg.initDataUnsafe.user.id);
        console.log("Установлен id из initDataUnsafe: ", tg.initDataUnsafe.user.id);
      } else {
        setId(1328149214);
        console.log("Установлен default id: 1328149214");
      }
    } else {
      setId(1328149214);
      console.log("Telegram WebApp недоступен, установлен default id: 1328149214");
    }
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://codelounge.ru/user/${id}`); // Путь к вашему API
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
  }, [id]);

  console.log("Текущее значение id:", id);
  console.log(data);

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