import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { modules } from './Data';

const Add = ({ navigation }) => {
    const [code, setModCode] = useState('');
    const [grade, setGrade] = useState('');

    const handleAdd = () => {
        if (!code || !grade) {
            alert('Please enter both module code and grade');
            return;
        }
        modules.push({ code, grade });
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text>Module Code:</Text>
            <TextInput style={styles.input} onChangeText={setModCode} value={code} />
            <Text>Grade:</Text>
            <TextInput style={styles.input} onChangeText={setGrade} value={grade} />
            <Button title="Add Module" onPress={handleAdd} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 5,

    },
    input: {
        borderWidth: 1,
        marginVertical: 5,
        padding: 5 },
});

export default Add;
