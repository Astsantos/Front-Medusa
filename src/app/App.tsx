import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//colocar as pag que já foram criadas aqui//
import Paglogin from './index';
import Pagcadastro from './cadastro';
import IdentidadeScreen from './identidade';
import RostoScreen from './rosto';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>

         //telas *voce coloca na ordem do app//
                <Stack.Screen name="Cadastro" component={Pagcadastro} />
                <Stack.Screen name="Login" component={Paglogin} />
                <Stack.Screen name="Identidade" component={IdentidadeScreen} />
                <Stack.Screen name="Rosto" component={RostoScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}