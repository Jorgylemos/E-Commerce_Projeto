import { Routes, Route, Navigate } from 'react-router-dom';

/**@Imports from Home folder; */
import Home from '../Pages/Home/Index/Index';
import Login from '../Pages/Home/Login/Login';
import Register from '../Pages/Home/Login/Login';

/**@Imports from Dashboard folder; */


/**@Components import; */

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default Router;