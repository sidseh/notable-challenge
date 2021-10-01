
import React from 'react'
import './PatientList.css'


const PatientList = ({ physicians }) => {

    return (
        <div className='patient-list-container'>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Kind</th>
                    </tr>
                </thead>
                <tbody>
                    {physicians.map((patient) => (
                    <tr>
                        <td>{patient.patients[0].patientId}</td>
                        <td>{patient.patients[0].name}</td>
                        <td>{patient.patients[0].time}</td>
                        <td>{patient.patients[0].kind}</td>
                    </tr>
                    )
                )}
                    
                </tbody>
            </table>
            
        </div>
    )
}

export default PatientList
