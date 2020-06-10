import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/dance-wear-logo.svg'
import './Header.style.scss';

const Header = () =>(
    <div className='header'>
    <Link className='logo-container' to='/'>
    <Logo className='logo'></Logo>
    </Link>
    <div className='options'>
    <Link className='option' to='/shop'>SHOP</Link>
    <Link className='option' to='/shop'>CONTANT</Link>
    </div>
    </div>
)
export default Header;