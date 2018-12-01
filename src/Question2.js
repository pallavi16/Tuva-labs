import React, { Component } from "react";

class Question2 extends Component {
  render() {
    return (
      <div>
        <h2 className ="fadeInText">QUESTION 2: <br/>
        What type of software engineering work have you spent the most time
        on recently? Please provide some brief information and
        if you can write some review on what you liked and didn't like while working on it.

        </h2>
        <p className ="blurText">

          For almost a year now, I spent most of my time designing software and writing
          web applications using  languages such as HTML5, CSS3, Advanced JavaScript and
          its frameworks (Angular, React). The project I worked on is called
          'Research Administrator' where I rewrote the existing code in AngularJS
          to Angular 5. This web application allows the researchers and clinicians at
          the University of Utah to regularly update their publications and projects
          that they have worked on recently. Our development team sends out emails to
          these researchers every six months to ask them to update their grants/ funds,
           publication or project titles, list of their trainees or interns and submit
            them for the university records. I managed the frontend of this application
            and redesigned it. I really liked working on the project since I was one of
            the two frontend engineers who was assigned this task. Since I had a major
            contribution in finishing this project, I gained a tons of skills, in terms of,
            learning a new language, code/bug fixes, testing the application. <br/>
          Although I had an amazing experience working on this project, I believe that
          there wasn’t much of  team collaboration and the task wasn’t too challenging either.
          I found the rewrite of this application fairly simple and finished it within
          three months but it was stretched to six months doing testing and simple fixes
          before we could send an email to the users.

        </p>
      </div>
    );
  }
}

export default Question2;
