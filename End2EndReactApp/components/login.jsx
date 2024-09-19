import { Box, Input } from "@chakra-ui/react";
import { useRef } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  let URL =
    "https://arjuns-db-default-rtdb.asia-southeast1.firebasedatabase.app/User.json";
  let username = useRef();
  let password = useRef();
  let { isLogged, setisLogged } = useContext(AuthContext);
  let navigate = useNavigate();
  let handleSubmit = (e) => {
    e.preventDefault();
    let name = username.current.value;
    let secretpassword = password.current.value;
    let obj = {
      name,
      secretpassword,
    };

    axios.get(URL).then((res) => {
      let userData = res.data;
      let users = Object.entries(userData);
      let filteredUsers = users.filter(([id, ele]) => {
        return (
          ele.name === obj.name && ele.secretpassword === obj.secretpassword
        );
      });

      if (filteredUsers.length === 0) {
        alert("Invalid user");
      } else {
        setisLogged({
          flag: true,
          user: filteredUsers[0][1].name,
        });

        navigate("/");
      }
    });
  };
  return (
    <Box>
      <>Login</>

      <form onSubmit={handleSubmit}>
        <Input ref={username} placeholder="UserName" size="md" />
        <Input ref={password} placeholder="Password" size="md" />
        <Input placeholder="Password" size="md" type="submit" />
      </form>
    </Box>
  );
};
