import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
// projects
import quotes_fetching from "../../images/img/project/project1.png";
import recipe_list_react from "../../images/img/project/project2.png";
import Blog_up from "../../images/img/project/project11.png";
import zoomin from "../../images/img/project/project12.png";
import moneymanager from "../../images/img/project/proj3.png";
import portfolio from "../../images/img/project/project13.png";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../images/img/skills/react.svg";
import L_HTML5 from "../../images/img/skills/html5.svg";
import L_CSS3 from "../../images/img/skills/css3.svg";
import L_Bootstrap from "../../images/img/skills/bootstrap-5.svg";
import L_Mongodb from "../../images/img/skills/mongodb.svg";
import L_Nodejs from "../../images/img/skills/nodejs-1.svg";
import L_express from "../../images/img/skills/express-5.svg";
import Image from "react-bootstrap/Image";
import "./projects.style.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>

 {/* Project1: blogup */}
 <ImageEvent
            date="04/06/2021"
            className="text-center"
            text="blog-up"
            src={Blog_up}
            alt="blog-up"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Blogup is created using full stack mern were we can create our
                        own blogs and save them in database. User can login using google account.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li> can create own blogs</li>
                          <li>data can be deleted and have like option</li>
                          <li>google authentication available</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Nodejs}
                                alt="Nodejs"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Nodejs
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_express}
                                alt="express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Mongodb}
                                alt="mongodb"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Mongodb
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  className="color"
                  href="https://mystifying-yalow-5cb8be.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/mounika1719/blogupnew"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

  {/* Project2: zoomin*/}
  <ImageEvent
            date="07/06/2021"
            className="text-center"
            text="zoomin"
            src={zoomin}
            alt="zoomin"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> ZoomIn app allows us to connect with our friends and colleagues 
                        just as zoom does. It is a socia media video
                        chat application created using React js as frontend and nodejs as backend.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>video chat</li>
                          <li>Powered by React and Nodejs</li>
                          
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Nodejs}
                                alt="nodejs"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Nodejs
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex  justify-content-between flex-nowrap text-center">
                <UrlButton className="url-button"
                  href="https://zoomin-app.netlify.app/"
                  target="_blank"
                >
                  <p> SEE LIVE</p>
                </UrlButton>
                <UrlButton
                  href="https://github.com/mounika1719/zooninapp"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>


          {/* Project3: recipe-list-react */}
          <ImageEvent
            date="25/03/2021"
            className="text-center"
            text="recipe-list-react"
            src={recipe_list_react}
            alt="recipe-list-react"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a Recipe list
                        created using React and Css that gives selected recipies
                        through API...
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li> gives selected recipies</li>
                          <li>Powered by React and CSS</li>
                          <li>Respoisive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  className="color"
                  href="https://tender-darwin-83d996.netlify.app"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/mounika1719/recipe-list-react"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          
          {/* Project4: moneymanager */}
          <ImageEvent
            date="11/04/2021"
            className="text-center"
            text="moneymanager"
            src={moneymanager}
            alt="moneymanager"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Money Manager makes managing personal finances as easy as pie! 
                        Now easily record your personal and business financial transactions.
                         This is the frontend project created using Reactjs.

                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Keep records of transactions</li>
                          <li>Powered by React and Css</li>
                          
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex  justify-content-between flex-nowrap text-center">
                <UrlButton className="url-button"
                  href="https://pedantic-hugle-181b55.netlify.app/"
                  target="_blank"
                >
                  <p> SEE LIVE</p>
                </UrlButton>
                <UrlButton
                  href="https://github.com/mounika1719/money-manager-frontend"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

 {/* Project5: portfolio */}
          <ImageEvent
            date="27/04/2021"
            className="text-center"
            text="portfolio"
            src={portfolio}
            alt="portfolio"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> I have created a portfolio where my skils, projects, and details about me are present.
                        This project is completly build using Reactjs.

                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Gives complete details</li>
                          <li>Powered by React and Bootstrap</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Bootstrap}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>

                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex  justify-content-between flex-nowrap text-center">
                <UrlButton className="url-button"
                  href="https://sleepy-shannon-9bd084.netlify.app/"
                  target="_blank"
                >
                  <p> SEE LIVE</p>
                </UrlButton>
                <UrlButton
                  href="https://github.com/mounika1719/MyPortfolionew"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>


          {/* Project6: quotes_fetching */}
          <ImageEvent
            date="09/03/2021"
            className="text-center"
            text="quotes_fetching"
            src={quotes_fetching}
            alt="quotes_fetching"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a Random quotes
                        fetching app where we will get random quotes from
                        API.this app is done using React js and css.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Gives Random advice</li>
                          <li>Powered by React and Css</li>
                          <li>Respoisive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex  justify-content-between flex-nowrap text-center">
                <UrlButton className="url-button"
                  href="https://modest-roentgen-229855.netlify.app"
                  target="_blank"
                >
                  <p> SEE LIVE</p>
                </UrlButton>
                <UrlButton
                  href="https://github.com/mounika1719/quotes_fetching"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
