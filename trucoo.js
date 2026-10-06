import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

export default function MarcadorTruco() {
  const [pontosNos, setPontosNos] = useState(0);
  const [pontosEles, setPontosEles] = useState(0);

  const limitePontos = 12;
  const jogoAcabou = pontosNos >= limitePontos || pontosEles >= limitePontos;

  const adicionarNos = () => {
    if (pontosNos < limitePontos && !jogoAcabou) setPontosNos(pontosNos + 1);
  };
  const removerNos = () => {
    if (pontosNos > 0 && !jogoAcabou) setPontosNos(pontosNos - 1);
  };

  const adicionarEles = () => {
    if (pontosEles < limitePontos && !jogoAcabou) setPontosEles(pontosEles + 1);
  };
  const removerEles = () => {
    if (pontosEles > 0 && !jogoAcabou) setPontosEles(pontosEles - 1);
  };

  const zerarPlacar = () => {
    setPontosNos(0);
    setPontosEles(0);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#0B132B', justifyContent: 'center', padding: 20 }}>
      
      <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#5BC0BE', textAlign: 'center', marginBottom: 10 }}>
        TRUCO!
      </Text>

      <View style={{ height: 40, marginBottom: 20, justifyContent: 'center' }}>
        {jogoAcabou && (
          <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#FFF', textAlign: 'center', backgroundColor: '#1C2541', padding: 5, borderRadius: 8 }}>
             {pontosNos >= limitePontos ? 'NÓS VENCEMOS!' : 'ELES VENCERAM!'} 
          </Text>
        )}
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40 }}>
        
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#1C2541', padding: 15, borderRadius: 10, marginRight: 10 }}>
          <Text style={{ fontSize: 24, color: '#FFF', fontWeight: 'bold' }}>NÓS</Text>
          <Text style={{ fontSize: 72, color: '#5BC0BE', fontWeight: 'bold', marginVertical: 10 }}>{pontosNos}</Text>
          
          <Pressable 
            onPress={adicionarNos} 
            style={{ backgroundColor: '#3A506B', width: '100%', padding: 12, borderRadius: 8, marginBottom: 10, alignItems: 'center' }}>
            <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>+1</Text>
          </Pressable>

          <Pressable 
            onPress={removerNos} 
            style={{ backgroundColor: '#212F45', width: '100%', padding: 12, borderRadius: 8, alignItems: 'center' }}>
            <Text style={{ color: '#A0AAB2', fontSize: 20, fontWeight: 'bold' }}>-1</Text>
          </Pressable>
        </View>

        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#1C2541', padding: 15, borderRadius: 10, marginLeft: 10 }}>
          <Text style={{ fontSize: 24, color: '#FFF', fontWeight: 'bold' }}>ELES</Text>
          <Text style={{ fontSize: 72, color: '#5BC0BE', fontWeight: 'bold', marginVertical: 10 }}>{pontosEles}</Text>
          
          <Pressable 
            onPress={adicionarEles} 
            style={{ backgroundColor: '#3A506B', width: '100%', padding: 12, borderRadius: 8, marginBottom: 10, alignItems: 'center' }}>
            <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>+1</Text>
          </Pressable>

          <Pressable 
            onPress={removerEles} 
            style={{ backgroundColor: '#212F45', width: '100%', padding: 12, borderRadius: 8, alignItems: 'center' }}>
            <Text style={{ color: '#A0AAB2', fontSize: 20, fontWeight: 'bold' }}>-1</Text>
          </Pressable>
        </View>

      </View>

      <Pressable 
        onPress={zerarPlacar} 
        style={{ backgroundColor: '#5BC0BE', padding: 18, borderRadius: 10, alignItems: 'center' }}>
        <Text style={{ color: '#0B132B', fontSize: 20, fontWeight: 'bold' }}>NOVA PARTIDA</Text>
      </Pressable>

    </View>
  );
}
