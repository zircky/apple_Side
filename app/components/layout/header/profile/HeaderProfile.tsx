import {FC} from "react";
import SquaerButton from "@/ui/square-button/SquaerButton";
import {HiOutlineUserCircle} from "react-icons/hi";
import Column from "@/ui/grid/Column";

const HeaderProfile:FC = () => {
    return (
        <>
            <SquaerButton Icon={HiOutlineUserCircle} onClick={() => {}} />
            {/*<div className='flex items-center ml-3'>*/}
            {/*    <div className='text-dark-d'>Личный кабинет</div>*/}
            {/*</div>*/}
        </>
    // <Column size={3} className='flex items-center'>
    //     </Column>
    )
}
export default HeaderProfile;