import { colors } from '../../theme/colors'
import { ReactNode } from 'react'
import { Text, TextStyle } from 'react-native'

interface ITypographyProps {
  size?: number
  weight?: '300' | '400' | '500' | '600' | '700' | '800' | 'normal' | 'bold'
  lineHeight?: number
  color?: keyof typeof colors
  children: ReactNode
  styles?: TextStyle
  underline?: boolean
}

const Typography = ({
  children,
  styles,
  color = 'white',
  lineHeight = 24,
  weight = '400',
  size = 14,
  underline = false,
}: ITypographyProps) => {
  const textStyles: TextStyle = {
    fontSize: size,
    fontWeight: weight,
    lineHeight,
    color: colors[color],
    textDecorationLine: underline ? 'underline' : 'none',
  }

  return <Text style={[textStyles, styles]}>{children}</Text>
}

export default Typography
