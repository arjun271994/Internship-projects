import { Box, Input } from "@chakra-ui/react";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  let URL =
    "https://arjuns-db-default-rtdb.asia-southeast1.firebasedatabase.app/User.json";

  let username = useRef();
  let password = useRef();
  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let name = username.current.value;
    let secretpassword = password.current.value;
    let obj = {
      name,
      secretpassword,
    };

    axios.post(URL, obj).then((res) => {
      alert("Data has been saved");

      navigate("/login");
    });
  };
  return (
    <Box>
      <>SignUp</>
      <form onSubmit={handleSubmit}>
        <Input ref={username} placeholder="UserName" size="md" />
        <Input ref={password} placeholder="Password" size="md" />
        <Input placeholder="Password" size="md" type="submit" />
      </form>
    </Box>
  );
};
