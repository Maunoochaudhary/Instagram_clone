import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Users} from '../../Data/Users';
const Stories = () => {
  const [pressed, setPressed] = useState(false);
  let index;
  const[users,setUsers] = useState(Users)
  const onPressHandler = id => {
     index = Users.findIndex(item => item.id === id);

     users[index]['presses'] = true;
     setPressed(!pressed);
     console.log(users[index]);
  };
  return (
    <View style={{marginBottom: 10}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <TouchableOpacity style={{height: '80%', justifyContent: 'center'}}>
            <Image
              source={require('../../assets/images/profile.png')}
              resizeMode="contain"
              style={styles.profile}
            />
            <View style={styles.icon}>
              <Icon name="add-outline" color="white" size={15} />
            </View>
          </TouchableOpacity>
          <View style={styles.text}>
            <Text style={{color: 'black', fontSize: 12}}>Your story</Text>
          </View>
        </View>
        {users.map(user => {
          return (
            <View style={styles.container} key={user.id}>
              <TouchableOpacity
                style={{height: '80%', justifyContent: 'center'}}
                onPress={onPressHandler.bind(this, user.id)}>
                <View
                  style={[
                    styles.imageContainer,
                    {borderColor: user.presses?'gray' : '#ff5214'},
                  ]}>
                  <Image
                    source={{uri: user.image}}
                    style={styles.image}
                    resizeMode="contain"></Image>
                </View>
              </TouchableOpacity>
              <View style={styles.text}>
                <Text style={{color: user.presses?'gray':'black', fontSize: 12}}>
                  {user.username.length > 10
                    ? user.username.slice(0, 10).toLowerCase() + '...'
                    : user.username.toLowerCase()}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 90,
    height: 100,
  },
  image: {
    width: 67,
    height: 67,
    borderRadius: 50,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'gray',
    margin: 3,
  },
  imageContainer: {
    borderRadius: 50,
    borderWidth: 2,
  },
  profile: {
    width: 67,
    height: 67,
    borderRadius: 50,
  },
  text: {
    height: '20%',
    justifyContent: 'flex-end',
  },
  mainContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  icon: {
    backgroundColor: 'blue',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    width: 20,
    position: 'absolute',
    left: 48,
    top: 55,
    borderWidth: 2,
    borderColor: 'white',
  },
});

export default Stories;
