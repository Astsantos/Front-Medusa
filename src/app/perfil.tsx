import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { styles } from './style';

export default function PerfilScreen({ navigation }: any) {
  return (
    <View style={styles.homeContainer}>

      <TouchableOpacity style={styles.profileBackButton} onPress={() => navigation?.goBack?.()}>
        <Feather name="arrow-left" size={24} color="#1A1A1A" />
      </TouchableOpacity>

      <View style={styles.profileAvatarLarge}>
        <MaterialCommunityIcons name="account" size={55} color="#FFFFFF" />
      </View>

      <Text style={styles.profileNamePink}>Lais Oliveira</Text>
      <Text style={styles.profileSubtitle}>Está no app há 20 dias</Text>

      <View style={styles.profileStatsRow}>
        <View style={styles.profileStatBox}>
          <Text style={styles.profileStatNumber}>3</Text>
          <Text style={styles.profileStatLabel}>Contatos</Text>
        </View>
        <View style={styles.profileStatBox}>
          <Text style={styles.profileStatNumber}>5</Text>
          <Text style={styles.profileStatLabel}>Rotas</Text>
        </View>
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