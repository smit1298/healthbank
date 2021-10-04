import React from 'react'

const input = ({name, label, value, }) => {
    return (
        <div>
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label htmlFor={name}>{label}</Form.Label>
            <Form.Control
              autoFocus 
              name="name"
              placeholder="Enter Firstname"
              value={value}
              
            />
            {Object.keys(firstNameErr).map((key) => {
              return <div style={{ color: "red" }}>{firstNameErr[key]}</div>;
            })}
          </Form.Group>
        </div>
    )
}

export default input
