import React from 'react';
import Navbar from './Navbar';

const CreateEmployee = () => {
  return (
    <div>
        <Navbar title="View Employee" />
        <div class="nav-options" id="nav-options">
            <ul>
                <li>
                   <a href="#personal">PERSONAL</a>
                </li>
                <li>
                <a href="#contract">CONTRACT</a>
                </li>
            </ul>
        </div>
        <div class="form" id="personal">
            <div>
                <input type="number" placeholder="Employee ID" />
                <input type="number" placeholder="First Name" />
                <input type="number" placeholder="Contact number" />
                <input type="text" placeholder="IRD"/>
                <input type="taxt" placeholder="Date Of Birth"/>
            </div>
            <div>
                <input type="text" placeholder="Username"/>
                <input type="text" placeholder="Last Name"/>
                <input type="email" placeholder="E-Mail"/>
                <input type="text" placeholder="Address"/>
                <input type="number" placeholder="Age"/>
            </div>
        </div>
        <div class="contract-id" id="contract">
                <input type="text" placeholder="Employee Contract ID" />
        </div>
        <div class="form">
            <div>
                <input type="number" placeholder="Contract Hours" />
                <input type="number" placeholder="Pay Per Hours" />
                <input type="number" placeholder="Overtime Rate" />
            </div>
            <div>
                <button>Update</button>
            </div>
            <div>
                <input type="text" placeholder="Contract Type" />
                <input type="number" placeholder="Kiwi Saver" />
                <input type="text" placeholder="Union" />
            </div>
        </div>
    </div>
  );
};

export default CreateEmployee;
