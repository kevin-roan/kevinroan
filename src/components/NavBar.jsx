import React from "react";
import { Button } from "@material-tailwind/react";
import styled from "@emotion/styled";

const NavBarStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 70px;
  @media screen and (max-width: 480px) {
    padding-bottom: 0px;
  }
`;
const NavBar = () => {
  return (
    <>
      <NavBarStyled>
        <div className="flex items-center gap-4">
          <Button variant="contained" color="pink">
            {" "}
            <i class="fa-solid fa-code"></i>
          </Button>
          <Button color="lime">
            <i class="fa-solid fa-keyboard"></i>
          </Button>
          <Button color="amber">
            <i class="fa-solid fa-gears"></i>
          </Button>
          <Button color="cyan">
            <i class="fa-solid fa-comment"></i>
          </Button>
        </div>
      </NavBarStyled>
    </>
  );
};

export default NavBar;
