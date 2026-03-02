import React from 'react';
import './navbar.css';
import logo from '../Logo.svg';
import { useState } from 'react';
import {BsCart2} from 'react-icons/bs';
import {HiOutlineBars3} from 'react-icons/hi2';
import{Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CommontRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundIcon from '@mui/icons-material/ShoppingCartRounded';
import List from '@mui/material/List';


const Navbar = () => {
     
    const [open, setOpen] = useState(false);
    const menuOptions = [
        {text: 'Home', icon: <HomeIcon />},
        {text: 'About', icon: <InfoIcon />},
        {text: 'Contact', icon: <PhoneRoundedIcon />},
        {text: 'Reviews', icon: <CommontRoundedIcon />},
        {text: 'Cart', icon: <ShoppingCartRoundIcon />}
    ];

  return (
    <div className="nav-container">
        <div className="nav-logo-container">
            <img src={logo} alt="" />
        </div>

        <div className="nav-links-container">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Reviews</a>
            <a href=""><BsCart2 className="nav-cart-icon" /></a>
            <button className="primary-button">Order Now</button>
        </div>

        <div className="nav-menu-container">
            <HiOutlineBars3 onClick={() => setOpen(true)} />
        </div>

        <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
            <Box sx={{width: 250}} role="presentation" onClick={() => setOpen(false)} onKeyDown={() => setOpen(false)}>

                <List>
                    {menuOptions.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

            </Box>

        </Drawer>

    </div>
  );
}

export default Navbar;