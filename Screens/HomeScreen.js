import React from 'react';
import {View, StyleSheet,Text, ScrollView, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../Components/Home/Header';
import Post from '../Components/Home/Post';
import Stories from '../Components/Home/Stories';
import { POSTS } from '../Data/Posts';

const HomeScreen = () => {
     return (
          <SafeAreaView style={styles.container}>
               <Header/>
               <ScrollView >
               <Stories/>
                  {POSTS.map((item)=>{return(
                    <Post item = {item}/>
                  )})} 
               
               </ScrollView>

          </SafeAreaView>
     );
}

const styles = StyleSheet.create({
     container:{
          flex:1,
          backgroundColor:'white'
     }
})

export default HomeScreen;
