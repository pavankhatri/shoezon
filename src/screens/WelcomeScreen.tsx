import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {GalleryImage} from '../assets';
import {styles} from '../styles/WelcomeScreen';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const navigateToMainScreen = (name: string) => {
    if (name === 'Admin') {
      navigation.navigate('Admin' as never);
    } else {
      navigation.navigate('User' as never);
    }
  };

  const options = (name: string) => {
    return (
      <View style={styles.options}>
        <Text style={styles.text} onPress={() => navigateToMainScreen(name)}>
          {name}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={GalleryImage}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.mainText}>Welcome to Shoezon</Text>
        {options('Admin')}
        {options('User')}
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;
