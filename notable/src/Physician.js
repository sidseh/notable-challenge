import React from 'react'

const Physician = ({ firstName, lastName,  }) => {
    return (
        <div className='physician-container'>
            <div className='row'>
                <div className='physician'>
                    <ul>
                        <li>
                            {lastName}, {firstName}
                        </li>
                    </ul>
                </div>
            </div>    
        </div>
    )
}

export default Physician
