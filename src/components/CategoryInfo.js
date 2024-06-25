import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function CategoriesInfo({item}){
    const navigate = useNavigate();

    const handleClick = (id) => {
        
        navigate(`/items/${id}`);
    };
    return(
        <>
        <div onClick={()=>handleClick(item.id)} className='col-6 category-container'>
        <img className='img-category' src={"./img/"+item.img}/>
        <h3 className='category-name'>{item.name}</h3>
        <hr className='linear-category'/>
        <p className='category-description'>{item.description}</p>
        
        </div>  
           
        </>
    )
}
