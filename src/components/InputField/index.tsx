import React from 'react'
import { TextField } from '@mui/material'

import { InputFieldProp } from 'interfaces'

const InputField: React.FC<InputFieldProp> = (props: InputFieldProp) => {
  const { label= 'placeholder' } = props
  return (
    <div>
      <TextField
        label={label}
      />
    </div>
  )
}

export default InputField
