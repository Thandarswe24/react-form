import React, { Component } from 'react';
import "./Form.css";
import  { FiSend }  from    "react-icons/fi";

export class Form extends Component {
  render() {
    return (
      <div  className='bgStyle'>
        <form action="">

        <div   className='formStyle'>

            <div className="sendCircle">

                <FiSend className="send_icon" />

            </div>
                <p className="head">Joy Boy</p>

                <div className="fullName">

                    <div>
                        <label htmlFor="" className="label">First Name</label>
                        <br/>
                        <input type="text" />
                    </div>

                    <div>
                        <label htmlFor="" className="label">Last Name</label>
                        <br/>
                        <input type="text" />
                    </div>
                </div>
        </div>

        </form>
      </div>
    )
  }
}

export default Form
