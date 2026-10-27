import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AdminContentScreen() {
  const [moduloTitulo, setModuloTitulo] = useState('');
  const [aulaTitulo, setAulaTitulo] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [perguntaTexto, setPerguntaTexto] = useState('');
  const [tipo, setTipo] = useState('multipla'); // 'multipla' ou 'discursiva'
  const [alternativas, setAlternativas] = useState(['', '', '', '']);
  const [respostaCorreta, setRespostaCorreta] = useState('');

  const salvarConteudo = async () => {
    Alert.alert('Sucesso', 'Estrutura de aula e perguntas configurada com sucesso!');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Gestão de Conteúdos e Aulas</Text>
      
      <View style={styles.card}>
        <Text style={styles.label}>1. Criar Módulo e Aula</Text>
        <TextInput style={styles.input} placeholder="Nome do Módulo (ex: Módulo 1 - Basics)" placeholderTextColor="#aaa" value={moduloTitulo} onChangeText={setModuloTitulo} />
        <TextInput style={styles.input} placeholder="Título da Aula" placeholderTextColor="#aaa" value={aulaTitulo} onChangeText={setAulaTitulo} />
        <TextInput style={styles.input} placeholder="Link do Vídeo / Imagem" placeholderTextColor="#aaa" value={videoUrl} onChangeText={setVideoUrl} />
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>2. Cadastrar Pergunta (Até 10 por Módulo)</Text>
        <TextInput style={styles.input} placeholder="Enunciado da Pergunta" placeholderTextColor="#aaa" value={perguntaTexto} onChangeText={setPerguntaTexto} />
        
        <TouchableOpacity style={styles.typeButton} onPress={() => setTipo(tipo === 'multipla' ? 'discursiva' : 'multipla')}>
          <Text style={styles.buttonText}>Tipo: {tipo.toUpperCase()}</Text>
        </TouchableOpacity>

        {tipo === 'multipla' ? (
          <>
            <Text style={styles.subLabel}>Alternativas e Gabarito:</Text>
            {alternativas.map((alt, index) => (
              <TextInput
                key={index}
                style={styles.input}
                placeholder={`Alternativa ${index + 1}`}
                placeholderTextColor="#aaa"
                value={alt}
                onChangeText={(text) => {
                  const novas = [...alternativas];
                  novas[index] = text;
                  setAlternativas(novas);
                }}
              />
            ))}
            <TextInput style={styles.input} placeholder="Resposta Correta exata" placeholderTextColor="#aaa" value={respostaCorreta} onChangeText={setRespostaCorreta} />
          </>
        ) : (
          <TextInput style={styles.input} placeholder="Gabarito / Resposta Esperada para Correção por IA" placeholderTextColor="#aaa" value={respostaCorreta} onChangeText={setRespostaCorreta} />
        )}

        <TouchableOpacity style={styles.button} onPress={salvarConteudo}>
          <Text style={styles.buttonText}>Salvar Módulo e Perguntas</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20, paddingTop: 50 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 20, textAlign: 'center' },
  card: { backgroundColor: '#1e1e1e', padding: 15, borderRadius: 8, marginBottom: 20 },
  label: { fontSize: 16, fontWeight: 'bold', color: '#4F46E5', marginBottom: 10 },
  subLabel: { fontSize: 14, color: '#aaa', marginBottom: 5 },
  input: { height: 45, backgroundColor: '#2a2a2a', color: '#fff', borderRadius: 6, paddingHorizontal: 12, marginBottom: 12, borderWidth: 1, borderColor: '#333' },
  typeButton: { height: 40, backgroundColor: '#333', justifyContent: 'center', alignItems: 'center', borderRadius: 6, marginBottom: 12 },
  button: { height: 45, backgroundColor: '#4F46E5', justifyContent: 'center', alignItems: 'center', borderRadius: 6, marginTop: 5 },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});