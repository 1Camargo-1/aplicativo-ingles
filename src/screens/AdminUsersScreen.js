import { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { supabase } from '../services/supabase';

export default function AdminUsersScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  const carregarUsuarios = async () => {
    const { data, error } = await supabase.from('usuarios').select('*');
    if (!error && data) setUsuarios(data);
  };

  useEffect(() => {
    carregarUsuarios();
  }, []);

  const cadastrarUsuario = async () => {
    if (!nome || !email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos para cadastrar o usuário.');
      return;
    }

    const { error } = await supabase.from('usuarios').insert([{ nome, email, senha }]);
    if (error) {
      Alert.alert('Erro', 'Não foi possível cadastrar o usuário.');
    } else {
      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
      setNome('');
      setEmail('');
      setSenha('');
      carregarUsuarios();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Painel Administrativo - Usuários</Text>
      
      <View style={styles.formCard}>
        <TextInput style={styles.input} placeholder="Nome do Aluno" placeholderTextColor="#aaa" value={nome} onChangeText={setNome} />
        <TextInput style={styles.input} placeholder="E-mail de Acesso" placeholderTextColor="#aaa" value={email} onChangeText={setEmail} autoCapitalize="none" />
        <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#aaa" secureTextEntry value={senha} onChangeText={setSenha} />
        
        <TouchableOpacity style={styles.button} onPress={cadastrarUsuario}>
          <Text style={styles.buttonText}>Cadastrar Aluno</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subTitle}>Alunos Cadastrados</Text>
      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id?.toString()}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text style={styles.userName}>{item.nome}</Text>
            <Text style={styles.userEmail}>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20, paddingTop: 50 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 20, textAlign: 'center' },
  formCard: { backgroundColor: '#1e1e1e', padding: 15, borderRadius: 8, marginBottom: 20 },
  input: { height: 45, backgroundColor: '#2a2a2a', color: '#fff', borderRadius: 6, paddingHorizontal: 12, marginBottom: 12, borderWidth: 1, borderColor: '#333' },
  button: { height: 45, backgroundColor: '#10B981', justifyContent: 'center', alignItems: 'center', borderRadius: 6 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  subTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  userItem: { backgroundColor: '#1e1e1e', padding: 12, borderRadius: 6, marginBottom: 8 },
  userName: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  userEmail: { color: '#aaa', fontSize: 14 }
});