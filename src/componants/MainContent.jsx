import React from 'react';
import logoa from '../images/maincontent/logo-a.svg';
import logob from '../images/maincontent/logo-b.svg';
import logoc from '../images/maincontent/logo-c.svg';
import logod from '../images/maincontent/logo-d1.svg';
import logo1 from '../images/maincontent/logo-1.svg';
import logo2 from '../images/maincontent/logo-2.svg';
import logo3 from '../images/maincontent/logo-3.svg';
import logo4 from '../images/maincontent/logo-4.svg';
import client1 from '../images/maincontent/client-1.svg';
import client2 from '../images/maincontent/client-2.svg';
import client3 from '../images/maincontent/client-3.svg';
import client4 from '../images/maincontent/client-4.svg';
import ratechart from '../images/maincontent/Ring Chart.svg'
import bluedot from '../images/maincontent/blue.svg'
import whitedot from '../images/maincontent/white.svg'
import dotline from '../images/maincontent/dotline.svg'
import plus from '../images/maincontent/plus1.svg'
import graph from '../images/graph/grap_main.png'

const MainContent = () => {
    return (
        <div className="flex-1 bg-white p-6 ">
            <div>
                <div>
                    <h3 className='text-left font-semibold text-sm mb-3.5'>Dashboard</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    <div>
                        <div className="p-4 rounded shadow-md flex items-center bg-white">
                            <img src={logoa} alt='logo a' className='h-10 w-10 mr-4 bg-gray-200 rounded-full p-2' />
                            <div>
                                <h2 className='font-semibold text-xl'>197</h2>
                                <p className='mt-1 text-sm'>Total Websites</p>
                            </div>
                            <img src={logo1} alt='logo 1' className='ml-auto h-11 w-11 mb-7' />
                        </div>
                    </div>
                    <div>
                        <div className="p-4 rounded shadow-md flex items-center bg-white">
                            <img src={logob} alt='logo b' className='h-10 w-10 mr-4 bg-gray-200 rounded-full p-2' />
                            <div>
                                <h2 className='font-semibold text-xl'>3/197</h2>
                                <p className='mt-1 text-sm'>Active Sites</p>
                            </div>
                            <img src={logo2} alt='logo 2' className='ml-auto h-11 w-11 mb-7' />
                        </div>
                    </div>
                    <div>
                        <div className="p-4 rounded shadow-md flex items-center bg-white">
                            <img src={logoc} alt='logo c' className='h-10 w-10 mr-4 bg-gray-200 rounded-full p-2' />
                            <div>
                                <h2 className='font-semibold text-xl'>23</h2>
                                <p className='mt-1 text-sm'>Available Updates</p>
                            </div>
                            <img src={logo3} alt='logo 3' className='ml-auto h-11 w-11 mb-7' />
                        </div>
                    </div>
                    <div>
                        <div className="p-4 rounded shadow-md flex items-center bg-white">
                            <img src={logod} alt='logo d' className='h-10 w-10 mr-4 bg-gray-200 rounded-full p-2' />
                            <div>
                                <h2 className='font-semibold text-xl'>07</h2>
                                <p className='mt-1 text-sm'>Sites Health</p>
                            </div>
                            <img src={logo4} alt='logo 4' className='ml-auto h-11 w-11 mb-7' />
                        </div>
                    </div>
                </div>

                <div className="  grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6  ">
                    <div className="lg:col-span-3 p-4 bg-white border rounded shadow-md overflow-x-auto">
                        <div className='flex justify-between'>
                            <h3 className='mt-2 font-semibold text-md'>Clients</h3>
                            <img src={plus} alt='bluedot ' className='h-5' />


                        </div>
                        <h3 className='my-2 text-sm'>Clients Information</h3>
                        <table className="max-w-full mt-4 border rounded space-x-4 sm:w-full">
                            <thead >
                                <tr className="text-left border bg-[#F7F7F8] border-[#EAEAEA] rounded">
                                    <th className="text-xs px-3 py-2 font-semibold">Clients Name</th>
                                    <th className="text-xs px-3 py-2 font-semibold">Email</th>
                                    <th className="text-xs px-3 py-2 font-semibold">Contact</th>
                                    <th className="text-xs px-3 py-2 font-semibold">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b ">
                                    <td className="text-xs px-3 py-2 font-semibold">Aditya Das</td>
                                    <td className="text-xs px-3 py-2 font-semibold">aditya.d@digiinnovat..</td>
                                    <td className="text-xs px-3 py-2 font-semibold">+91 75291 64682</td>
                                    <td className="flex space-x-1.5 ">
                                        <img src={client1} alt='client1' className='h-7.5 w-7.5 py-1' />
                                        <img src={client2} alt='client2' className='h-7.5 w-7.5 py-1' />
                                        <img src={client3} alt='client3' className='h-7.5 w-7.5 py-1 ' />
                                    </td>
                                </tr>
                                <tr className="border-b ">
                                    <td className="text-xs px-3 py-2 font-semibold">Prachi Suryawanshi</td>
                                    <td className="text-xs px-3 py-2 font-semibold">prachi.s@digiinnovat..</td>
                                    <td className="text-xs px-3 py-2 font-semibold">+91 93291 64780</td>
                                    <td className="flex space-x-1.5">
                                        <img src={client1} alt='client1' className='h-7.5 w-7.5 py-1' />
                                        <img src={client2} alt='client2' className='h-7.5 w-7.5 py-1' />
                                        <img src={client3} alt='client3' className='h-7.5 w-7.5 py-1' />
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="text-xs px-3 py-2 font-semibold">Dinesh Jain</td>
                                    <td className="text-xs px-3 py-2 font-semibold">dinesh.j@digiinnovat..</td>
                                    <td className="text-xs px-3 py-2 font-semibold">+91 89091 60680</td>
                                    <td className="flex space-x-1.5">
                                        <img src={client1} alt='client1' className='h-7.5 w-7.5 py-1' />
                                        <img src={client2} alt='client2' className='h-7.5 w-7.5 py-1' />
                                        <img src={client3} alt='client3' className='h-7.5 w-7.5 py-1' />
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="text-xs px-3 py-2 font-semibold">Swati Singh</td>
                                    <td className="text-xs px-3 py-2 font-semibold">swati.s@digiinnovat..</td>
                                    <td className="text-xs px-3 py-2 font-semibold">+91 89283 64682</td>
                                    <td className="flex space-x-1.5">
                                        <img src={client1} alt='client1' className='h-7.5 w-7.5 py-1' />
                                        <img src={client2} alt='client2' className='h-7.5 w-7.5 py-1' />
                                        <img src={client3} alt='client3' className='h-7.5 w-7.5 py-1' />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="lg:col-span-2 p-4 bg-white border rounded shadow-md">
                        <div className='flex justify-between'>
                            <h3 className='font-semibold mb-2'>Updates Overview</h3>
                            <img src={dotline} alt='bluedot ' className='h-5' />

                        </div>
                        <p className='mb-2 text-xs'>Last updated June 20, 2024</p>
                        <p className='mb-2 text-xs font-semibold'>Total Updates  <span className="font-semibold ml-36">250</span></p>
                        <table className="w-full mt-2 border-collapse  border border-[#EAEAEA] rounded bg-[#F7F7F8] ">
                            <tbody>
                                <tr className="border-b ">
                                    <td className="text-xs px-3 py-2 font-semibold">Wordpress</td>
                                    <td className="text-xs px-3 py-2 font-bold pl-20">07</td>
                                    <td className="flex space-x-1.5">
                                        <img src={client2} alt='client1' className='h-7.5 w-7.5 py-1 px-1.5' />
                                        <img src={client4} alt='client2' className='h-7.5 w-7.5 py-1 px-1.5' />
                                    </td>

                                </tr>
                                <tr className="border-b">
                                    <td className="text-xs px-3 py-2 font-semibold">Plugins</td>
                                    <td className="text-xs px-3 py-2 font-bold pl-20">228</td>
                                    <td className="flex space-x-1.5">
                                        <img src={client2} alt='client1' className='h-7.5 w-7.5 py-1 px-1.5' />
                                        <img src={client4} alt='client2' className='h-7.5 w-7.5 py-1 px-1.5' />
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="text-xs px-3 py-2 font-semibold">Themes</td>
                                    <td className="text-xs px-3 py-2 font-bold pl-20">28</td>
                                    <td className="flex space-x-1.5">
                                        <img src={client2} alt='client1' className='h-7.5 w-7.5 py-1 px-1.5' />
                                        <img src={client4} alt='client2' className='h-7.5 w-7.5 py-1 px-1.5' />
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="text-xs px-3 py-2 font-semibold">Translations</td>
                                    <td className="text-xs px-3 py-2 font-bold pl-20">0</td>
                                    <td className="flex space-x-1.5">
                                        <img src={client2} alt='client1' className='h-7.5 w-7.5 py-1 px-1.5' />
                                        <img src={client4} alt='client2' className='h-7.5 w-7.5 py-1 px-1.5' />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
                    <div className="lg:col-span-3 p-4 bg-white rounded shadow-md">

                        {/* <div className='flex justify-end gap-2'>
                        <h2 className=' text-md font-bold my-2 lg:mr-32'>Analytics</h2>
                            <img src={bluedot} alt='bluedot' className='mb-4' />
                            <p className='mr-5'>Dummy 1</p>
                            <img src={reddot} alt='reddot' className='mb-4' />
                            <p className='mr-6'>Dummy 2</p>
                                <select className='py-1   border bg-[#F7F7F8] border-[#EAEAEA] rounded mb-5 mr-4  '>
                                    <option>This Week</option>
                                </select>
                        </div> */}
                        {/* <h3 className='mb-2 text-sm'>Analytics Information</h3> */}
                        <div className="">
                            {/* Placeholder for the analytics chart */}
                            <img src={graph} alt='graph'/>

                        </div>
                    </div>
                    <div className="lg:col-span-2 p-2 bg-white rounded shadow-md">
                        <div className='flex justify-between'>
                            <h3 className='font-semibold mb-2'>Response Rate</h3>
                            <img src={dotline} alt='bluedot ' className='h-5' />


                        </div>
                        <p className='text-xs'>Dummy Text</p>
                        <img src={ratechart} alt="Response Rate Chart" className=' h-40 w-40 p-2 ml-36 ' />
                        <div className='flex justify-between'>
                            <div className='flex '><img src={bluedot} alt='bluedot' />
                                <p className='text-xs px-2 '>Responses : 276(69%)</p></div>
                            <p className='text-xs'>Total Sent - 400</p>
                        </div>
                        <div className='flex justify-between '>
                            <div className='flex'>
                                <img src={whitedot} alt='bluedot' />
                                <p className='text-xs mt-1 px-2'>Non Responses : 124(31%)</p>
                            </div>
                            <p className='text-xs mt-1'>Comments - 240</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center mb-4 mt-1">
                <p className='text-xs font-semibold ml-7'>Copyright ©2024 Diginnovators</p>
                <div className='flex space-x-5 text-[#882EFD] text-xs font-semibold'>
                    <p>Privacy Policy</p>
                    <p>Terms of Conditions</p>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
