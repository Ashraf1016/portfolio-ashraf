import { useState } from "react"
import arrow from '../../components/images/arrow-path.svg'
import { Button } from "ui-waves"
import connect from '../../components/images/connect.png'
import { Instagram, LinkedIn, Twitter, WhatsApp } from "@mui/icons-material"

const Overlay5 = () => {
    const handleNavigation = (url) => {
        window.location.href = url; // Navigate to the specified URL
      };
    return (


         <div style={{ display: 'flex', justifyContent: 'center',alignItems:'center' }} >
            <div >
            <div>
    <img src={arrow} alt="arrow" className="connect"/>
    <h2 className="letsconnect">Let's Connect</h2>
    <div className="d-flex cstm-box" style={{padding:'0 50px'}}>
      <Twitter style={{ margin: '0 8px' ,cursor: 'pointer'}} onClick={() => handleNavigation('https://twitter.com/your_twitter_handle')} />
      <LinkedIn style={{ margin: '0 8px',cursor: 'pointer' }} onClick={() => handleNavigation('https://in.linkedin.com/in/ashraf-p-2a5254172')} />
      <Instagram style={{ margin: '0 8px',cursor: 'pointer' }} onClick={() => handleNavigation('https://www.instagram.com/as_hr_af_pk/')} />
      <WhatsApp style={{ margin: '0 8px' ,cursor: 'pointer'}} onClick={() => handleNavigation('whatsapp://send?phone=+918086008433')} />

      </div>
                <div className="glass-card">
                    <div className="input-boxes">
                        <img src={connect} alt="aa" width={260}/>
                    <input type="text" className="cstm-input-box" placeholder="Name" />
                    <input type="text" className="cstm-input-box" placeholder="Email" />
                    <input type="text" className="cstm-input-box" placeholder="Contact Number" />
                    <textarea className="cstm-input-box" placeholder="Message" />
                    <div style={{display:'flex', justifyContent:'center'}}>
                    <Button label="Submit" variant="classic"/>

                    </div>
                    </div>
                </div>
             
            </div>

        </div>
       </div>

    )
}

export default Overlay5