import React from 'react'
import './GeneralInformation.css'

/*
    General information section on the navigation page. Displays static information about
    getting to and staying at the hospital.
*/
function GeneralInformation(props) {
    return (
        <div>
            <h1 id="navigation-info-header">General Information</h1>
            <div className="navigation-section starter-section">
                <h2 className="navigation-section-header">Address</h2>
                <p>
                1505 SW Archer Road
                Gainesville, FL 32608
                Phone: 352-273-6990

                UF Health Neurosurgery – Neuromedicine Hospital is located in Gainesville, Fla., on 
                the University of Florida campus off of Archer Road (SR 24), about three miles east 
                of I-75, exit 384, and one block west of U.S. Hwy 441.
                </p>
            </div>

            <div className="navigation-section">
                <h2 className="navigation-section-header">Parking</h2>
                <div  className="navigation-subsection">
                    <h2 className="navigation-section-subheader">General Directions</h2>
                    <h3 className="navigation-section-sub-subheader">From I-75</h3>
                    <ul>
                        <li>Take exit 384 to Gainesville/Archer. Head east on Archer Road for approximately 3 miles.</li>
                        <li>For main entrance — take a right at The Circle of Hope and a left immediately after into valet/patient drop-off.</li>
                        <li>For the parking garage — take a right at SW 13th Street and another right onto 13th Avenue. Park in the garage on your right.</li>
                    </ul>

                    <h3 className="navigation-section-sub-subheader">From South or North 441 (13th Street)</h3>
                    <ul>
                        <li>From U.S. Highway 441/13th Street:</li>
                        <li>For main entrance — head west on Archer Road. Take a left at The Circle of Hope and a left immediately after into valet/patient drop-off.</li>
                        <li>For the parking garage — From U.S. 441/13th Street, turn onto SW 13th Avenue. Park in the garage on your right.</li>
                    </ul>
                </div>

                <div className="navigation-subsection">
                    <h2 className="navigation-section-subheader">Parking Information</h2>
                    <ul>
                        <li>Valet parking is available in the front circle of the hospital ($3 with a patient or patient visitor parking voucher).</li>
                        <li>Patients and visitors must ask for a parking voucher at the check-out area, nurses’ station or other designated area when leaving their location of service and present it to the attendant upon exiting the garage.</li>
                        <li>Please be advised that parking is cash only.</li>
                        <li>If patients or visitors do not wish to valet, a 600-space parking garage is available adjacent to the hospital. A covered walkway from the garage leads into the lobby of the building.</li>
                    </ul>
                </div>
            </div>

            <div className="navigation-section">
                <h2 className="navigation-section-header">Transportation Methods</h2>
                <p>
                    <b>Where can I stay while my family member or friend is a patient at Shands at UF?</b>
                </p>
                <p>
                    Most of the area hotel and motel establishments in Gainesville will offer family and friends of 
                    patients a discount. UF Health Shands Hospital Admissions Desk will be happy to provide you with 
                    a current list of these establishments.
                </p>
            </div>
        </div>
    );
}

export default GeneralInformation;