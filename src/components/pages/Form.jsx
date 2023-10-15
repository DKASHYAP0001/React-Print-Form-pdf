import { MenuBook, Print } from '@material-ui/icons';
import { AppBar, Box, Button, IconButton, TextField, Toolbar, } from '@mui/material';
import { Container } from '@mui/system';
import React, { useMemo } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useReactToPrint } from 'react-to-print';  
import { PrintPdfContext } from '../Context';
import Table from './table';
import { useNavigate } from 'react-router-dom';


const Form = () => {

    const { value, setValue, componentRef, printForm, currentDate, setCurrentDate } = useContext(PrintPdfContext);

    const navigate = useNavigate();
    // const componentRef = useRef();
    // const [currentDate, setCurrentDate] = useState(new Date());
    const [show, setShow] = useState(true);

    // const [value, setValue] = useState({
    //     'currentDate': '',
    //     'Address': '',
    //     'NetWeight': '',
    //     'DriverDetail': '',
    //     'GrossWeight': '0',
    //     'Supplier': '',
    //     'Mineral': '',
    //     'Buyer': '',
    //     'VehicleDetail': '',
    //     'TareWeight': '0',
    // });

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const ResetFields = () => {
        setValue({
            ...value,
            'Address': '',
            'NetWeight': '',
            'DriverDetail': '',
            'GrossWeight': '',
            'Supplier': '',
            'Mineral': '',
            'Buyer': '',
            'currentDate': '',
            'VehicleDetail': '',
            'TareWeight': '',
        })
        setCurrentDate(new Date());
    }

    // const printForm = useReactToPrint({
    //     content: () => componentRef.current,
    //     documentTitle: 'Data',
    //     onAfterPrint: () => ResetFields(),
    // })

    useEffect(() => {
        Sum();
    }, [value?.GrossWeight, value?.TareWeight])

    const Sum = () => {
        let total = "";
        let GrossValue = value?.GrossWeight ? value?.GrossWeight : 0
        let TareValue = value?.TareWeight ? value?.TareWeight : 0
        total += parseInt(GrossValue) - parseInt(TareValue)
        setValue({
            ...value,
            ['NetWeight']: total
        })
    }

    return (
        <>
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', width: '100vw' }} >
                <div>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} />
                            {/* <Print /> */}
                            <IconButton />
                            <Button color='inherit' style={{ fontWeight: '700', backgroundColor: 'white', color: 'Blue' }}>Hello</Button>
                        </Toolbar>
                    </AppBar>
                </div>
                <Container  >
                    <div className="row px-3 mt-3  " >
                        <div className=" bg-info  text-bold  col-md-12 d-flex justify-content-between align-items-center">
                            <div className=" py-1 px-2 ">
                                <p className="p-0 m-0" >Ticket No.</p>
                            </div>
                            <div className="py-1 px-2 ">
                                {/* <p className="p-0 m-0">22/02/2023</p> */}
                                <DatePicker
                                    open={false}
                                    id='currentDate'
                                    name='currentDate'
                                    className=''
                                    dateFormat="MM/dd/yyyy HH:mm"
                                    onChange={(date) => { setCurrentDate(date); setValue({ ...value, ['currentDate']: date }) }}
                                    timeInputLabel
                                    // isClearable={''}
                                    placeholderText={'Select...'}
                                    selected={currentDate}
                                    dropdownMode="select"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div class="col-6 col-md-6 mt-1">
                            <div className="text-field">
                                <input type="text" id='Buyer' name='Buyer' value={value?.Buyer} className='form-control' onChange={handleChange} />
                                <label className=''>Buyer</label>
                            </div>
                        </div>
                        <div class="col-6 col-md-6 mt-1">
                            <div className="text-field">
                                <input type="text" id='Mineral' name='Mineral' value={value?.Mineral} className='form-control' onChange={handleChange} />
                                <label className=''>Mineral Name</label>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div class="col-6 col-md-6 mt-1">
                            <div className="text-field">
                                <input type="text" id='Supplier' name='Supplier' value={value?.Supplier} className='form-control' onChange={handleChange} />
                                <label className=''>Supplier</label>
                            </div>
                        </div>
                        <div class="col-6 col-md-6 mt-1">
                            <div className="text-field">
                                <input type="text" id='GrossWeight' name='GrossWeight' value={value?.GrossWeight} className='form-control' onChange={handleChange} />
                                <label className=''>Gross Weight</label>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div class="col-6 col-md-6 mt-1">
                            <div className="text-field">
                                <input type="text" id='DriverDetail' name='DriverDetail' value={value?.DriverDetail} className='form-control' onChange={handleChange} />
                                <label className=''>Driver Detail</label>
                            </div>
                        </div>
                        <div class="col-6 col-md-6 mt-1">
                            <div className="text-field">
                                <input type="text" id='TareWeight' name='TareWeight' value={value?.TareWeight} className='form-control' onChange={handleChange} />
                                <label className=''>Tare Weight</label>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div class="col-6 col-md-6 mt-1">
                            <div className="text-field">
                                <input type="text" id='VehicleDetail' name='VehicleDetail' value={value?.VehicleDetail} className='form-control' onChange={handleChange} />
                                <label className=''>Vehicle Detail</label>
                            </div>
                        </div>
                        <div class="col-6 col-md-6 mt-1">
                            <div className="text-field">
                                <input type="text" id='NetWeight' name='NetWeight' value={value?.NetWeight} className='form-control' onChange={handleChange} />
                                <label className=''>Net Weight</label>
                            </div>
                        </div>
                    </div>
                    <div class="row  mt-4 pt-1">
                        <div className="text-field col-12">
                            <textarea id='Address' name='Address' value={value?.Address} onChange={handleChange} cols="30" rows='3' className="form-control pt-2 pb-2 "></textarea>
                            <label htmlFor="DocumentNotes" className='pl-2'>Address</label>
                        </div>
                    </div>
                    <div>
                        <Button variant="contained" onClick={() => {  navigate('/table') }} sx={{ mt: 1, width: '100%' }} color="success"><Print />Print</Button>
                        {/* <Button variant="contained" sx={{ my: 2, width: '100%' }} style={{display:'block'}}>Sign Up</Button> */}
                    </div>
                </Container>
            </Box>
            {/* <Table {...{ value, printForm, componentRef  }}/> */}
        </>
    );
}

            // <div className={'printTable'} id='testing' style={{ textAlign: 'center'}} ref={componentRef}>
            //     <div className="firstTable">
            //         <h2 style={{ textAlign: 'center' }}>{value?.Buyer ? value?.Buyer : 'Enter Buyer'}</h2>
            //         <h5 style={{ textAlign: 'center' }}>{value?.Address ? value?.Address : 'Enter Address'}</h5>
            //         <table  >
            //             {/* <hr/> */}
            //             <tr className='firstTr'>
            //                 <td>Ticket No :-{value?.Buyer}</td>
            //                 <td>Date:{value?.currentDate} </td>
            //             </tr>
            //             <tr >
            //                 <td>Buyer :- {value?.Buyer}</td>
            //                 <td>Mineral :-{value?.Mineral} </td>
            //             </tr>
            //             <tr >
            //                 <td>Supplier :- {value?.Supplier}</td>
            //                 <td>GrossWeight:-{value?.GrossWeight} </td>
            //             </tr>
            //             <tr >
            //                 <td>DriverDetail:-{value?.DriverDetail}</td>
            //                 <td>NetWeight:-{value?.NetWeight} </td>
            //             </tr>
            //             <tr >
            //                 <td>VehicleDetail:-{value?.VehicleDetail}</td>
            //                 <td>TareWeight:-{value?.TareWeight} </td>
            //             </tr>
            //         </table>
            //     </div>
            //     <div className="SecondTable">
            //         <h2 style={{ textAlign: 'center' }}>{value?.Buyer ? value?.Buyer : 'Enter Buyer'}</h2>
            //         <h5 style={{ textAlign: 'center' }}>{value?.Address ? value?.Address : 'Enter Address'}</h5>
            //         <table  >
            //             {/* <hr/> */}
            //             <tr className='firstTr'>
            //                 <td>Ticket No :-{value?.Buyer}</td>
            //                 <td>Date:{value?.currentDate} </td>
            //             </tr>
            //             <tr >
            //                 <td>Buyer :- {value?.Buyer}</td>
            //                 <td>Mineral :-{value?.Mineral} </td>
            //             </tr>
            //             <tr >
            //                 <td>Supplier :- {value?.Supplier}</td>
            //                 <td>Charge :- {value?.Charge} </td>
            //             </tr>
            //             <tr >
            //                 <td>Location :- {value?.Location}</td>
            //                 <td>GrossWeight:-{value?.GrossWeight} </td>
            //             </tr>
            //             <tr >
            //                 <td>DriverDetail:-{value?.DriverDetail}</td>
            //                 <td>NetWeight:-{value?.NetWeight} </td>
            //             </tr>
            //             <tr >
            //                 <td>VehicleDetail:-{value?.VehicleDetail}</td>
            //                 <td>TareWeight:-{value?.TareWeight} </td>
            //             </tr>
            //         </table>
            //     </div>
            // </div>


export default Form;

