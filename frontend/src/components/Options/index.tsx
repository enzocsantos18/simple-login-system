import React, {useState, useContext} from "react";
import { IoMdMore } from "react-icons/io";
import { useHistory, } from "react-router";
import {  Link } from "react-router-dom";

import { UserContext } from "../../contexts/UserProvider";
import Auth from "../../helpers/auth";
import { OptionsContainer, OptionsModal } from "./styles";

const Options: React.FC = () => {
  const history = useHistory();
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const {user} = useContext(UserContext)
  function handleLogout(): void {
    Auth.destroyToken();
    history.push("/login");
  }

  return (
    <>
      <OptionsContainer>
        <span onClick={() => setIsOptionsOpen(!isOptionsOpen)}>
          <IoMdMore size={30} />
        </span>
       

        {isOptionsOpen && (
          <OptionsModal>
            <p>Hello, {user.name}</p>
            <ul>
            <Link to="/user"><li>User</li></Link>
              <li onClick={() => handleLogout()}>Logout</li>
            </ul>
          </OptionsModal>
        )}


      </OptionsContainer>
    </>
  );
};

export default Options;
