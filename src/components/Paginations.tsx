import React, { SetStateAction } from "react"
import { JsxElement } from "typescript";
import { v4 } from "uuid";
function PaginationButton({ curPage, pageIndex, setPage }:
    { curPage: number, pageIndex: number, setPage: React.Dispatch<React.SetStateAction<number>> }) {
    const style = curPage === pageIndex ? 'bg-white text-sky-600' : 'text-white bg-sky-600'
    return (
        <>
            <button onClick={() => {
                setPage(pageIndex)
            }} className={`rounded-md border-2 w-8 h-8 ${style} border-solid border-sky-600
        duration-300 transition-all ease-in-out hover:bg-white hover:text-sky-600`}>
                {pageIndex}
            </button>
        </>
    )
}

function Pagination({ setPage, curPage }:
    { setPage: React.Dispatch<React.SetStateAction<number>>, curPage: number }) {
    const btns = (() => {
        const arr: JSX.Element[] = [];
        for (let i = 1; i <= 15; i++) {
            arr.push(<PaginationButton setPage={setPage} curPage={curPage} pageIndex={i} />)
        }
        return arr

    })();
    let startIndex = curPage - 3 >= 0 ? curPage - 3 : 0;
    let endIndex = curPage + 2 <= 15 ? curPage + 2 : 15;
    startIndex = endIndex >= 14 ? endIndex - 5 : startIndex
    endIndex = startIndex <= 2 ? startIndex + 5 : endIndex
    const displayed = btns.slice(startIndex, endIndex)
    return (
        <>
            <div className="flex gap-4 items-center justify-center">
                <PrevBtn setPage={setPage} curPage={curPage} />
                {displayed.map(btn => {
                    return (
                        <div key={v4()}>{btn}</div>
                    )
                })}
                <NextBtn setPage={setPage} curPage={curPage} />
            </div>
        </>
    )
}


function PrevBtn({ setPage, curPage }:
    { setPage: React.Dispatch<React.SetStateAction<number>>, curPage: number }) {
    return (
        <button className="px-2 font-bold bg-transparent border-r-2 border-black
        text-slate-600 hover:text-sky-600 disabled:text-red-600"
            onClick={() => setPage(curPage - 1)} disabled={curPage == 1}>
            Prev
        </button>
    )


}

function NextBtn({ setPage, curPage }:
    { setPage: React.Dispatch<React.SetStateAction<number>>, curPage: number }) {
    return (
        <button className="px-2 font-bold bg-transparent border-l-2 border-black
        text-slate-600 hover:text-sky-600 disabled:text-red-600"
            onClick={() => setPage(curPage + 1)} disabled={curPage == 15}>
            Next
        </button>
    )


}

export { Pagination }
