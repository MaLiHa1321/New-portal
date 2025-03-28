
import moment from 'moment';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 m-2 py-2'>
            <div>

            <img className='w-[250px]' src={logo} alt="" />
            </div>
            <h2 className='text-base-600 font-poppins'>Journalism Without Fear or Favour</h2>
            <p>{moment().format('LLLL')}</p>
        </div>
    );
};

export default Header;