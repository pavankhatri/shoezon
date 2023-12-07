import React from 'react';
import {
  View,
  Text,
  Button,
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
  deleteShoe: (id: string) => void;
}

const ShoesList: React.FC<ShoesListProps> = ({shoes, deleteShoe}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={ShoesListImage}
        resizeMode="cover"
        style={styles.image}>
        <ScrollView style={styles.addShoeDetail}>
          <Text style={styles.mainText}>Shoes List</Text>

          <View style={styles.gridContainer}>
            {shoes.map((shoe, index) => (
              <TouchableOpacity
                key={shoe.id}
                onPress={() => console.log('Shoe clicked:', shoe)}>
                <View
                  style={[
                    styles.gridItem,
                    index % 2 !== 0 ? styles.oddGridItem : {},
                  ]}>
                  <Image source={{uri: shoe.image}} style={styles.shoeImage} />
                  <Text>{`Brand: ${shoe.brand}`}</Text>
                  <Text>{`Sizes: ${shoe.sizes.join(', ')}`}</Text>
                  <Text>{`Cost: $${shoe.cost}`}</Text>
                  <Button title="Delete" onPress={() => deleteShoe(shoe.id)} />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ShoesList;
