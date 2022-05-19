
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { v4 } from 'uuid';
import { Pagination } from './Paginations';
import { axiosInstance } from './Project';

function queryFn() {
    return axiosInstance.get(axiosInstance.getUri() + '50')
        .then((res: AxiosResponse) => res.data);
}

const CardList = () => {
    const [cards, setCards] = useState<any>([]);
    const [page, setPage] = useState<number>(1);
    function queryFn() {
        return axiosInstance.get(axiosInstance.getUri() + ((page - 1) * 100).toString())
            .then((res: AxiosResponse) => res.data);
    }
    const query = useQuery(['users', page], queryFn);
    useEffect(() => {
        if (query.isSuccess === true) setCards(query.data)
    }, [page, query.isSuccess])
    return (
        <>
            <div className="container w-[80%] flex flex-col gap-8">
                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 items-center'>
                    {cards.map((card: any) => {
                        return (
                            <Card key={v4()} props={card} />
                        )
                    })}
                </div>
                <Pagination curPage={page} setPage={setPage} />
            </div>

        </>

    )
}

function Card({ props }: { props: Card }) {

    return (
        <div className="flex flex-col py-8 justify-center bg-white w-full gap-4 
        rounded-lg items-center shadow-lg">
            <img src={props.avatar_url} alt="" className="w-32 h-32 rounded-full object-cover" />
            <span className="text-slate-600 font-bold text-xl">{props.login}</span>
            <a href={props.html_url} className="cursor-pointer rounded-full text-white px-2 py-1
            uppercase duration-300 transition-all text-sm ease-in-out border-2 border-solid tracking-wide
            border-sky-600 bg-sky-600 hover:bg-white hover:text-sky-600">
                view profile
            </a>
        </div>
    )
}


export { CardList } 
