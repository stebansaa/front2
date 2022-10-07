import React from 'react';
import TableRow from './TableRow';



const DataTable = ({ dark, coinData, orderBy }) => {
    return (
        <div className='px-5' >
            <h3 className='text-3xl my-5 pl-5'>Antelope market capitalization</h3>
            <div className="overflow-x-auto">
                <table className="table w-full text-center z-0">
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

                                <TableRow data={data} key={index} index={index} dark={dark} />
                            )
                        }

                        {
                            orderBy === "Order By MarketCap" &&
                            coinData?.sort((a, b) => b.marketCap.replace(/,/g, '') - a.marketCap.replace(/,/g, ''))?.map((data, index) =>

                                <TableRow data={data} key={index} index={index} dark={dark} />
                            )
                        }

                        {
                            orderBy === "Order By Price" &&
                            coinData?.sort((a, b) => b.price - a.price)?.map((data, index) =>

                                <TableRow data={data} key={index} index={index} dark={dark} />
                            )
                        }

                        {
                            orderBy === "Order By Supply" &&
                            coinData?.sort((a, b) => b.supply.replace(/,/g, '') - a.supply.replace(/,/g, ''))?.map((data, index) =>

                                <TableRow data={data} key={index} index={index} dark={dark} />
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;