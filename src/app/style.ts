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
    
    //tela de bluetooth off (elementos extras)
    btTopBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 15,
    },

    btTopBarTitle: {
        color: '#1A1A1A',
        fontSize: 16,
        fontWeight: 'bold',
    },

    btAlertBanner: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FDEAEA',
        borderRadius: 10,
        marginHorizontal: 20,
        padding: 12,
        gap: 10,
    },

    btAlertText: {
        color: '#C0392B',
        fontSize: 13,
        flex: 1,
    },

    btCircleContainer: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20,
    },

    btCircle: {
        width: 180,
        height: 180,
        borderRadius: 90,
        backgroundColor: '#FBE4ED',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
        btSearchingText: {
        color: '#888888',
        fontSize: 13,
        marginTop: 15,
    },

// ============================================
// ADICIONAR estes estilos dentro do StyleSheet.create({...})
// do arquivo style.ts existente, ANTES do "});" final.
// (Telas: Tela Inicial, Rotas, Bluetooth off, Conectar disp., Perfil)
// ============================================

//tela inicial (home)
    homeContainer: {
        flex: 1,
        backgroundColor: '#E5E5E5',
    },

    homeTopBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingTop: 60,
        paddingHorizontal: 25,
        paddingBottom: 15,
    },

    homeQuestionText: {
        color: '#1A1A1A',
        fontSize: 20,
        fontWeight: 'bold',
        flex: 1,
        marginRight: 15,
    },

    homeSearchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginHorizontal: 25,
        marginBottom: 15,
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 12,
        gap: 10,
    },

    homeSearchInput: {
        flex: 1,
        fontSize: 14,
        color: '#333333',
    },

    homeMapArea: {
        flex: 1,
        backgroundColor: '#D9E4DD',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },

    homeMapPlaceholderText: {
        color: '#5A6B5F',
        fontSize: 14,
        marginTop: 10,
    },

//tela de rotas (lista de rotas salvas)
    routesContainer: {
        flex: 1,
        backgroundColor: '#E5E5E5',
    },

    routesHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 60,
        paddingHorizontal: 25,
        paddingBottom: 15,
    },

    routesLogo: {
        color: '#B00D58',
        fontSize: 24,
        fontWeight: 'bold',
    },

    routesProfileIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#1A1A1A',
        justifyContent: 'center',
        alignItems: 'center',
    },

    routesSearchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginHorizontal: 20,
        marginBottom: 20,
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 12,
        gap: 10,
    },

    routesSearchInput: {
        flex: 1,
        fontSize: 14,
        color: '#333333',
    },

    routesList: {
        paddingHorizontal: 20,
    },

    routeCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 15,
        marginBottom: 12,
        gap: 15,
    },

    routeCardIcon: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#FBE4ED',
        justifyContent: 'center',
        alignItems: 'center',
    },

    routeCardName: {
        color: '#1A1A1A',
        fontSize: 15,
        fontWeight: 'bold',
    },

    routeCardAddress: {
        color: '#888888',
        fontSize: 12,
        marginTop: 2,
    },

    routesBottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#1A1A1A',
        marginHorizontal: 15,
        marginBottom: 20,
        borderRadius: 30,
        paddingVertical: 14,
    },

//tela de conectar dispositivo (lista de dispositivos)
    deviceListContainer: {
        paddingHorizontal: 20,
    },

    deviceItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
        borderRadius: 15,
        padding: 15,
        marginBottom: 12,
    },

    deviceIcon: {
        marginRight: 15,
    },

    deviceName: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '600',
    },

    deviceStatus: {
        color: '#A0A0A0',
        fontSize: 12,
        marginTop: 3,
    },

//tela de perfil
    profileHeader: {
        backgroundColor: '#B00D58',
        paddingTop: 70,
        paddingBottom: 30,
        alignItems: 'center',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },

    profileAvatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },

    profileName: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },

    profileEmail: {
        color: '#E5C4D3',
        fontSize: 13,
        marginTop: 3,
    },

    profileOptions: {
        padding: 20,
    },

    profileOptionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#2A2A2A',
    },

    profileOptionLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },

    profileOptionText: {
        color: '#FFFFFF',
        fontSize: 15,
    },

    //tela de perfil (novo layout Figma)
    profileBackButton: {
        paddingTop: 60,
        paddingHorizontal: 25,
        paddingBottom: 10,
    },

    profileAvatarLarge: {
        width: 110,
        height: 110,
        borderRadius: 55,
        backgroundColor: '#B00D58',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 15,
    },

    profileNamePink: {
        color: '#B00D58',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    profileSubtitle: {
        color: '#888888',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 3,
        marginBottom: 25,
    },

    profileStatsRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 15,
        marginBottom: 30,
    },

    profileStatBox: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignItems: 'center',
    },

    profileStatNumber: {
        color: '#B00D58',
        fontSize: 20,
        fontWeight: 'bold',
    },

    profileStatLabel: {
        color: '#888888',
        fontSize: 12,
        marginTop: 3,
    },
});