import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AdminConteudoScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Gestão de Conteúdos e Perguntas</Text>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder="Título do Módulo ou Aula" placeholderTextColor="#888" />
        <TextInput style={styles.input} placeholder="Link do Vídeo / Imagem" placeholderTextColor="#888" />
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Salvar Conteúdo</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', padding: 20 },
  titulo: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 20, marginTop: 20 },
  card: { backgroundColor: '#1e293b', padding: 16, borderRadius: 10, borderWidth: 1, borderColor: '#334155' },
  input: { height: 48, backgroundColor: '#0f172a', color: '#fff', borderRadius: 8, paddingHorizontal: 16, marginBottom: 16, borderWidth: 1, borderColor: '#334155' },
  botao: { height: 48, backgroundColor: '#6366f1', justifyContent: 'center', alignItems: 'center', borderRadius: 8 },
  textoBotao: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});