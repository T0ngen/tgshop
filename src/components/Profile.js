import React from 'react';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DehazeIcon from '@mui/icons-material/Dehaze';
import PaymentIcon from '@mui/icons-material/Payment';
import InfoIcon from '@mui/icons-material/Info';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
export default function Profile({data}){
    const GetButtonTopUp = async () => {
        try {
          const response = await fetch(`https://codelounge.ru/topupbalance/${data.tg_id}`); // Путь к вашему API
          console.log(response);
          // const result = await response.json();
          // setData(result); // Если нужно обновить состояние с данными
          console.log('Запрос успешно отправлен');
        } catch (error) {
          console.error('Ошибка при загрузке данных:', error);
        } finally {
          // await new Promise((resolve) => setTimeout(resolve, 300));
          // setLoading(false);
          console.log('Загрузка завершена');
        }
      };
    
    return(
        <> 
        <h2 className='categories-name'>Профиль</h2>
        <div className='profile-conteiner'>
            <div className='profile'>
            <div className='profile-userinfo2'>
                <h4 className='username'>{data.name}</h4>
                <p className='telegram-id'><b>ID:</b> {data.tg_id}</p>
            </div>
            <div className='profile-userinfo2 row-balance'>
                <AccountBalanceWalletIcon color='action' fontSize="large"/>
                <div>
                <div className='balance-container'>
                <h4 className='balance-text'>Баланс</h4>
                <p className='balance-count'>{data.balance} ₽</p>
                </div>
                </div>
            </div>
            
            </div>
            <div onClick={GetButtonTopUp} className='TopUp'>
                <PaymentIcon className='orders-icon' fontSize="large"/>
                <p className='orders-text2'>Пополнить баланс</p>
              
            </div>
            <div className='Orders'>
               <div className='orders-left'>
                <DehazeIcon className='orders-icon' fontSize="large"/>
                <p className='orders-text'>Покупки</p>
               </div>
               <div className='orders-right'>
               <p className='orders-text'>{data.buys}</p>
               </div>
            </div>
            <div className='TopUp'>
                <SupportAgentIcon className='orders-icon' fontSize="large"/>
                <p className='orders-text2'>Поддержка</p>
              
            </div>
            <div className='TopUp'>
                <InfoIcon className='orders-icon' fontSize="large"/>
                <p className='orders-text2'>Информация</p>
              
            </div>
            
        </div>
        </>
    )
}

