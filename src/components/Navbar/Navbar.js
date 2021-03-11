import React, { Component } from 'react';
import './Navbar.css';
import { Menu } from './Menu';
import Burger from './Icons/Burger';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render(){
        return(
            <div>
                <nav>
                    <div className='menu-logo'>
                        <div className='c'></div>
                        <div className='d'></div>
                        <h1>Stup!d Gaming </h1>
                    </div>
                    <div className='burger' onClick={this.handleClick}>
                        <Burger/>
                    </div>
                    <div className={this.state.clicked ? 'menu active' : 'menu'}>
                        <ul>
                            {
                                Menu.map((items, index)=>{
                                    return( 
                                        <div key={index} className='contain-1' id='contain-1'>
                                            <div className='a'></div>
                                            <div className='b'></div>
                                            <li key={index} className={items.cName}>{items.title}</li>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
};
export default Navbar;