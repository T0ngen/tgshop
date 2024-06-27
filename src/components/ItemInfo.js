
import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Drawer, Button, Typography, Box, Slider, IconButton, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function ItemInfo({ item }) {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const handleQuantityChange = (event, newValue) => {
    setQuantity(newValue);
  };

  const incrementQuantity = () => {
    setQuantity((prev) => Math.min(prev + 1, item.count));
  };

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  return (
    <>
      <div className='item-container'>
        <div className='row item-container2'>
          <div className='col-6 item-text'>
            <h3>{item.name}</h3>
          </div>
          <hr className="vertical-divider" />
          <div className='col-3 '>
            <p className='item-price'>{item.price} ₽</p>
          </div>
          <hr className="vertical-divider" />
          <div className='col-3 '>
            <p className='item-count'>{item.count} шт</p>
          </div>
        </div>
        <div className='buy-save-container'>
          <div className='buy-button' onClick={toggleDrawer(true)}>
            <ShoppingCartIcon />
            <h3 className='Text-buy-button'>Купить</h3>
          </div>
          <div className='buy-button'>
            <FavoriteIcon />
            <h3 className='Text-buy-button'>В избранное</h3>
          </div>
        </div>
      </div>

      <Drawer
        anchor='bottom'
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            height: '75%',
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
            boxShadow: '0 -4px 16px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        <Box
          sx={{
            p: 2,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#2A2B30',
          }}
        >
          <Typography variant='h4'>Подробное описание товара</Typography>
          <Typography variant='body1' sx={{ mt: 2 }}>
            {item.description}
          </Typography>

          {/* Слайдер для выбора количества товара и кнопки + / - */}
          <Typography variant='body1' sx={{ mt: 4 }}>
            Выберите количество:
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '80%', mt: 2 }}>
            <IconButton onClick={decrementQuantity} disabled={quantity <= 1}>
              <RemoveIcon />
            </IconButton>
            <Slider
              value={quantity}
              min={1}
              max={item.count}
              step={1}
              onChange={handleQuantityChange}
              valueLabelDisplay="auto"
              sx={{ flexGrow: 1, mx: 2 }}
            />
            <IconButton onClick={incrementQuantity} disabled={quantity >= item.count}>
              <AddIcon />
            </IconButton>
          </Box>
          <Typography variant='body1' sx={{ mt: 2 }}>
            Выбранное количество: {quantity}
          </Typography>

          <Button variant='contained' color='primary' sx={{ mt: 4 }} onClick={toggleDrawer(false)}>
            Закрыть
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
