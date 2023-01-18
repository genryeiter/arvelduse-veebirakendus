import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import {Button, Paper, Typography, Container, Grid} from '@material-ui/core';
import useStyles from './styles';
import Field from '../Login/Field';
import styles from './Forgot.module.css'

const Forgot = () => {
    const classes = useStyles();
    const history = useHistory()
    const [form, setForm] = useState("");
    const [step, setStep] = useState(0)
    const user = JSON.parse(localStorage.getItem('profile'))

    const handleSubmit = (e) => {
        e.preventDefault()
        window.navigator.onLine ? setStep(1) : setStep(2)
    }

    const handleChange = (e) => setForm(e.target.value);

    if (user) history.push('/dashboard')

    return (
        <div style={{marginTop: '100px'}}>
            <Container component="main" maxWidth="sm">
                <Paper className={classes.paper} variant="outlined">
                    {step === 0 && (
                        <div>
                            <Grid container justifyContent="center">
                                <Typography variant="h6" gutter="5">Please enter your email address</Typography>
                            </Grid>
                            <form style={{marginTop: '20px'}} noValidate autoComplete="off" onSubmit={handleSubmit}>
                                <Grid container spacing={4}>
                                    <Field name="email" label="Email Address" handleChange={handleChange} type="email"/>
                                    <Button type="submit" fullWidth variant="contained" color="primary"
                                            className={classes.submit}> Submit </Button>
                                </Grid>
                            </form>
                        </div>
                    )}

                    {step === 1 && (
                        <div>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><i
    className="fas fa-check-circle" style={{fontSize: '55px', color: '#3e6947'}}/></div>
                            <br/>
                            <p>A password reset link has been sent to your email. Please follow the link to reset your
                                password</p>
                            <div className={styles.buttons}>
                                <button className={styles.button} onClick={() => history.push('/')}>Back to home
                                </button>
                                <button className={styles.button} onClick={() => setStep(0)}>Resend link</button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><i
    className="fas fa-check-circle" style={{fontSize: '55px', color: '#3e6947'}}/></div>
                            <br/>
                            <p>Please check your internet connection and try again</p>
                            <div className={styles.buttons}>
                                <button className={styles.button} onClick={() => history.push('/')}>Back to home
                                </button>
                                <button className={styles.button} onClick={() => setStep(0)}>Resend link</button>
                            </div>
                        </div>
                    )}
                </Paper>
            </Container>
        </div>

    );
}

export default Forgot