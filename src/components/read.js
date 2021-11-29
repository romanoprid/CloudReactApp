import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { API } from 'aws-amplify';

export default function Read() {
    const [APIData, setAPIData] = useState([]);

    const fetchData = async () => {
        try {
          const data = await API.get('newpostapi', '/department');
          console.log(data)
          setAPIData(data);
        } catch (error) {
          console.log(error);
        }
    }



    useEffect(() => {
        fetchData();
    }, []);

    const setData = (data) => {
        let { id } = data;
        localStorage.setItem('ID', id);
    }

    const getData = () => {
        fetchData();
    }

    const onDelete = (id) => {
        API.del('newpostapi', `/department/${id}`)
        fetchData();
    }

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        
                        <Table.HeaderCell>Delivery</Table.HeaderCell>
                        <Table.HeaderCell>DeliveryInfo</Table.HeaderCell>
                        <Table.HeaderCell>Department</Table.HeaderCell>
                        <Table.HeaderCell>Person</Table.HeaderCell>
                        <Table.HeaderCell>SensorID</Table.HeaderCell>
                        <Table.HeaderCell>SensorType</Table.HeaderCell>
                        <Table.HeaderCell>Timestamp</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    { APIData.map((data, key) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.delivery.S}</Table.Cell>
                                <Table.Cell>{data.deliveryInfo.S}</Table.Cell>
                                <Table.Cell>{data.department.S}</Table.Cell>
                                <Table.Cell>{data.person.S}</Table.Cell>
                                <Table.Cell>{data.sensor_id.S}</Table.Cell>
                                <Table.Cell>{data.sensor_type.S}</Table.Cell>
                                <Table.Cell>{data.timestamp.S}</Table.Cell>
                                
                                {/* <Link to={{pathname: '/update', data: data.id.S}}>
                                    <Table.Cell>
                                        <Button onClick={() => setData(data.id.S)}>Update</Button>
                                    </Table.Cell>
                                </Link> */}
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id.S)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}