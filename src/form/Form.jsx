import React, { Component } from 'react';
import "./Form.css";
import  { FiSend }  from    "react-icons/fi";
import { frameworks, learningTypes, levels } from '../util/data';

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         firstName: "Luffy" ,
         lastName: "D.Monkey"  ,
         email: "Thandarswe97@gmial.com" ,
         phone:"09959998110"  ,
         framework:"React" ,
         level:"Basic",
         learningType:["Fundamentals"] ,
         feedBack:"This Fundamental Course is easy to learn!"
      }
    }
     
        handelChange = (event)  => {
            const {name, value} = event.target;
            console.log('value', value);
            this.setState({
                [name]: value,
            })
        }

    
    
  render() {
    console.log('State', this.state);
    const { firstName,
            lastName,
            email,
            phone,
            framework,
            level,
            learningType,
            feedBack } = this.state;
    
    
    return (
        
      <div  className='bgStyle'>
            <form action="">

                <div   className='formStyle'>

                    <div className="sendCircle">

                        <FiSend className="send_icon" />

                    </div>

                        <p className="head">Welcome!</p>

                        <div className="fullName">

                            <div>
                                <label htmlFor="" className="label">First Name</label>
                                <br/>
                                <input type="text" 
                                value={firstName}   
                                name="firstName" 
                                onChange={this.handelChange}  />
                            </div>

                            <div>
                                <label htmlFor="" className="label">Last Name</label>
                                <br/>
                                <input type="text" 
                                value={lastName}
                                name="lastName" 
                                onChange={this.handelChange}   />
                            </div>
                        </div>

                        <div>
                            <label className="label">Email</label>
                            <br />
                            <input type="email" 
                            value={email}
                            name="email"
                            onChange={this.handelChange}/>
                        </div>

                        <div>
                            <label className="label">Mobile No</label>
                            <br />
                            <input type="number" 
                            value={phone}
                            name="phone"
                            onChange={this.handelChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="" className='label'>Which framework is that you learn?</label><br />
                            <select  value={framework}
                                     name="framework"
                                     onChange={this.handelChange}  >

                                {frameworks.map((e) => (
                                        <option >{e.value}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className='label'>
                            <label htmlFor="">Level</label><br />
                            <div  className='wrapper'>
                                {
                                    levels.map(
                                        (e) => (
                                        <div  key={e.id}  className='wrapperInner'  >
                                        <input 
                                        type="radio" 
                                        name="level"
                                        value={e.name}
                                        defaultChecked={level && e.name === level}
                                        onChange={this.handelChange}
                                        />
                                         <label className='label'>{e.name}</label>
                                        </div>
                                        )
                                    )
                                }
                            </div>
                        </div>

                        <div className='label'>
                            <label htmlFor="">Which learning is that?</label><br />
                            <div    className='wrapper'>
                                {
                                    learningTypes.map(
                                        (e) => (
                                        <div  key={e.id}  className='wrapperInner'  >
                                        <input type="checkbox" 
                                        name="learningType"
                                        defaultChecked={learningType && learningType.includes(e.name)}
                                        value={e.name}
                                        onChange={this.handelChange}/> <label htmlFor="" className='label'>{e.name}</label>
                                        </div>
                                        )
                                    )
                                }
                            </div>
                        </div>

                        <div>
                            <label htmlFor="" className="label">Why like this?</label><br />
                            <textarea rows="50" 
                            value={feedBack}
                            name="feedBack"
                            onChange={this.handelChange}></textarea>
                        </div>
                        
                        <div>
                            <button className='button' type='submit'>Send</button>
                        </div>
                </div>
                    
            </form>
      </div>
    )
  }
};

export default Form
