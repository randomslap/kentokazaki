import { MeshReflectorMaterial } from '@react-three/drei'

const Floor = (props) => {
    return (
        <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -600, 0]}>
            <planeGeometry args={[5000, 600]} />
            <MeshReflectorMaterial
                blur={[300, 30]}
                resolution={2048}
                mixBlur={1}
                mixStrength={80}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#202020"
                metalness={0.8}
            />
        </mesh>
    )
}

export default Floor
