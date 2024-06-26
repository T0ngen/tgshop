import React from 'react';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DehazeIcon from '@mui/icons-material/Dehaze';
export default function Profile({data}){
    console.log(data)
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
                <AccountBalanceWalletIcon fontSize="large"/>
                <div>
                <div className='balance-container'>
                <h4 className='balance-text'>Баланс</h4>
                <p className='balance-count'>{data.balance} ₽</p>
                </div>
                </div>
            </div>
            
            </div>
            <div className='Orders'>
               <div className='orders-left'>
                <DehazeIcon className='orders-icon' fontSize="large"/>
                <p className='orders-text'>Заказы</p>
               </div>
               <div className='orders-right'>
               <p className='orders-text'>{data.buys}</p>
               </div>
            </div>
        </div>
        </>
    )
}

