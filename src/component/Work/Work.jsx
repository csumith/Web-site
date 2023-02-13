import React from 'react'
import './Work.css'
import Upwork from "../../img/Upwork.png";
import fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png"
import shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png";

const Work = () => {
  return (
    <div className='works'>
          {/* left side */}
          <div className="awesome">
         <span>Works for all these</span>
         <span>Brands & Clients</span>
         <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus molestiae
            <br/> 
            asperiores dolores sit id dolorem hic ipsam, perspiciatis quia?
             <br/>
            asperiores dolores sit id dolorem hic ipsam, perspiciatis quia?
            <br/>
        </span>
       
        <button className='button s-button'>Hire me</button>
        
        
        <div className="blur s-blurl" style={{background: "#ABF1FF94"}}></div>
        </div>

        {/* right side */}
         <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>
            </div>

            {/* background Circles */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
         </div>
        
    </div>
  )
}

export default Work