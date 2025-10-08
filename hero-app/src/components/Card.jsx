import React from 'react';
import { IoIosStar } from "react-icons/io";
import { FaDownload } from "react-icons/fa6";


const Card = ({card}) => {
    const {image,companyName} =card;
    console.log(card);
    return (
       <div className="card bg-base-100 shadow-sm mt-10">
  <figure className="p-4">
    <img
      src={image}
      alt=""
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title justify-between"> {companyName} </h2>
     </div>

   <div className='flex justify-between p-4'>
  <span className='flex items-center bg-green-100 text-green-500 px-3 py-2 rounded-lg'>
    <FaDownload className='mr-1' />9M
  </span>
  <p className='flex items-center bg-orange-100 text-orange-500 px-3 py-2 rounded-lg'>
    <IoIosStar className='mr-1' />5
  </p>
</div>
</div>
    );
};

export default Card;