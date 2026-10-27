import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validação estática inicial do usuário Master solicitada
    if (email === 'Janaina@Inglês_Master' && password === 'ChupaBolsonaro13') {
      onLoginSuccess({ email, role: 'master' });
      return;
    }

    // Aqui integraremos a autenticação via Supabase para os demais usuários cadastrados
    Alert.alert('Erro', 'Credenciais inválidas.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicativo Inglês</Text>
      
      <TextInput
        style={styles.input}
        placeholder="E-mail / Usuário"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 30 },
  input: { width: '100%', height: 50, backgroundColor: '#1e1e1e', color: '#fff', borderRadius: 8, paddingHorizontal: 15, marginBottom: 15, borderWidth: 1, borderColor: '#333' },
  button: { width: '100%', height: 50, backgroundColor: '#4F46E5', justifyContent: 'center', alignItems: 'center', borderRadius: 8, marginTop: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});