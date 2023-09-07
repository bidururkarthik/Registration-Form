// Write your JS code here
import './index.css'

import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    successSubmit: false,
    firsterror: false,
    lasterror: false,
  }

  onChangeFirstName = event => {
    this.setState({firstname: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastname: event.target.value})
  }

  onBlurFirstName = () => {
    const validfirstname = this.validfirstname()

    this.setState({firsterror: !validfirstname})
  }

  validfirstname = () => {
    const {firstname} = this.state
    return firstname !== ''
  }

  onBlurLastName = () => {
    const validlastname = this.validlastname()

    this.setState({lasterror: !validlastname})
  }

  validlastname = () => {
    const {lastname} = this.state
    return lastname !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()
    const validfirstname = this.validfirstname()
    const validlastname = this.validlastname()
    const {firstname, lastname} = this.state
    if (firstname && lastname) {
      this.setState({successSubmit: true})
    } else {
      this.setState({
        successSubmit: false,
        firsterror: !validfirstname,
        lasterror: !validlastname,
      })
    }
  }

  onClickSubmitAnotherResponse = () => {
    this.setState({successSubmit: false})
  }

  renderFirstNameField = () => (
    <div className="input-container">
      <label className="input-label" htmlFor="firstName">
        FIRST NAME
      </label>
      <input
        type="text"
        id="firstName"
        placeholder="First name"
        onChange={this.onChangeFirstName}
        onBlur={this.onBlurFirstName}
      />
    </div>
  )

  renderLastNameField = () => (
    <div className="input-container">
      <label className="input-label" htmlFor="lastName">
        LAST NAME
      </label>
      <input
        type="text"
        id="lastName"
        placeholder="Last name"
        onChange={this.onChangeLastName}
        onBlur={this.onBlurLastName}
      />
    </div>
  )

  renderRegistrationForm = () => {
    const {firsterror, lasterror} = this.state
    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        {this.renderFirstNameField()}
        {firsterror && <p className="error-message">Required</p>}
        {this.renderLastNameField()}
        {lasterror && <p className="error-message">Required</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  renderSubmissionSuccessView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {successSubmit} = this.state
    return (
      <div className="registration-form-container">
        <h1 className="form-title">Registration</h1>
        <div className="view-container">
          {successSubmit
            ? this.renderSubmissionSuccessView()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
