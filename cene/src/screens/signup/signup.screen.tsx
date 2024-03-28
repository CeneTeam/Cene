import ContainerComponent from '../../components/container/container.component'
import IconButton from '../../components/iconButton/iconButton.component'
import Steps from '../../components/steps/steps.component'
import Typography from '../../components/typography/typography.component'
import SignupForm from '../../forms/signup/signup.form'
import { RootStackParamList } from '../../router/router'
import { styles } from './signup.styles'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Image } from 'expo-image'
import { useCallback } from 'react'
import { ScrollView, View } from 'react-native'

const SignupScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const gotoSignup = useCallback(() => navigation.goBack(), [])

  return (
    <ScrollView style={styles.scrollView}>
      <ContainerComponent>
        <View style={styles.backButton}>
          <IconButton onPress={gotoSignup}>
            <Image
              style={{ width: 8, height: 15 }}
              source={require('../../../assets/icons/left.svg')}
            />
          </IconButton>
        </View>
        <Steps step={1} steps={5} />
        <Typography
          styles={{ paddingTop: 24, marginBottom: 12 }}
          size={28}
          weight="600"
        >
          Start up an account
        </Typography>
        <Typography color="textGrey">Let’s get to know you</Typography>
        <SignupForm />
      </ContainerComponent>
    </ScrollView>
  )
}

export default SignupScreen
