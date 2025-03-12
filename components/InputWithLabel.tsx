import { Text, View } from "react-native"; // Import TextInput
import { Input } from "@rneui/themed"; // Import Input
import React, { useState } from "react"; // Import useState

type Prop = {
    label: string;
    value?: number;
    onInputChange?: (value: number) => void;
}

const InputWithLabel = ({ label, value, onInputChange }: Prop) => {
    const [inputValue, setInputValue] = useState(value ? value.toString() : '');

    const handleChange = (text: string) => { 
        setInputValue(text);
        if (onInputChange) {
            onInputChange(Number(text));
        }
    };

    return (
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 18 }}>{label} :</Text>
                {value !== undefined // Check for undefined to handle initial render
                    ? <Input placeholder='input' containerStyle={{ width: 120 }} value={value.toString()} readOnly keyboardType='numeric' />
                    : <Input placeholder='input' containerStyle={{ width: 120 }} keyboardType='numeric' value={inputValue} onChangeText={handleChange} />}
            </View>

    );
};

export default InputWithLabel;