import { View, Text } from 'react-native'
import React from 'react'
import { Input } from '@rneui/themed'
import { useState } from 'react'

type Props = {
    label: string;
    value?: number;
    onInputChange?: (value: number) => void;
};

const InputWithLabel = ({ label, value, onInputChange }: Props) => {

    const [inputValue, setInputValue] = useState(0);

    const handleChange = (event: any) => {
        if(event.target.value==null){
            event.target.value=0
        }
        setInputValue(event.target.value); // Update local state
        onInputChange(Number(event.target.value)); // Pass data to parent component
    };

    return (
        <View style={{flex:1, flexDirection:'row',alignItems:'center'}}>
            <Text style={{ width: 500, fontSize: 18 }}>{label} :</Text>
            {value
                ? <Input placeholder='input' containerStyle={{ width: 150 }} value={value.toString()} readOnly keyboardType='numeric' />
                : <Input placeholder='input' containerStyle={{ width: 150 }} keyboardType='numeric' value={inputValue.toString()} onChange={handleChange} />}

        </View>
    )
}

export default InputWithLabel