import React, { useState, useEffect } from "react";

export const AlertModal = ({ type, message }) => {

    const modalStyle = type === "error" ? "bg-red-500" : "bg-green-500";

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-top justify-center pt-4 px-4 pb-20 text-center">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span className={`inline-block align-middle ${modalStyle} rounded-md px-4 py-3 text-left shadow-xl transform transition-all my-8 align-middle max-w-sm w-full`}>
                  <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-white text-center">{type === "error" ? "Error" : "Success"}</h3>
                      {type === "error" ? (
                        <svg className="w-6 h-6 text-white mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6 text-white mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    )}
                  </div>
                    <div className="mt-3 text-white text-sm">{message}</div>
                </span>
            </div>
        </div>
    )
}
