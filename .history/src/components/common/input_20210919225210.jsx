import React from 'react'

const input = ({name}) => {
    return (
        <div>
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label htmlFor={name}>Firstname</Form.Label>
            <Form.Control
              autoFocus
              name="name"
              placeholder="Enter Firstname"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            {Object.keys(firstNameErr).map((key) => {
              return <div style={{ color: "red" }}>{firstNameErr[key]}</div>;
            })}
          </Form.Group>
        </div>
    )
}

export default input
