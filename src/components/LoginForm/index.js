// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', userpassword: '', error: '', onSubmitError: false}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onErrorMsg = error => {
    this.setState({onSubmitError: true, error})
  }

  submitForm = async e => {
    e.preventDefault()
    const {username, userpassword} = this.state
    const userDetails = {username, userpassword}
    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, option)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onErrorMsg(data.error)
    }
  }

  userNameInput = event => {
    this.setState({username: event.target.value})
  }

  userPasswordInput = event => {
    this.setState({userpassword: event.target.value})
  }

  render() {
    const {username, userpassword, onSubmitError, error} = this.state
    return (
      <div className="bg-container">
        <div className="login-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-image"
          />
          <div className="container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="nxt-image"
            />
            <form className="form-container" onSubmit={this.submitForm}>
              <label className="label-para" htmlFor="userName">
                USERNAME
              </label>
              <input
                type="text"
                id="userName"
                placeholder="Username"
                className="input"
                onChange={this.userNameInput}
                value={username}
              />

              <label className="label-para1" htmlFor="userPassword">
                PASSWORD
              </label>
              <input
                onChange={this.userPasswordInput}
                type="password"
                id="userPassword"
                placeholder="Userpassword"
                className="input1"
                value={userpassword}
              />
              <button type="submit" className="form-btn">
                Login
              </button>
              {onSubmitError && <p className="error_msg">*{error}</p>}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
