import Typography from '../typography/typography.component'
import { styles } from './steps.styles'
import { View } from 'react-native'

interface IStepsProps {
  steps: number
  step: number
}

const Steps = ({ step, steps }: IStepsProps) => {
  return (
    <View style={styles.stepsContainer}>
      <View style={styles.stepsBar}>
        <View
          style={[styles.progressBar, { width: `${(step * 100) / steps}%` }]}
        />
        <View style={styles.progressLine} />
      </View>
      <View style={styles.step}>
        <Typography color="grey" size={12} weight="600">
          {step}/{steps}
        </Typography>
      </View>
    </View>
  )
}

export default Steps
