import React,{Fragment} from 'react';
import classes from './Header.module.css';
import mealsImage from '../../pics/food_app.jpg';
import HeaderCartIcon from './HeaderCartIcon';

const Header = (props) => {
    return (
       <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartIcon onClicking={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
            <img  src={mealsImage} alt="Food_app_background"></img>
            </div>
            
       </Fragment> 
    
        
    )
};

export default Header;