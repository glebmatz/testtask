import React, { useState } from 'react';
import { observer } from 'mobx-react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';
import { mainStyles } from '../styles';
import { store } from '../store/mainStore';
import { numberWithSpaces } from '../utils';
import { Row } from '../components/Row';
import { Button } from '../components/Button';


const MainScreen = observer(() => {
    const [inputFocused, setInputFocused] = useState(false);

    const onFocus = () => setInputFocused(true);

    const onBlur = () => setInputFocused(false);

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={mainStyles.wrapper}>
                <View style={mainStyles.titleWrapper}>
                    <Text style={mainStyles.titleText}>Сумма N простых чисел</Text>
                </View>
                <View style={mainStyles.inputWrapper}>
                    <Text style={mainStyles.inputLabel}>Введите количество чисел (до 10 000)</Text>
                    <TextInput 
                        style={[
                            mainStyles.input,
                            inputFocused && mainStyles.inputFocused
                        ]}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onChangeText={store.setLimit}
                        value={store.limit}
                        keyboardType='number-pad'
                    />
                    {
                        store.limitError &&
                        <Text style={mainStyles.inputErrorText}>{store.limitError}</Text>
                    }
                </View>
                <View style={mainStyles.buttonWrapper}>
                    <Button 
                        disabled={!store.isComputeAvailable}
                        onPress={store.compute}
                        loading={store.computeLoading}
                        title='Рассчитать'
                    />
                </View>
                <View>
                    <Row 
                        title='Простые числа:'
                        text={store.primes.join(', ')}
                        numberOfLines={1}
                    />
                    <Row 
                        title='Сумма простых чисел:'
                        text={numberWithSpaces(store.sum)}
                        numberOfLines={1}
                    />
                </View>
            </SafeAreaView>
        </>
    )
});

export default MainScreen;