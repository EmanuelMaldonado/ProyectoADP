import * as React from 'react';
import * as RN from 'react-native';
import appfirebase from '../config/fb';
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoct} from 'firebase/firestore';
import {useNavigation} from '@react-navigation/native';

const db = getFirestore(appfirebase)
export default function AddCitas() {
    const navigation = useNavigation();

    const initialState = {
        Paciente: '',
        Observaciones: '',
        FechaCita: '',
        HoraCita: '',
        Doctor: '',
    }

    const [State, setState] = React.useState(initialState);
    const HandleChangeText = (value, name) => {
        setState({...State, [name]:value});
    }

    const saveCita = async () => {
        try {
          await addDoc(collection(db, 'Citas'), {
            ...State
          });
          navigation.navigate('Citas');
          console.log('Documento agregado');
        } catch (error) {
          console.error('Error adding patient:', error);
        }
      };

      
    return (
        <RN.View style={styles.container}>
            <RN.Text style={styles.title}>Agregar Cita</RN.Text>
            <RN.TextInput 
                onChangeText={(value)=>HandleChangeText(value, 'Paciente')}
                value={State.Paciente}
                placeholder="Paciente"
                style={styles.inputContainer}
            />
            <RN.TextInput
                onChangeText={(value)=>HandleChangeText(value, 'Observaciones')}
                value={State.Observaciones}
                placeholder="Observaciones"
                style={styles.inputContainer}
            />
            <RN.TextInput
                onChangeText={(value)=>HandleChangeText(value, 'FechaCita')}
                value={State.FechaCita}
                placeholder="Fecha DeCita"
                style={styles.inputContainer}
                keyboardType='numeric'
            />
            <RN.TextInput
                onChangeText={(value)=>HandleChangeText(value, 'HoraCita')}
                value={State.HoraCita}
                placeholder="Hora De Cita"
                style={styles.inputContainer}
            />
            <RN.TextInput
                onChangeText={(value)=>HandleChangeText(value, 'Doctor')}
                value={State.Doctor}
                placeholder="Doctor"
                style={styles.inputContainer}
            />
            <RN.TouchableOpacity style={styles.boton} onPress={saveCita}>
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
