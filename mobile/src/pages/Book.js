import React, { useState } from 'react';
import { SafeAreaView, Alert, StyleSheet, TouchableOpacity, AsyncStorage, Text } from 'react-native';
import DatePicker from 'react-native-datepicker'

import api from '../services/api';

export default function Book({ navigation }) {
    const [date, setDate ] = useState('');
    const id = navigation.getParam('id');

    async function handleSubmit() {
        const user_id = await AsyncStorage.getItem('user');

        await api.post(`/spots/${id}/bookings`, {
            date
        }, {
            headers: { user_id }
        })

        Alert.alert('Solicitação de reserva enviada.');

        navigation.navigate('List');
    }

    function handleCancel() {
        navigation.navigate('List');
    }

    return (

        <SafeAreaView style={styles.container}>
            <Text style={styles.label}>DATA DE INTERESSE *</Text>

        
        <DatePicker
        style={styles.datePicker}
        date={date}
        mode="datetime"
        placeholder="Qual data você quer reservar?"
        format={`DD-MM-YYYY (h:mm)`}
        locale="pt_BR"
        minDate="2019-09-10"
        maxDate="2021-01-01"
        confirmBtnText="Confirmar"
        cancelBtnText="Cancelar"
        showIcon={false}
        onDateChange={setDate}
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Solicitar reserva</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCancel} style={[styles.button, styles.cancelButton]}>
            <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
container: {
    margin: 30,
}, 

label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
    marginTop: 30,
},

datePicker: {
    borderColor: '#ddd',
    width: '100%',
    marginBottom: 20,
    borderRadius: 2,
    borderWidth: 1
}, 

button: {
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
},

cancelButton: {
    backgroundColor: '#ccc',
    marginTop: 10,
},

buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
}

});