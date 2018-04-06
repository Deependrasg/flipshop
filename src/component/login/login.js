import axios from 'axios';
import React, { Component } from 'react';
import {  ButtonToolbar, Button,
           Modal,Radio} from 'react-bootstrap';
import {ControlLabel,FormGroup,FormControl  } from 'react-bootstrap';


import "react-bootstrap/lib/ModalHeader";

const InitialState = {
  fname:'',
  lname:'',
  email:'',
  password:'',
  ConfirmPass:'',
  phoneNumber:'',
  religious:'',
  gender:'',
}
export default class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = InitialState;

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleLoginClick=this.handleLoginClick.bind(this);
    this.handleLogOutClick=this.handleLogOutClick.bind(this);
    this.state = {
      show: false,
      isLoggedIn: false
    };
  }

// Login Button changed 

 handleLoginClick(){
  this.setState({isLoggedIn:true})
 }

 handleLogOutClick(){
  this.setState({isLoggedIn:false})
 }



  handleShow() {
    this.setState({ show: true });
  }

  handleHide() {
    this.setState({ show: false });
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }


  getValidationState(){
  	if(this.state.fname){
  		const length=this.state.fname.length
  		if(length > 0) return 'success';
  		return null ;
  	}
  }

   lnamegetValidationState(){
  	if(this.state.lname){
  		const length=this.state.lname.length
  		if (length > 0) return 'success';
  		return null ;
  	}
  }
  emailvalidation(){
  	if(this.state.email){
  	const data=this.state.email	
  	if(data.indexOf('@') !== -1 && data.indexOf('.com') !== -1){
	   return 'success';
	}
	else if (data.indexOf('@') === -1 || data.indexOf('.com') === -1 )
		return 'error'
  	}
  	return null;
  }

  passwordValidation(){
  	if(this.state.password){
  		const password=this.state.password

  		if (password.length >=8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && /[@#$%^&*()"-+=-]/.test(password)){
  			 return 'success';
  		}else{
  			return 'error'
  		}
  	}
  }

  confirmPass(){
  	if (this.state.ConfirmPass){
  		if(this.state.ConfirmPass === this.state.password){
  		return 'success'
  		}else{
  			return 'error'
  		}
  	}
  }

  genderValidation(){
  	if (this.state.gender ==='Male' || this.state.gender ==='Female'){
  		return 'success'
  	}else {return 'errors'}
  }
  optionValidation(){
  	if(this.state.religious){
  		if(this.state.religious.length > 0) return 'success'
  		return null ;
  	}
  }


  handleSubmit(event) {
    var bodyFormData = new FormData();
    if(this.state.isLoggedIn){
     bodyFormData.set('email', this.state.email);
     bodyFormData.set('password', this.state.password);

      axios({
              method: 'post',
              url: 'http://127.0.0.1:8000/user/login/',
              data: bodyFormData,
              config: { headers: {'Content-Type': 'multipart/form-data' }}
                        })
            .then(function (response,status, xhr) {
                if (response.status === 200){
                    window.localStorage.setItem('access_token',response.data.token)

                    this.props.addToken(response.data.token)
                    this.props.addUserName(response.data.email)
                }
                console.log(response);

            }.bind(this))
            .catch(function (response) {
                //handle error
                console.log(response);
            });
                
    }else {alert('logout')}

    event.preventDefault();
 	
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (

      <ButtonToolbar>
        <span onClick={this.handleShow}>
         Login & Signup
        </span>

        
              {isLoggedIn ? (
            <Modal
              {...this.props}
              show={this.state.show}
              onHide={this.handleHide}
              dialogClassName="custom-modal"
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-lg">
                
                <h4 onClick={this.handleLogOutClick}>New to Flipkart? Sign up</h4>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form >
                  <FormGroup 
                    controlId="emailvalid" 
                    validationState={this.emailvalidation()}
                    bsSize="small">
                      <ControlLabel>Email</ControlLabel>
                    <FormControl 
                      type="email"  
                      value={this.state.email} 
                      onChange={this.handleChange}
                      placeholder="xyz@xyz.com" 
                      name="email"/>
                      <FormControl.Feedback />
                  </FormGroup>
                  <FormGroup 
                    controlId='passwordValid'
                    validationState={this.passwordValidation()} 
                    bsSize="small">
                    <ControlLabel> Password </ControlLabel>
                    <FormControl 
                      type="password" 
                      name="password" 
                      placeholder="Abcs@2121" 
                      value={this.state.password} 
                      onChange={this.handleChange} />
                    <FormControl.Feedback />
                  </FormGroup>
                </form>
              </Modal.Body>
          <Modal.Footer>
            <Button type="submit" onClick={this.handleSubmit} bsStyle="success" > Login </Button>
            <Button onClick={this.handleHide} > Close </Button>
          </Modal.Footer>
        </Modal>
                ) : (

          <Modal
            {...this.props}
            show={this.state.show}
            onHide={this.handleHide}
            dialogClassName="custom-modal"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-lg">
              <h4 onClick={this.handleLoginClick}>Existing User? Log in</h4>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form >
                <FormGroup
                controlId='firstName'
                validationState={this.getValidationState()}
                bsSize="small"
              >
                <ControlLabel> First Name  </ControlLabel> 
                <FormControl 
                  type="text" 
                  value={this.state.fname} 
                  onChange={this.handleChange} 
                  placeholder="Anand"
                  name='fname'/>
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup
                    controlId="lastName"
                    validationState={this.lnamegetValidationState()}
                    bsSize="small"
                  >
                <ControlLabel> Last Name  </ControlLabel> 
                <FormControl 
                  type="text" 
                  value={this.state.lname} 
                  onChange={this.handleChange} 
                  placeholder="Singh"
                  name='lname'/>
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup 
                controlId="emailvalid" 
                validationState={this.emailvalidation()}
                bsSize="small">
                  <ControlLabel>Email</ControlLabel>
                <FormControl 
                  type="email"  
                  value={this.state.email} 
                  onChange={this.handleChange}
                  placeholder="xyz@xyz.com" 
                  name="email"/>
                  <FormControl.Feedback />
              </FormGroup>
              <FormGroup 
                controlId='passwordValid'
                validationState={this.passwordValidation()} 
                bsSize="small">
                <ControlLabel> Password </ControlLabel>
                <FormControl 
                  type="password" 
                  name="password" 
                  placeholder="Abcs@2121" 
                  value={this.state.password} 
                  onChange={this.handleChange} />
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup 
                controlId='ConfirmPass'
                validationState={this.confirmPass()}
                bsSize="small">
                <ControlLabel> Confirm Password </ControlLabel>
                <FormControl 
                  type="password" 
                  name="ConfirmPass"
                  value={this.state.ConfirmPass} 
                  onChange={this.handleChange} />
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup 
                controlId='genderId'
                validationState={this.genderValidation()}
                bsSize="small">

                <Radio  name='gender'  checked={this.state.Gender} onChange={this.handleChange} value="Male" inline>Male </Radio>
                <Radio  name='gender'  checked={this.state.Gender} onChange={this.handleChange} value="Female" inline>Female </Radio>
                      <FormControl.Feedback />
                    </FormGroup>  
              <FormGroup 
                  controlId="formControlsSelect"
                  validationState={this.optionValidation()}
                        bsSize="small"  >   
                <ControlLabel>Select</ControlLabel>
                <FormControl componentClass="select" name='religious' placeholder="select" value={this.state.religious} onChange={this.handleChange}>
                  <option value="select">select</option>
                  <option value="Hindu">Hindu</option>
                  <option value="And Hindu">And Hindu</option>
                  <option value="Jainism">Jainism</option>
                  <option value="Buddhism">Buddhism</option>
                  </FormControl>
                </FormGroup>
              </form>
            </Modal.Body>
          <Modal.Footer>
            <Button type="submit" onClick={this.handleSubmit} bsStyle="success" > SignUp </Button>
            <Button onClick={this.handleHide} > Close </Button>
          </Modal.Footer>
        </Modal>
                )}
              
          
      </ButtonToolbar>
    );
  }
}
