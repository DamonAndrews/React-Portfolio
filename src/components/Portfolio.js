import React from 'react';
import WYD from '../images/BallRunner.jpg';
import ZR1 from '../images/BallHog.jpg';
import Trivia from '../images/Scheduler.jpg';


const styles = {
    mainP: {
        marginBottom: -2,
    },
    cards: {
        maxHeight: 540, 
        backgroundColor: '#9bb7d0',
    },
    images: {
        // height: '80%',
        // marginTop: '7%',
        // marginLeft: '5%',
    },
    wydImage: {
        // height: '63%',
        // marginTop: '1%',
        // marginLeft: '5%',
    },
    triviaImg: {
        // height: '60%',
        // marginTop: '2%',
        // marginLeft: '10%'
    },
    Ecommerce: {
        // marginTop: '4%',
        // height: '80%',
        // marginLeft: '10%'
    },
    cardP: {
        marginBottom: -2,
    },
    cardA: {
        marginTop: 10,
    },
    cardBody: {
        marginTop: '17%',
        marginLeft: '8%',
    }
};

function Portfolio () {
    return (
        <section className="container" style={{}}>

            <br/>
            
            <div className="card overflow-auto mb-5" style={styles.cards}>
                <div className="row g-0">
                    <div className="col-md-7">
                        <img src={WYD} className="img-fluid rounded float-start" style={styles.wydImage} alt="..."/>
                    </div>
                    <div className="col-md-5">
                        <div className="card-body" style={styles.cardBody}>
                            <h3 className="card-title" id="two">Ball Runner</h3>
                            <p className="card-text text-decoration-underline" style={styles.cardP}>Interactive MERN Stack Single-Page Video Game Application:</p>
                            <ul>
                                <li>GraphQL with a Node.js and Express.js server</li>
                                <li>MongoDB and Mongoose ODM for database</li>
                                <li>Queries and mutations for retrieving, adding, updating, and deleting data</li>
                                <li>React for the front end</li>
                            </ul>
                            <p className="card-text"><small className="text-white-30">MongoDB / Express / React.JS / Node.JS / BCrypt Authentication</small></p>
                            <a href="#" target="_blank" rel="noreferrer" className="btn btn-primary">Go To Deployed Application (Class is over and App is no longer deployed :( )</a>
                            <br/>
                            <a href="https://github.com/DamonAndrews/InsertGameName" target="_blank" rel="noreferrer" className="btn btn-primary" style={styles.cardA}>Go To GitHub Repo</a>
                        </div>
                    </div>
                </div>
            </div>


                <div className="card overflow-auto mb-5" style={styles.cards}>
                    <div className="row g-0">
                        <div className="col-md-5">
                            <div className="card-body" style={styles.cardBody}>
                            <h3 className="card-title" id="two">BallHog</h3>
                            <p className="card-text text-decoration-underline" style={styles.cardP}>Interactive Full-Stack Project:</p>
                            <ul>
                            <li>Two server side APIs</li>
                                    <li>Accept and respond to user input</li>
                                    <li>Use client-side storage</li>
                                    <li>Polished UI</li>
                            </ul>
                            <p className="card-text"><small className="text-white-30">JavaScript / Tailwind / CSS</small></p>
                            <a href="https://damonandrews.github.io/7-8-InteractiveFrontEnd-BALLHog/" target="_blank" rel="noreferrer" className="btn btn-primary">Go To Deployed Application</a>
                            <br/>
                            <a href="https://github.com/DamonAndrews/7-8-InteractiveFrontEnd-BALLHog" target="_blank" rel="noreferrer"className="btn btn-primary" style={styles.cardA}>Go To GitHub Repo</a>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <img src={ZR1} className="img-fluid rounded float-end" style={styles.images} alt="..."/>
                        </div>
                    </div>
                  </div>

                  <div className="card overflow-auto mb-5" style={styles.cards}>
                    <div className="row g-0" >
                        <div className="col-md-7">
                            <img src={Trivia} className="img-fluid rounded float-start" style={styles.triviaImg} alt="..."/>
                        </div>
                        <div className="col-md-5">
                            <div className="card-body" style={styles.cardBody}>
                                <h3 className="card-title" id="three">Work ay Scheduler</h3>
                                <p className="card-text text-decoration-underline" style={styles.cardP}>Interactive Front-End Project:</p>
                                <ul>
                                    <li>Responds to User Input</li>
                                    <li>JavaScript and jQuery for interaction</li>
                                    <li>Uses local storage API</li>
                                    <li>Polished UI</li>
                                </ul>
                                <p className="card-text"><small className="text-white-30">JavaScript / CSS / HTML / jQuery</small></p>
                                <a href="https://damonandrews.github.io/5-WorkDayScheduler/" target="_blank" rel="noreferrer" className="btn btn-primary">Go To Deployed Application</a>
                                <br/>
                                <a href="https://github.com/DamonAndrews/5-WorkDayScheduler" target="_blank" rel="noreferrer"className="btn btn-primary" style={styles.cardA}>Go To GitHub Repo</a>
                            </div>
                        </div>
                    </div>
                  </div>
        </section>
    )
};

export default Portfolio;