import React,{useState} from 'react'
import { Image, Pressable, ScrollView, StyleSheet, Text, View,TextInput } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { RadioButton,  } from 'react-native-paper';

const styles = StyleSheet.create({  
    heading:{
        color:'#9C9B9B',
        marginHorizontal:20

    },
    backgroundCard:{
      backgroundColor: 'white', 
        height:50,
        borderBottomWidth:1,
        borderColor:'#00000029',
        elevation:8,
        margin:10
    },
     
    card: {  
      // color:'black',
      backgroundColor: 'white',  
      borderRadius: 5, 
      paddingVertical: 5,  
      paddingHorizontal: 10,  
      width: '90%',  
      marginVertical: 10,  
      marginHorizontal:20,
      height:50,
      borderBottomWidth:1,
      borderColor:'#00000029',
      elevation:5
    }, 
    addButton:{
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingVertical: 12,
        // paddingHorizontal: 10,
        borderRadius: 5,
        borderColor:'#FCCA23',
        elevation: 3,
        backgroundColor: 'white',
        borderWidth:1,
         width:160,
         marginHorizontal:20,
         marginVertical:20
        
      },
      addMedicineBtn:{
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingVertical: 12,
        // paddingHorizontal: 10,
        borderRadius: 5,
        borderColor:'#16656F',
        elevation: 3,
        backgroundColor:'#16656F',
        borderWidth:1,
         width:160,
         marginHorizontal:10,
         marginVertical:20        
      }
     })
     const DrugNameList =  [
      { label: 'Human Mixtard 30/70 IU', value: '1' },
      { label: 'Item 2', value: '2' },
      { label: 'Item 3', value: '3' },
      { label: 'Item 4', value: '4' },
      { label: 'Item 5', value: '5' },
      { label: 'Item 6', value: '6' },
      { label: 'Item 7', value: '7' },
      { label: 'Item 8', value: '8' },
    ]
    const DosageRouteList = [
      { label: 'Subcutaneous', value: '1' },
      { label: 'Item 2', value: '2' },
      { label: 'Item 3', value: '3' },
      { label: 'Item 4', value: '4' },
      { label: 'Item 5', value: '5' },
      { label: 'Item 6', value: '6' },
      { label: 'Item 7', value: '7' },
      { label: 'Item 8', value: '8' },
    ];
    const FrequencyList = [
      { label: 'Morning Before Sleep', value: '1' },
      { label: 'Item 2', value: '2' },
      { label: 'Item 3', value: '3' },
      { label: 'Item 4', value: '4' },
      { label: 'Item 5', value: '5' },
      { label: 'Item 6', value: '6' },
      { label: 'Item 7', value: '7' },
      { label: 'Item 8', value: '8' },
    ];
    const DurationList = [
      { label: '15 Days', value: '1' },
      { label: 'Item 2', value: '2' },
      { label: 'Item 3', value: '3' },
      { label: 'Item 4', value: '4' },
      { label: 'Item 5', value: '5' },
      { label: 'Item 6', value: '6' },
      { label: 'Item 7', value: '7' },
      { label: 'Item 8', value: '8' },
    ];
    const AllowRefillsList = [
      { label: 'Allow Once', value: '1' },
      { label: 'Item 2', value: '2' },
      { label: 'Item 3', value: '3' },
      { label: 'Item 4', value: '4' },
      { label: 'Item 5', value: '5' },
      { label: 'Item 6', value: '6' },
      { label: 'Item 7', value: '7' },
      { label: 'Item 8', value: '8' },
    ];
    const AllowGenerics = [
     {value:'yes'},
     {value:'no', }
    ]
const NewComponent = () => {
    const [DrugName,setDrugName]= useState(DrugNameList)
    const [DosageRoute,setDosageRoute]= useState(DosageRouteList);
    const [Frequency,setFrequency]= useState(FrequencyList );
    const [Duration,setDuration]= useState(DurationList);
    const [Instruction,setInstruction]= useState('' );
    const [AllowRefills,setAllowRefills]= useState(AllowRefillsList );
    const [value, setValue] = React.useState('yes');
  const [myObj,setObj]=React.useState({
    Name:'',
    Route:'',
    freq:'',
    dur:'',
    instr:'',
    refills:'',
    generics:'',
    
  })
 
    // const [checked, setChecked] = React.useState('first');
    
      
  return (
    <ScrollView>
    <View style={[styles.backgroundCard,{height:'100%', borderRadius:10}]}>
    <View style={{flex:1}}><Text style={[styles.heading,{marginTop:10} ]}>Drug Name</Text>
    <View style={[styles.card]}>
    <Dropdown onChange={(i)=>{setObj({
      ...myObj,Name:i.label
    })}} data={DrugName}
          maxHeight={300}
          containerStyle={{marginTop:8}}
          labelField="label"
          valueField="value"
         ></Dropdown>
    </View>
    
    <Text style={[styles.heading]}>Dosage Route</Text>
    <View style={[styles.card]}>
    <Dropdown onChange={(i)=>{setObj({
      ...myObj,Route:i.label
    });}} data={DosageRoute}
          maxHeight={300}
          containerStyle={{marginTop:8}}
          labelField="label"
          valueField="value"></Dropdown>
    </View>
    <Text style={[styles.heading]}>Frequency</Text>
    <View style={[styles.card]}>
    <Dropdown onChange={(i)=>{setObj({
      ...myObj,freq:i.label
    })}} data={Frequency}
          maxHeight={300}
          containerStyle={{marginTop:8}}
          labelField="label"
          valueField="value"></Dropdown>
    </View>
    <Text style={[styles.heading]}>Duration</Text>
    <View style={[styles.card]}>
    <Dropdown onChange={(i)=>{setObj({
      ...myObj,dur:i.label
    })}} data={Duration}
          maxHeight={300}
          containerStyle={{marginTop:8}}
          labelField="label"
          valueField="value"></Dropdown>
    </View>
    <Text style={[styles.heading]}>Instructions</Text>
    <View >
    <TextInput style={[styles.card,{height:40,}]} >
      
    </TextInput>
    </View>
    <Text style={[styles.heading]}>Allow Refills</Text>
    <View style={[styles.card]}>
    <Dropdown onChange={(i)=>{setObj({
      ...myObj,refills:i.label
    })}} data={AllowRefills}
          maxHeight={300}
          containerStyle={{marginTop:8}}
          labelField="label"
          valueField="value"></Dropdown>
    </View>
    <Text style={[styles.heading]}>Allow Generics</Text>
    <View style={{ flexDirection: 'row' }}>
    {/* <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}> */}
    <RadioButton.Group onValueChange={newValue => {setObj({
      ...myObj,generics:newValue});console.log("AllowGenerics",newValue)}} value={value}>
      <View style={{flexDirection:'row'}}>
      <View style={{marginLeft:10, flexDirection:'row',alignItems:"center"}}>
      <RadioButton value="yes" />
        <Text>Yes</Text>
        
      </View>
      <View style={{marginLeft:10, flexDirection:'row',alignItems:"center"}}>
      <RadioButton value="no" />
        <Text>No</Text>
        
      </View>
     </View>
      
    </RadioButton.Group>
    {/* <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
              <RadioButton.Item label="yes" value="yes" />
              <RadioButton.Item label="no" value="no" />
          </RadioButton.Group> */}
                  {/* <View style={{ width: "50%", flexDirection: 'row', alignItems: 'center' }}>

                    <RadioButton  value={'valueRadio'} status={valueRadio ? 'checked' : 'unchecked'}></RadioButton>
                    <Text>yes</Text>
                  </View>
                  <View style={{ width: "50%", height: 30, flexDirection: 'row', alignItems: 'center' }}>
                    <RadioButton value={'valueRadio'} status={valueRadio ? 'checked' : 'unchecked'}></RadioButton>
                    <Text>No</Text>
                  </View> */}
                </View>
    <View style={{flexDirection:'row', }}>
    <Pressable style={[styles.addButton]} >
          <View style={{height:20,width:'100%',flexDirection:'row',}}>
          <Image
            source={{ uri: 'https://www.pngitem.com/pimgs/m/186-1864298_yellow-stars-png-yellow-star-with-black-background.png' }}
            style={{
                 width: 20, height: 20, borderRadius: 50
            }}
        />
          <Text style={{color:'#FCCA23', fontFamily:'roboto', paddingLeft:2, textAlign:'center'}}>ADD TO FAVOURITES</Text>
          </View>
      
    </Pressable>

    <Pressable style={[styles.addMedicineBtn]}  onPress={()=>{console.log("my object",myObj)}}>
          <View style={{height:20,width:'100%'}}>
          <Text style={{color:'white', textAlign:'center',  fontFamily:'roboto,bold'}}>ADD MEDICINE</Text>
          </View>
        </Pressable>
        
    </View>
    </View>
    
    </View>
    </ScrollView>
    
  )
 
}

export default NewComponent