import React, {useState} from 'react';
import {View, Text, TextInput, Button, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ShoesListImage} from '../../assets';
import {styles} from '../../styles/Admin';
import {Shoe} from '../../common/interfaces';

interface AddShoesProps {
  addShoe: (shoe: Shoe) => void;
}

const EditShoesList: React.FC<AddShoesProps> = ({addShoe}) => {
  const [brand, setBrand] = useState<string>('');
  const [sizes, setSizes] = useState<string>('');
  const [cost, setCost] = useState<string>('');
  const [image, setImage] = useState<string>('');

  const navigation = useNavigation();

  const handleAddShoe = () => {
    if (brand && sizes && cost) {
      const newShoe: Shoe = {
        id: Date.now().toString(),
        brand,
        sizes: sizes.split(',').map(size => size.trim()),
        cost: parseFloat(cost),
        image,
      };

      addShoe(newShoe);
      setBrand('');
      setSizes('');
      setCost('');
      setImage('');
      navigation.navigate('ShoesList' as never);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={ShoesListImage}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.addShoeDetail}>
          <Text style={styles.mainText}>Add Shoe Details</Text>

          <TextInput
            placeholder="Brand"
            value={brand}
            onChangeText={text => setBrand(text)}
            style={styles.textField}
          />

          <TextInput
            placeholder="Sizes (comma-separated)"
            value={sizes}
            onChangeText={text => setSizes(text)}
            style={styles.textField}
          />

          <TextInput
            placeholder="Cost"
            value={cost}
            onChangeText={text => setCost(text)}
            keyboardType="numeric"
            style={styles.textField}
          />

          <TextInput
            placeholder="Image URL (optional)"
            value={image}
            onChangeText={text => setImage(text)}
            style={styles.textField}
          />
          <View style={styles.button}>
            <Button title="Add Shoe" onPress={handleAddShoe} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default EditShoesList;
