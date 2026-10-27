import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (!email || !senha) {
      Alert.alert('Atenção', 'Preencha o e-mail e a senha.');
      return;
    }

    // Validação do usuário Master solicitada
    if (email.trim() === 'Janaina@Inglês_Master' && senha === 'ChupaBolsonaro13') {
      router.replace('/(tabs)/aulas');
      return;
    }

    // Simulação de login de aluno comum
    router.replace('/(tabs)/aulas');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Aplicativo de Inglês</Text>
        <Text style={styles.subtitulo}>Faça login para continuar</Text>
        
        <TextInput
          style={styles.input}
          placeholder="E-mail ou Usuário"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#888"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.botao} onPress={handleLogin}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0f172a', padding: 20 },
  card: { width: '100%', maxWidth: 400, backgroundColor: '#1e293b', padding: 24, borderRadius: 12, borderWidth: 1, borderColor: '#334155' },
  titulo: { fontSize: 24, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginBottom: 8 },
  subtitulo: { fontSize: 14, color: '#94a3b8', textAlign: 'center', marginBottom: 24 },
  input: { width: '100%', height: 48, backgroundColor: '#0f172a', color: '#fff', borderRadius: 8, paddingHorizontal: 16, marginBottom: 16, borderWidth: 1, borderColor: '#334155' },
  botao: { width: '100%', height: 48, backgroundColor: '#6366f1', justifyContent: 'center', alignItems: 'center', borderRadius: 8, marginTop: 8 },
  textoBotao: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});