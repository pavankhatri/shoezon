import React from 'react';
import {View, ImageBackground, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../../styles/WelcomeScreen';
import {ShoesListImage} from '../../assets';

const Admin = () => {
  const navigation = useNavigation();
  const adminOptions = (title: string) => {
    const handleAdminOptions = () => {
      if (title === 'Shoes List') {
        navigation.navigate('ShoesList' as never);
      } else {
        navigation.navigate('EditShoesList' as never);
      }
    };
    return (
      <View style={styles.buttonContainer}>
        <Button title={title} color={'black'} onPress={handleAdminOptions} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={ShoesListImage}
        resizeMode="cover"
        style={styles.image}>
        {adminOptions('Shoes List')}
        {adminOptions('Edit Shoes List')}
      </ImageBackground>
    </View>
  );
};

export default Admin;
