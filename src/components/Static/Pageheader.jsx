/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { orgData } from '../../assets/data'

const Pageheader = ({pageText}) => {
  return (
    <div className="header w-full h-fit mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="flex flex-col text-black py-44 col-span-4 bg-gradient-to-l from-transparent via-[#b4b4b4] to-transparent">
            <div className="mx-auto text-black">
                <h1 className="text-5xl">{pageText}</h1>
                <p className="text-xl text-black">
                  <Link to={"/"}>Home</Link> &gt; {pageText}
                </p>
            </div>
          </div>
          <div
            className="h-full col-span-8"
            style={{
              backgroundImage: `url(${orgData.images.header})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="page-header bg-blue-100 py-8 text-center">
      <h1 className="text-3xl font-bold text-blue-800">{pageText}</h1>
    </div>
        </div>
      </div>
  )
}

export default Pageheader