import React from 'react';
import Navbar from './Navbar';
import '../styles/CreateEmployee.css'

const CreateEmployee = () => {
  return (
    <div>
        <Navbar title="Create Employee" />
        <form className="main">
            <div class="form">
                <div>
                    <span>
                        PERSONAL INFORMATION
                    </span>
                    <span>
                        <input type="text" placeholder="Employee ID" />
                        <input type="text" placeholder="Username"/>
                    </span>
                    <span>
                        <input type="number" placeholder="First Name" />
                        <input type="text" placeholder="Last Name"/>
                    </span>
                    <span>
                        <input type="number" placeholder="Contact number" />
                        <input type="email" placeholder="E-Mail"/>
                    </span>
                    <span>
                        <input type="text" placeholder="IRD"/>
                        <input type="taxt" placeholder="Date Of Birth"/>
                        <input type="number" placeholder="Age"/>
                    </span>
                    <span>
                        <input className="address-bar" type="text" placeholder="Address"/>
                    </span> 
                </div>
                <div>
                    <span>
                        CONTRACT INFORMATION
                    </span>
                    <span>
                        <input type="number" placeholder="Contract Hours" />
                        <input type="text" placeholder="Contract Type" />
                    </span> 
                    <span>
                        <input type="number" placeholder="Pay Per Hours" />
                        <input type="number" placeholder="Overtime Rate" />
                    </span>
                    <span>
                        <input type="number" placeholder="Kiwi Saver" />    
                        <input type="text" placeholder="Union" />
                    </span>
                </div>            
                <div className="submit-button">
                    <button>submit</button>
                </div>
            </div>
        </form>
    </div>
  );
};

export default CreateEmployee;
