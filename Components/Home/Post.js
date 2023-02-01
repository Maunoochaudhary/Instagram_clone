import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,

} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Ionicons';

const Post = ({item}) => {
  console.log(item);
  return (
    <View>
      <View style={styles.divider}></View>
      <PostHeader item={item} />
      <PostImage item={item} />
      <PostFooter item={item} />
      <Likes item={item}/>
      <Caption item={item}/>
      <CommentSection item={item}/>
      <Comments item={item}/>
      
    </View>
  );
};

const PostHeader = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <View
            style={{borderRadius: 50, borderWidth: 2, borderColor: '#ff5214'}}>
            <Image
              source={{uri: item.profie_picture}}
              style={{height: 40, width: 40, borderRadius: 50, margin: 2}}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        <View style={{justifyContent: 'center', marginLeft: 5}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>{item.user}</Text>
        </View>
      </View>
      <View style={{justifyContent: 'center'}}>
        <Icon name="dots-vertical" size={28} color="black"  />
      </View>
    </View>
  );
};

const PostImage = ({item}) => {
  return (
    <Image
      source={{uri: item.imageurl}}
      style={{width: '100%', height: 500, marginTop: 2}}
    />
  );
};
const PostFooter = ({item}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:10}}>
      <View style={{flexDirection: 'row'}}>
      <TouchableOpacity>
      <Icons
          name="heart-outline"
          size={28}
          color="black"
          style={{marginHorizontal:6, marginVertical: 6}}
        />
      </TouchableOpacity>
        
        <TouchableOpacity>
        <Icons
          name="chatbubble-outline"
          size={28}
          color="black"
          style={{marginHorizontal:10, marginVertical: 6}}
        />
        </TouchableOpacity>
         <TouchableOpacity>
         <Icons
          name="paper-plane-outline"
          size={28}
          color="black"
          style={{marginHorizontal:10, marginVertical: 6}}
        />
         </TouchableOpacity>
        
      </View>
      <TouchableOpacity style={{marginRight: 5}}>
        <Icons
          name="bookmark-outline"
          size={28}
          color="black"
          style={{marginVertical:6}}
        />
      </TouchableOpacity>
    </View>
  );
};

const Likes = ({item})=>{
     return(
          <View style={{marginHorizontal:16}}>
               <Text style={{fontWeight:'bold',color:'black'}}>{item.likes} likes</Text>
          </View>
     )
}
const Caption = ({item})=>{
     return (
          <View style={{marginHorizontal:16}}>
               <Text style={{color:'black'}}>
                    <Text style={{fontWeight:'bold'}}>{item.user}</Text>
                    <Text>{item.caption}</Text>
               </Text>
          </View>
     )
}
const CommentSection = ({item}) =>{
     return(
          <View style={{marginHorizontal:16}}>
               <Text>View {item.comments.length>1?'All':''} {item.comments.length} {item.comments.length>1?'comments':'comment'}</Text>
          </View>
     )
}
const Comments = ({item})=>{
     return (
          <View style={{marginBottom:20}}>
               {item.comments.map((comment)=>{
                    return(
                         <View style={{marginHorizontal:16}}>
                              <Text style={{color:'black'}}>
                                 <Text style={{fontWeight:'bold'}}>{comment.user}:</Text>
                                 <Text>{comment.comment}</Text>
                              </Text>
                         </View>
                    )
               })}
          </View>
     )
}

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: 'gray',
    borderWidth: 0.5,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    marginHorizontal:10
  },
});

export default Post;
