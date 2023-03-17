import {FC} from 'react'
import Layout from "@/layout/Layout";
import Image from "next/image";
import trade from '../public/images/Tradein.svg';
import {catalogList} from "@/screens/home/catalogList";
import Link from "next/link";
import {tradin} from "@/types/tradin";

const TradeIN: FC = () => {
    return (
        <Layout title={'Trade-IN'}>
            <div className='block items-center'>
                <Image src={trade} alt="tradin" className='ml-[33.5rem]'/>
                <div>
                    <p>Программа Trade-IN - это умный, удобный и экологичный способ покупки новых устройств. Теперь вам есть куда принести свои устройства Apple, которые вы решили обновить, получить при этом выгоду себе и принести пользу окружающей среде.</p>
                </div>
            </div>
        </Layout>
    )
}
export default TradeIN