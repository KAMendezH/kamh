import { createBrowserRouter } from "react-router";


// LAYOUT
import Layout from "./layout";

// PAGES
import Home from "../pages/home";
import AboutMe from "../pages/about";
import Web from "../pages/web";
import Osint from "../pages/osint";
import Components from "../pages/components";
import Tools from "../pages/tools";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {path: '', element: <Home /> },
            {path: 'about_me', element: <AboutMe /> },
            {path: 'web', element: <Web />},
            {path: 'osint', element: <Osint />},
            {path: 'components', element: <Components />},
            {path: 'tools', element: <Tools /> }
        ],
    }
]);

export default router