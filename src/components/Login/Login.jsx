import React from 'react'
import { TextField, Button } from '@mui/material'
import { Formik, useFormik, validateYupSchema } from 'formik'
import * as Yup from "yup"

const Login = () => {
 
    const { handleSubmit, values, handleChange, errors} = useFormik({
        initialValues:{
            email:"",
            password:""
         },

         onSubmit: (data)=>{
            console.log(data)
         },

         validateSchema: Yup.object().shape({
               email: Yup.string().required("Este campo es obligatorio").min(5).max(15)

         })

   })
 
 
 
 
    return (
    <div >
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
     <form action="" onSubmit={handleSubmit}>

     <TextField  label="Filled" variant="filled" name="email" value={values.email} onChange={handleChange}/>
     <TextField  label="Filled" variant="filled" name="password" value={values.password} onChange={handleChange}/>
     <Button variant="contained">Contained</Button>
     </form>


    </div>
  )
}

export default Login
