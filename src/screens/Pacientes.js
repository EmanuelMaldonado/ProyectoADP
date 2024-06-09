import * as React from 'react';
import * as RN from 'react-native';
import { useNavigation } from '@react-navigation/native';
import appfirebase from '../config/fb';
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoct} from 'firebase/firestore';
import { useEffect, useState } from 'react';  

const db = getFirestore(appfirebase)
export default function Pacientes(props) {
  const navigation = useNavigation();
  const[lista, setLista] = React.useState([]);

  useEffect(() => {
    const getLista = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Pacientes'));
        const docs = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data(); // Get the document data as an object
          docs.push({
            id: doc.id,
            Nombre: data.Nombre,
            apellido: data.apellido,
            edad: data.edad,
            sexo: data.sexo,
            fechaNacimiento: data.fechaNacimiento,
            telefono: data.telefono,
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
          
        <RN.TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('AddPaciente')}>
          <RN.Text style={styles.Texto}>Crear</RN.Text>
        </RN.TouchableOpacity>

          {lista.map((paciente) => (
            <RN.TouchableOpacity key={paciente.id} style={styles.inputContainer} 
            onPress={() => props.navigation.navigate('ViewPaciente', {Paciente: paciente.id})}>
              <RN.Text key={paciente.id} style={styles.title}>
              {paciente.Nombre}{paciente.apellido}
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
