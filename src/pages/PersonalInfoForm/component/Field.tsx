import React from 'react'
import { Field, FieldInputProps } from 'formik'

import InputField from 'components/InputField'

interface FormFieldProps {
  id: string
  name: string
  label: string
}

const FormField: React.FC<FormFieldProps> = (props: FormFieldProps) => {
  const { id, name, label } = props

  return (
    <div>
      <Field id={id} name={name}>
        {({ field } : { field: FieldInputProps<any> }) => (
          <InputField label={label} field={field}/>
        )}
      </Field>
    </div>
  )
}

export default FormField
