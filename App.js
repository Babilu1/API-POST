import React, { useState } from "react";
import {
  Text,
  FlatList,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  Input,
  Flex,
  Icon,
  show,
  Button,
  Alert,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";

export default function App() {
  const [show, setShow] = useState();
  const [list, setList] = useState();
  const [em, setEm] = useState();
  const [sh, setSh] = useState();

  const handleSubmit = async () => {
    if (em === '' && sh === '') {
      alert("por favor, preencha os campos");
    } else {
      const req = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: em,
          body: sh,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const json = await req.json();
      alert(json.title+"+"+json.body);
    } 
  };

  return (
    <NativeBaseProvider>
      <Flex direction="column" mt={20}>
        <Flex align="center" justify="center">
          <Text fontWeight="bold" color="#f5de" fontSize={24}>
            testes native base
          </Text>
          <Input
            onChangeText={(value) => setEm(value)}
            variant="outline"
            placeholder="email"
            h={12}
            w={350}
            borderColor="#f5de"
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="person" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
          />
          <Input
            onChangeText={(value) => setSh(value)}
            variant="outline"
            placeholder="senha"
            mt={5}
            h={12}
            w={350}
            borderColor="#f5de"
            InputLeftElement={
              <Icon
                as={
                  <MaterialIcons
                    name={show ? "visibility" : "visibility-off"}
                  />
                }
                size={5}
                ml="2"
                color="muted.400"
                onPress={() => setShow(!show)}
              />
            }
          />
          <Button
            onPress={handleSubmit}
            mt={5}
            colorScheme="secondary"
            borderColor="#f5de"
            variant="outline"
          >
            Click Me
          </Button>
          <FlatList
            data={list}
            renderItem={({ item }) => (
              <Box
                key={item.id}
                m={2}
                display="flex"
                backgroundColor="#155e75"
                padding={3}
                borderRadius={6}
              >
                <Text fontWeight="bold" fontSize={16}>
                  {item.setEm},
                </Text>
                <Text fontWeight="bold" fontSize={16}>
                  {item.setSh}.
                </Text>
              </Box>
            )}
          ></FlatList>
        </Flex>
      </Flex>
    </NativeBaseProvider>
  );
}
