import InputComponent from '../../components/input/input.component'
import { styles } from './signup.styles'
import { View } from 'react-native'

const SignupForm = () => {
  return (
    <View style={styles.signupForm}>
      <InputComponent
        containerStyle={{ marginBottom: 32 }}
        label="First name"
        placeholder="Enter first name"
      />
      <InputComponent
        containerStyle={{ marginBottom: 32 }}
        label="Last name"
        placeholder="Enter last name"
      />
    </View>
  )
}

export default SignupForm
