import React, { useState } from 'react';
import {industries} from '../constants/index'
import { useNavigate } from 'react-router-dom';

const IndustryList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate()

  const filteredIndustries = industries.filter(industry =>
    industry.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-5">
      <input
        type="text"
        placeholder="Search industries..."
        className="mb-5 p-2 border border-gray-300 rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-1 ">
        {filteredIndustries.map((industry) => (
          <div
          key={industry.name}
          className="bg-neutral-800 p-5 rounded shadow-md transition transform hover:-translate-y-1 hover:shadow-lg border border-red-600"
        >
          <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
          <p className="">{industry.description}</p>
          <a
            onClick={() => navigate('/contactus')} // Replace with actual function
            className="inline-flex justify-center items-center text-center cursor-pointer h-12 p-5 mt-20 tracking-tight text-xl bg-red-400 hover:bg-red-900 border border-red-900 rounded-lg transition duration-200"
          >
            Inquire
          </a>
        </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryList;
