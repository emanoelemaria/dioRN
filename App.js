import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, SafeAreaView, Text, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = "https://avatars.githubusercontent.com/u/94075689?v=4";

const urlToMyGithub = 'https://github.com/emanoelemaria';

export default function App() {
  const handlePressGoToGithub = async () => {
    const res= await Linking.canOpenURL(urlToMyGithub);
    if(res) {
      Linking.openURL(urlToMyGithub);
    }
  };

  return (
    <SafeAreaView  style={styles.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />

    <View style={styles.content}>
      <Image accessibilityLabel='Foto de perfil do Github' style={styles.avatar} source={{uri: imageProfileGithub}}/>
      <Text accessibilityLabel="Nome: Emanoele Silva" style={[styles.defaultText, styles.name]}>Emanoele Silva</Text>
      <Text accessibilityLabel="Nickname: emanoelemaria" style={[styles.defaultText, styles.nickname]}>emanoelemaria</Text>
      <Text accessibilityLabel="Descrição: Front-end Developer Student." style={[styles.defaultText, styles.description]}>Front-end Developer Student.
      </Text>

    <Pressable onPress={handlePressGoToGithub}>
    <View style={styles.button}> 
    <Text style={[styles.defaultText, styles.textButton]}>Open in Github</Text>
    </View>
    </Pressable>

    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1, //expandir para a tela inteira
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems:'center',
    padding:20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGithub,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    backgroundColor:colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});