   // Spinner.js
   import React from 'react';
   import { Grid } from 'react-loader-spinner';

   const Spinner = () => (
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection:'column' }}>
       <Grid 
         height="110" 
         width="110" 
         color='blue' 
         ariaLabel='loading'
       />
       <br/>
       <span className='loading-menu'>Пожалуйста, подождите...</span>
     </div>
   );

   export default Spinner;
   