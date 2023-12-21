import {
  Box,
  Center,
  HStack,
  Link,
  VStack,
  Text,
  Heading,
  FormControl,
  Input,
  Button,
} from "native-base";
import React, { useState } from "react";
import { login, register } from "../../services/musicApi";
import { useUser } from "../../contexts/user";
import { ILoginForm } from "./ILoginForm";
import { RoutesType } from "../../routes/IRoutes";
import { useNavigation } from "@react-navigation/native";
import { useLoading } from "../../contexts/loading";

function LoginForm({ isLogin }: ILoginForm) {
  const { navigate } = useNavigation<RoutesType>();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });
  const { setLoading } = useLoading();
  const { setUser } = useUser();

  const handlerSubmit = () => {
    if (
      !errors.password &&
      !errors.username &&
      formData.username &&
      formData.password
    ) {
      setLoading(true);
      if (isLogin) {
        login(formData)
          .then((res) => {
            setUser({ ...res.data, username: formData.username });
            navigate("AudioHub");
          })
          .catch((err) => {
            console.log("Login Erro: ", err);
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        register(formData)
          .then(() => {
            navigate("Login");
          })
          .catch((err) => {
            console.log("Register Erro: ", err);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    }
  };

  const changeAndValidate = (value: string, type: string) => {
    if (type === "password") {
      setFormData((state) => ({ ...state, password: value }));
      if (value.length < 6) {
        setErrors({
          ...errors,
          password: "Senha deve ter ao menos 6 caracteres!",
        });
      } else {
        setErrors({ ...errors, password: "" });
      }
    } else if (type === "username") {
      setFormData((state) => ({ ...state, username: value }));
      if (value.length < 3) {
        setErrors({
          ...errors,
          username: "Usuario deve ter ao menos 3 caracteres!",
        });
      } else {
        setErrors({ ...errors, username: "" });
      }
    }
  };

  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="secondary.100">
          Audio Hub
        </Heading>
        <Heading mt="1" color="secondary.100" fontWeight="medium" size="xs">
          {isLogin ? "Logue para continuar!" : "Crie sua conta!"}
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label
              _text={{
                color: "secondary.100",
              }}
            >
              Usuario
            </FormControl.Label>
            <Input
              value={formData.username}
              onChangeText={(e) => changeAndValidate(e, "username")}
              color="secondary.100"
            />
            {errors.username.length ? (
              <Text color="red.100">{errors.username}</Text>
            ) : null}
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                color: "secondary.100",
              }}
            >
              Senha
            </FormControl.Label>
            <Input
              value={formData.password}
              onChangeText={(e) => changeAndValidate(e, "password")}
              color="secondary.100"
              type="password"
            />
            {errors.password.length ? (
              <Text color="red.100">{errors.password}</Text>
            ) : null}
          </FormControl>
          <Button onPress={() => handlerSubmit()} mt="2" colorScheme="indigo">
            {isLogin ? "Entrar" : "Criar"}
          </Button>
          {isLogin ? (
            <HStack mt="6" justifyContent="center">
              <Text fontSize="sm" color="secondary.100">
                É um novo usuario?{" "}
              </Text>
              <Link
                _text={{
                  color: "indigo.400",
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
                onPress={() => navigate("Registration")}
              >
                Criar conta
              </Link>
            </HStack>
          ) : null}
        </VStack>
      </Box>
    </Center>
  );
}

export default LoginForm;
