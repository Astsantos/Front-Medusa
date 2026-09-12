import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './style';

export default function TelaInicialScreen({ navigation }: any) {
  return (
    <View style={styles.homeContainer}>

      <View style={styles.homeTopBar}>
        <Text style={styles.homeQuestionText}>Para onde quer ir hoje?</Text>
        <View style={styles.routesProfileIcon}>
          <Feather name="user" size={20} color="#FFFFFF" />
        </View>
      </View>

      <View style={styles.homeSearchBar}>
        <Feather name="search" size={18} color="#888888" />
        <TextInput
          style={styles.homeSearchInput}
          placeholder="Buscar destino"
          placeholderTextColor="#999999"
        />
      </View>

      <View style={styles.homeMapArea}>
        <MaterialCommunityIcons name="map-marker-radius" size={50} color="#7A8F7E" />
        <Text style={styles.homeMapPlaceholderText}>Mapa em breve</Text>
      </View>

      <View style={styles.routesBottomNav}>
        <MaterialCommunityIcons name="home" size={24} color="#B00D58" />
        <MaterialCommunityIcons name="bell" size={24} color="#B00D58" />
        <MaterialCommunityIcons name="dots-grid" size={24} color="#B00D58" />
        <MaterialCommunityIcons name="compass-outline" size={24} color="#B00D58" />
      </View>

    </View>
  );
}