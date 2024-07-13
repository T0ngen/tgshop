import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';


import { Drawer, Button, Typography, Box, Slider, IconButton, Grid } from '@mui/material';

const SecondDrawer = ({ open, onClose }) => {
    return (
        <Drawer open={open} onClose={onClose}>
            <div className='second-drawer-content'>
                {/* Содержимое второго drawer */}
               {console.log("SecondDrawer")}
            </div>
        </Drawer>
    );
};

export default SecondDrawer;
