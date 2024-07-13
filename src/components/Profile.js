
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DehazeIcon from '@mui/icons-material/Dehaze';
import PaymentIcon from '@mui/icons-material/Payment';
import InfoIcon from '@mui/icons-material/Info';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LaunchIcon from '@mui/icons-material/Launch';
import React, { useState, useEffect,  useCallback  } from 'react';

import { Drawer, Typography, Box, IconButton } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

export default function Profile({data}){
    const [open, setOpen] = useState(false);
    const [buys, setData] = useState(null);
    const toggleDrawer = (state) => () => {
        setOpen(state);
      };
    


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
        if (window.Telegram && window.Telegram.WebApp) {
            const tg = window.Telegram.WebApp;
            tg.close();
          }
    
      };

      const fetchData = useCallback(async () => {
        try {
          const response = await fetch(`https://codelounge.ru/buys/${data?.tg_id}`); // Использование опциональной цепочки, чтобы избежать ошибок, если data еще не определена
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error('Ошибка при загрузке данных:', error);
        }
      }, [data?.tg_id]); // Добавляем зависимость на tg_id
    
      useEffect(() => {
        fetchData(); // Загружаем данные при монтировании компонента
      }, [fetchData]); // Добавляем fetchData в массив зависимостей
    
    
    

      console.log(buys);
      if (buys === null) {
        return <div className='spinner-buys'>Loading...</div>; // или ваш компонент загрузки
      }
      
    
    
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
            <div className='Orders' onClick={toggleDrawer(true)}>
               <div className='orders-left'>
                <DehazeIcon className='orders-icon' fontSize="large" />
                <p className='orders-text'>Покупки</p>
               </div>
               <div className='orders-right'>
               <p className='orders-text'>{data.buys}</p>
               </div>
            </div>
            
            <a href="https://t.me/scdb22" className='Orders'>
               <div className='orders-left'>
                <SupportAgentIcon color='action' className='orders-icon' fontSize="large"/>
               
                <p className='orders-text'>Поддержка</p>
          

               </div>
               <div className='orders-right'>
               <LaunchIcon  sx={{color:'white'}}></LaunchIcon>
               </div>
               </a>
            

            <div className='TopUp'>
                <InfoIcon className='orders-icon' fontSize="large"/>
                <p className='orders-text2'>Информация</p>
              
            </div>
            
        </div>
        
      <Drawer
        anchor='bottom'
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            height: 'auto',
            minHeight:'100%',
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
            boxShadow: '0 -4px 16px rgba(0, 0, 0, 0.2)',
            backgroundColor: '#2A2B30',
            
          },
        }}
      >
         <Box
        
        sx={{
          p: 2,
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          
        //   alignItems: 'center',
          backgroundColor: '#2A2B30',
        }}
      > 
        <Box
            sx={{
              marginTop: '56px',
              width: '100%',
              maxWidth: '90%', // Ограничение по ширине контейнера
             
              textOverflow: 'ellipsis',
              wordWrap: 'break-word',
              wordBreak: 'break-word',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              padding: '5px',
              position:'relative'
              
              
              
              
              
            }}
          >
            <Typography
              variant='h5'
              sx={{ 
                color: 'white',
                // wordWrap: 'break-word',
                // whiteSpace: 'normal',
                // textAlign: 'center', // Это опционально и зависит от вашего желаемого выравнивания текста
                
                width: '100%',       // Задать ширину элемента, чтобы текст знал рамки, в которых он может переноситься
              }}
            >
              Мои покупки
            </Typography>
            
          </Box>
          <div className=''>
          {buys.map(el => (
        <div className='buys-card' key={el.id}>
          
          <p className='buy-date'>{el[4]}</p>
          <p className='buy-description'>{el[2]}</p>
          <hr className='linear3'></hr>
         
        </div>
      ))}
      
    

        </div>

          <IconButton
            sx={{ position: 'fixed', top: 88, right: 26, color: 'white' }}
            onClick={toggleDrawer(false)}
          >
            <CloseIcon fontSize='large' />
          </IconButton></Box>
     
      </Drawer>
        </>
    )
}

