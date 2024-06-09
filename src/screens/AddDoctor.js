import * as React from 'react';
import * as RN from 'react-native';
import appfirebase from '../config/fb';
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoct} from 'firebase/firestore';
import {useNavigation} from '@react-navigation/native';

const db = getFirestore(appfirebase)
export default function AddDoctor() {
    const navigation = useNavigation();

    const initialState = {
        NombreD: '',
        apellidoD: '',
        edadD: '',
        cargoD: '',
    }

    const [State, setState] = React.useState(initialState);
    const HandleChangeText = (value, name) => {
        setState({...State, [name]:value});
    }

    const saveDoctor = async () => {
        try {
          await addDoc(collection(db, 'Doctores'), {
            ...State
          });
          navigation.navigate('Doctores');
          console.log('Documento agregado');
        } catch (error) {
          console.error('Error adding Doctor:', error);
        }
      };

      
    return (
        <RN.View style={styles.container}>
            <RN.Text style={styles.title}>Agregar Doctor</RN.Text>
            <RN.TextInput 
                onChangeText={(value)=>HandleChangeText(value, 'NombreD')}
                value={State.NombreD}
                placeholder="Nombre"
                style={styles.inputContainer}
            />
            <RN.TextInput
                onChangeText={(value)=>HandleChangeText(value, 'apellidoD')}
                value={State.apellidoD}
                placeholder="Apellido"
                style={styles.inputContainer}
            />
            <RN.TextInput
                onChangeText={(value)=>HandleChangeText(value, 'edadD')}
                value={State.edadD}
                placeholder="Edad"
                style={styles.inputContainer}
                keyboardType='numeric'
            />
            <RN.TextInput
                onChangeText={(value)=>HandleChangeText(value, 'cargoD')}
                value={State.cargoD}
                placeholder="Cargo"
                style={styles.inputContainer}
            />
            <RN.TouchableOpacity style={styles.boton} onPress={saveDoctor}>
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
