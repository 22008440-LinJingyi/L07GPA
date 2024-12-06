import React from 'react';
import { FlatList, View, Text, Button, StyleSheet, Alert } from 'react-native';
import { modules, gradePoints } from './Data';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "#DBDCDA"
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
        paddingVertical: 10,
        borderBottomWidth: 1,

    },
    itemText: {
        fontSize: 14,
        width: 100,
    },
});
const Home = ({ navigation }) => {
    const calculateGPA = () => {
        const totalPoints = modules.reduce((sum, item) => sum + gradePoints[item.grade], 0);
        const gpa = (totalPoints / modules.length).toFixed(2);
        Alert.alert('Overall GPA', `Your GPA is ${gpa}`);
    };

    const renderHeader = () => (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Module</Text>
        </View>
    );

    const renderItem = ({ item, index }) => (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>{item.code}</Text>
            <Text style={styles.itemText}>{item.grade}</Text>
            <Button title="Edit" onPress={() => navigation.navigate('Edit', { index })} />
        </View>
    );

    return (
        <View style={styles.container}>
            <Button title="Add Module" onPress={() => navigation.navigate('Add')} />
            <FlatList
                data={modules}

                ListHeaderComponent={renderHeader}
                renderItem={renderItem}
            />
            <Button title="Calculate GPA" onPress={calculateGPA} />
        </View>
    );
};



export default Home;
