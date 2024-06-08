import * as React from 'react';
import * as RN from 'react-native';
import appfirebase from '../config/fb';
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoct} from 'firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import { useEffect, useState } from 'react';  

const db = getFirestore(appfirebase)
export default function ViewDoctores(props) {
    const navigation = useNavigation();
    const [Doctores, setDoctores] = useState({})

    const getOneDoctores = async (id) => {
      try {
        const docRef = doc(db, 'Doctores', id)
        const docsnap = await getDoc(docRef)
        setDoctores(docsnap.data())
      } catch{
        console.error(error)
      }
    }

    useEffect(() => {
      getOneDoctores(props.route.params.Doctores)
    },[])

    const deleteDoctores = async(id) => {
        await deleteDoc(doc(db, 'Doctores', id))
        RN.Alert.alert('¡Doctores eliminado!', 'El Doctores ha sido eliminado correctamente')
        navigation.navigate('Doctores')
    }



  return (
        <RN.View style={styles.container}>
                <RN.View style={styles.container2}>  
                        <RN.Text style={styles.Texto2}>Elimiar</RN.Text>
                </RN.View>
            <RN.Text style={styles.title}>Nombre:{'\n'} {Doctores.NombreD}{Doctores.apellidoD}</RN.Text>
            <RN.Text style={styles.title}>Edad: {'\n'}{Doctores.edadD}</RN.Text>
            <RN.Text style={styles.title}>Cargo: {'\n'}{Doctores.cargoD}</RN.Text>
                <RN.View style={styles.containerButton}>
                    <RN.TouchableOpacity style={styles.boton2} onPress={() => deleteDoctores(props.route.params.Doctores)}>
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