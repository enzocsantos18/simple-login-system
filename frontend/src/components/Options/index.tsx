import React, {useState} from "react";
import { IoMdMore } from "react-icons/io";
import { useHistory } from "react-router";
import Auth from "../../helpers/auth";
import { OptionsContainer, OptionsModal } from "./styles";

const Options: React.FC = () => {
  const history = useHistory();
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
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
            <ul>
              <li>User</li>
              <li onClick={() => handleLogout()}>Logout</li>
            </ul>
          </OptionsModal>
        )}


      </OptionsContainer>
    </>
  );
};

export default Options;
