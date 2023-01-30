import React, { useState } from 'react'

export const Card = ({ title, body, button }) => {
    const [buttonRate, setButtonRate] = useState(0)
    const [showResponse, setShowResponse] = useState(false)
    const rates = [
        {
            rate: 1,
            id: "1",
        },
        {
            rate: 2,
            id: "2",
        },
        {
            rate: 3,
            id: 3,
        },
        {
            rate: 4,
            id: "4",
        },
        {
            rate: 5,
            id: "5",
        },
    ];

    const getRate = (id) => {
        setButtonRate(id)
    }

    const showRate = () => {
        setShowResponse(true)
    }
    return (

        <section
            className="flex flex-col gap-6 text-white mx-4 rounded-3xl shadow-lg 
            bg-gradient-to-b from-darkBlue py-6 px-5 max-w-xs"
        >
            {
                !showResponse
                    ? (
                        <>
                            <img
                                className={`w-10 rounded-full p-3 bg-unkwonColor z-10 ${showResponse && 'w-0'} `}
                                src="/images/icon-star.svg"
                                alt="start"
                            />

                            <h2 className="text-2xl font-[700]">
                                {title}
                            </h2>
                            <p className="text-mediumGray text-[12px]">
                                {body}
                            </p>
                            <ul className="flex justify-between">
                                {
                                    rates.map(({ rate, id }) => (
                                        <li
                                            key={id}
                                            onClick={() => getRate(id)}
                                            className={`text-center transition-colors  py-2 px-4 rounded-full  cursor-pointer ${buttonRate === id ? 'bg-primary text-white' : 'bg-unkwonColor text-mediumGray hover:bg-lightGray hover:text-white'}`}
                                        >
                                            {rate}
                                        </li>
                                    ))
                                }
                            </ul>
                            <button
                                id="alert"
                                onClick={showRate}
                                disabled={buttonRate === 0}
                                className="disabled:bg-lightGray disabled:cursor-not-allowed disabled:text-white bg-primary tracking-widest py-2 rounded-full cursor-pointer transition-colors hover:bg-white hover:text-primary"
                            >
                                {button}
                            </button>
                        </>
                    )
                    : (
                        <>
                            <img className='w-36 mx-auto' src="/images/illustration-thank-you.svg" alt="illustration-thank-you" />
                            <p className='mx-auto bg-unkwonColor w-max py-1 px-4 rounded-full text-primary'>You selected {buttonRate} out of 5</p>
                            <h2 className='text-center text-3xl font-bold'>Thank you!</h2>
                            <p className='text-center text-mediumGray text-[13px]'>We appreciate you taking the time to give a rating. If you ever need more support,
                                don’t hesitate to get in touch!</p>
                        </>
                    )
            }

        </section>

    )
}
