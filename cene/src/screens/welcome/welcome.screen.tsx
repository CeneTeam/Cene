import ButtonComponent from '../../components/button/button.component'
import ContainerComponent from '../../components/container/container.component'
import Typography from '../../components/typography/typography.component'
import { RootStackParamList } from '../../router/router'
import { gradient } from '../../theme/colors'
import { styles } from './welcome.styles'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { useCallback } from 'react'
import { ScrollView, View } from 'react-native'

const WelcomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const gotoSignup = useCallback(() => navigation.navigate('Signup'), [])
  const gotoLogin = useCallback(() => navigation.navigate('Login'), [])

  return (
    <View style={styles.welcomeContainer}>
      <LinearGradient
        style={styles.gradient}
        colors={gradient}
        start={{ x: 1, y: 0 }}
      />
      <ScrollView style={styles.scrollView}>
        <ContainerComponent>
          <Image
            style={styles.picture}
            contentFit="cover"
            source={require('../../../assets/content/welcome.png')}
          />
          <View style={styles.contentView}>
            <Typography
              color="white"
              size={32}
              weight="700"
              lineHeight={39}
              styles={{ marginTop: 24, marginBottom: 24 }}
            >
              See the world,{'\n'}one show at a time
            </Typography>
            <Typography
              color="white"
              size={14}
              weight="600"
              lineHeight={24}
              styles={{ marginBottom: 48 }}
            >
              Go to shows, meet people and just{'\n'}have fun
            </Typography>
            <ButtonComponent onPress={gotoSignup} color="ofWhite">
              <Typography color="text" weight="700" size={16}>
                Sign up
              </Typography>
            </ButtonComponent>
            <View style={styles.bottomView}>
              <Typography weight="600" size={14} color="white">
                Have an account?
              </Typography>
              <ButtonComponent onPress={gotoLogin} variant="link">
                <Typography size={14} weight="800" color="ofWhite" underline>
                  Log in
                </Typography>
              </ButtonComponent>
            </View>
          </View>
        </ContainerComponent>
      </ScrollView>
    </View>
  )
}

export default WelcomeScreen
