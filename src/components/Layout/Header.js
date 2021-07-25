import React, {useContext} from 'react';
import classes from  './Header.module.css'
import mealImage from '../../assets/meals.jpg'
import HeaderCardButton from './HeaderCardButton'
const Header = props =>{

  
return <React.Fragment>
<header className ={classes.header}>
<h1>
React Meals
</h1>
<HeaderCardButton onClick = {props.onShowCart}/>
</header>
<div className={classes.['main-image']}>
<img  src ={mealImage} alt=" A table full of  delicious food!"/>
</div>
</React.Fragment>
}
export default Header;