import React, { Component } from 'react';
import './Navbar.css';
import { Menu } from './Menu';
import X from './img/x.svg'
import E from './img/e.svg'
import XA from './img/xa.svg'
import EA from './img/ea.svg'

class Navbar extends Component {
    state = { clicked: false, clicked: false, svg: E }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
        console.log(this.state.clicked)
        if (this.state.clicked){
            this.setState({ svg: XA})
        }else {
           
            this.setState({ svg: EA })
        }
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
                    <div className='burger'>
                        <img onClick={this.handleClick} className='burger-img' src={this.state.svg}></img>
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