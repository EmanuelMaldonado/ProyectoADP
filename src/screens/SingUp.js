import * as React from 'react';
import R, { useState, } from 'react';
import * as RN from 'react-native';
import { useNavigation } from '@react-navigation/native';
import appfirebase from '../config/fb';
import { getAuth, createUserWithEmailAndPassword, } from "firebase/auth";
const auth = getAuth(appfirebase)


export default function SingUp() {
    const navigation = useNavigation();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const singup = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            RN.Alert.alert("Registrando", 'accediendo...')
            navigation.navigate('Login')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <RN.View style={styles.container}>
            <RN.Text style={styles.texto2}>Asilo de ancianos</RN.Text>
            <RN.Text style={styles.title}>Esperanza</RN.Text>

            <RN.TextInput
                placeholder="Email"
                style={styles.inputContainer}
                onChangeText={(text) => setEmail(text)}
            />
            <RN.TextInput
                placeholder="Contraseña"
                style={styles.inputContainer}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
            />
            <RN.TouchableOpacity style={styles.boton} onPress={singup}>
                <RN.Text style={styles.Texto}>Registrarse</RN.Text>
            </RN.TouchableOpacity>
        </RN.View>
    )
}


const styles = RN.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 20,
    },
    image: {
        width: '50',
        height: 50,
        marginVertical: 20,
    },
    inputContainer: {
        width: '90%',
        padding: 13,
        marginVertical: 6,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 6,
    },
    title: {
        fontSize: 50,
        fontWeight: '700',
        paddingBottom: 150,
    },
    texto2: {
        fontSize: 19,
        fontWeight: '700',
    },
    boton: {
        width: '40%',
        height: 50,
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: 20,
        marginVertical: 10,
        verticalAlign: 'center',
    },
    Texto: {
        flex: 1,
        color: '#fff',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
    }
})