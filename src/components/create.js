import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from "axios";

export default function Create() {
    const [department, setDepartment] = useState('');
    const [delivery, setDelivery] = useState('');
    const [person, setPerson] = useState('');
    const [deliveryInfo, setDeliveryInfo] = useState('');

    const [timestamp, setTimestamp] = useState('');
    const [sensor_id, setSensorId] = useState('');
    const [sensor_type, setSensorType] = useState('');
    const [SECRET_KEY, setSecretKey] = useState('_)(*&^%');

    const postData = () => {
        // API.post('newpostapi', '/department', {
        //     body: {
        //         department: department,
        //         delivery: delivery,
        //         person: person,
        //         deliveryInfo: deliveryInfo,
        //         timestamp:timestamp,
        //         sensor_id:sensor_id,
        //         sensor_type:sensor_type,
        //         SECRET_KEY: SECRET_KEY
        //     }
        // })
        const body = {
  
            department: department,
            delivery: delivery,
            person: person,
            deliveryInfo: deliveryInfo,
            timestamp:timestamp,
            sensor_id:sensor_id,
            sensor_type:sensor_type,
            SECRET_KEY: SECRET_KEY
        };
        axios.post(`http://www.lab1cloud.xyz/api/`, {body})
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

                <Form.Field>
                    <label>Timestamp</label>
                    <input placeholder='Timestamp' onChange={(e) => setTimestamp(e.target.value)}/>
                </Form.Field>

                <Form.Field>
                    <label>SensorID</label>
                    <input placeholder='Sensor ID' onChange={(e) => setSensorId(e.target.value)}/>
                </Form.Field>

                <Form.Field>
                    <label>SensorType</label>
                    <input placeholder='PeSensor Type' onChange={(e) => setSensorType(e.target.value)}/>
                </Form.Field>

                <Form.Field>
                    <label>SecretKey</label>
                    <input placeholder='Secret Key' onChange={(e) => setSecretKey(e.target.value)}/>
                </Form.Field>

                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}