import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { styles } from './style';

interface Rota {
  id: string;
  nome: string;
  endereco: string;
}

const rotasSalvas: Rota[] = [
  { id: '1', nome: 'Trabalho', endereco: 'Rua dos Bancos, 33' },
  { id: '2', nome: 'Casa', endereco: 'Rua das Flores, 33' },
];

export default function RotasScreen() {
  return (
    <View style={styles.routesContainer}>

      <View style={styles.routesHeader}>
        <Text style={styles.routesLogo}>Medusa</Text>
        <View style={styles.routesProfileIcon}>
          <Feather name="user" size={20} color="#FFFFFF" />
        </View>
      </View>

      <View style={styles.routesSearchBar}>
        <Feather name="search" size={18} color="#888888" />
        <TextInput
          style={styles.routesSearchInput}
          placeholder="Buscar rota"
          placeholderTextColor="#999999"
        />
      </View>

      <FlatList
        style={styles.routesList}
        data={rotasSalvas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.routeCard}>
            <View style={styles.routeCardIcon}>
              <MaterialCommunityIcons name="map-marker" size={22} color="#B00D58" />
            </View>
            <View>
              <Text style={styles.routeCardName}>{item.nome}</Text>
              <Text style={styles.routeCardAddress}>{item.endereco}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <View style={styles.routesBottomNav}>
        <MaterialIcons name="home" size={24} color="#B00D58" />
        <MaterialIcons name="notifications" size={24} color="#B00D58" />
        <MaterialIcons name="apps" size={24} color="#B00D58" />
        <MaterialCommunityIcons name="compass-outline" size={24} color="#B00D58" />
      </View>

    </View>
  );
}