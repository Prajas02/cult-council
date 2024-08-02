import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    /* The footer component will have a fixed height and will be spaned for the entire viewport.
          There will be two child divs which will be flex to be in side by side matter.
          One child div must contain the cultural council logo, and its width is 30% width including the padding and margin
          The other child divs must contain 3 sections in it placed as 3 evenly spaced columns.
          The first section will contain all the instagramm links and social links
          The second section will contain the nav links and for navigation
          The third section should contain the contact us form*/
    <div className='footer'>
      <div className="bg-gradient"></div>
      <div className="footlogo-container">
        <img src='' alt='cult-logo' />
      </div>
      <div className="footnav-container">
        <div className="social">
          <span className='icon' style={{ backgroundImage: "url('https://th.bing.com/th/id/OIP.4bd2OBuugOExTZDZTpkrWQHaHY?w=198&h=197&c=7&r=0&o=5&dpr=1.8&pid=1.7')"}}><a href=""></a></span>
          <span className='icon' style={{ backgroundImage: 'url()'}}><a href=""></a></span>
          <span className='icon' style={{ backgroundImage: 'url()'}}><a href=""></a></span>
          <span className='icon' style={{ backgroundImage: 'url()'}}><a href=""></a></span>
        </div>
        <div className="navigation">
          <ul>
            <li><a href="http"></a></li>
            <li><a href="http"></a></li>
            <li><a href="http"></a></li>
            <li><a href="http"></a></li>
          </ul>
        </div>
        <div className="contact">
          <ul>
            <li>Hello Folks</li>
            <li>Nice To Meet You</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer