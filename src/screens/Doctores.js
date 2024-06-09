import * as React from 'react';
import * as RN from 'react-native';
import { useNavigation } from '@react-navigation/native';
import appfirebase from '../config/fb';
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoct} from 'firebase/firestore';
import { useEffect, useState } from 'react';  

const db = getFirestore(appfirebase)
export default function Doctores(props) {
  const navigation = useNavigation();
  const[lista, setLista] = React.useState([]);

  useEffect(() => {
    const getLista = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Doctores'));
        const docs = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data(); // Get the document data as an object
          docs.push({
            id: doc.id,
            NombreD: data.NombreD,
            apellidoD: data.apellidoD,
            edadD: data.edadD,
            cargoD: data.cargoD,
          });
        });
        setLista(docs);
      } catch (error) {
        console.error(error);
      }
    };
    getLista();
  }, [lista]);
  



  return (
        
        <RN.View style={styles.container}>
          
        <RN.TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('AddDoctor')}>
          <RN.Text style={styles.Texto}>Crear</RN.Text>
        </RN.TouchableOpacity>

          {lista.map((Doctores) => (
            <RN.TouchableOpacity key={Doctores.id} style={styles.inputContainer} 
            onPress={() => props.navigation.navigate('ViewDoctores', {Doctores: Doctores.id})}>
              <RN.Text key={Doctores.id} style={styles.title}>
              {Doctores.NombreD}{Doctores.apellidoD}
              </RN.Text>
            </RN.TouchableOpacity>
          ))} 
        </RN.View>
  )
}


const styles = RN.StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#fff',
      alignItems:'center',
      paddingTop: 20,
  },
  title:{
      fontSize:19,
      fontWeight:'700',
      
  },
  inputContainer:{
      width:'90%',
      padding:15,
      marginVertical:2,
      borderWidth:1,
      borderColor:'#000',
      borderRadius:6,
  },
  boton:{
    width:'20%',
    height:50,
    backgroundColor:'#000',
    color:'#fff',
    borderRadius:20,
    marginVertical:10,
    verticalAlign:'center',
  },
  Texto:{
    flex:1,
    color:'#fff',
    textAlign:'center',
    textAlignVertical:'center',
    fontSize:20,
  }
})
