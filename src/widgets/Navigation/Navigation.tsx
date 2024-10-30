import { Outlet } from 'react-router-dom';

function Navigation () {
    return <>
        <div>Nav</div>
        <div>
            <Outlet/>
        </div>
    
    </>;
}
export default Navigation;