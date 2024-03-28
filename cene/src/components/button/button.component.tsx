import { colors } from '../../theme/colors'
import { buttonStyles } from './button.styles'
import React, { ReactNode } from 'react'
import { TouchableOpacity } from 'react-native'

interface IButton {
  color?: keyof typeof colors
  children: ReactNode
  variant?: 'button' | 'link'
  onPress?: () => void
}

const Button = ({
  color = 'ofWhite',
  children,
  variant = 'button',
  onPress = () => null,
}: IButton) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={
        variant === 'button'
          ? [buttonStyles.button, { backgroundColor: colors[color] }]
          : [buttonStyles.link]
      }
    >
      {children}
    </TouchableOpacity>
  )
}

export default React.memo(Button)
