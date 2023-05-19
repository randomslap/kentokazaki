import { useState } from 'react'
import { Stack, Card, Modal, ToggleButtonGroup, ToggleButton } from '@mui/material'

const Settings = ({ open, handleClose, dsetDrag }) => {
    const [alignment, setAlignment] = useState('scroll')
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment || alignment)
        switch (newAlignment || alignment) {
            case 'scroll':
                setDrag(false)
                break
            case 'drag':
                setDrag(true)
                break
            default:
                setDrag(false)
                break
        }
    }

    // const handleToggle = () => {
    //     if (alignment === 'drag') {
    //         window.addEventListener('wheel', (e) => e.preventDefault(), { passive: false })
    //     } else {
    //         window.removeEventListener('wheel', (e) => e.preventDefault(), { passive: false })
    //     }
    // }

    return (
        <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Card sx={{ width: 300, height: '15%' }} color="dark">
                <Stack flex justifyContent={'center'} alignItems={'center'}>
                    <h1>Settings</h1>
                    <ToggleButtonGroup color="primary" value={alignment} exclusive onChange={handleChange} aria-label="Platform">
                        <ToggleButton value="scroll">Scroll</ToggleButton>
                        <ToggleButton value="drag">Drag</ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </Card>
        </Modal>
    )
}

export default Settings
