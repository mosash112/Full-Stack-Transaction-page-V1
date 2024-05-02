import { DonationType } from '../backend/src/shared/types'

export const fetchDonation = async (id: number): Promise<DonationType> => {
    const res = await fetch('http://localhost:3001/api/donations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ donId: id })
    })
    if (!res.ok) {
        throw new Error('Error updating config')
    }
    const data = await res.json()
    // console.log(data[0]);
    
    return data[0]
}