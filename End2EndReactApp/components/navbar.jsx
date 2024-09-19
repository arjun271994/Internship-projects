import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  let { isLogged, setisLogged } = useContext(AuthContext);

  let { flag, user } = isLogged;

  let navigate = useNavigate();

  function handleNavigate(path) {
    navigate(path);
  }
  return (
    <Flex
      justify="space-between"
      bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
      p="2"
      align="center"
    >
      <Button onClick={() => handleNavigate("/")}>Home</Button>
      <Button onClick={() => handleNavigate("/cart")}>Cart</Button>
      <Button onClick={() => handleNavigate("/skillsDisplayed")}>
        Project overview
      </Button>

      <div>
        {flag ? (
          <Flex m="2" gap="3">
            <Button>Welcome, {user}</Button>
            <Button
              onClick={() => {
                setisLogged({
                  flag: false,
                  user: "",
                });

                handleNavigate("/login");
              }}
            >
              Log Out
            </Button>
          </Flex>
        ) : (
          <Flex m="2" gap="3">
            <Button onClick={() => handleNavigate("/login")}>Sign in</Button>
            <Button onClick={() => handleNavigate("/signup")}>Sign up</Button>
          </Flex>
        )}
      </div>
    </Flex>
  );
};
