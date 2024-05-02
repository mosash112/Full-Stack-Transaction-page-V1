import Layout from "../components/Layout";
import LastDoantion from "../components/LastDonation";
import DonationInfo from "../components/DonationInfo";
import PaymentAndFees from "../components/PaymentAndFees";
import { useQuery } from "react-query"
import * as apiClient from '../apiClient'

const IndexPage = () => {
  const { data: donation, isLoading } = useQuery('fetchDonation', () => apiClient.fetchDonation(11))

  if (isLoading || !donation) {
    return (
      <span>no data found</span>
    )
  }

  return (
    <Layout title="Home Page">
      <div className="p-5 relative">
        {/* <LastDoantion donation={donation} /> */}
        {/* <DonationInfo donation={donation} /> */}
        {/* <PaymentAndFees amount={donation.amount} /> */}
      </div>
    </Layout>
  );
}

export default IndexPage;
