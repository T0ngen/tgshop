import React from 'react';
import { useNavigate } from 'react-router-dom';
import ItemInfo from './ItemInfo'
export default function Items({data, name}){
    console.log('items')
    console.log(data)
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/');
    };

    

    return(
        <> 
        <h2 className='categories-name'>{name}</h2>
        <div onClick={handleClick} className='button-back'>Вернуться к выбору категории</div>
        <div className='items-container'>
        {data.map(el =>(
                <ItemInfo key={el.id} item={el}/>
            ))}
        </div>
        </>
    )
}
