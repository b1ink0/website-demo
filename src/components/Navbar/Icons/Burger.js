import React from 'react'
import './Burger.css'

function Burger() {
    return (
        <>
        <svg className='SvgM' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="eo1mra99iovn1" viewBox="0 0 879.240000 879.240000" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
		<g id="eo1mra99iovn2">
          <g id="eo1mra99iovn3">
            <g  className="Svg1 " transform="translate(439.619995,75)">
              <g  className="Svg2 " transform="rotate(0)">
                <line id="line1" className="line1" x1="75" y1="75" x2="804.240000" y2="75" transform="translate(-439.619995,-75)" fill="none" stroke="rgb(0,0,0)" strokeWidth="150" strokeLinecap="round" strokeMiterlimit="10"/>
              </g>
            </g>
            <g className="Svg3" transform="translate(439.619995,439.619995) rotate(0)">
              <g className="Svg4" transform="scale(1,1)">
                <line id="line2" className="Svg5 line2" x1="75" y1="439.620000" x2="804.240000" y2="439.620000" transform="translate(-429,-439.619995)" fill="none" stroke="rgb(0,0,0)" strokeWidth="150" strokeLinecap="round" strokeMiterlimit="10"/>
              </g>
            </g>
            <g className="Svg6" transform="translate(443.439987,804.239990)">
              <g className="Svg7" transform="rotate(0)">
                <line id="line3" className="line3" x1="82.640000" y1="804.240000" x2="804.240000" y2="804.240000" transform="translate(-443.439987,-804.239990)" fill="none" stroke="rgb(0,0,0)" strokeWidth="150" strokeLinecap="round" strokeMiterlimit="10"/>
              </g>
            </g>
          </g>
        </g>
      </svg>  
        </>
    )
}

document.addEventListener('DOMContentLoaded', function () {
    const svg1 = document.querySelector('.Svg1');
  const svg2 = document.querySelector('.Svg2');
  const svg3 = document.querySelector('.Svg3');
  const svg4 = document.querySelector('.Svg4');
  const svg5 = document.querySelector('.Svg5');
  const svg6 = document.querySelector('.Svg6');
  const svg7 = document.querySelector('.Svg7');
  const b = document.querySelector('.SvgM');
  
  b.addEventListener('click', function () {

        if (svg1.classList.contains('svg1')){

            svg1.classList.add('svg001')
            svg2.classList.add('svg002')
            svg3.classList.add('svg003')
            svg4.classList.add('svg004')
            svg5.classList.add('svg005')
            svg6.classList.add('svg006')
            svg7.classList.add('svg007')

            svg1.classList.remove('svg1')
            svg2.classList.remove('svg2')
            svg3.classList.remove('svg3')
            svg4.classList.remove('svg4')
            svg5.classList.remove('svg5')
            svg6.classList.remove('svg6')
            svg7.classList.remove('svg7')

            setTimeout(function(){
                svg1.classList.add('svg01')
                svg2.classList.add('svg02')
                svg3.classList.add('svg03')
                svg4.classList.add('svg04')
                svg5.classList.add('svg05')
                svg6.classList.add('svg06')
                svg7.classList.add('svg07')
            }, 0)
        } else {

            svg1.classList.remove('svg001')
            svg2.classList.remove('svg002')
            svg3.classList.remove('svg003')
            svg4.classList.remove('svg004')
            svg5.classList.remove('svg005')
            svg6.classList.remove('svg006')
            svg7.classList.remove('svg007')

            svg1.classList.remove('svg01')
            svg2.classList.remove('svg02')
            svg3.classList.remove('svg03')
            svg4.classList.remove('svg04')
            svg5.classList.remove('svg05')
            svg6.classList.remove('svg06')
            svg7.classList.remove('svg07')

            setTimeout(function(){
                svg1.classList.add('svg1')
                svg2.classList.add('svg2')
                svg3.classList.add('svg3')
                svg4.classList.add('svg4')
                svg5.classList.add('svg5')
                svg6.classList.add('svg6')
                svg7.classList.add('svg7')
            },0)
        }
  })  
  })


export default Burger
