import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="container">
      <center>
        <div className="text-container">
          <Typography variant="h1" component="h1">
            404 Not Found
          </Typography>
          <Typography variant="h3">Sorry, We Misplaced That Page</Typography>
          <Typography variant="paragraph" color="blue-gray" component="h3">
            Our digital librarian seems to have misplaced the page you
            requested. Stay with us, and we'll help you rediscover it.
          </Typography>
          <Typography variant="paragraph" color="blue-gray" component="h3">
            Here, instead, you'll find some useful links:
          </Typography>
        </div>
        <div className="nav-buttons">
          <Button color="teal">Home</Button>
          <Button color="orange">About</Button>
          <Button color="green">Contact</Button>
        </div>
      </center>
    </div>
  );
};

export default NotFound;
