/**@Librarys Import */
import {useState, useEffect} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

/**@Imports from Home folder; */
import Home from '../Pages/Home/Index/Index';
import Login from '../Pages/Home/Login/Login';
import Register from '../Pages/Home/Register/Register';

/**@Imports from Dashboard folder; */
import Dashboard from '../Pages/Dashboard/Index/Index';
import Settings from '../Pages/Dashboard/Settings/Settings';

/**@Components import; */
import Navbar from '../Components/Home/Navbar/Navbar'; /**@Home Navbar */
import Navbar_User from '../Components/Dashboard/Navbar/Navbar'; /**@Dashboard Navbar */
import Product from '../Components/Products/Product';
import Products from '../Components/Products/Products';

const Router = () => {

    const [user, setUser] = useState(null); /**User state receive getUser data, inside useEffect; */

    const requestHeaders: any = {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
    }

    useEffect(() => {
        const getUser = async () => {
            await fetch("http://localhost:5000/auth/login/success", {
                method: "GET",
                credentials: "include",
                headers: requestHeaders
            }).then((res) => {
                if(res.status === 200){
                    return res.json()
                }
                throw new Error("authentication has been failed!")
            }).then(resObject => {
                setUser(resObject)
            }).catch(err => {
                console.log(err)
            })
        }

        getUser() /** Here the data goes to the user state; */
    }, []);

    return (
        <>
        {user ? <Navbar_User user={user} /> : <Navbar />}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={user ? <Navigate to='/' /> : <Login />} />
            <Route path="/register" element={user ? <Navigate to='/' /> : <Register />} />

            <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to='/login' />} />
            <Route path="/settings" element={user ? <Settings user={user} /> : <Navigate to="/login" />} />

            <Route path='produtos' element={<Products />} />
            <Route path='produtos/:id' element={<Product />} />

            <Route path='/404' element={<h1 style={{ marginTop: '80px', textAlign: 'center', padding: '80px', color: '#000' }} >404 Not Found</h1>} />
            <Route path='/*' element={<Navigate replace to="/404" />} />
        </Routes>
        </>
    )
}

export default Router;