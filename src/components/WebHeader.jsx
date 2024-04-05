import logo from '../../src/assets/logo.png'
import moment from 'moment';
const WebHeader = () => {
    return (
        <div className='text-center space-y-2 py-5'>
            <img src={logo} alt="logo" />
            <p className='text-[#706F6F] text-lg'>Journalism Without Fear or Favour</p>
            <h3 className='text-[#403F3F] text-xl'>{moment().format('dddd, MMMM D, YYYY')}</h3>
        </div>
    );
};

export default WebHeader;