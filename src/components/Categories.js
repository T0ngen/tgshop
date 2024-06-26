import React from 'react';
import CategoriesInfo from './CategoryInfo';
export default function Categories({data}){
    
    return(
        <> 
        <h2 className='categories-name'>Категории</h2>
        <div className='row categories'>
            {data.map(el =>(
                <CategoriesInfo key={el.id} item={el}/>
            ))}
        </div>
        </>
    )
}

