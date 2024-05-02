import { DonationType } from "../pages/shared/types"

type Props = {
    donation: DonationType
}

const LastDoantion = ({ donation }: Props) => (
    <section id="last-don" className="w-full">
        <span className="text-gray-400">Donation</span>
        <div className="flex flex-row relative w-full mb-5">
            <h1 className="text-4xl font-bold me-3">$2,50</h1>
            <span className="text-4xl me-3">USD</span>
            <div className="my-auto p-2 bg-green-200 rounded-3xl text-green-700 font-bold stroke-2 flex">
                Succeeded
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
            </div>
            <button className="absolute right-0 p-1 border rounded-md flex items-center font-semibold text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 me-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
                Refund
            </button>
        </div>
        <hr />
        <div className="flex divide-x divide-black w-10/12 mt-3 font-semibold">
            <div className="me-10 text-nowrap px-3">
                <span className="text-gray-400">Last Update</span>
                <p className="mt-2">{donation.updated_at}</p>
            </div>
            <div className="me-10 text-nowrap px-3">
                <span className="text-gray-400">Supporter</span>
                <p className="mt-2">{donation.user.name}</p>
            </div>
            <div className="me-10 text-nowrap px-3">
                <span className="text-gray-400">Campaign</span>
                <p className="mt-2">{donation.campaign}</p>
            </div>
            <div className="me-10 text-nowrap px-3">
                <span className="text-gray-400">Payment method</span>
                <p className="mt-2">{donation.payment_method}</p>
            </div>
        </div>
    </section>
)

export default LastDoantion