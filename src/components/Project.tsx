import axios from 'axios';
import { CardList } from './CardList';
const axiosInstance = axios.create({ baseURL: 'https://api.github.com/users?per_page=10&since=' })
const Project = () => {
    return (
        <div className='w-full mb-8 min-h-screen flex flex-col items-center gap-0 bg-bodyBg'>
            <h1 className="text-4xl w-fit mt-4 mb-8 text-center pb-4 font-bold relative after:absolute after:w-1/2 
            after:bottom-0 after:left-1/4 after:h-1 after:bg-sky-600">
                Pagination
            </h1>
            <CardList />
        </div>
    )
}

export { Project, axiosInstance }
