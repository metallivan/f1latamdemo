    import React, { useState } from "react";

    
    const Burger = ({ onClickBurger }) => {

        const [ openBurger,  setOpenBurger ] = useState('');
        
        const transformBurger = () => {
            !openBurger ? setOpenBurger(true) : setOpenBurger(false);
            onClickBurger();
        }


        return (
            <div className={`menu-btn${openBurger ? ' open' : ''}`} onClick={ () => transformBurger() }>
                <div className="menu-btn__burger"></div>
            </div>
        );

    };

    export default Burger;
    

