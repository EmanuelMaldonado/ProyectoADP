import * as React from 'react';
import * as RN from 'react-native';
import appfirebase from '../config/fb';
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoct} from 'firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import { useEffect, useState } from 'react';  

const db = getFirestore(appfirebase)
export default function ViewCitas(props) {
    const navigation = useNavigation();
    const [Citas, setCitas] = useState({})

    const getOneCitas = async (id) => {
      try {
        const docRef = doc(db, 'Citas', id)
        const docsnap = await getDoc(docRef)
        setCitas(docsnap.data())
      } catch{
        console.error(error)
      }
    }

    useEffect(() => {
      getOneCitas(props.route.params.Citas)
    },[])

    const deleteCitas = async(id) => {
        await deleteDoc(doc(db, 'Citas', id))
        RN.Alert.alert('¡Cita eliminado!', 'El Cita ha sido eliminado correctamente')
        navigation.navigate('Citas')
    }



  return (
        <RN.View style={styles.container}>
                <RN.View style={styles.container2}>  
                        <RN.Text style={styles.Texto2}>Elimiar</RN.Text>
                </RN.View>
            <RN.Text style={styles.title}>Paciente:{'\n'} {Citas.Paciente}</RN.Text>
            <RN.Text style={styles.title}>Observaciones: {'\n'}{Citas.Observaciones}</RN.Text>
            <RN.Text style={styles.title}>Fecha De Cita: {'\n'}{Citas.FechaCita}</RN.Text>
            <RN.Text style={styles.title}>Hora De Cita: {'\n'}{Citas.HoraCita}</RN.Text>
            <RN.Text style={styles.title}>Doctor: {'\n'}{Citas.Doctor}</RN.Text>
                <RN.View style={styles.containerButton}>
                    <RN.TouchableOpacity style={styles.boton2} onPress={() => deleteCitas(props.route.params.Citas)}>
                        <RN.Text style={styles.TextoButton}>Elimiar</RN.Text>
                    </RN.TouchableOpacity>
                </RN.View>
        </RN.View>

  )
}


const styles = RN.StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#fff',
      alignItems:'center',
  },
  container2:{
    backgroundColor:'#fff',
    paddingBottom:50,
},
  containerButton:{
    flex:1,
    width:'100%',
    backgroundColor:'#fff',
    alignItems:'center',
    paddingTop: 5,
},
  title:{
      fontSize:19,
      fontWeight:'700',
      width:'90%',
      padding:15,
      borderWidth:1,
      borderColor:'#000',
      borderRadius:6,
  },
  boton2:{
    width:'80%',
    height:50,
    backgroundColor:'#f00',
    borderRadius:20,
    marginVertical:10,
  },
  Texto2:{
    color:'#000',
    fontSize:40,
    fontWeight:'bold',
  },
  TextoButton:{
    flex:1,
    color:'#fff',
    textAlign:'center',
    textAlignVertical:'center',
    fontSize:20,
  }
})