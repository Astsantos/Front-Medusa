import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { MaterialCommunityIcons, Feather, Entypo } from '@expo/vector-icons';
import { styles } from './style';

const dispositivosEncontrados = [
  { id: '1', nome: 'Medusa - Chaveiro' },
  { id: '2', nome: 'Medusa - Colar' },
];

export default function ConectarDispositivoScreen({ navigation }: any) {
  const [buscando, setBuscando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setBuscando(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleConectar = (nome: string) => {
    console.log(`Conectando ao dispositivo: ${nome}`);
  };

  return (
    <View style={styles.containerVerificacao}>

      <View style={styles.btTopBar}>
        <Entypo name="menu" size={24} color="#1A1A1A" />
        <Text style={styles.btTopBarTitle}>Conectar dispositivos</Text>
        <Feather name="plus-circle" size={24} color="#1A1A1A" />
      </View>

      {buscando ? (
        <View style={styles.btCircleContainer}>
          <View style={styles.btCircle}>
            <MaterialCommunityIcons name="eye-outline" size={70} color="#B00D58" />
          </View>
          <Text style={styles.btSearchingText}>Buscando dispositivos...</Text>
        </View>
      ) : (
        <View style={styles.routesList}>
          <FlatList
            data={dispositivosEncontrados}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.routeCard} onPress={() => handleConectar(item.nome)}>
                <View style={styles.routeCardIcon}>
                  <MaterialCommunityIcons name="bluetooth" size={22} color="#B00D58" />
                </View>
                <View>
                  <Text style={styles.routeCardName}>{item.nome}</Text>
                  <Text style={styles.routeCardAddress}>Disponível para conexão</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      <View style={styles.routesBottomNav}>
        <MaterialCommunityIcons name="home" size={24} color="#B00D58" />
        <MaterialCommunityIcons name="bell" size={24} color="#B00D58" />
        <MaterialCommunityIcons name="dots-grid" size={24} color="#B00D58" />
        <MaterialCommunityIcons name="compass-outline" size={24} color="#B00D58" />
      </View>

    </View>
  );
}