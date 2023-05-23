import React, { useState } from "react";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from "formik";
import axios from 'axios';
import { useRouter } from 'next/router'


const Login  = ()=>{
  const router = useRouter()
   const [message,setMessage] = useState("")
 const formik =  useFormik({
  initialValues : {
    username : '',
    password : ''
  },
  onSubmit : (values)=>{
    console.log("formik",values.username)
    if(values.username == 'username' && values.password =='password'){
      axios.post('/login', {
        data:{
          username: values.username,
          password: values.password
        }
        
      })
      .then((res)=>{
        console.log(res)
        router.push('/user')
      })
    }else{
      setMessage("Authentication failed")
    }
    
    
  }
 })
 
return(
    
      <form onSubmit = {formik.handleSubmit} style={{padding:"30px"}}>
      <Paper elevation={3} style={{height:"250px",
      background : "#B24F4F",
      width:"350px",
      margin : '100px 450px'}}>
        <Grid
          container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
          
          <Grid item xs={12} >
            <TextField label="Username" variant="standard" onChange={formik.handleChange}
            name = 'username'
            value = {formik.values.username}
             ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type={'password'} variant="standard"
            name = 'password'
             onChange={formik.handleChange}
            value = {formik.values.password}
            
            ></TextField>
          </Grid>
          
          <Grid item xs={12} >
            <Button fullWidth variant="contained" type = "submit"> Login </Button>
          </Grid>
          <Grid item xs={12} >
            <h4 style = {{color:'red'}}>{message}</h4>
          </Grid>
        </Grid>
      </Paper>
      </form>
    
)
}
export default Login