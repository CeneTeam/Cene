import React from 'react'
import { ReactNode } from 'react'
import { View, ViewStyle } from 'react-native'

const Container = ({
  children,
  style,
}: {
  children: ReactNode
  style?: ViewStyle
}) => (
  <View
    style={[{ paddingLeft: 16, position: 'relative', paddingRight: 16 }, style]}
  >
    {children}
  </View>
)

export default React.memo(Container)
