import React from 'react';
import Headshot from '../images/_V7A4028.jpg';
import Vegas from '../images/vegas.jpg';


const styles = {
    card: {
        width: '100%',
    },
    div1: {
        marginTop: '3%',
    },
    mountain: {
      width: '80%'
    }
}

function AboutMe () {
    return (
        <section className="container">
          <div className="row align-items-center">

                <div className="card" style={styles.card}>
                  <div className="row">

                    <div className="col-4" style={styles.div1}>
                  <img src={Headshot} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h3 className="card-title text-center">Damon Andrews</h3>
                    <p className="card-text text-center">Full-Stack Web Developer</p>
                    <p className="card-text text-center"><small className="text-white-30">JavaScript / React / HTML / CSS / MERN / APIs / NodeJS / OOP / PWA / Express / SQL / NoSQL / ORM / MVC</small></p>
                  </div>
                </div>
                
                <div className="col-8">
                <div className="card-body">
                  <h5 className="card-header text-center" id="aboutMe">About Me</h5>
                  <div className="card-body text-center">
                    <p className="card-text lh-lg">Hello! Newly minted full stack web dev. 

Always open to new opportunities and learning more.

Please don't hesitate to reach out with any questions, or just to connect. Thanks!</p>
                    <img src={Vegas} className="card-img-top align-items-center" alt="..." style={styles.mountain}/>
                  </div>
                </div>
              </div>
             </div>

            </div>
          </div>

        </section>
    )
}

export default AboutMe;