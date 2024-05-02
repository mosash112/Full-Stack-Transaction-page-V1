import { useEffect, useState } from "react"

type Props = {
    amount: number
}

const PaymentAndFees = ({ amount }: Props) => {
    const platformFee = 0.08
    const processingFee = 0.4
    const [payout, setPayout] = useState(0)

    useEffect(() => {
        setPayout(amount - platformFee - processingFee)
    }, [amount])

    return (
        <section id="pay-fee" className="w-full relative top-28">
            <div className="flex items-center mb-3">
                <h1 className="font-bold text-2xl">Payment & fees</h1>
                <button className="absolute right-0 text-lg font-semibold border rounded py-1 px-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 me-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                    Edit
                </button>
            </div>
            <hr />
            <div className="mt-10 flex font-semibold">
                <div className="w-1/2">
                    <div className="grid grid-cols-2 mb-2">
                        <span className="text-gray-400">Donation amount</span>
                        <p>${amount} USD</p>
                    </div>
                    <div className="grid grid-cols-2 mb-2">
                        <span className="text-gray-400">Before fees covered</span>
                        <p>$2.00 USD</p>
                    </div>
                    <div className="grid grid-cols-2 mb-2">
                        <span className="text-gray-400">Platform fee</span>
                        <p>${platformFee} USD</p>
                    </div>
                    <div className="grid grid-cols-2 mb-2">
                        <span className="text-gray-400">Payment processing fee</span>
                        <p>${processingFee} USD</p>
                    </div>
                    <div className="grid grid-cols-2 mb-2">
                        <span className="text-gray-400">payout amount</span>
                        <p>${payout} USD</p>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="grid grid-cols-2 mb-2">
                        <span className="text-gray-400">Payment processor</span>
                        <p>Stripe</p>
                    </div>
                    <div className="grid grid-cols-2 mb-2">
                        <span className="text-gray-400">Payment ID</span>
                        <p>ch_3Mbb8vGSU...</p>
                    </div>
                    <div className="grid grid-cols-2 mb-2">
                        <span className="text-gray-400">Payment method</span>
                        <p>Credit Card</p>
                    </div>
                    <div className="grid grid-cols-2 mb-2">
                        <span className="text-gray-400">Credit card</span>
                        <p>.... 7956</p>
                    </div>
                    <div className="grid grid-cols-2 mb-2">
                        <span className="text-gray-400">Fee covered</span>
                        <p>Covered</p>
                    </div>
                    <div className="grid grid-cols-2 mb-2">
                        <span className="text-gray-400">Effective fee</span>
                        <p>0%</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PaymentAndFees