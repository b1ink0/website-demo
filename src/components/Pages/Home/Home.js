import React from 'react'
import './Home.css'
import Logo from './logo/Logo'
function Home() {
    return(
        <div className='homeMain'>
            <div className='home1'>
                <h1 className='homeH1'>Hello,</h1>
                <p className='homeP'>I am Gaming YouTuber<span style={{color:'red', fontSize: '40px'}}>.</span></p>
                <Logo/>
                <span className='homeHover'/>
            </div>
            <div className='videoSection'>
                <div className='iframeMain'>
                <span className='iframeHover'></span>
                <iframe className='iframe iframe1' width="350" height="197" src="hhttps://www.youtube.com/embed/ffK7mz2SXeE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                
                <iframe className='iframe iframe2' width="350" height="197" src="hhttps://www.youtube.com/embed/ffK7mz2SXeE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className='iframe iframe3' width="350" height="197" src="hhttps://www.youtube.com/embed/ffK7mz2SXeE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className='iframe iframe4' width="350" height="197" src="hhttps://www.youtube.com/embed/ffK7mz2SXeE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className='iframe iframe5' width="350" height="197" src="hhttps://www.youtube.com/embed/ffK7mz2SXeE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className='iframe iframe6' width="350" height="197" src="hhttps://www.youtube.com/embed/ffK7mz2SXeE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

document.addEventListener('DOMContentLoaded', function(){
    const hello = document.querySelector('.homeH1');
    const txt = ' I am Aditya !';
    let i = 0;
    function write() {
        if ( i < txt.length ) {
            hello.innerHTML += txt.charAt(i);
            i++;
            setTimeout( write, 200);
        }
    }
    write()
    const home1 = document.querySelector('.home1');
    const homeHover = document.querySelector('.homeHover')
    const iframeHover = document.querySelector('.iframe1')
    home1.addEventListener('mouseover', function(){
        console.log('add')
        homeHover.classList.add('homeHover1')
    })
    home1.addEventListener('mouseout', function(){
        homeHover.classList.remove('homeHover1')
        console.log('remove')
    })
});

export default Home