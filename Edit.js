import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { modules } from './Data';

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    input: {
        borderWidth: 1,
        marginVertical: 5,
        padding: 5
    },
    buttonContainer: {
        marginTop: 20
    },
    buttonSpacing: {
        marginBottom: 10
    },
});

const Edit = ({ navigation ,route}) => {
    const { index } = route.params;
    const [code, setCode] = useState(modules[index].code);
    const [grade, setGrade] = useState(modules[index].grade);

    const handleSave = () => {
        if (!code || !grade) {
            alert('Please enter both module code and grade');
            return;
        }
        modules[index] = { code, grade };
        navigation.navigate('Home');
    };

    const handleDelete = () => {
        Alert.alert('Confirm Deletion', 'Are you sure you want to delete this module?', [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Yes',
                onPress: () => {
                    modules.splice(index, 1);
                    navigation.navigate('Home');
                },
            },
        ]);
    };

    return (
        <View style={styles.container}>
            <Text>Module Code:</Text>
            <TextInput style={styles.input} value={code} onChangeText={setCode} />
            <Text>Grade:</Text>
            <TextInput style={styles.input} value={grade} onChangeText={setGrade} />
            <View style={styles.buttonContainer}>
                <View style={styles.buttonSpacing}>
                    <Button title="Save" onPress={handleSave} />
                </View>
                <View style={styles.buttonSpacing}>
                    <Button title="Delete" onPress={handleDelete} />
                </View>
            </View>
        </View>
    );
};



export default Edit;
