import React from 'react';
// import { useNavigate } from 'react-router-dom';
export default function ItemInfo({item}){
    // const navigate = useNavigate();

    // const handleClick = (id) => {
        
    //     navigate(`/items/${id}`);
    // };
    return(
        <>
        <div className='row item-container'>
            <div className='col-6 item-text'>
                
                <h3>{item.name}</h3>
           
            </div>
            <div className='col-3 '>
            <p>{item.price} ₽</p>
            </div>
            <div className='col-3 '>
                <p>{item.count} шт</p>
            </div>
        </div>
           
        </>
    )
}
