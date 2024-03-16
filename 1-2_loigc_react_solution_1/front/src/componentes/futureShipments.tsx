import React from 'react';
import './../css/futureship.css'
import { Table } from 'react-bootstrap';

interface future {
  one: boolean;
  inf: any[];
}


function FutureShipments(props: future) {

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


          {
            props.one === true ? (
              props.inf?.map((item: any, index: number) => (
                item.user === '' ? (

                  <tr>
                    <td>
                      <h3 className='packcss' key={index}>{item.name}</h3>
                    </td>
                    <td>DELAYED</td>
                  </tr>

                ) : (<></>)
              ))
            ) : (<></>)
          }



        </tbody>
      </Table>

    </div>

  </>
  );
}

export default FutureShipments;
