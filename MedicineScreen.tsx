import React from 'react'
import { Text, Button, Image, View, Pressable, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({  
    heading: {  
      fontSize: 14,  
      fontWeight: '600',  
      color:'#000000',
      // marginBottom: 13,
      marginTop:  10
      
    },  
    card: {  
      // color:'black',
      backgroundColor: 'white',  
      borderRadius: 8, 
      // paddingVertical: 45,  
      // paddingHorizontal: 25,  
      width: '90%',  
      marginVertical: 20,  
      marginHorizontal:20,
    },  
    shadowProp: {  
      shadowOffset: {width: -2, height: 4},  
      shadowColor: '#00000029',  
      shadowOpacity: 2,  
      shadowRadius: 5,  
    }, 
    lineStyle:{
      borderWidth: 1,
      borderColor:'#00000029',
      // margin:10,
  } ,
  button: {
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderTopRightRadius:1,
    borderBottomLeftRadius:1,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#5E5E5E',
    // marginHorizontal:80,
    width:130
    
  },
  showFavButton:{
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#F5F5F5',
    borderTopRightRadius:1,
    borderBottomLeftRadius:1,
    // marginHorizontal:80,
    width:130
  },
  prescrButton:{
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 3,
    borderTopRightRadius:1,
    borderBottomLeftRadius:1,
    backgroundColor: '#F5F5F5',
    alignItems:'center',
    // marginHorizontal:80,
    width:180
  },
  addButton:{
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderColor:'#10C4D5',
    elevation: 3,
    backgroundColor: 'white',
    borderWidth:1,
     width:180
  }
  });
const MedicineScreen = ({navigation}) => {
  return (
    <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={{height:70, width:'100%', flexDirection:'row' }}>

      <View style={{marginVertical:10, marginHorizontal:5}}>
        <Pressable style={styles.button} >
      <Text style={{color:'white'}}>Saved Templates</Text>
    </Pressable>
      </View>
      <View style={{marginVertical:10,marginHorizontal:5}}>
        <Pressable style={styles.showFavButton} >
      <Text style={{color:'black'}}>Show Favourites</Text>
    </Pressable>
      </View>
      <View style={{ marginVertical:10, marginHorizontal:5}}>
        <Pressable style={[styles.prescrButton]} >
      <Text style={{color:'black',}}>Prescription Settings</Text>
    </Pressable>
      </View>
      <View style={{ marginVertical:10, marginHorizontal:5}}>
        <Pressable style={styles.prescrButton} >
      <Text style={{color:'black',}}>Preview</Text>
    </Pressable>
      </View>
      </View>
      </ScrollView>
      {/* <View style={{alignItems: 'center'}}> */}
        <Pressable style={[styles.addButton,{alignSelf:'center'}]} onPress={()=>{navigation.navigate("new")}}>
          <View style={{height:25,width:'100%',flexDirection:'row',}}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPuz4NSCRqe-erPz6Np-a85_uxlPY35Ef6Gg&usqp=CAU' }}
            style={{
                marginLeft: 20,  width: 20, height: 20, borderRadius: 50
            }}
        />
          <Text style={{color:'#ACACAC', fontFamily:'roboto'}}> ADD MEDICINE</Text>
          </View>
      
    </Pressable>
      <View style={[styles.card, styles.shadowProp]}> 
      <View style={{ paddingHorizontal:20}}>
      <View style={{height:50,width:'100%',flexDirection:'row',}}>
      <View style={{height:'100%',width:'80%'}}>
      <View>  
        <Text numberOfLines={2} style={styles.heading}>  
        MOXIKIND CV 625MG TAB 
        </Text>  
        <Text numberOfLines={2} style={{color:'#747474'}}>
          Per Oral - After Food
          </Text>
      </View>
      </View>
      <View style={{height:'100%',width:'20%'}}>
      <View>  
        <Text style={styles.heading}>  
        1-0-1
        </Text>  
        <Text style={{color:'#747474'}}>
          5 Days
          </Text>
        </View>
        </View>
        </View>
       
        <View style={{height:50,width:'100%',flexDirection:'row'}}>
      <View style={{height:'100%',width:'80%',flexDirection:'row'}}>
      <Text style={{fontFamily:'Roboto', marginTop:15, color:'#747474'}}>  
        Allow Generics: 
        </Text>
        <Text style={{fontFamily:'Roboto', fontWeight:'bold',marginTop:15, color:'#747474'}}>  
        YES
        </Text>
      </View>
      <View style={{height:'100%',width:'20%',alignItems:'center',flexDirection:'row'}}>
        
      <Text style={{fontFamily:'Roboto'}}>  
       Refills
        </Text>
        <View style={{height:25,width:25,borderRadius:12,backgroundColor:'#73C4CC',justifyContent:'center',alignItems:'center',left:10}}>
        <Text style={{fontFamily:'Roboto', color:'white',fontSize:11,fontWeight:'bold' }}>  
        2
        </Text>
        </View>
        
        </View>
        </View>
        </View>
        <View style = {styles.lineStyle} />
        <View style={{height:60,width:'100%',flexDirection:'row'}}>
      <View style={{height:'100%',width:'75%'}}>
        <Text style={{marginLeft: 20, height:50}}>
        <Image
            source={{ uri: 'https://icons.veryicon.com/png/o/miscellaneous/blue-soft-fillet-icon/edit-173.png' }}
            style={{
                marginLeft: 20,  width: 30, height: 30, borderRadius: 50
            }}
        />
      <Text style={{paddingHorizontal: 25,}}>
        Edit
        </Text>
        </Text>
      
      </View>
      <View style={{height:'100%',width:'25%'}}>
        <Text style={{height:50}}>
        <Image
            source={{ uri: 'https://icon-library.com/images/delete-icon-png/delete-icon-png-19.jpg' }}
            style={{
                 width: 30, height: 30, borderRadius: 50
            }}
        />
      <Text style={{paddingVertical: 20}}>
        Remove
        </Text>
        </Text>
      
       
        </View>
        </View>
    

        </View>
        <Pressable>
          <View>
          <Text style={{backgroundColor:'#16656F',color:'white', textAlign:'center', borderRadius:5, marginHorizontal:20, padding:5,fontFamily:'roboto,bold'}}>PREVIEW AND SUBMIT</Text>
          </View>
        </Pressable>
        </View>
        
  )
}

export default MedicineScreen