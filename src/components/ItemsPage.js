import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Spinner from './SpinnerLoader';
import Items from './Items';
import Footer from './Footer';
import Header from './Header';

export default function ItemsPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const fakeData = [
    { id: 1, categoryId: 1, name: "Super-Fast-vpn++dafaaffnajfanfanfnajjfnanалфафофовфоаофалоалфоа", price: 250, description: "Хороший впн", count: 2 },
    { id: 2, categoryId: 1, name: "Hello world", price: 260, description: "Хороший впн", count: 2 },
    { id: 3, categoryId: 1, name: "FastVpn", price: 220, description: "Хороший впн", count: 2 },
    { id: 4, categoryId: 1, name: "AstraBpn", price: 280, description: "Хороший впн", count: 2 },
    { id: 4, categoryId: 2, name: "AstraProxy", price: 280, description: "Хороший прокси", count: 2 },
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

  useEffect(() => {
    fetchData(); // Загружаем данные при монтировании компонента
  }, []);

  const filteredData = data ? data.filter(item => item.categoryId === parseInt(id)) : [];

  return (
    <>
      {loading ? <Spinner /> : 
        <div>
          <Header />
          <Items data={filteredData} />
          <Footer active='active' />
        </div>
      }
    </>
  );
}