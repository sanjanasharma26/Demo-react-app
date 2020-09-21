import React from 'react';
import { NavLink } from 'react-router-dom';


const Menu = () => {
    return (
        <>
            <div className='div_menu'>
                <NavLink className='navbar' exact activeClassName='active-class' to='/'> Home </NavLink>
                <NavLink className='navbar' exact activeClassName='active-class' to='/Table'> Table </NavLink>
                <NavLink className='navbar' exact activeClassName='active-class' to='/Contact'>Contact</NavLink>
                <NavLink className='navbar' exact activeClassName='active-class' to='/Services'>Services</NavLink>
                <NavLink className='navbar' exact activeClassName='active-class' to='/Bmi' >BMI</NavLink>
                <NavLink className='navbar' exact activeClassName='active-class' to='/Card' >Card</NavLink>

                
            </div>
            
        </>
    )
};

export default Menu;