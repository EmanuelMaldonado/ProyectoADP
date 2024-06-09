import * as React from 'react';
import * as RN from 'react-native';
import appfirebase from '../config/fb';
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoct} from 'firebase/firestore';
import {useNavigation} from '@react-navigation/native';

const db = getFirestore(appfirebase)
export default function AddPaciente() {
    const navigation = useNavigation();

    const initialState = {
        Nombre: '',
        apellido: '',
        edad: '',
        sexo: '',
        fechaNacimiento: '',
        telefono: '',
    }

    const [State, setState] = React.useState(initialState);
    const HandleChangeText = (value, name) => {
        setState({...State, [name]:value});
    }

    const savePasiente = async () => {
        try {
          await addDoc(collection(db, 'Pacientes'), {
            ...State
          });
          navigation.navigate('Pacientes');
          console.log('Documento agregado');
        } catch (error) {
          console.error('Error adding patient:', error);
        }
      };

      
    return (
        <RN.View style={styles.container}>
            <RN.Text style={styles.title}>Agregar Paciente</RN.Text>
            <RN.TextInput 
                onChangeText={(value)=>HandleChangeText(value, 'Nombre')}
                value={State.Nombre}
                placeholder="Nombre"
                style={styles.inputContainer}
            />
            <RN.TextInput
                onChangeText={(value)=>HandleChangeText(value, 'apellido')}
                value={State.apellido}
                placeholder="Apellido"
                style={styles.inputContainer}
            />
            <RN.TextInput
                onChangeText={(value)=>HandleChangeText(value, 'edad')}
                value={State.edad}
                placeholder="Edad"
                style={styles.inputContainer}
                keyboardType='numeric'
            />
            <RN.TextInput
                onChangeText={(value)=>HandleChangeText(value, 'sexo')}
                value={State.sexo}
                placeholder="Sexo"
                style={styles.inputContainer}
            />
            <RN.TextInput
                onChangeText={(value)=>HandleChangeText(value, 'fechaNacimiento')}
                value={State.fechaNacimiento}
                placeholder="Fecha de Nacimiento"
                style={styles.inputContainer}
                keyboardType='numeric'
            />
            <RN.TextInput
                onChangeText={(value)=>HandleChangeText(value, 'telefono')}
                value={State.telefono}
                placeholder="Telefono"
                style={styles.inputContainer}
                keyboardType='numeric'
            />
            <RN.TouchableOpacity style={styles.boton} onPress={savePasiente}>
                <RN.Text style={styles.Texto}>Agregar</RN.Text>
            </RN.TouchableOpacity>
        </RN.View>
    )
}

const styles = RN.StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center'
    },
    title:{
        fontSize:24,
        fontWeight:'700',
    },
    inputContainer:{
        width:'90%',
        padding:13,
        marginVertical:6,
        borderWidth:1,
        borderColor:'#ddd',
        borderRadius:6,
    },
    boton:{
        width:'30%',
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
