import React from 'react';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonIcon from '@mui/icons-material/Person';


export default function Footer({active}){
    
    return(
        <>
            <div className="footer-block">
                <div className='row'>
                    <div className='col-6 col-footer'>
                        <div  className='footer-button'>
                            <LocalMallIcon className={('footer-icon', { 'active': active === 'active' })}  fontSize="large"/>
                            <p className={active === 'active' ? 'footer-text-active' : 'footer-text'}>Каталог</p>
                        </div>
                    </div>
                    <div className='col-6 col-footer'>
                    <div className='footer-button'>
                        <PersonIcon fontSize="large"/>
                        <p className='footer-text'>Профиль</p>
                    </div>
                    </div>
                </div>

            </div>
           
        </>
    )
}
