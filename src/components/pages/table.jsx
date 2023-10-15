import React, { Component, useState } from 'react'
import { useContext } from 'react';
import { PrintPdfContext } from '../Context';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Table = (props) => {

    const navigate = useNavigate();
    const { value, setValue, componentRef, printForm, currentDate, setCurrentDate } = useContext(PrintPdfContext);
    // const {  value, printForm, componentRef  } = props

    useEffect(()=>{
        if(value){
            printForm();
            console.log(value?.currentDate);
        }else{
            console.log("This is not suitable");
        }
    },[])

    return (
        <>
         <div className=' d-flex justify-content-between align-items-center'>
                <Button variant="contained" onClick={() => { navigate('/') }} sx={{mt: 1,  width: '10%' }} >Back</Button>
                <Button variant="contained" onClick={() => { printForm(); }} sx={{mt: 1,  width: '10%' }} >Print</Button>
         </div>
            <div className="printTable" id='testing' style={{ textAlign: 'center' }} ref={componentRef}>
                <div className="firstTable">
                    <h2 style={{ textAlign: 'center' }}>{value?.Buyer ? value?.Buyer : 'Enter Buyer'}</h2>
                    <h5 style={{ textAlign: 'center' }}>{value?.Address ? value?.Address : 'Enter Address'}</h5>
                    <table  >
                        {/* <hr/> */}
                        <tr className='firstTr'>
                            <td>Ticket No :-{value?.Buyer}</td>
                            <td>Date:{value?.currentDate} </td>
                        </tr>
                        <tr >
                            <td>Buyer :- {value?.Buyer}</td>
                            <td>Mineral :-{value?.Mineral} </td>
                        </tr>
                        <tr >
                            <td>Supplier :- {value?.Supplier}</td>
                            <td>GrossWeight:-{value?.GrossWeight} </td>
                        </tr>
                        <tr >
                            <td>DriverDetail:-{value?.DriverDetail}</td>
                            <td>NetWeight:-{value?.NetWeight} </td>
                        </tr>
                        <tr >
                            <td>VehicleDetail:-{value?.VehicleDetail}</td>
                            <td>TareWeight:-{value?.TareWeight} </td>
                        </tr>
                    </table>
                </div>
                <div className="SecondTable">
                    <h2 style={{ textAlign: 'center' }}>{value?.Buyer ? value?.Buyer : 'Enter Buyer'}</h2>
                    <h5 style={{ textAlign: 'center' }}>{value?.Address ? value?.Address : 'Enter Address'}</h5>
                    <table  >
                        {/* <hr/> */}
                        <tr className='firstTr'>
                            <td>Ticket No :-{value?.Buyer}</td>
                            <td>Date:{value?.currentDate} </td>
                        </tr>
                        <tr >
                            <td>Buyer :- {value?.Buyer}</td>
                            <td>Mineral :-{value?.Mineral} </td>
                        </tr>
                        <tr >
                            <td>Supplier :- {value?.Supplier}</td>
                            <td>GrossWeight:-{value?.GrossWeight} </td>
                        </tr>
                        <tr >
                            <td>DriverDetail:-{value?.DriverDetail}</td>
                            <td>NetWeight:-{value?.NetWeight} </td>
                        </tr>
                        <tr >
                            <td>VehicleDetail:-{value?.VehicleDetail}</td>
                            <td>TareWeight:-{value?.TareWeight} </td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Table