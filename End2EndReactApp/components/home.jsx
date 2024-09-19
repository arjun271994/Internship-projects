import { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Card,
  CardBody,
  Grid,
  Heading,
  Stack,
  Text,
  CardFooter,
  Button,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  let URL =
    "https://arjuns-db-default-rtdb.asia-southeast1.firebasedatabase.app/Products.json";
  let [data, setData] = useState({});
  let { isLogged } = useContext(AuthContext);
  let { flag, user } = isLogged;

  useEffect(() => {
    axios.get(URL).then((res) => {
      setData(res.data);
    }, []);
  });

  let navigate = useNavigate();

  function handleCartClick() {
    if (!flag) {
      navigate("/login");
    }
  }
  return (
    <Box>
      <h2>Home</h2>
      <Grid templateColumns="repeat(3, 1fr)" gap="5" border="2">
        {Object.entries(data).map(([id, ele]) => {
          return (
            <Card maxW="sm">
              <CardBody>
                <Image src={ele.image} alt="img" borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{ele.title}</Heading>
                  <Text>{ele.category}</Text>
                  <Text color="blue.600" fontSize="2xl">
                    {ele.price}
                  </Text>
                </Stack>
              </CardBody>
              <hr />
              <CardFooter>
                <Button
                  onClick={() => handleCartClick()}
                  variant="ghost"
                  colorScheme="blue"
                >
                  Add to cart
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </Grid>
    </Box>
  );
};
