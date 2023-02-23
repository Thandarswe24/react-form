import React, { Component } from 'react';
import "./Form.css";
import  { FiSend }  from    "react-icons/fi";
import { frameworks, learningTypes, levels } from '../util/data';

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

                <div>
                    <label className="label">Email</label>
                    <br />
                    <input type="email" />
                </div>

                <div>
                    <label className="label">Mobile No</label>
                    <br />
                    <input type="number" />
                </div>

                <div>
                    <label htmlFor="" className='label'>which framework is that you learn?</label><br />
                    <select name="" id="">
                        {
                            frameworks.map((e) => (
                                <option value="">
                                    {e.value}
                                </option>
                            )

                            )
                        }
                    </select>
                </div>

                <div className='label'>
                    <label htmlFor="">Level</label><br />
                    <div    className='wrapper'>
                        {
                            levels.map(
                                (e) => (
                                <div  key={e.id}  className='wrapperInner'  >
                                   <input type="radio" /> <label htmlFor="" className='label'>{e.name}</label>
                                </div>
                                )
                            )
                        }
                    </div>
                </div>
                <div className='label'>
                    <label htmlFor="">Level</label><br />
                    <div    className='wrapper'>
                        {
                            learningTypes.map(
                                (e) => (
                                <div  key={e.id}  className='wrapperInner'  >
                                   <input type="checkbox" /> <label htmlFor="" className='label'>{e.name}</label>
                                </div>
                                )
                            )
                        }
                    </div>
                </div>
                <div>
                    <label htmlFor="" className="label">Why like this?</label><br />
                    <textarea rows="50"></textarea>
                </div>
                <div>
                    <button className='button'>Send</button>
                </div>
        </div>
                
        </form>
      </div>
    )
  }
};

export default Form
