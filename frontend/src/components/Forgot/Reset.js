import React, { useState } from 'react';
import { Button, Paper, Typography, Container, Grid } from '@material-ui/core';
import useStyles from './styles';
import Field from '../Login/Field';
import { useParams, useHistory } from 'react-router-dom'


const Reset = () => {
  const classes = useStyles();
  const [form, setForm] = useState("");
  const history = useHistory()
  const { token } = useParams()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => setForm(e.target.value);
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);


  return (
    <div style={{paddingTop: '100px', paddingBottom: '100px'}}>
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} variant="outlined">
                <Typography variant="h6" gutter="5">Please enter your new password</Typography>
           
                <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                <Field name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Submit
          </Button>
          </Grid>
                </form>
            </Paper>
        </Container>
    </div>
   
  );
}

export default Reset
