import {FC, PropsWithChildren} from 'react'
import cn from 'clsx'

const Row: FC<PropsWithChildren<{ className?: string }>> = ({children, className}) => {
    return <div className={cn('grid w-full grid-cols-12', className)}>{children}</div>
}

export default Row