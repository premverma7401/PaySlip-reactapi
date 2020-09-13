import React from 'react';
import Navbar from './Navbar';

const CreateEmployee = () => {
  return (
    <div>
        <Navbar title="Create Employee" />
        <form className="main">
            <div class="form">
                <div>
                    <span>
                        <input type="text" placeholder="Employee ID" />
                        <input type="number" placeholder="First Name" />
                        <input type="number" placeholder="Contact number" />
                        <input type="text" placeholder="IRD"/>
                        <input type="taxt" placeholder="Date Of Birth"/>
                    </span>
                    <span>
                        <input type="number" placeholder="Contract Hours" />
                        <input type="number" placeholder="Pay Per Hours" />
                        <input type="number" placeholder="Overtime Rate" />
                    </span>
                </div>
                <div>
                    <span>
                        <input type="text" placeholder="Username"/>
                        <input type="text" placeholder="Last Name"/>
                        <input type="email" placeholder="E-Mail"/>
                        <input type="text" placeholder="Address"/>
                        <input type="number" placeholder="Age"/>
                    </span>
                    <span>
                        <input type="text" placeholder="Contract Type" />
                        <input type="number" placeholder="Kiwi Saver" />
                        <input type="text" placeholder="Union" />
                    </span>
                </div>
            </div>
            <div className="submit-button">
                <button>submit</button>
            </div>
        </form>
    </div>
  );
};

export default CreateEmployee;
