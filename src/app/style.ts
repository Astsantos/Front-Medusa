//Tela inicial//
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },

    header: {
        backgroundColor: '#B00D58',
        height: '35%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },

    socialButton: {
        padding: 10,
    },

    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 40,
        alignItems: 'center',
        gap: 30,
    },

    headerTitle: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: 'bold',
    },

    formContainer: {
        flex: 1,
        padding: 30,
        justifyContent: 'center',
    },
    
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#A0A0A0',
        color: '#FFFFFF',
        marginBottom: 25,
        paddingVertical: 10,
        fontSize: 16,
    },

    button: {
        backgroundColor: '#B00D58',
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 20,
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },

//Tela de cadastro//
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#A0A0A0',
        marginBottom: 25,
    },

    passwordInput: {
        flex: 1,
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },

    linkButton: {
        marginTop: 20,
        alignItems: 'center',
    },

    linkText: {
        color: '#A0A0A0',
        fontSize: 14,
    },


//telas de identidade e rosto//
  containerVerificacao: {
        flex: 1,
        backgroundColor: '#E5E5E5',
    },

    headerVerificacao: {
        backgroundColor: '#B00D58',
        height: '35%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
        paddingHorizontal: 20,
    },

  headerTitleVerificacao: {
        color: '#FFFFFF',
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    contentVerificacao: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
    },

    iconContainerVerificacao: {
        marginBottom: 30,
    },

    descriptionVerificacao: {
        color: '#333333',
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 40,
        lineHeight: 18,
    },

    buttonVerificacao: {
        backgroundColor: '#B00D58',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 25,
    },
    
    
});