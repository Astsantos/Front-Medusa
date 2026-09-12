import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Feather, Entypo } from '@expo/vector-icons';
import { styles } from './style';

export default function BluetoothOffScreen() {

  const handleAtivarBluetooth = () => {
    console.log('Tentando ativar o Bluetooth');
  };

  return (
    <View style={styles.containerVerificacao}>

      <View style={styles.btTopBar}>
        <Entypo name="menu" size={24} color="#1A1A1A" />
        <Text style={styles.btTopBarTitle}>Conectar dispositivos</Text>
        <Feather name="plus-circle" size={24} color="#1A1A1A" />
      </View>

      <View style={styles.btAlertBanner}>
        <MaterialCommunityIcons name="alert-circle" size={20} color="#C0392B" />
        <Text style={styles.btAlertText}>Ligue o bluetooth para usar!</Text>
      </View>

      <View style={styles.btCircleContainer}>
        <View style={styles.btCircle}>
          <MaterialCommunityIcons name="eye-outline" size={70} color="#B00D58" />
        </View>
      </View>

      <View style={styles.contentVerificacao}>
        <Text style={styles.descriptionVerificacao}>
          Seu Bluetooth está desligado. Ative-o para conectar ao seu dispositivo Medusa.
        </Text>

        <TouchableOpacity style={styles.buttonVerificacao} onPress={handleAtivarBluetooth}>
          <Text style={styles.buttonText}>Ativar Bluetooth</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}