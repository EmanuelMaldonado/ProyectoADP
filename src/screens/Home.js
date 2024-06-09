import * as React from 'react';
import * as RN from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <RN.View style={styles.container}>
          <RN.Text style={styles.title}>Bienvenido</RN.Text>
          <RN.Text style={styles.texto2}>Doctor</RN.Text>

          <RN.TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Citas')}>
            <RN.Text style={styles.Texto}>Citas</RN.Text>
          </RN.TouchableOpacity>
          <RN.TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Doctores')}>
            <RN.Text style={styles.Texto}>Doctores</RN.Text>
          </RN.TouchableOpacity>
          <RN.TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Pacientes')}>
            <RN.Text style={styles.Texto}>Pacientes</RN.Text>
          </RN.TouchableOpacity>
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
      fontSize:50,
      fontWeight:'700', 
  },
  texto2:{
    fontSize:19,
    fontWeight:'700',
    paddingBottom:200,
  },
  boton:{
    width:'80%',
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
