import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Sumitchouhan1 from './Sumitchouhan1.pdf'



const Services = () => {
  return (
    <div className="services">
        {/* left side */}
        <div className="awesome">
         <span>My Awesome</span>
         <span>Services</span>
         <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus molestiae
            <br/> asperiores dolores sit id dolorem hic ipsam, perspiciatis quia? 
        </span>
        <a href={Sumitchouhan1} download>
        <button className='button s-button'>Dowanload CV</button>
        </a>
        
        <div className="blur s-blurl" style={{background: "#ABF1FF94"}}></div>
        </div>
        
        {/* Right side */}
        <div style={{left:'14rem'}} className="cards">
            <div>
                <Card
                emoji={HeartEmoji}
                heading = {'Design'}
                details={'Figma,sketch, Bootstrap,Adobe xd'}
                />
                
            </div>
              {/* second card */}
        <div style={{top:"12rem" ,left:"-16rem"}}>
            <Card
            emoji={Glasses}
            heading={"Developer"}
            details={"Html,css,Javascript,React"}
            />

           
          </div>
           {/* Third -card  */}

          <div style={{top: "19rem", left: "2rem"}}>
                <Card 
                emoji={Humble}
                heading={"UI/UX"}
                details={
                    "lorem ispum dummy text are usually use in section where"
                }
                />
                
            </div>
        </div>
        <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>

      
    </div>
  )
}

export default Services