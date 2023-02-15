import React from "react";
import { Card, Button } from "react-bootstrap";
const Courses = () => {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <h1>EXALTECHS SOFTWARES WEB DEVELOPMENT COURSES 2022</h1>
      <Card
        className="rk"
        id="html"
        style={{
          width: "18rem",
          margin: "15px",
          padding: "10px",
          border: "200px",
        }}
      >
        <Card.Img
          height="150px"
          width="200px"
          variant="top"
          src=" https://image.shutterstock.com/image-photo/html-code-logo-5-front-260nw-2148944343.jpg"
        />
        <Card.Body>
          <Card.Title>HTML</Card.Title>
          <Card.Text>
            HTML stands for hyper text markup language.HTML only structure it is
            used to create static web pages.html element tell the browser how to
            display the content
          </Card.Text>
          <a href="https://www.w3schools.com/html/html_intro.asp">
            <Button variant="primary">HTML More Details</Button>
          </a>
        </Card.Body>
      </Card>

      <Card className="rk" style={{ width: "18rem", margin: "10px" }}>
        <Card.Img
          height="150px"
          width="200px"
          variant="top"
          src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png"
        />
        <Card.Body>
          <Card.Title>CSS</Card.Title>
          <Card.Text>
            CSS stands for Cascading Style Sheets. CSS is used for appling the
            styles for the html elements css will be applied to complete
            documnets for styling the elements.
          </Card.Text>
          <a href="https://www.w3schools.com/css/css_intro.asp">
            <Button variant="primary"> CSS More Detail</Button>
          </a>
        </Card.Body>
      </Card>

      <Card className="rk" style={{ width: "18rem", margin: "10px" }}>
        <Card.Img
          variant="top"
          height="150px"
          width="200px"
          src="https://thumbs.dreamstime.com/b/moscow-russia-june-javascript-js-logo-sign-program-code-background-illustrative-editorial-189667712.jpg"
        />
        <Card.Body>
          <Card.Title>JAVASCRIPT </Card.Title>
          <Card.Text>
            javaScript is a dynamic or Scripting language it help us to create
            the action in static html pages.it is synchronous and single threded
            language. it handle the behavier apps.
          </Card.Text>
          <a href="https://www.w3schools.com/js/js_intro.asp">
            <Button variant="primary">JavaScript More Details</Button>
          </a>
        </Card.Body>
      </Card>

      <Card className="rk" style={{ width: "18rem", margin: "10px" }}>
        <Card.Img
          height="150px"
          width="200px"
          variant="top"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        />
        <Card.Body>
          <Card.Title>REACT</Card.Title>
          <Card.Text>
            React was released by a software engineer working for Facebook
            Jordane Walke in 2011. concept. React is UI library for building UI
            Components. react is web and mobiles applications
          </Card.Text>
          <a href="https://reactjs.org/">
            <Button variant="primary">React More Details</Button>
          </a>
        </Card.Body>
      </Card>

      <Card className="rk" style={{ width: "18rem", margin: "10px" }}>
        <Card.Img
          variant="top"
          height="150px"
          width="200px"
          src="https://chriscourses.com/img/blog/redux/redux.jpg"
        />
        <Card.Body>
          <Card.Title>Redux</Card.Title>
          <Card.Text>
            Redux is Library for managing or updating the application state by
            using events called action centralized store for state. Rudux is
            used for higher or enterprize level applications
          </Card.Text>
          <a href="https://redux.js.org/">
            <Button variant="primary">Redux More Details</Button>
          </a>
        </Card.Body>
      </Card>

      <Card className="rk" style={{ width: "18rem", margin: "10px" }}>
        <Card.Img
          height="150px"
          width="200px"
          variant="top"
          src="https://www.freecodecamp.org/news/content/images/2021/07/mysql.png"
        />
        <Card.Body>
          <Card.Title>MySQL</Card.Title>
          <Card.Text>
            MySQL is an Oracle-backed open source relational database management
            system MySQL is a relational database management system RDBMS
            developed by Oracle query language Sql.
          </Card.Text>
          <a href="https://www.mysql.com/">
            <Button variant="primary">MySQL More Details</Button>
          </a>
        </Card.Body>
      </Card>

      <Card className="rk" style={{ width: "18rem", margin: "10px" }}>
        <Card.Img
          height="150px"
          width="200px"
          variant="top"
          src="https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png"
        />
        <Card.Body>
          <Card.Title>NODE JS</Card.Title>
          <Card.Text>
            Node. js is an open source development platform for executing
            JavaScript code server-side. Node is useful for developing
            applications to the server and is often used for real-time.
          </Card.Text>
          <a href="https://nodejs.dev/en/learn/">
            <Button variant="primary">Node Js Details</Button>
          </a>
        </Card.Body>
      </Card>

      <Card className="rk" style={{ width: "18rem", margin: "10px" }}>
        <Card.Img
          height="150px"
          width="200px"
          variant="top"
          src=" https://miro.medium.com/max/875/1*5Jv5YAGqu3zL5endb8dtBA.png"
        />
        <Card.Body>
          <Card.Title>React Bootstrap</Card.Title>
          <Card.Text>
            Build fast, responsive sites with Bootstrap Powerful, extensible,
            and feature-packed frontend toolkit. Build and system and multiple
            components and projects.
          </Card.Text>
          <a href="https://react-bootstrap.github.io/ ">
            <Button variant="primary">Bootstrap LIBRARY</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Courses;
