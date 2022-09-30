import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FirstContext } from '../../Store/Context/FirstContext';



export default FirstScreen = (props) => {
    const { state, addValue, subValue } = useContext(FirstContext)
    console.log(state)
    const onAddPressed = () => {
        addValue(1)
    }
    const onSubPressed = () => {
        subValue(1)
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onAddPressed()} >
                <Text style={{ fontSize: 50, fontWeight: '700',borderWidth:3 }}>+</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 50, fontWeight: '700' }}>{state.value}</Text>
            <TouchableOpacity onPress={() => onSubPressed()} >
                <Text style={{ fontSize: 50, fontWeight: '700',borderWidth:3 }}>-</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
