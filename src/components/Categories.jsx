import React from 'react';
import CategoriesInfo from './CategoryInfo';
export default function Categories({data}){
    
    return(
        <>  
        <div className='row categories'>
            {data.map(el =>(
                <CategoriesInfo key={el.id} item={el}/>
            ))}
        </div>
        </>
    )
}

