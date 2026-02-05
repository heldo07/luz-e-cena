import React from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import Button from '../../Button'

const HeadersActions = () => {
  return (
    <div>
        <Button variant= "icon">
            <HiOutlineShoppingCart/>
        </Button>
        <Button variant= "icon">
            <HiOutlineShoppingCart/>
        </Button>
    </div>
  );
};

export default HeadersActions;