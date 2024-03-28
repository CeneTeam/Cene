import { colors } from '../../theme/colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  input: {
    height: 64,
    backgroundColor: colors.inputBackground,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 22,
    color: colors.inputText,
  },
  label: {
    marginBottom: 4,
  },
  errorMessage: {
    marginTop: 8,
  },
})
