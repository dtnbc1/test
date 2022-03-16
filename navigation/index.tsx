import React from 'react';
import { Button, Text, View } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';

function HomeScreen() {
  const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            <Text> Home Screen </Text>
            <Button title="navigate" onPress={() => navigation.navigate("TabOne")}/>

        </View>
    );
}

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="TabOne" component={TabOneScreen} />
                <Stack.Screen name="TabTwo" component={TabTwoScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}