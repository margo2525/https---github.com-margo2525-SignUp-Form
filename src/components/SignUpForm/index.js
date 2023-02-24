import React, { Component } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import classNames from 'classnames'
import styles from './SignUpForm.module.css'

const INITIAL_VALUES = {
  userName: '',
  email: '',
  password: '',
  passwordConf: '',
  isAgree: ''
}

const LOGIN_FORM_REX_EXP = {
  userName: /^[A-Z][a-z]{2,19}(-[A-Z][a-z]{2,19})?$/,
  email: /^.+@.+$/,
  password: /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&*.].*).{8,20}$/,
  passwordConf:
    /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&*.].*).{8,20}$/
}

class SignUpForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      userName: INITIAL_VALUES.userName,
      isUserNameValid: false,
      email: INITIAL_VALUES.email,
      isEmailValid: false,
      password: INITIAL_VALUES.password,
      isPasswordValid: false,
      passwordConf: INITIAL_VALUES.passwordConf,
      isPasswordConfValid: false,
      isAgree: false
    }
  }

  handleUserNameChange = ({ target: { value } }) => {
    this.setState({
      userName: value,
      isUserNameValid: LOGIN_FORM_REX_EXP.userName.test(value)
    })
  }

  handleEmailChange = ({ target: { value } }) => {
    this.setState({
      email: value,
      isEmailValid: LOGIN_FORM_REX_EXP.email.test(value)
    })
  }

  handlePasswordChange = ({ target: { value } }) => {
    this.setState({
      password: value,
      isPasswordValid: LOGIN_FORM_REX_EXP.password.test(value)
    })
  }

  handlePasswordConfChange = ({ target: { value } }) => {
    this.setState({
      passwordConf: value,
      isPasswordConfValid: LOGIN_FORM_REX_EXP.passwordConf.test(value)
    })
  }

  handleAgreeChange = ({ target: { checked } }) => {
    this.setState({
      isAgree: checked
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState(INITIAL_VALUES)
  }

  render () {
    const {
      userName,
      email,
      password,
      passwordConf,
      isUserNameValid,
      isEmailValid,
      isPasswordValid,
      isPasswordConfValid,
      isAgree
    } = this.state

    const userNameClassName = classNames(styles.input, {
      [styles.inputValid]: isUserNameValid,
      [styles.inputInvalid]: !isUserNameValid
    })

    const emailClassName = classNames(styles.input, {
      [styles.inputValid]: isEmailValid,
      [styles.inputInvalid]: !isEmailValid
    })

    const passwordClassName = classNames(styles.input, {
      [styles.inputValid]: isPasswordValid === isPasswordConfValid,
      [styles.inputInvalid]: !isPasswordValid
    })

    const passwordConfClassName = classNames(styles.input, {
      [styles.inputValid]: isPasswordConfValid === isPasswordValid,
      [styles.inputInvalid]: !isPasswordConfValid
    })

    const agreeClassName = classNames(styles.agree, {
      [styles.agreeValid]: isAgree,
      [styles.agreeInvalid]: !isAgree
    })

    return (
      <div className={styles.formContainer}>
        <div className={styles.logoCreate}>
          <FaRegEdit />
        </div>
        <h1 className={styles.formHeader}>Create Your Account</h1>
        <form className={styles.loginForm} onSubmit={this.handleSubmit}>
          <label className={styles.label}>
            <span className={styles.inputName}>Full name</span>
            <input
              className={userNameClassName}
              type='text'
              name='name'
              placeholder='Your name'
              value={userName}
              onChange={this.handleUserNameChange}
              autoFocus
            />
          </label>
          <label className={styles.label}>
            <span className={styles.inputName}>Email addres</span>
            <input
              className={emailClassName}
              type='email'
              name='email'
              placeholder='your@mail.com'
              value={email}
              onChange={this.handleEmailChange}
            />
          </label>
          <label className={styles.label}>
            <span className={styles.inputName}>Password</span>
            <input
              className={passwordClassName}
              type='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={this.handlePasswordChange}
            />
          </label>
          <label className={styles.label}>
            <span className={styles.inputName}>Confirm password</span>
            <input
              className={passwordConfClassName}
              type='password'
              name='passwordConf'
              placeholder='Confirm password'
              value={passwordConf}
              onChange={this.handlePasswordConfChange}
            />
          </label>
          <label className={styles.labelCheckBox}>
            <input
              className={agreeClassName}
              name='isAgree'
              type='checkbox'
              checked={this.state.isAgree}
              onChange={this.handleAgreeChange}
            />
            <span className={styles.spanAgree}>
              I Agree All Statements In Terms Of Service
            </span>
          </label>
          <button type='submit' className={styles.button}>
            Sign Up
          </button>
        </form>
        <div className={styles.member}>
          <p>
            I`m already a member!<a href='#'>Sign In</a>
          </p>
        </div>
      </div>
    )
  }
}

export default SignUpForm
