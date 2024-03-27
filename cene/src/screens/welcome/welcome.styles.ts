import { colors } from '../../theme/colors'
import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  welcomeContainer: { backgroundColor: colors.bg, flex: 1 },
  gradient: { flex: 1, position: 'absolute', width: '100%', height: '100%' },
  picture: {
    width: '100%',
    height: Dimensions.get('screen').height / 2,
    borderTopLeftRadius: 32,
    borderBottomRightRadius: 32,
    borderBottomLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  scrollView: {
    flex: 1,
    paddingTop: 65,
  },
  contentView: {
    height: Dimensions.get('screen').height / 2,
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
})
