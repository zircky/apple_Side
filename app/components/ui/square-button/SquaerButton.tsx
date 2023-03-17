import {FC} from "react";
import {IconType} from "react-icons";
import Column from "@/ui/grid/Column";

interface ISquaerButton {
    Icon: IconType
    onClick?: () => void;
    number?: number
}

const SquaerButton: FC<ISquaerButton> = ({Icon, onClick, number}) => {
    return (
        <Column size={2}>
            <button onClick={onClick} className='h-8 w-8 bg-[#B8B8B7] flex items-center
                justify-center hover:bg-[#9F9F9D] transition-colors duration-200 relative'>
                {!!number && (
                    <span className='flex h-4 w-4 items-center
                justify-center rounded-full bg-primary p-0.5 text-[0.75rem] text-white absolute -top-1 -right-1'>{number}</span>)}
                <Icon color='#101010' size={20}/>
            </button>
        </Column>
    )
}

export default SquaerButton