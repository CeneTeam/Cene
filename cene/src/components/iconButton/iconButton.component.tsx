import { styles } from './iconButton.styles'
import { ReactNode } from 'react'
import { TouchableOpacity } from 'react-native'

interface IIconButtonProps {
  children: ReactNode
  onPress?: () => void
}

const IconButton = ({ children, onPress = () => null }: IIconButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.iconButton}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {children}
    </TouchableOpacity>
  )
}

export default IconButton
