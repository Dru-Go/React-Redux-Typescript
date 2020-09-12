import React from 'react'


// TODO Click handler 

function form() {
    return (
        <div>
            <label htmlFor="New Employee">Add new Employee</label>
            <div>
                <label>Name</label>
                <input type="text"/>
            </div>
            <div>
                <label>Date Of Birth</label>
                <input type="text"/>
            </div>
            <div>
                <label>Gender</label>
                <input type="text"/>
            </div>
            <div>
                <label>Salary</label>
                <input type="text"/>
            </div>
            <button>Save</button>
        </div>
    )
}

export default form
