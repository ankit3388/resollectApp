
import { Menu, X } from "lucide-react"; // Icons for mobile menu
import Images from '../Constants/Images';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';
const Header = () => {

    return (
        <div className="flex w-full h-20 text-black justify-between p-4 border border-b-gray-300 border-b-2">
            <div className='w-full items-center flex h-full text-xl text-blue-500'>
                <div className='flex gap-1 font-serif'>
                    <p className='rounded-full w-8 h-8 flex flex-col items-center justify-end bg-blue-600 text-3xl text-white font-semibold'>r</p>
                    esollect
                </div>
            </div>
            <div className='flex w-full gap-3 justify-end'>
                <div className='rounded-full bg-gray-200 w-12  border border-black flex items-end justify-center'>
                    <PersonIcon className='text-orange-500' fontSize='large'/>
                </div>
                <div>
                    <h1>Ankit</h1>
                    <p>Ankit@resollect.com</p>
                </div>
                <div className='h-full items-center flex'>
                    <KeyboardArrowDownIcon />
                </div>
            </div>
        </div>
    )
}

export default Header;
