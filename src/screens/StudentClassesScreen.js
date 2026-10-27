import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function StudentClassesScreen() {
  // Exemplo de estado de módulos do aluno
  const [moduloAtual, setModuloAtual] = useState(1);
  const [quizAtivo, setQuizAtivo] = useState(false);
  const [perguntasSorteadas, setPerguntasSorteadas] = useState([
    { id: 1, texto: 'Translate: "Good morning"', tipo: 'discursiva', gabarito: 'Bom dia' }
  ]);
  const [respostaAluno, setRespostaAluno] = useState('');

  const iniciarQuiz = () => {
    setQuizAtivo(true);
    // Aqui entra a lógica de embaralhar as 10 perguntas cadastradas e selecionar 3 aleatórias
  };

  const corrigirComIA = () => {
    // Simulação da verificação por IA com feedback objetivo
    Alert.alert('Correção da IA', 'Resposta Correta! Excelente uso do vocabulário.');
    setQuizAtivo(false);
    setModuloAtual(2); // Desbloqueia o próximo módulo após conclusão
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Área de Aulas - Inglês</Text>

      {!quizAtivo ? (
        <View style={styles.card}>
          <Text style={styles.moduleTitle}>Módulo {moduloAtual}: Fundamentos</Text>
          <Text style={styles.description}>Assista à videoaula abaixo e conclua os exercícios para liberar o próximo módulo.</Text>
          
          <TouchableOpacity style={styles.button} onPress={iniciarQuiz}>
            <Text style={styles.buttonText}>Fazer Quiz do Módulo (3 Perguntas)</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.card}>
          <Text style={styles.moduleTitle}>Quiz de Fixação</Text>
          <Text style={styles.questionText}>1. Translate: "Good morning"</Text>
          
          <TouchableOpacity style={styles.button} onPress={corrigirComIA}>
            <Text style={styles.buttonText}>Enviar Resposta para Avaliação da IA</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20, paddingTop: 50 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 20, textAlign: 'center' },
  card: { backgroundColor: '#1e1e1e', padding: 20, borderRadius: 8, marginBottom: 20 },
  moduleTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  description: { color: '#aaa', marginBottom: 20, lineHeight: 20 },
  questionText: { color: '#fff', fontSize: 16, marginBottom: 15 },
  button: { height: 45, backgroundColor: '#4F46E5', justifyContent: 'center', alignItems: 'center', borderRadius: 6, marginTop: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});