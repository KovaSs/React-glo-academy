import React, {Component} from 'react';
import { Tooltip} from "reactstrap";
import InputMask from 'react-input-mask';
import './form.css'
import GetService from '../../server/getService';
import SpinnerLoad from '../spinner';
import ErrorBlock from '../error';

class FormBase extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      nameErr: {
        toolTip: false,
        label: ''
      },
      emailErr: {
        toolTip: false,
        label: ''
      },
      messageErr: {
        toolTip: false,
        label: ''
      }
    }
  }

  getService = new GetService();

  validateName = (value) => {
    if (value.trim().length < 2) {
      this.setState({
        nameErr: {
          toolTip: true,
          label: 'Name must be greater then 2 symbols'
        }
      })
      return false;
    } else if (value.trim().length > 20) {
      this.setState({
        nameErr: {
          toolTip: true,
          label: 'Name must be less then 20 symbols'
        }
      })
      return false
    } else {
      this.setState({
        nameErr: {
          toolTip: false,
          label: ''
        }
      })
      return true
    }
  }

  validateEmail = (value) => {
    const reg = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
    if (value.trim().length === 0) {
      this.setState({
        emailErr: {
          toolTip: true,
          label: 'Enter e-mail'
        }
      })
      return false;
    } else if (!reg.test(value.trim())) {
        this.setState({
          emailErr: {
            toolTip: true,
            label: 'E-mail is incorrect'
          }
        });
        return false
      } else {
        this.setState({
          emailErr: {
            toolTip: false,
            label: ''
          }
        })
        return true
    }
  }

  validateMsg = (value) => {
    if (value.trim().length === 0) {
      this.setState({
        messageErr: {
          toolTip: true,
          label: 'Enter message please'
        }
      })
      return false
    } else {
      this.setState({
        messageErr: {
          toolTip: false,
          label: ''
        }
      })
      return true
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({loading: true});

    const {userName, userEmail, userPhone, userMessage} = this.refs;

    if (this.validateName(userName.value) && 
      this.validateEmail(userEmail.value) && 
      this.validateMsg(userMessage.value)) {
      
      const data = {
        userName: userName.value,
        userEmail: userEmail.value,
        userPhone: userPhone.value,
        userMessage: userMessage.value
      }

      this.getService.uploadJson(data)
       .then(() => {
          this.props.onToggleContent()
          this.setState({loading: false});
        })
      .catch(() => {
        this.setState({
          loading: false,
          error: true
        });
      })

    }
  }

  onBlurHandle = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    switch (name) {
      case 'userName':
        return this.validateName(value);
      case 'userEmail':
        return this.validateEmail(value);
      case 'userMessage':
        return this.validateMsg(value);
      default: 
        return true
    }
  }

  backToForm = () => {
    this.setState({
      error: false
    })
  }


  render() {
    if (this.state.error) {
      return <ErrorBlock/>
    }

    if (this.state.loading) {
      return <SpinnerLoad/>
    } else {
      return (
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <form className='contact-form' onSubmit={(e) => this.handleFormSubmit(e)}>
              <div className='form-block'>
                <label className='form-label'>
                  <span className='form-name'>Name<span className='form-required'>*</span></span>
                  <input 
                    className='form-input'
                    name='userName'
                    ref='userName'
                    id='userName'
                    onBlur={this.onBlurHandle}
                  />
                  <Tooltip 
                    placement="right" 
                    isOpen={this.state.nameErr.toolTip} 
                    target="userName">
                    {this.state.nameErr.label}
                  </Tooltip>
                </label>
  
              </div>
  
              <div className='form-block'>
                <label className='form-label'>
                  <span className='form-name'>E-mail<span className='form-required'>*</span></span>
                  <input 
                    className='form-input'
                    name='userEmail'
                    ref='userEmail'
                    id='userEmail'
                    onBlur={this.onBlurHandle}
                  />
                  <Tooltip 
                    placement="right" 
                    isOpen={this.state.emailErr.toolTip} 
                    target="userEmail">
                    {this.state.emailErr.label}
                  </Tooltip>
                </label>
              </div>
  
              <div className='form-block'>
                <label className='form-label'>
                  <span className='form-name'>Phone</span>
                  <InputMask 
                    className='form-input'
                    name='userPhone'
                    ref='userPhone'
                    placeholder='+7(___) ___-____'
                    mask="+7\(999) 999-9999" 
                    maskChar="_"
                  />
                </label>
              </div>
  
              <div className='form-block'>
                <label className='form-label form-label-textarea'>
                  <span className='form-name'>Your message<span className='form-required'>*</span></span>
                  <textarea 
                    className='form-input form-textarea'
                    name='userMessage'
                    ref='userMessage'
                    id='userMessage'
                    placeholder='Tell us...'
                    onBlur={this.onBlurHandle}
                  />
                </label>
                <Tooltip 
                  placement="right" 
                  isOpen={this.state.messageErr.toolTip} 
                  target="userMessage">
                  {this.state.messageErr.label}
                </Tooltip>
              </div>
  
              <div className='form-block form-block-submit'>
                <button className='form-submit'>Send us</button>
              </div>
            </form>
          </div>
        </div>
      )

    }


  }


}




export default FormBase