import React from 'react'
import './GeneralInformation.css'

/*
    General information section on the navigation page. Displays static information about
    getting to and staying at the hospital.
*/
function GeneralInformation(props) {
    return (
        <div id="general-info-container">
            <h1 id="navigation-info-header">General Information</h1>
            <div className="navigation-section starter-section">
                <h2 className="navigation-section-header">Address</h2>
                <p>
                UF Health Neurosurgery<br/> 
                
                <br/>

                <b>
                1505 SW Archer Road <br/>
                Gainesville, FL 32608 <br/>
                </b>

                <br/>

                UF Health Neurosurgery is located in Gainesville, Fla., 
                on the University of Florida campus off of Archer Road (SR 24), about three miles 
                east of I-75, exit 384, and one block west of U.S. Hwy 441.
                </p>
            </div>

            <div className="navigation-section starter-section">
                <h2 className="navigation-section-header">Phone</h2>
                <p>
                Referrals (New Patients): <b>352-273-6990</b> <br/>

                Main Office: 352-273-9000
                </p>
            </div>

            <div className="navigation-section">
                <h2 className="navigation-section-header">Parking Information</h2>
                <ul>
                    <li>Valet parking is available in the front circle of the hospital ($3 with a patient or patient visitor parking voucher).</li>
                    <li>Patients and visitors must ask for a parking voucher at the check-out area, nurses’ station or other designated area when leaving their location of service and present it to the attendant upon exiting the garage.</li>
                    <li>Please be advised that parking is cash only.</li>
                    <li>If patients or visitors do not wish to valet, a 600-space parking garage is available adjacent to the hospital. A covered walkway from the garage leads into the lobby of the building.</li>
                </ul>
            </div>
        </div>
    );
}

export default GeneralInformation;