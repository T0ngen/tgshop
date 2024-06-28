
import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Drawer, Button, Typography, Box, Slider, IconButton, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';

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

  const totalPrice = (item.price * quantity).toFixed(2);


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
            height: '90%',
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
            
            alignItems: 'center',
            backgroundColor: '#2A2B30',
          }}
        >
        
      <Box
            sx={{
              marginTop: '56px',
              width: '100%',
              maxWidth: '90%', // Ограничение по ширине контейнера
              overflow: 'hidden', // Обрезка содержимого контейнера, если оно превышает размер
              textOverflow: 'ellipsis',
              wordWrap: 'break-word',
              wordBreak: 'break-word',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '5px',
              boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)'
              
              
            }}
          >
            <Typography
              variant='h7'
              sx={{ 
                color: 'white',
                wordWrap: 'break-word',
                whiteSpace: 'normal',
                textAlign: 'center', // Это опционально и зависит от вашего желаемого выравнивания текста

                width: '100%',       // Задать ширину элемента, чтобы текст знал рамки, в которых он может переноситься
              }}
            >
              {item.name}

            </Typography>
              <hr className='linear-category'/>
            <Typography  sx={{ mt: 2, color: 'white', fontSize:'11px' }}>
              {item.description}
            </Typography>
          </Box>


          <IconButton
            sx={{ position: 'absolute', top: 16, right: 16, color: 'white' }}
            onClick={toggleDrawer(false)}
          >
            <CloseIcon />
          </IconButton>


          {/* Слайдер для выбора количества товара и кнопки + / - */}
          <Typography variant='body1' sx={{ mt: 4, color:'grey' }}>
            Выберите количество:
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '80%', mt: 2 }}>
            <IconButton onClick={decrementQuantity} disabled={quantity <= 1}>
              <RemoveIcon sx={{ color: 'white' }} />
            </IconButton>
            <Slider
              value={quantity}
              min={1}
              max={item.count}
              step={1}
              onChange={handleQuantityChange}
              
              valueLabelDisplay="auto"
              sx={{
    flexGrow: 1,
    mx: 2,
    color: 'white', // Это может установить базовый цвет
    '& .MuiSlider-thumb': {
      backgroundColor: 'white',
      '&:hover, &.Mui-focusVisible': {
        boxShadow: 'none',
      },
      '&.Mui-active': {
        boxShadow: 'none',
      },
    },
    '& .MuiSlider-track': {
      backgroundColor: 'white',
    },
    '& .MuiSlider-rail': {
      backgroundColor: 'rgba(255, 255, 255, 0.5)', // Например, слегка сероватый, чтобы было видно
    },
    '& .MuiSlider-markLabel': {
      color: 'white',
    },
    '& .MuiSlider-valueLabel': {
      backgroundColor: 'white',
      color: 'black', // Цвет текста внутри данного лейбла
    },
  }}

            />
            <IconButton onClick={incrementQuantity} disabled={quantity >= item.count}>
            <AddIcon sx={{ color: 'white' }} />
            </IconButton>
          </Box>
          <Typography variant='h6' sx={{ mt: 2, color: 'white' }}>
            Цена {item.price} RUB
          </Typography>
          <Typography variant='h6' sx={{ mt: 2, color: 'white' }}>
            Количество X {quantity}
          </Typography>
          <Typography variant='h6' sx={{ mt: 2, color: 'white' }}>
            Итого {totalPrice} RUB
          </Typography>



          
          
        </Box>
        <Box sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: '#2A2B30',
          py: 1,
          px: 2
        }}>
         <div className='buy-button2' onClick={toggleDrawer(false)}>
            <ShoppingCartIcon />
            <h3 className='Text-buy-button'>Оформить товар</h3>
          </div>
        </Box>

      </Drawer>
    </>
  );
}
