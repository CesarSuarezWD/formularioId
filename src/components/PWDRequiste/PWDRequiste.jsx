import { FormHelperText } from '@mui/material'
import React from 'react'

export const PWDRequiste = ({ capsLetterFlag, numberFlag, pwdLengthFlag, specialCharFlag }) => {

  return (
    <div>
        <FormHelperText error sx={capsLetterFlag}>La contraseña debe tener al menos una mayúscula,</FormHelperText>
        <FormHelperText error sx={numberFlag}>Un número,</FormHelperText>
        <FormHelperText error sx={pwdLengthFlag}>Minino 8 caracteres,</FormHelperText>
        <FormHelperText error sx={specialCharFlag}>Un caracter especial como !@#$</FormHelperText>
    </div>
  )
}
