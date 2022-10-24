import React from 'react'
import { TextField } from '@mui/material'

import { InputFieldProp } from 'interfaces'

const InputField: React.FC<InputFieldProp> =
  (props: InputFieldProp) => {
    const { label, field: { name, onChange } } = props
    return (
      <div>
        <TextField
          label={label}
          name={name}
          onChange={onChange}
        />
      </div>
    )
  }

export default InputField
