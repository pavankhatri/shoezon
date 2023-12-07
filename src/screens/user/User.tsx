import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {ShoesListImage} from '../../assets';
import {Shoe} from '../../common/interfaces';
import {styles} from '../../styles/Admin';

interface ShoesListProps {
  shoes: Shoe[];
}

const User: React.FC<ShoesListProps> = ({shoes}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={ShoesListImage}
        resizeMode="cover"
        style={styles.image}>
        <ScrollView style={styles.addShoeDetail}>
          <Text style={styles.mainText}>Shoes List</Text>

          <View style={styles.gridContainer}>
            {shoes?.length ? (
              shoes.map((shoe, index) => (
                <TouchableOpacity
                  key={shoe.id}
                  onPress={() => console.log('Shoe clicked:', shoe)}>
                  <View
                    style={[
                      styles.gridItem,
                      index % 2 !== 0 ? styles.oddGridItem : {},
                    ]}>
                    <Image
                      source={{uri: shoe.image}}
                      style={styles.shoeImage}
                    />
                    <Text>{`Brand: ${shoe.brand}`}</Text>
                    <Text>{`Sizes: ${shoe.sizes.join(', ')}`}</Text>
                    <Text>{`Cost: $${shoe.cost}`}</Text>
                  </View>
                </TouchableOpacity>
              ))
            ) : (
              <Text style={styles.text}>
                We're sorry, but currently, there are no available shoes in
                stock. Please check back later or explore our other products.
                Thank you for your understanding!
              </Text>
            )}
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default User;
