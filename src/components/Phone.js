import * as THREE from 'three'
import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, Mask, useMask, OrthographicCamera, Clone, Float as FloatImpl } from '@react-three/drei'
import useSpline from '@splinetool/r3f-spline'

import useWindowSize from '../hooks/useWindowSize'

import Screen from './Screen'
import Settings from './Settings'

const Phone = () => {
    const container = useRef()
    const domContent = useRef()
    const screenSize = useWindowSize()
    useEffect(() => {
        document.querySelector('html').classList.add('no-cursor')
        document.querySelectorAll('button:not(.navbar-button)').forEach((element) => {
            element.classList.add('no-cursor')
        })
    }, [])
    return screenSize.width > 768 ? (
        <div ref={container} className="content-container">
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }} ref={domContent} />
            <Canvas
                shadows
                flat
                linear
                style={{ pointerEvents: 'none' }}
                onCreated={(state) => {
                    state.events.connect(container.current)
                    state.setEvents({
                        compute: (event, state) => {
                            state.pointer.set((event.pageX / state.size.width) * 2 - 1, -(event.pageY / state.size.height) * 2 + 1)
                            state.raycaster.setFromCamera(state.pointer, state.camera)
                        },
                    })
                }}>
                <directionalLight castShadow intensity={0.4} position={[-10, 50, 300]} shadow-mapSize={[512, 512]} shadow-bias={-0.002}>
                    <orthographicCamera attach="shadow-camera" args={[-2000, 2000, 2000, -2000, -10000, 10000]} />
                </directionalLight>
                <OrthographicCamera makeDefault={true} far={100000} near={-100000} position={[0, 0, 1000]} />
                <hemisphereLight intensity={0.5} color="blue" position={[0, 1, 0]} />
                <Scene portal={domContent} position={[0, -50, 0]} />
            </Canvas>
        </div>
    ) : (
        <Screen />
    )
}

const Scene = ({ portal, ...props }) => {
    let timeout = null
    const v = new THREE.Vector3()
    const wheel = useRef(0)
    const hand = useRef()
    const screen = useRef()
    const phone = useRef()
    const [open, setOpen] = useState(false)
    const [drag, setDrag] = useState(false)
    const [isClicked, click] = useState(false)
    const [prevPos, setPrevPos] = useState(0)
    const mouseCoords = useRef({
        startX: 0,
        startY: 0,
        scrollLeft: 0,
        scrollTop: 0,
    })
    const [isMouseDown, setIsMouseDown] = useState(false)
    const { nodes } = useSpline('/scroll.splinecode')
    const stencil = useMask(1, true)
    useLayoutEffect(() => {
        Object.values(nodes).forEach((node) => node.material && node.parent.name !== 'hand-r' && Object.assign(node.material, stencil))
    }, [])
    useFrame((state) => {
        v.copy({ x: state.pointer.x, y: state.pointer.y, z: 0 })
        v.unproject(state.camera)
        hand.current.rotation.x = THREE.MathUtils.lerp(hand.current.rotation.x, isClicked ? -0.7 : -0.5, 0.2)
        hand.current.position.lerp({ x: v.x - 100, y: -wheel.current + v.y, z: v.z }, 0.4)
        state.camera.zoom = THREE.MathUtils.lerp(state.camera.zoom, isClicked ? 1 : 0.9, isClicked ? 0.025 : 0.15)
        phone.current.rotation.x = THREE.MathUtils.lerp(0, -state.pointer.y, 0.2)
        phone.current.rotation.y = THREE.MathUtils.lerp(0, state.pointer.x, 0.75)
        state.camera.lookAt(0, 0, 0)
        state.camera.updateProjectionMatrix()
    })

    const handleDragStart = (e) => {
        if (!screen.current || !drag) return
        const slider = screen.current
        const startX = e.pageX - slider.offsetLeft
        const startY = e.pageY - slider.offsetTop
        const scrollLeft = slider.scrollLeft
        const scrollTop = prevPos
        mouseCoords.current = { startX, startY, scrollLeft, scrollTop }
        setIsMouseDown(true)
    }

    const handleDragEnd = () => {
        setIsMouseDown(false)
        const slider = screen.current
        setPrevPos(slider.scrollTop)
        if (!slider) return
    }

    const handleDrag = (e) => {
        if (!isMouseDown || !screen.current || !drag) return
        e.preventDefault()
        const slider = screen.current
        const y = e.pageY - slider.offsetTop
        const walkY = mouseCoords.current.startY - y + prevPos
        slider.scrollTop = walkY
    }

    const handleOpen = () => {
        document.querySelector('html').classList.remove('no-cursor')
        document.querySelectorAll('button:not(.navbar-button)').forEach((element) => {
            element.classList.remove('no-cursor')
        })
        setOpen(true)
    }
    const handleClose = () => {
        document.querySelector('html').classList.add('no-cursor')
        document.querySelectorAll('button:not(.navbar-button)').forEach((element) => {
            element.classList.add('no-cursor')
        })
        setOpen(false)
    }

    // Temporary work around for rerender issue
    useEffect(() => {
        click(true)
        setTimeout(() => {
            click(false)
        }, 500)
    }, [])

    return (
        <group {...props} dispose={null}>
            <group ref={hand}>
                <Clone position={[250, -190, 0]} object={nodes['hand-r']} rotation-y={0.35} inject={<meshStandardMaterial color="white" />} />
            </group>
            <FloatImpl ref={phone} floatIntensity={100} rotationIntensity={0.05} speed={1}>
                <group position={[0, 30, 0]} rotation={[-0.15, 0, 0]}>
                    <group name="phone" position={[0, 0, -70]}>
                        <Clone object={[nodes['Rectangle 4'], nodes['Rectangle 3'], nodes['Boolean 2']]} inject={<meshStandardMaterial color="black" />} />
                        <Mask id={1} colorWrite={false} depthWrite={true} geometry={nodes.screen.geometry} castShadow receiveShadow position={[0, 0, 9.89]}>
                            <Html ref={screen} className="content-embed" portal={portal} scale={40} transform zIndexRange={[-1, 0]}>
                                <div onMouseDown={handleDragStart} onMouseUp={handleDragEnd} onMouseMove={handleDrag}>
                                    <Screen drag={drag} handleOpen={handleOpen} />
                                    <Settings open={open} handleClose={handleClose} setDrag={setDrag} />
                                </div>
                            </Html>
                        </Mask>
                        <mesh
                            onWheel={(e) => {
                                wheel.current = -e.deltaY / 2
                                clearTimeout(timeout)
                                timeout = setTimeout(() => (wheel.current = 0), 100)
                            }}
                            onPointerDown={(e) => {
                                e.target.setPointerCapture(e.pointerId)
                                click(true)
                            }}
                            onPointerUp={(e) => {
                                e.target.releasePointerCapture(e.pointerId)
                                click(false)
                            }}
                            receiveShadow
                            geometry={nodes.screen.geometry}>
                            <meshStandardMaterial transparent opacity={0.1} />
                        </mesh>
                    </group>
                </group>
            </FloatImpl>
        </group>
    )
}

export default Phone
