import React, { useState } from 'react';
import TableRow from './TableRow';
import pomelo from '../../images/pomelo.png';



const DataTable = ({ dark, coinData, orderBy }) => {

    const [stared, setStared] = useState([]);
    const handleStared = (data) => {
        const isStared = stared.find(item => item.id === data.id);
        if (isStared){
            const remainingData = stared.filter(item => item.id !== data.id);
            setStared(remainingData);
        } else {
            setStared(previousValue => [...previousValue, data]);
        }
    }

    return (
        <div className='px-5'  a href="https://t.me/jointrustswap">
           <a href="http://google.com">
           <div className='bg-[#fbf0df] gap-10 flex items-center justify-center w-max px-5 mx-auto mt-5 rounded'>
                <img className='w-[150px]' src={pomelo} alt="pomelo" />
                <span className='text-[#021a50] text-[20px]'>Support us on Pomelo seasson 4!</span>
           </div>
           </a>
            <h3 className='text-3xl my-5 pl-5'>Antelope market capitalization</h3>
            <div className="overflow-x-auto">

                { stared.length > 0 && <table className="table w-full z-0">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                            <th>1H</th>
                            <th>24H</th>
                            <th>7D</th>
                            <th>LIQUIDITY</th>
                            <th>MARKET CAP</th>
                            <th>SUPPLY</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orderBy === "Order By Liquidity" &&
                            stared?.sort((a, b) => b.liquidity.replace(/,/g, '') - a.liquidity.replace(/,/g, ''))?.map((data, index) =>

                                <TableRow data={data} key={index} index={index} dark={dark} handleStared={handleStared} stared={stared}/>
                            )
                        }

                        {
                            orderBy === "Order By MarketCap" &&
                            stared?.sort((a, b) => b.marketCap.replace(/,/g, '') - a.marketCap.replace(/,/g, ''))?.map((data, index) =>

                                <TableRow data={data} key={index} index={index} dark={dark} handleStared={handleStared} stared={stared}/>
                            )
                        }

                        {
                            orderBy === "Order By Price" &&
                            stared?.sort((a, b) => b.price - a.price)?.map((data, index) =>

                                <TableRow data={data} key={index} index={index} dark={dark} handleStared={handleStared} stared={stared}/>
                            )
                        }

                        {
                            orderBy === "Order By Supply" &&
                            stared?.sort((a, b) => b.supply.replace(/,/g, '') - a.supply.replace(/,/g, ''))?.map((data, index) =>

                                <TableRow data={data} key={index} index={index} dark={dark} handleStared={handleStared} stared={stared}/>
                            )
                        }
                    </tbody>
                </table>

                }

                <table className="table w-full z-0">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                            <th>1H</th>
                            <th>24H</th>
                            <th>7D</th>
                            <th>LIQUIDITY</th>
                            <th>MARKET CAP</th>
                            <th>SUPPLY</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orderBy === "Order By Liquidity" &&
                            coinData?.sort((a, b) => b.liquidity.replace(/,/g, '') - a.liquidity.replace(/,/g, ''))?.map((data, index) =>

                                <TableRow data={data} key={index} index={index} dark={dark} handleStared={handleStared} stared={stared}/>
                            )
                        }

                        {
                            orderBy === "Order By MarketCap" &&
                            coinData?.sort((a, b) => b.marketCap.replace(/,/g, '') - a.marketCap.replace(/,/g, ''))?.map((data, index) =>

                                <TableRow data={data} key={index} index={index} dark={dark} handleStared={handleStared} stared={stared}/>
                            )
                        }

                        {
                            orderBy === "Order By Price" &&
                            coinData?.sort((a, b) => b.price - a.price)?.map((data, index) =>

                                <TableRow data={data} key={index} index={index} dark={dark} handleStared={handleStared} stared={stared}/>
                            )
                        }

                        {
                            orderBy === "Order By Supply" &&
                            coinData?.sort((a, b) => b.supply.replace(/,/g, '') - a.supply.replace(/,/g, ''))?.map((data, index) =>

                                <TableRow data={data} key={index} index={index} dark={dark} handleStared={handleStared} stared={stared}/>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;