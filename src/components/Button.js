import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { mainStyles } from '../styles';

export const Button = ({
    title,
    disabled,
    loading,
    onPress,
}) => (
    <TouchableOpacity 
        disabled={disabled}
        onPress={onPress}
        style={[
            mainStyles.button,
            disabled && mainStyles.buttonDisabled
        ]}
        >
            {
                loading ?
                    <ActivityIndicator color='#FFF' size='large'/>
                    :
                    <Text style={mainStyles.buttonText}>{title}</Text>
            }
    </TouchableOpacity>
)