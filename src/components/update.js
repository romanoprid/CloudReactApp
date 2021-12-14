import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { useLocation } from 'react-router-dom'

export default function Update() {
    const location = useLocation()
    const [id, setID] = useState(null);
    const [department, setDepartment] = useState('');
    const [delivery, setDelivery] = useState('');
    const [person, setPerson] = useState('');
    const [deliveryInfo, setDeliveryInfo] = useState('');


    useEffect(() => {
        setID(location.data);
    }, [location.data]);

    const updateAPIData = () => {
        // API.put('newpostapi', `/department/${id}`, {
        //     body: {
        //         department: department,
        //         delivery: delivery,
        //         person: person,
        //         deliveryInfo: deliveryInfo,

        //     }
        // })

    }

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>ID</label>
                    <input placeholder='ID' value={id} onChange={(e) => setID(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Department</label>
                    <input placeholder='Department' value={department} onChange={(e) => setDepartment(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Delivery</label>
                    <input placeholder='Delivery' value={delivery} onChange={(e) => setDelivery(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Person</label>
                    <input placeholder='Person' value={person} onChange={(e) => setPerson(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Delivery Info</label>
                    <input placeholder='Delivery Info' value={deliveryInfo} onChange={(e) => setDeliveryInfo(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}