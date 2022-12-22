import React from 'react';
import CartIcon from './CartWidget';
import Brand from '../components/Brand';
import Item from 'antd/es/list/Item';
import ItemListContainer from './ItemListContainer';

const styles = {
    header:{
      margin:'0',
      padding:'0',
      boxSizing:'0',
      width: '100%',
      height: '150px',
      backgroundColor: 'red',
      textDecoration: 'none',
      display:'flex',
      justifyContent:'space-between'
    }
  }
const NavBar = (props) => {
    return (
        <header style={styles.header}>
            <div className="containerBrand">
        <Brand />
            </div>

            <nav className="containerItemList"> 
        <ItemListContainer 
        Item1 = "Home"
        Item2 = "Products"
        Item3 = "About Us"
        />
            </nav>

            <div className="containerCart">
            <CartIcon height={40} width={40} fill={props.fill}/>
        </div>

        </header>
    )
}


export default NavBar