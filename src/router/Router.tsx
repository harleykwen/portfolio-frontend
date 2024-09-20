import React, { lazy } from 'react'
import { ROUTE_PATH } from '@router/index'
import { Navigate, Route, Routes } from 'react-router-dom'

const Login = lazy(() => import('@pages/Login/Login'))

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path={ROUTE_PATH.LOGIN} element={<Login />} />
            <Route path='*' element={<Navigate to={ROUTE_PATH.LOGIN} />} />
        </Routes>
    )
}

export default Router