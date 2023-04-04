import React, { useState, useEffect, useRef } from 'react'
import { DataBackground } from '../Data/DataBackground';
import { Link } from 'react-router-dom';



const Background = () => {

const myRef = useRef()
const [currentSlide, setCurrentSlider] = useState(0)

  // Ham xử lý slider

  function handlerSlider(n) {
   const listBackGround =  document.getElementsByClassName('background__image')
   for(let i = 0; i< listBackGround.length; i++) {
    listBackGround[i].style.opacity = 0
  }
  listBackGround[n-1].style.opacity = 1
}

useEffect(() => {
  const interValid = setInterval(()=>{
    setCurrentSlider( currentSlide => (currentSlide + 1) % DataBackground.length);
  },3000);
  return () => clearInterval(interValid)
},[])

  return (
    <React.Fragment>
      <div  className="header__background">

        {/* render list image background auto switch after 3s */}
        {DataBackground.map(item => {
          return (
            <div ref={myRef} className="background__image" style={{ background: item.color,
              opacity: currentSlide === item.id - 1 ? 1 : 0, 
              transition: 'opacity 1s ease-in-out',}}>
              <img className="background__image--image" src={item.img} />
            </div>
          )
        })}

        {/* render list background menu */}
        <div className="background__droplist">
          <ul className="background__droplist__list">
            {DataBackground.map(item => {
              return (
                <li key={item.id} className="background__droplist__list--item">
                  <Link><span>{item['content-li']}</span></Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* render list button slider */}
        <div className="background__slider">
          {DataBackground.map((item) =>
            <button onMouseEnter={() => handlerSlider(item.id)} className="sliderbtn"></button>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Background