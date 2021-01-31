import React from 'react';
import { Text, View } from 'react-native';
import { mainStyles } from '../styles';

export const Row = ({
    title,
    text,
    numberOfLines
}) => (
    <View style={mainStyles.textRow}>
        <Text style={mainStyles.rowTitle}>{title}</Text>
        <Text style={mainStyles.rowText} numberOfLines={numberOfLines}>{text}</Text>
    </View>
)