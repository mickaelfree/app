import { View, Text } from "react-native";
import React from "react";
import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { useGlobalContext } from "../../context/GlobalProvider";

const AuthLayout = () => {
  const { loading, islogged } = useGlobalContext();
  if (!loading && islogged) return <Redirect href="/home" />;
  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default AuthLayout;
