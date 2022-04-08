import React,{Fragment} from 'react';
import classes from './Header.module.css';
import mealsImage from '../../pics/food_app.jpg';
import HeaderCartIcon from './HeaderCartIcon';

const Header = () => {
    return (
       <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartIcon />
            </header>
            <div className={classes['main-image']}>
            <img  src={mealsImage} alt="Food-bg"></img>
            </div>
            
       </Fragment> 
    
        
    )
};

export default Header;