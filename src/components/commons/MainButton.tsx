import React from 'react'
import { Box } from '@mui/material'

interface ButtonData {
    text?: string
}
const MainButton = ({text} : ButtonData) => {
    return (
        <button style={{ 
            background: "rgba(236, 35, 43, 1)", color: "rgba(255, 255, 255, 1)",
             borderRadius: "12px", padding: "15px 50px", border: "none", cursor: "pointer", fontSize:"16px", fontWeight:"500" }}>
            {text}
        </button>
    )
}

export default MainButton