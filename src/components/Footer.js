import React from 'react';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonIcon from '@mui/icons-material/Person';
import {useNavigate } from 'react-router-dom';

export default function Footer({active}){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/profile');
    };
    const handleClickHome = () => {
        navigate('/');
    };
    return(
        <>
            
            <div className="footer-block">
               
                <div className='row'>
                    <div   className='col-6 col-footer'>
                        <div onClick={handleClickHome}  className='footer-button'>
                            <LocalMallIcon className={('footer-icon', { 'active': active === 'active' })}  fontSize="large"/>
                            <p className={active === 'active' ? 'footer-text-active' : 'footer-text'}>Каталог</p>
                        </div>
                    </div>
                    <div onClick={handleClick} className='col-6 col-footer'>
                    <div  className='footer-button'>
                        <PersonIcon className={('footer-icon', { 'active': active === 'active2' })} fontSize="large"/>
                        <p className={active === 'active2' ? 'footer-text-active' : 'footer-text'}>Профиль</p>
                    </div>
                    </div>
                </div>

            </div>
           
        </>
    )
}
