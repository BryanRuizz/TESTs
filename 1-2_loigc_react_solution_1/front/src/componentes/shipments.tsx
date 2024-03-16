import React, { useState } from 'react';
import '../css/shipments.css'
import { Button, Table } from 'react-bootstrap';
import { Couriers, Packages } from '../api/data';
import "../styles/shipments.css";
import FutureShipments from './futureShipments';

function Shipments() {
    // sort is a method who order the array, needs two elements to compar
    const [data, setData] = useState<any>(Couriers.sort((a, b) => b.maxpackages - a.maxpackages));
    const [inf,setInf] = useState<any>(Packages);

    const [delayed,setDelayed] = useState<any>([]);
    const [one,setOne] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [comp, setComp] = useState(false);
    console.log("this are my", Couriers, Packages);

    const assing = () => {
       
        const PackagesNew: any[] = Packages.map((pkg, index) => {
            const courierName = index < Couriers.length ? Couriers[index].name : ''; // Obtener el nombre del mensajero si está disponible
            return { ...pkg, user: courierName }; // Agregar el nombre del mensajero como un nuevo atributo llamado user
        });
        setInf(PackagesNew);
        setOne(true);
        console.log("packnew :",PackagesNew);
    }

    const delayespa =()=>{
        // if(inf === [])
        setHidden(true);
        setDelayed(inf);
    }
    const comple =()=>{
        if(comp ===false){

            setComp(true);
        }
        else{
            
        setComp(false);
        }
    }
console.log("var one: ",one);
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

                        <td>
                            {
                                data?.map((item: any, index: number) => (
                                    <h2 className='namecss'  key={index} style={{ background: comp === true && index ===0 ? 'green' : '' }} >{item.name}</h2>
                                    // Names deliveries
                                ))
                            }
                        </td>




                        <td>
                            {
                                data?.map((item: any, index: number) => (
                                    <h2 className='namecss' key={index} style={{ background: comp === true && index ===0 ? 'green' : '' }} >{item.maxpackages}</h2>
                                    // max packages
                                ))
                            }
                        </td>

                        <td>
                            {
                                one === false?(<></>):(
                                 inf?.map((item: any, index: number) => (
                                    
                                    item.user ===''?(
                                        <div key={index}></div>
                                    ):(
                                        <h2 className='namecss' key={index} style={{ background: comp === true && index ===0 ? 'green' : '' }} >{item.name}</h2>
                                        // name packages
                                    )
                                    
                                )))
                            }
                        </td>
                        <td style={{ background: comp === true? '' : '' }}>on the way</td>

                        <td className='butons' style={{ background: comp === true  ? 'green' : '' }}>
                            <Button className='btn'  onClick={comple}>COMPLETE</Button>
                            <br />
                            <Button onClick={delayespa}>DELAY</Button>
                            <br />
                            <Button onClick={assing}>Assing</Button>
                        </td>
                        <td>
                            {
                                hidden===true?(<></>):(
                                inf?.map((item: any, index: number) => (
                                    one===true?(
                                        item.user===''?(
                                        <h3 className='packcss' key={index} style={{ background: comp === true && index ===0 ? 'green' : '' }} >{item.name}</h3>
                                        ):( <div key={index}></div>)
                                    ):(
                                    <h3 className='packcss' key={index} style={{ background: comp === true && index ===0 ? 'green' : '' }}>{item.name}</h3>
                                    // packages last colum
                                    )
                                ))
                                )
                            }
                        </td>
                    </tr>
                    {/* Agregar más filas según sea necesario */}
                </tbody>
            </Table>
            

        </div>

        <FutureShipments one={one} inf={delayed} />
    </>);
}

export default Shipments;
