import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from '../../../context/cartContext';



const StyledBadge = styled(Badge)(({ theme }) => ({

  '& .MuiBadge-badge': {
    right: 4,
    top: 1,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export const CustomizedBadges =() => {

  const {totalQuantity} = useCartContext()

  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={totalQuantity()} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
