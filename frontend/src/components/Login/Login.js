import React, {useState} from 'react'
import Field from './Field'
import useStyles from './styles'
import styles from './Login.module.css'
import {Link} from 'react-router-dom'
import {Button, Paper, Grid, Typography, Container} from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress';
import {GoogleLogin} from '@react-oauth/google';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    profilePicture: '',
    bio: ''
}

const Login = () => {

    const classes = useStyles();
    const [formData, setFormData] = useState(initialState)
    const [isSignup, setIsSignup] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false)

    const handleShowPassword = () => setShowPassword(!showPassword);
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isSignup) {
            // todo redux dispatch
        } else {
            // todo redux dispatch
        }
        setLoading(true)
    }

    const switchMode = () => {
        setIsSignup((prevState) => !prevState)
    }

    const googleSuccess = async (res) => {
        console.log(res)
        try {
            window.location.href = '/dashboard'

        } catch (error) {
            console.log(error)
        }
    }

    const googleError = (error) => {
        console.log(error)
        console.log("Google Sign In was unseccassful. Try again later")
    }

    return (
        <Container component="main" maxWidth="md">
            <Paper className={classes.paper} elevation={2}>
                <Typography component="h1" variant="h5">{isSignup ? 'Sign up' : 'Sign in'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignup && (
                            <>
                                <Field name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                                <Field name="lastName" label="Last Name" handleChange={handleChange} half/>
                            </>
                        )}
                        <Field name="email" label="Email Address" handleChange={handleChange} type="email"/>
                        <Field name="password" label="Password" handleChange={handleChange}
                               type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
                        {isSignup && <Field name="confirmPassword" label="Repeat Password" handleChange={handleChange}
                                            type="password"/>}
                    </Grid>
                    <div className={styles.buttons}>
                        <div>
                            {loading ? <CircularProgress/>
                                :
                                <button className={styles.loginBtn}>{isSignup ? 'Sign Up' : 'Sign In'}</button>
                            }
                        </div>
                        <GoogleLogin
                            onSuccess={googleSuccess}
                            onError={() => googleError}
                        />
                    </div>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                    <Link to="forgot"><p style={{textAlign: 'center', color: '#1d7dd6', marginTop: '20px'}}>Forgotten
                        Password?</p></Link>
                </form>
            </Paper>
        </Container>
    )
}

export default Login
