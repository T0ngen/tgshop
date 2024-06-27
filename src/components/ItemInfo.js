import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import { useNavigate } from 'react-router-dom';
export default function ItemInfo({item}){
    // const navigate = useNavigate();

    // const handleClick = (id) => {
        
    //     navigate(`/items/${id}`);
    // };
    return(
        <>
        <div className='item-container'>
            <div className='row item-container2'>
            <div className='col-6 item-text'>
                
                <h3>{item.name}</h3>
           
            </div>
            <hr className="vertical-divider" />
            <div className='col-3 '>
            <p className='item-price'>{item.price} ₽</p>
            </div>
            <hr className="vertical-divider" />
            <div className='col-3 '>
                <p className='item-count'>{item.count} шт</p>
            </div>
            </div>
            <div className='buy-save-container'>
            <div className='buy-button'>
                <ShoppingCartIcon/>
                <h3 className='Text-buy-button'>Купить</h3>
            </div>
            <div className='buy-button'>
            <FavoriteIcon/>
                <h3 className='Text-buy-button'>В избранное</h3>
            </div>
            </div>
        </div>
        
        </>
    )
}
