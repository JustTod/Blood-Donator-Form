import React from 'react'
import { Formik, Form } from 'formik'
import { Typography, Button } from '@mui/material'

import FormField from './component/Field'

const PersonalInfoForm: React.FC = () => {
  const initialPersonalValues = {
    first_name: '',
    last_name: ''
  }

  return (
    <div>
      <Typography variant='h1'>Personal Info Form</Typography>
      <Formik
        initialValues={initialPersonalValues}
        onSubmit={(values) => {
          console.log("submitting", {values})
        }}
      > 
        {({ handleChange }) => (
          <Form> 
            <FormField
              id='first_name'
              name='first_name'
              label='First Name'
            />
            <FormField
              id='last_name'
              name='last_name'
              label='Last Name'
            />
            <Button type='submit'>Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default PersonalInfoForm
