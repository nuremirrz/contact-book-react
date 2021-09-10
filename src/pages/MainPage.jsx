import {Button} from 'react-bootstrap';
import React from 'react';
import CustomTable from '../components/CustomTable';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const MainPage = () => {

    return (
        <div>
            <h1>
                Main Page
            </h1>
            <Link to="/add">
                <Button>Create new Product</Button>            
            </Link>   
            <CustomTable/>
            <ToastContainer/>
        </div>
    );
};

export default MainPage;