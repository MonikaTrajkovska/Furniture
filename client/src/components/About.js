import React from './node_modules/react'
import Dinningimage from './assets/images/Dinningimage.JPEG'
import Table from './assets/images/table.JPEG'
// import Clock from './assets/images/clock.JPEG'
import './About.css'
import { Link } from './node_modules/react-router-dom'

const About =()=>{
    return(
        <React.Fragment>
            <div className="image">
                <img className='image1' src={Dinningimage} alt='dinningimage'/>
                <h1 className="centered">Need a professional opinion?</h1>
                <h2 className="centered1">Feel free to contact us with any question, we will be glad to meet you</h2>
                <Link to='./Contact'>
                <button className='centered2'>CONTACT</button>
                </Link>
            </div>
            <div className='paragraph'>
           <h1> WE ARE MM FURNITURE</h1>
The company for production and sale of furniture “MM” based in Skopje started with work in 2020,
 first with the sale of products from domestic and foreign companies, and then with its own production.
<div className='paragraph1'>
Later,  it launched its additional brand of exclusive furniture, MM Furniture, on the Macedonian market.
Under the motto of “luxury lifestyle”, the brand’s goal is to offer furniture and complete interior
design solutions with a modern and refined design, made with the latest technology and high quality materials.
</div>
<div className='paragraph1'>
Guided by the idea that there is no more luxury than your own home, Jumis with its products offers 
functionality, flexibility, aesthetics and elegance – a new value in everyday life.
</div>
<div className='paragraph1'>
The company has existed for 25 years and successfully places its products in the domestic and foreign markets in:
</div>
<div className='paragraph1'>
    <ul>
        <li>Switzerland</li>
        <li>Greece</li>
        <li>Italy</li>
        <li>Serbia</li>
    </ul>

</div>

            </div>
            <div className='paragrpah2'>
    <img className='table' src={Table} alt='table'/>
</div>

<div className='paragraph6'>
    <h1 className='title2'>WHY TO CHOOSE US?</h1>
<div className='paragraph3'>

    <p className='paragraph4'>
    
        <h2>Always available</h2>
        
Our team will be happy to meet all your requests,
 wishes, ideas as soon as possible.</p>


<p className='paragraph4'>
<h2>Qualified employees</h2>
All members of our team are highly qualified, educated and skilled.
 </p>


<p className='paragraph4'>
<h2>Best offer</h2>
    MM as a furniture company offers complete interior 
    design solutions with modern and refined designs.</p>
</div>
</div>
<div className='paragraph7'>
<p className='paragraph8'>
<h3 className="title4"><i class="fas fa-phone"></i>Phone:</h3>
(+389)02 5118 988; (+389) 78 24 77 24
</p>


<p className='paragraph8'>

<h3 className='title4'><i class="fas fa-map-marker-alt"></i>Address:</h3>
Bul Serbia 25, Skopje Aerodrom
</p>


<p className='paragraph8'>
<h3 className='title4'><i class="fas fa-mail-bulk"></i>E-mail:</h3>
info@mebeljumis.mk
</p> 
</div>
<div class="footer2">
  <p>© 2020 MM Furniture. All Rights Reserved. </p>
</div>   
  
        </React.Fragment>
    )
    }
    export default About