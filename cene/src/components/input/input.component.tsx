import { colors } from '../../theme/colors'
import Typography from '../typography/typography.component'
import { styles } from './input.styles'
import { TextInput, View, ViewStyle } from 'react-native'

interface IInputComponent {
  placeholder?: string
  label?: string | null
  error?: string | undefined
  containerStyle?: ViewStyle
}

const InputComponent = ({
  placeholder,
  containerStyle,
  error,
  label,
}: IInputComponent) => {
  return (
    <View style={containerStyle}>
      {label && (
        <Typography weight="500" styles={styles.label} color="labelColor">
          {label}
        </Typography>
      )}

      <TextInput
        placeholderTextColor={colors.textGrey}
        style={styles.input}
        placeholder={placeholder}
      />

      {error && (
        <Typography
          size={12}
          weight="600"
          styles={styles.errorMessage}
          color="red"
        >
          {error}
        </Typography>
      )}
    </View>
  )
}

export default InputComponent
