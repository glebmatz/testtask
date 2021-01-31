import { Platform, StyleSheet } from 'react-native';
import { constants } from './constants';

export const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: constants.wrapperHorizontalPadding,
        paddingTop: constants.wrapperTopPadding
    },
    titleWrapper: {
        marginBottom: constants.marginL,
    },
    titleText: {
        ...constants.typography.h1
    },
    inputWrapper: {
        marginBottom: constants.marginM
    },
    input: {
        borderBottomColor: '#ababab',
        borderBottomWidth: 1,
        color: '#333',
        fontSize: 16,
        height: Platform.OS == 'ios' ? 44 : undefined
    },
    inputFocused: {
        borderBottomColor: '#1a51eb'
    },
    inputLabel: {
        ...constants.typography.c1
    },
    inputErrorText: {
        ...constants.typography.c1,
        color: '#c4102b',
        marginTop: constants.marginS
    },
    buttonWrapper: {
        marginBottom: constants.marginL,
        alignItems: 'center'
    },
    button: {
        borderRadius: 24,
        width: 200,
        backgroundColor: '#1a51eb',
        height: 50,
        justifyContent: 'center'
    },
    buttonDisabled: {
        opacity: .3
    },
    buttonText: {
        ...constants.typography.h2,
        textAlign: 'center'
    },
    textRow: {
        paddingVertical: 12,
        borderBottomColor: '#ebebeb',
        borderBottomWidth: 1
    },
    rowTitle: {
        ...constants.typography.h2,
        color: '#7a7a7a',
        fontWeight: 'normal',
        marginBottom: constants.marginXS
    },
    rowText: {
        ...constants.typography.p,
    }
})