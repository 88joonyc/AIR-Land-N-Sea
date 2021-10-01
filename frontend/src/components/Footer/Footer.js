import React from 'react';

import './Footer.css'

const FooterBar = () => {

  return (
    <>
          <nav>
            <div className="footer-container">
                <div className='footer-head'>
                  <a className='footer-links' href='https://www.paulchang.dev'>@Paul_Chang</a>
                  <a className='footer-links' href='https://www.linkedin.com/in/pchang1216'>@Linkedin</a>
                  <a className='footer-links' href='https://github.com/88joonyc'>@Git</a>
                  <a className='footer-links' href='https://github.com/88joonyc/AIR-Land-N-Sea'>_this_Repo</a>

                </div>
                  <p className='personal-injury'>* Any personal insurance you may have that covers damage to the host’s vehicle would kick in before your Air Land-N-Sea protection plan, except in limited situations for trips booked in Maryland, but this protects your own wallet. Liability insurance is provided under a policy issued to Air Land-N-Sea by Liberty Surplus Insurance Corporation, a member of the Liberty Mutual Group. Terms, conditions, and exclusions apply. The policy does not provide coverage for damage to a host’s vehicle.<br/><br/><br/>For questions or information about the third party liability insurance that is included in protection plans in the US, consumers in Maryland and the licensed states listed here may contact Air Land-N-Sea Insurance Agency at (415) 508-0283 or claims@turo.agency. For questions about how damage to a host’s vehicle is handled, visit the Air Land-N-Sea Support site.<br/><br/><br/>When a trip is booked in the state of Washington, physical damage to the host’s vehicle is covered by insurance purchased by Air Land-N-Sea, but the Air Land-N-Sea insurance does not change the contractual responsibilities of hosts or guests with respect to physical damage to a host’s vehicle.<br/><br/><br/>** Terms, conditions, and exclusions apply.</p>
              <div className="footer-tabs">
                <div className="footer-one">
                  <ul>
                    <p className="footer-title">About</p>
                    <li className="footer-lists">See how it works:</li>
                    <li> <a className="footer-linked" href="https://github.com/88joonyc/AIR-Land-N-Sea">Download</a> </li>
                    <li className="footer-lists">this GibHub Repo</li>
                    <li className="footer-lists">Now and visit my GitHub for more!</li>
                    <li> <a className="footer-linked" href="https://github.com/88joonyc/" >My GitHub</a> </li>
                  </ul>
                </div>
                <div className="footer-two">
                  <ul>
                    <p className="footer-title">Special Thanks</p>
                    <li className="footer-lists">to</li>
                    <li> <a className="footer-linked" href="https://open.appacademy.io/" >App Academy</a> </li>
                    <li className="footer-lists">April Cohort</li>
                    <li className="footer-lists">2021</li>

                  </ul>
                </div>
                <div className="footer-three">
                  <ul>
                    <p className="footer-title">Linked</p>
                    <li className="footer-lists">My email address:</li>
                    <li className="footer-lists">joonyc88@gmail.com</li>
                    <li> <a className="footer-linked" href='https:///linkedin.com/in/pchang1216'>My Linkedin Profile</a> </li>
                  </ul>
                </div>
                <div className="footer-four">
                  <ul>
                    <p className="footer-title">Others</p>
                    <li className="footer-lists">Like the Site?</li>
                    <li className="footer-lists">like the project?</li>
                    <li className="footer-lists">Check out past projects below</li>
                    <li> <a className="footer-linked" href='https://adventure--time.herokuapp.com/'> - Adventure_Time - </a> </li>
                    <li> <a className="footer-linked" href='https://sneaxs.herokuapp.com/'> - Sneax - </a> </li>
                    <li> <a className="footer-linked" href='https://thefastandthecurious.herokuapp.com/'> - theFastandtheCurious - </a> </li>
                  </ul>
                </div>
              </div>
                <div className='footer-message'>© 2021 Air Land-N-Sea. All Rights Reserved by Paul Chang. Terms. Privacy Policy. New Jersy Privacy Notice. Cookies. </div>
              <div className='footer-footer'>
                <a href='https://www.github.com/88joonyc' className="my-links"><img className='git-icon'/></a>
                <a href='https://angel.co/u/paul-chang-27/' className="my-links"><img className='angel-icon personal-set'/></a>
                <a href='mailto:joonyc88@gmail.com' className="my-links"><img className='email-icon personal-set'/></a>
                <a href='https://linkedin.com/in/pchang1216' className="my-links"><img className='linked-icon personal-set'/></a>
              </div>
            </div>
          </nav>
        </>
  );
}

export default FooterBar;
