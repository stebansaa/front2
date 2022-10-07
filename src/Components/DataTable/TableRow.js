import React, { useEffect } from 'react';
import toast, { Toaster, useToasterStore } from 'react-hot-toast';
import CopyToClipboard from 'react-copy-to-clipboard';

const TableRow = ({ data, index, dark }) => {

    const { toasts } = useToasterStore();

    const TOAST_LIMIT = 1

    useEffect(() => {
    toasts
        .filter((t) => t.visible) // Only consider visible toasts
        .filter((_, i) => i >= TOAST_LIMIT) // Is toast index over limit?
        .forEach((t) => toast.dismiss(t.id)); // Dismiss – Use toast.remove(t.id) for no exit animation
    }, [toasts]);

    // const [copy, setCopy] = useState(false)

    const handleCopy  = () => {
        toast.success('Copied Address: '+ data.address, {
                duration: 2000,
                style: {
                    boxShadow: '0px 0px 4px rgba(110, 99, 71, 0.1)',
                    color: dark ? '#fff' : '#000',
                    backgroundColor: dark ? '#1f2937' : '#fff',
                },
            }
        );
    }  

    return (
        <tr className="hover">
            <th >
                <div className='flex items-center'>
                    <i className="fa-regular fa-star mr-3"></i>
                    {index + 1}
                </div>
            </th>
            <td >
                <div className='flex items-center'>
                    <img src={`./images/coins/${data?.coin?.icon}`} className="w-8 mr-2" alt="" />
                    <h4 className='font-bold mr-2 text-xl'>{data?.coin?.name}</h4>
                    <h5 className={`text-[10px] px-2 bg-green-100 text-black-800  ${dark && "bg-gray-900 text-gray-400"} rounded p-1`}>{data?.coin?.shortName}</h5>
                </div>
            </td>
            <td>${data?.price}</td>
            <td>
                <span className={`w-20 px-2 bg-green-100 text-green-800 ${dark && "bg-gray-900 text-green-400"} ${parseFloat(data?.durations[0]) < 0 && "text-red-600"} rounded-xl p-1`} >{data?.durations[0]}%</span>
            </td>
            <td>
                <span className={`w-20 px-2 bg-green-100 text-green-800 ${dark && "bg-gray-900 text-green-400"} ${parseFloat(data?.durations[1]) < 0 && "text-red-600"} rounded-xl p-1`} >{data?.durations[1]}%</span>
            </td>
            <td>
                <span className={`w-20 px-2 bg-green-100 text-green-800 ${dark && "bg-gray-900 text-green-400"} ${parseFloat(data?.durations[2]) < 0 && "text-red-600"} rounded-xl p-1`} >{data?.durations[2]}%</span>
            </td>
            <td>
                <span className={`w-20 px-2 bg-green-100 text-green-800 ${dark && "bg-gray-900 text-green-400"} rounded-xl p-1`} >${data?.liquidity}</span>
            </td>
            <td>${data?.marketCap}</td>
            <td>
                {data?.supply}
            </td>
            <td>
                <div className='flex items-center'>
                    <CopyToClipboard onCopy={handleCopy} text={data.address} >
                        <svg className='mx-2 cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" height="20" width="20"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                    </CopyToClipboard>
                    <Toaster />
                   
                    <a href="##">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" height="20" width="20"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                </div>

            </td>

        </tr>
    );
};

export default TableRow;