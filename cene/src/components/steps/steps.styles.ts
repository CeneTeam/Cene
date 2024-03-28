import { colors } from '../../theme/colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  stepsContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    position: 'relative',
  },
  stepsBar: {
    width: '100%',
    position: 'relative',
  },
  progressBar: {
    height: 6,
    backgroundColor: colors.silver,
    borderRadius: 20,
    position: 'absolute',
    top: -2,
    zIndex: 2,
  },
  progressLine: {
    backgroundColor: colors.text,
    height: 2,
  },
  step: {
    position: 'absolute',
    backgroundColor: colors.mainBackground,
    paddingLeft: 10,
    paddingRight: 10,
    right: 0,
    zIndex: 5,
  },
})
