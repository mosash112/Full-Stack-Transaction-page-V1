import { DonationType } from "../pages/shared/types"

type Props = {
    donation: DonationType
}

const DonationInfo = ({ donation }: Props) => {
    return (
        <section id="don-info" className="w-full relative top-24">
            <div className="flex items-center mb-3">
                <h1 className="font-bold text-2xl">Donation Information</h1>
                <button className="absolute right-0 text-lg font-semibold border rounded py-1 px-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 me-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                    Edit
                </button>
            </div>
            <hr />
            <div className="w-1/2 mt-10 font-semibold">
                <div className="grid grid-cols-2 mb-2">
                    <span className="text-gray-400">Donation ID</span>
                    <p>{donation.don_id}</p>
                </div>
                <div className="grid grid-cols-2 mb-2">
                    <span className="text-gray-400">Supporter</span>
                    <p>{donation.user?.name}</p>
                </div>
                <div className="grid grid-cols-2 mb-2">
                    <span className="text-gray-400">Campaign</span>
                    <p>{donation.campaign}</p>
                </div>
                <div className="grid grid-cols-2 mb-2">
                    <span className="text-gray-400">Designation</span>
                    <p>{donation.designation}</p>
                </div>
                <div className="grid grid-cols-2 mb-2">
                    <span className="text-gray-400">Donation date</span>
                    <p>{donation.donation_date}</p>
                </div>
                <div className="grid grid-cols-2 mb-2">
                    <span className="text-gray-400">Success date</span>
                    <p>{donation.success_date}</p>
                </div>
                <div className="grid grid-cols-2 mb-2">
                    <span className="text-gray-400">Frequency</span>
                    <p>{donation.frequency}</p>
                </div>
            </div>
        </section>
    )
}

export default DonationInfo