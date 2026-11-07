import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  // Implementação dos atributos do TAD como Estados do App
  const [ligado, setLigado] = useState(false);
  const [volume, setVolume] = useState(15);
  const [canal, setCanal] = useState(5);
  const marca = "LG"; // Atributo estático do Quadro 2

  // Métodos de controle equivalentes aos criados na classe Java
  const alternarEnergia = () => {
    setLigado(!ligado);
  };

  const aumentarVolume = () => {
    if (ligado) {
      setVolume(volume + 1);
    }
  };

  const diminuirVolume = () => {
    if (ligado && volume > 0) {
      setVolume(volume - 1);
    }
  };

  const defineCanal = (novoCanal) => {
    if (ligado) {
      setCanal(novoCanal);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>TV {marca} - Sala de Estar</Text>
        
        {/* Indicador de Status */}
        <View style={styles.statusContainer}>
          <View style={[styles.statusDot, { backgroundColor: ligado ? '#4CAF50' : '#F44336' }]} />
          <Text style={styles.statusText}>{ligado ? 'LIGADA' : 'DESLIGADA'}</Text>
        </View>

        {/* Visor de Informações */}
        <View style={styles.display}>
          <Text style={styles.displayText}>Canal: {ligado ? canal : '--'}</Text>
          <Text style={styles.displayText}>Volume: {ligado ? volume : '--'}</Text>
        </View>

        {/* Controles */}
        <TouchableOpacity style={styles.powerButton} onPress={alternarEnergia}>
          <Text style={styles.buttonText}>Ligar / Desligar</Text>
        </TouchableOpacity>

        <View style={styles.row}>
          <TouchableOpacity style={styles.actionButton} onPress={diminuirVolume}>
            <Text style={styles.buttonText}>Vol -</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={aumentarVolume}>
            <Text style={styles.buttonText}>Vol +</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.actionButton} onPress={() => defineCanal(canal - 1)}>
            <Text style={styles.buttonText}>Canal -</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => defineCanal(canal + 1)}>
            <Text style={styles.buttonText}>Canal +</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

// O CSS do React Native para estilizar os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  statusText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  display: {
    backgroundColor: '#1E1E1E',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  displayText: {
    color: '#4CAF50',
    fontSize: 24,
    fontFamily: 'monospace',
    textAlign: 'center',
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  powerButton: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  actionButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    width: '48%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  }
});