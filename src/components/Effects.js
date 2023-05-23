import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing'
import { useControls } from 'leva'

export function Effects(props) {
    return (
        <EffectComposer>
            <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={4} {...props} />
        </EffectComposer>
    )
}
