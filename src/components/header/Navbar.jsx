import { Link } from "react-router-dom";
import user from '../../assets/user.png';

const Navbar = () => {
    return (
        <div className="flex justify-between">
            <div></div>
            <div className="space-x-5">
                <Link to='/'>Home</Link>
                <Link>Career</Link>
                <Link>About</Link>
            </div>
            <div className="flex gap-2 items-center p-2">
               <img src={user} className="w-[30px]" alt="" />
               <button className="btn btn-neutral rounded-null">Login</button>
            </div>
            
        </div>
    );
};

export default Navbar;