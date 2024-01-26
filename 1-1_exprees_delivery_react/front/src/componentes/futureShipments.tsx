import React from 'react';
import './../css/futureship.css'
import { Table } from 'react-bootstrap';


function FutureShipments() {

  return (<>
    <div className='titleone'>
      <h1 className='tomorrow'>Future deliveries ("Tomorrow")</h1>
    </div>
    <div className="container-lg" style={{ background: "grey" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan={1}>Name</th>
            <th colSpan={1}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>DELAYED</td>
          </tr>
        </tbody>
      </Table>

    </div>

  </>
  );
}

export default FutureShipments;
