import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { API } from 'aws-amplify';

export default function Create() {
    const [department, setDepartment] = useState('');
    const [delivery, setDelivery] = useState('');
    const [person, setPerson] = useState('');
    const [deliveryInfo, setDeliveryInfo] = useState('');

    const postData = () => {
        API.post('newpostapi', '/department', {
            body: {
                department: department,
                delivery: delivery,
                person: person,
                deliveryInfo: deliveryInfo,
            }
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Department</label>
                    <input placeholder='Department' onChange={(e) => setDepartment(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Delivery</label>
                    <input placeholder='Delivery' onChange={(e) => setDelivery(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Person</label>
                    <input placeholder='Person' onChange={(e) => setPerson(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Delivery Info</label>
                    <input placeholder='Delivery Info' onChange={(e) => setDeliveryInfo(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}