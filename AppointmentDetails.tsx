import React from 'react'
import { Text, Button, Image, View, Pressable, ScrollView, Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';

const initialAppointmentDetails={

    patientDetails:{
        Name:'Akanksha Sharma',
        dob:'12/06/1988',
        gender:'Female',
        maritalStatus:'Married',
        patientId:'BID#12345',
        address:'200/2 Green Villa, Coles Road Kumara Krupa Layout Near Panchamukhi Ganesha Temple, Basavanagudi Post Bangalore - 560001'
    },
    appointmentDetails:{
    id:'AP12345634'
    },
    vitals:{
        temperature:'96',
        bp:'120/80',
        weight:'78',
        heartRate:'86',
        spo2:'98'
    },
    chiefComplaint:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    orders:{
        labName:'Bangalore Laboratory Centre',
        labID:'2822',
        testName:'Fasting Blood sugar',
        instruction:'Get test done on empty stomach in morning',
        reason:'Diabetes'
    },
    prescription:{
        clinicLogo:'',
        prescriptionId:'2323-10',
        drugName:'MOXIKIND CV 625MG TAB ',
        dosageRoute:'Per Oral - After Food',
        frequency:'1 - 0 - 1',
        instruction:'Take 30 Minutes after food',
        duration:'5 Days',
        quantity:'10',
        generics:'Yes',
        refills:'1'


    }
   
    }


    
const styles = StyleSheet.create({  
    heading: { 
    
        fontSize: 14, 
        fontFamily:'roboto', 
        // fontWeight: '600',  
        color:'#000000',
    },
    card: {  
        // color:'black',
        // backgroundColor: 'red',  
        borderRadius: 8, 
        // borderColor:'#C4E2E5',
        // borderWidth:0.5,
        shadowColor:'#C4E2E5',
        // paddingVertical: 45,  
        // paddingHorizontal: 25,  
        width: '90%',  
        marginVertical: 20,  
        marginHorizontal:20,
        elevation:5,
      },
      prescriptioncard: {  
        // color:'black',
        backgroundColor: 'white',  
        borderRadius: 8, 
        // paddingVertical: 45,  
        // paddingHorizontal: 25,  
        width: '90%',  
        marginVertical: 20,  
        marginHorizontal:20,
        elevation:4
      },
      lineStyle:{
        borderWidth:1,
        borderColor:'#00000029',
        // margin:6,
    } ,

})

const AppointmentDetails = () =>  {
    const [appointmentData,setAppointmentData] = React.useState(initialAppointmentDetails)
    const func=(val)=>{
        setAppointmentData({
            ...appointmentData,
            appointmentDetails:{id:val}
          })
    }
    
  return (
    <ScrollView>
    <View style={{backgroundColor:'white'}}>
        <View>
        <Text style={[styles.heading,{padding:20}]}>
            Appointment Details
        </Text>
        <Text style={{fontSize:12, paddingLeft:20, fontFamily:'roboto', color:'#585858'}}>
        Appointment ID - {appointmentData.appointmentDetails.id}
        </Text>
        <View style={[styles.card]}> 
      
        <Text style={{padding:15, color:'#9C9B9B', fontFamily:'roboto, bold'}}>
        PATIENT INFORMATION
        </Text>
      <View style={{height:100,width:'100%',flexDirection:'row',}}>
        
      <View style={{height:'100%',width:'60%',}}>
      <Text style={{paddingLeft:15,color:'#9A9A9A'}}>
         Name
        </Text>
        <Text style={{paddingLeft:15, color:'#9A9A9A'}}>
        Date of Birth
        </Text>
        <Text style={{paddingLeft:15, color:'#9A9A9A'}}>
        Gender
        </Text>
        <Text style={{paddingLeft:15, color:'#9A9A9A'}}>
        Marital Status
        </Text>
        <Text style={{paddingLeft:15, color:'#9A9A9A'}}>
        Patient ID
        </Text>
      </View>
      <View style={{height:'100%',width:'40%'}}>
      <Text style={{paddingLeft:10, color:'#292929', fontFamily:'roboto, bold'}}>
        {appointmentData.patientDetails.Name}
        </Text>
        <Text style={{paddingLeft:10, color:'#292929', fontFamily:'roboto, bold'}}>
            {appointmentData.patientDetails.dob}
        </Text>
        <Text style={{paddingLeft:10, color:'#292929', fontFamily:'roboto, bold'}}>
            {appointmentData.patientDetails.gender}
        </Text>
        <Text style={{paddingLeft:10, color:'#292929', fontFamily:'roboto, bold'}}>
            {appointmentData.patientDetails.maritalStatus}
        </Text>
        <Text style={{paddingLeft:10, color:'#292929', fontFamily:'roboto, bold'}}>
            {appointmentData.patientDetails.patientId}
        </Text>
        </View>
        </View>
       
        <View style ={{padding:7}}>
        <View style = {[styles.lineStyle,]} />
        </View>
        <View>
            <Text style={{paddingLeft:15, color:'#9C9B9B', fontFamily:'roboto, bold'}}>
                ADDRESS
            </Text>
            <Text style={{padding:15 }}>
                {appointmentData.patientDetails.address}
            </Text>
        </View>
        </View>
        <Text style={{paddingLeft:20, color:'#9C9B9B', fontFamily:'roboto,bold'}}>
        PATIENT VITALS
        </Text>
        <View style={[styles.card]}> 
      <View style={{height:50,width:'100%',flexDirection:'row',paddingTop:10}}>
        
      <View style={{height:'100%', width:'50%', borderRightWidth:1, borderRightColor:'#00000029'}}>
      <Text style={{paddingLeft:15, }}>
         TEMPERATURE
        </Text>
        <Text style={{paddingLeft:15, color:'#565656',fontFamily:'roboto,bold'}}>
         {appointmentData.vitals.temperature} F
        </Text>
        
      </View>
      <View style={{height:'100%', width:'50%'}}>
      <Text style={{paddingLeft:10}}>
        BLOOD PRESSURE
        </Text>
        <Text style={{paddingLeft:10, color:'#565656',fontFamily:'roboto,bold'}}>
        {appointmentData.vitals.bp} mmhg
        </Text>
        
        </View>
        </View>
       
        <View style ={{paddingLeft:7, paddingRight:7}}>
        <View style = {[styles.lineStyle,]} />
        </View>
        <View style={{height:'auto',width:Dimensions.get('window').width,flexDirection:'row',}}>
        
      <View style={{height:'100%',width:Dimensions.get('window').width/3, borderRightWidth:1, borderRightColor:'#00000029'}}>
      <Text style={{paddingLeft:15, }}>
         WEIGHT
        </Text>
        <Text style={{paddingLeft:15,width:Dimensions.get('window').width/3, color:'#565656',fontFamily:'roboto,bold'}}>
         {appointmentData.vitals.weight} KGS
        </Text>
        
      </View>
      <View style={{height:'100%' ,width:Dimensions.get('window').width/3-16, borderRightWidth:1, borderRightColor:'#00000029'}}>
      <Text style={{paddingLeft:10}}>
        HEART RATE
        </Text>
        <Text style={{paddingLeft:10}}>
        {appointmentData.vitals.heartRate} BPM
        </Text>
        </View>
        <View style={{height:'100%'}}>
      <Text style={{paddingLeft:10}}>
        SPO2
        </Text>
        <Text style={{paddingLeft:10}}>
        {appointmentData.vitals.spo2} %
        </Text>
        </View>
        </View>
        </View>
        <Text style={{paddingLeft:20, color:'#9C9B9B', fontFamily:'roboto,bold'}}>
            CHIEF COMPLAINT
        </Text>
        <View style={[styles.card]}>
            <Text style={{padding:15}}>
                {appointmentData.chiefComplaint.toString()}
            </Text>

            </View>
        </View>
        <Text style={{paddingLeft:20, color:'#9C9B9B', fontFamily:'roboto,bold'}}>
        LABORATORY AND RADIOLOGY ORDERS
        </Text>
        <View style={[styles.card]}> 
      
       
      <View style={{height:50,width:'100%',flexDirection:'row',}}>
        
      <View style={{height:'100%',width:'60%'}}>
      <Text style={{paddingTop:20, paddingLeft:15, color:'#9C9B9B', fontFamily:'roboto,bold'}}>
         {appointmentData.orders.labName}
        </Text>
       
      </View>
      <View style={{height:'100%',width:'40%'}}>
      <Text style={{paddingTop:20, paddingLeft:10, color:'#9C9B9B', fontFamily:'roboto,bold'}}>
      Lab Order #:{appointmentData.orders.labID}
        </Text>
       
        </View>
        </View>
       
        <View style ={{paddingLeft:7,paddingRight:7}}>
        <View style = {[styles.lineStyle,]} />
        </View>
    
        <View style={{height:'auto',width:'100%',flexDirection:'row',paddingTop:10}}>
        
        <View style={{height:'100%',width:'60%', }}>
        <Text style={{paddingLeft:10, color:'#979393',textAlign:'center', fontSize:12}}>
        Test Name & Instruction
          </Text>
         
        </View>
        <View style={{height:'100%',width:'40%'}}>
        <Text style={{paddingLeft:10, color:'#979393', fontSize:12}}>
        Reason For Study
          </Text>
         
          </View>
          </View>
          <View style={[styles.prescriptioncard]}>
            <View style={{height:'auto',width:'100%', flexDirection:'row'}}>
                <View style={{height:'100%',width:'70%',padding:10}}>
                    <Text>
                   {appointmentData.orders.testName}
                    </Text>
                    <Text>
                   {appointmentData.orders.instruction}
                    </Text>
                </View>
                <View style={{height:'100%',width:'30%', flexDirection:'row',}}>
                    <Text style={{textAlign:'right'}}>
                        {appointmentData.orders.reason}
                    </Text>
                </View>
            </View>
          </View>
        
        </View>
        <Text style={{paddingLeft:20, color:'#9C9B9B', fontFamily:'roboto,bold'}}>
        PRESCRIPTION
        </Text>
        <View style={[styles.card]}> 
      
       
      <View style={{height:'auto',width:'100%',flexDirection:'row', paddingTop:20}}>
        
      <View style={{height:'100%',width:'50%'}}>
      
         {appointmentData.prescription.clinicLogo}
         <Image
            source={{ uri: 'https://www.kindpng.com/picc/m/42-423100_doctor-symbol-clipart-prescription-medical-prescription-hd-png.png' }}
            style={{
                marginLeft: 20,  width: 20, height: 30, marginTop:10,
            }}
        />
         
         {/* <i style="fa-solid fa-prescription"></i> */}
         {/* <FontAwesomeIcon icon="fa-solid fa-prescription" /> */}
     
       
      </View>
      <View style={{height:'100%',width:'50%'}}>
      <Text style={{padding:10, color:'#000000', fontFamily:'roboto,bold'}}>
      Prescription ID: {appointmentData.prescription.prescriptionId}
        </Text>
       
        </View>
        </View>
       
        <View style ={{paddingLeft:7,paddingRight:7}}>
        <View style = {[styles.lineStyle,]} />
        </View>
    
        <View style={{height:'auto',width:'100%',flexDirection:'row',}}>
        
        <View style={{height:'100%',width:'50%'}}>
        <Text style={{paddingLeft:10, paddingTop:10, color:'#979393', fontSize:12, fontFamily:'roboto, medium', textAlign:'center'}}>
        Drug Name
          </Text>
         
        </View>
        <View style={{height:'100%',width:'50%'}}>
        <Text style={{paddingLeft:10, paddingTop:10, textAlign:'center', color:'#979393', fontSize:12, fontFamily:'roboto, medium'}}>
        Frequency & Instruction
          </Text>
         
          </View>
          </View>
          <View style={[styles.prescriptioncard,]}> 
      <View style={{ paddingHorizontal:20}}>
      <View style={{height:'auto',width:'100%',flexDirection:'row',}}>
      <View style={{height:'100%',width:'50%'}}>
      <View> 
        <Text numberOfLines={2} style={styles.heading}>  
        {appointmentData.prescription.drugName} 
        </Text>  
        
      </View>
      </View>
      <View style={{height:'100%',width:'50%'}}>
      <View>  
        <Text style={[styles.heading,{textAlign:'center'}]}>  
        {appointmentData.prescription.frequency}
        </Text>  
        
        </View>
        </View>
        </View>
        <View style={{height:'auto',width:'100%',flexDirection:'row',}}>
      <View style={{height:'100%',width:'50%'}}>
      <View> 
         
        <Text numberOfLines={2} style={{color:'#747474'}}>
          {appointmentData.prescription.dosageRoute}
          </Text>
      </View>
      </View>
      <View style={{height:'100%',width:'50%'}}>
      <View>  
         
        <Text style={{color:'#747474',textAlign:'center'}}>
          {appointmentData.prescription.instruction}
          </Text>
        </View>
        </View>
        </View>
        
        </View>
        <View style = {styles.lineStyle} />
        <View style={{height:'auto',width:'100%',flexDirection:'row'}}>
      <View style={{height:'100%',width:'25%',flexDirection:'row'}}>
      <Text style={{fontFamily:'Roboto', paddingLeft:10, marginTop:15, color:'#747474'}}>  
      Duration 
        </Text>
      </View>
      <View style={{height:'100%',width:'25%',alignItems:'center',flexDirection:'row'}}>
        
      <Text style={{fontFamily:'Roboto'}}>  
      Quantity
        </Text>
       
        
        </View>
        <View style={{height:'100%',width:'25%',flexDirection:'row'}}>
      <Text style={{fontFamily:'Roboto', marginTop:15, color:'#747474'}}>  
      Generic Allowed
        </Text>
        
      </View>
      <View style={{height:'100%',width:'25%',flexDirection:'row'}}>
      <Text style={{fontFamily:'Roboto', marginTop:15, color:'#747474'}}>  
      Refill
        </Text>
        
      </View>
        </View>
        <View style={{height:'auto',width:'100%',flexDirection:'row'}}>
      <View style={{height:'100%',width:'25%',flexDirection:'row'}}>
      <Text style={[styles.heading, {marginTop:15}, {paddingLeft:10},{textAlign:'center'} ]}>  
        {appointmentData.prescription.duration} 
        </Text>
      </View>
      <View style={{height:'100%',width:'25%',flexDirection:'row'}}>
        
      <Text style={[styles.heading, {marginTop:15} ,{textAlign:'center'}]}>  
      {appointmentData.prescription.quantity}
        </Text>
       
        
        </View>
        <View style={{height:'100%',width:'25%',flexDirection:'row'}}>
      <Text style={[styles.heading, {marginTop:15} ,{textAlign:'center'}]}>  
      {appointmentData.prescription.generics} 
        </Text>
        
      </View>
      <View style={{height:'100%',width:'25%',flexDirection:'row'}}>
      <Text style={[styles.heading, {marginTop:15},{textAlign:'center'} ]}>  
      {appointmentData.prescription.refills} 
        </Text>
        
      </View>
        </View>
       
    

        
        </View>
        
        </View>
        
    </View>
    </ScrollView>
  )
}



export default AppointmentDetails
