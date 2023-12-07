import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Welcome from '../screens/WelcomeScreen';
import Admin from '../screens/admin/Admin';
import User from '../screens/user/User';
import EditShoesList from '../screens/admin/EditShoesList';
import ShoesList from '../screens/admin/ShoesList';
import {ShoeData} from '../common/shoeData';

const screenOptions = {
  headerTransparent: true,
  headerTitle: '',
};

interface Shoe {
  id: string;
  brand: string;
  sizes: string[];
  cost: number;
  image: string;
}

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const [shoes, setShoes] = useState<Shoe[]>(ShoeData);

  const addShoe = (shoe: Shoe) => {
    setShoes([...shoes, shoe]);
  };

  const deleteShoe = (shoeId: string) => {
    const updatedShoes = shoes.filter(shoe => shoe.id !== shoeId);
    setShoes(updatedShoes);
  };
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Admin" component={Admin} />
          <Stack.Screen name="User">
            {props => <User {...props} shoes={shoes} />}
          </Stack.Screen>
          <Stack.Screen name="EditShoesList">
            {props => <EditShoesList {...props} addShoe={addShoe} />}
          </Stack.Screen>
          <Stack.Screen name="ShoesList">
            {props => (
              <ShoesList {...props} shoes={shoes} deleteShoe={deleteShoe} />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
