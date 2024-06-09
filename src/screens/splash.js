
import * as React from 'react';
import R, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import * as RN from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login'); 
        }, 2000); 
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/inicio.png')}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
})

export default SplashScreen;
