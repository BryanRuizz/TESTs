import React from 'react';
import '../css/shipments.css'
import { Button, Table } from 'react-bootstrap';
import { Couriers, Packages } from '../api/data';

function Shipments() {
    console.log("this are my", Couriers);
    return (<>
        <div className='titleone'>
            <h2 className='today'>Today</h2>
        </div>

        <div className="container-lg" style={{ background: "grey" }}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th colSpan={2}>Delivery man</th>
                        <th colSpan={3}>MAX</th>
                        <th rowSpan={1}>PACKAGES</th>
                    </tr>
                    <tr>

                        <th>Name</th>
                        <th>maxP</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Action</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>


                       <td></td>




                        <td>1</td>

                        <td>package1</td>
                        <td>on the way</td>

                        <td className='butons'>
                            <Button className='btn'>COMPLETE</Button>
                            <br />
                            <Button>DELAY</Button>
                            <br />
                            <Button>Assing</Button>
                        </td>
                        <td>package1</td>
                    </tr>
                    {/* Agregar más filas según sea necesario */}
                </tbody>
            </Table>

        </div>
    </>);
}

export default Shipments;
