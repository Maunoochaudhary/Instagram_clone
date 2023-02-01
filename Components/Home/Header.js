import React from 'react';
import {View, StyleSheet,Image, TouchableOpacity,Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
     return (
          <View style={styles.container}>
                   <TouchableOpacity>
                  <Image source={require('../../assets/images/logo.png')} resizeMode='contain' style={styles.image}/>
                  </TouchableOpacity>
          
               <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.icons}>
                         <Icon name='add-circle-outline' color='black' size={30}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icons}>
                         <Icon name='heart-outline' size={30} color='black'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icons}>
                    <View style={styles.unreadBadgh}>
                         <Text style={styles.unreadBadghText}>
                            11
                         </Text>
                    </View>
                         <Icon name='navigate-circle-outline' color='black' size={30}/>
                    </TouchableOpacity>
               </View>
          </View>
     )
     }
export default Header;
const styles = StyleSheet.create({
     container:{
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
          marginRight:20,
          marginLeft:5,
          // marginVertical:8
          marginTop:8
     },
     image:{
          width:150,
          height:50
          },
     iconContainer:{
          flexDirection:'row',
     },
     icons:{
          marginLeft:10
     },
     unreadBadgh:{
          backgroundColor:'#FF3250',
          borderRadius:25,
          alignItems:'center',
          justifyContent:'center',
          height:25,
          width:25,
          position:'absolute',
          left:15,
          bottom:20,
          zIndex:100
     },
     unreadBadghText:{
          color:'white',
          fontWeight:'600'
     }
})

{/* <View style={styles.container}>
          <TouchableOpacity>
          <Image style={styles.image} source={require('../../assets/images/header-logo.png')} resizeMode='contain'/>
          </TouchableOpacity>
                <View style={styles.headerItemContainer}>
                 <TouchableOpacity style={styles.icons}>
                    <Icon name='add-circle-outline' size={30} color='white'/>
                 </TouchableOpacity>
                 
                 <TouchableOpacity style={styles.icons}>
               
                 <Icon name='heart-outline' size={30} color='white'/>
                  
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.icons}>
                 <View style={styles.unreadBadge}>
                    <Text style={styles.unreadBadgeText}>11</Text>
                 </View>
               
                 <Icon name='navigate-circle-outline' size={30} color='white'/>
                  
                 </TouchableOpacity>
                </View> 
          </View>
     );
}

const styles = StyleSheet.create({
     container:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:20,
    alignItems:'center',
     },
     headerItemContainer:{
          flexDirection:'row',
          
     },
     image:{
          width:100,
          height:50,
     },
     icons:{
          marginLeft:10,
     },
     unreadBadge:{
          backgroundColor:'#FF3250',
          position:'absolute',
          left:15,
          bottom:18,
          borderRadius:25,
          height:25,
          width:25,
          zIndex:100,
          justifyContent:'center',
          alignItems:'center'
     },
     unreadBadgeText:{
          color:'white',
          fontWeight:'600'
     }
      */}
