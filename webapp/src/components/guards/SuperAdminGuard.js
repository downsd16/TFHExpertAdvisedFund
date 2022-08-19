import React from 'react';
import { Route, Navigate } from "react-router-dom";

const creatorAddress = '4NBPHMIXCPIB3NTK7OK26B5Z57ZZSEBDQLP5MHSZSZQYFEG4A5GHOPW7NA'

const SuperAdminGuard = ({ component: Component, address, ...rest }) => (
    <Route {...rest} render={(props) => (
        (address === creatorAddress)
            ? <Component {...props} />
            : <Navigate to='/' />
    )} />
)

export default SuperAdminGuard;