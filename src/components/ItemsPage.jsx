import React from 'react';
import { useParams } from 'react-router-dom';
export default function ItemsPage(){
    const { id } = useParams();
    
    return(
        <>  
        <h1>{id}</h1>
        </>
    )
}

