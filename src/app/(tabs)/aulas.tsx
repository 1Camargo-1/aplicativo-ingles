import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AulasScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Área de Aulas</Text>
      <View style={styles.card}>
        <Text style={styles.textoBranco}>Módulo 1: Fundamentos</Text>
        <Text style={styles.textoCinza}>Assista à videoaula e responda ao quiz para avançar.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', padding: 20 },
  titulo: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 20, marginTop: 20 },
  card: { backgroundColor: '#1e293b', padding: 16, borderRadius: 10, borderWidth: 1, borderColor: '#334155' },
  textoBranco: { color: '#fff', fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  textoCinza: { color: '#94a3b8', fontSize: 14 }
});