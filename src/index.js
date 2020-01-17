import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
class App extends React.Component {
    constructor(props){
        super(props);

    }
    state ={
        name : "",
        compnay: "",
        email:"",
        phNo : "",
        message: ""
    }
    handleChange = (event) => this.setState({ [event.target.name]: event.target.value })

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, company, email, phNo, message } = this.state;
        axios({
            method: 'post',
            url: 'https://j12qwbc4rc.execute-api.ap-southeast-1.amazonaws.com/beta/contact',
            crossDomain: "true",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ name, company, email, phNo, message })
           
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }   
    render() {
        const { name, company, email, phNo, message } = this.state;
        return(
            <div>
                <form className="form-horizontal" onSubmit= {this.handleSubmit}>
                <fieldset>
                <div className="field">
                        <label className="label" htmlFor="name">Name</label>
                        <div className="control">
                            <input id="name" name="name" value={name} type="text" placeholder="Name" class="input " required onChange={this.handleChange}/>
                            <p class="help">Please enter your full name</p>
                        </div>
                </div>
                
                    <div className="field">
                        <label className="label" htmlFor="companyName">Company Name (or) Organization</label>
                        <div className="control">
                            <input id="companyName" name="companyName" value={company} type="text" placeholder="Company(Organization)" class="input " required="" onChange={this.handleChange}/>
                            <p class="help">Please type your company or organization's name.</p>
                        </div>
                    </div>



                    <div class="field">
                        <label class="label" htmlFor="email">Email</label>
                        <div class="control">
                            <input id="email" name="email" type="text" placeholder="Email Address" name={email} class="input " required="" onChange={this.handleChange}/>
                            <p class="help">Please type your email</p>
                        </div>
                    </div>


                    <div class="field">
                        <label class="label" htmlFor="phNum">Phone Number</label>
                        <div class="control">
                            <input id="phNum" name="phNum" type="tel" placeholder="+959 " value={phNo} class="input " required="" onChange={this.handleChange}/>
                            <p class="help">Please fill your phone number.</p>
                        </div>
                    </div>


                    <div class="field">
                        <label class="label" htmlFor="message">Message</label>
                        <div class="control">
                           
                            <textarea className="textarea" id="message" name="message" type="text" value={message} onChange={this.handleChange} required=""/>
  
                        </div>
                    </div>


                    <div class="field">
                        <div class="control">
                            <button id="submit" name="submit" class="button is-default">Submit</button>
                        </div>
                    </div>   



                   

                </fieldset>
            </form>
            </div>
        )
    }
}





ReactDOM.render(<App />, document.getElementById('root'));


