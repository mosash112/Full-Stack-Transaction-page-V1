import express, { Request, Response } from "express";
import { createClient } from '@supabase/supabase-js';

const router = express.Router()
const supabase = createClient(process.env.SUPABASE_URL as string, process.env.SUPABASE_KEY as string);

router.get('/', async (req: Request, res: Response) => {
    try {
        const { data: donations, error: error } = await supabase
            .from('user_donations')
            .select(`
                donation:don_id (
                    don_id,
                    campaign,
                    designation,
                    donation_date,
                    success_date,
                    frequency,
                    amount,
                    created_at,
                    updated_at,
                    donate_to,
                    payment_method
                ),
                user:user_id (
                    user_id,
                    name,
                    balance,
                    card_type,
                    card_number,
                    created_at
                )
            `);

        if (error) {
            console.error('Error fetching data from user_donations table:', error);
        } else {
            if (donations.length < 0) {
                return res.status(400).json({ message: 'no donations found' })
            }
            res.status(200).json(donations)
        }
    } catch (error) {
        console.error('Unexpected error:', error);
        res.status(500).json({ message: 'something went wrong' })
    }
})

router.post('/donation-details', async (req: Request, res: Response) => {
    const donId = req.body.donId
    try {
        const { data: donation, error: error } = await supabase
            .from('user_donations')
            .select(`
            donation:don_id (
                don_id,
                campaign,
                amount,
                updated_at
            ),
                user:user_id (
                    user_id,
                    name,
                    card_number
                )
            `)
            .eq('don_id', donId)

        if (error) {
            console.error('Error fetching donation details:', error);
        } else {
            if (!donation) {
                return res.status(400).json({ message: 'no donations found' })
            }
            res.status(200).json(donation)
        }
    } catch (error) {
        console.error('Unexpected error:', error);
        res.status(500).json({ message: 'something went wrong' })
    }
})

router.post('/donation-info', async (req: Request, res: Response) => {
    const donId = req.body.donId
    try {
        const { data: donation, error: error } = await supabase
            .from('user_donations')
            .select(`
            donation:don_id (
                don_id,
                campaign,
                designation,
                donation_date,
                success_date,
                frequency
            ),
                user:user_id (
                    user_id,
                    name,
                    card_number
                )
            `)
            .eq('don_id', donId)

        if (error) {
            console.error('Error fetching donation information:', error);
        } else {
            if (!donation) {
                return res.status(400).json({ message: 'no donations found' })
            }
            res.status(200).json(donation)
        }
    } catch (error) {
        console.error('Unexpected error:', error);
        res.status(500).json({ message: 'something went wrong' })
    }
})

router.post('/donation-payandfee', async (req: Request, res: Response) => {
    const donId = req.body.donId
    try {
        const { data: donation, error: error } = await supabase
            .from('user_donations')
            .select(`
            donation:don_id (
                don_id,
                amount
            ),
                user:user_id (
                    user_id,
                    name,
                    payment_method,
                    card_number
                )
            `)
            .eq('don_id', donId)

        if (error) {
            console.error('Error fetching donation payment and fee:', error);
        } else {
            if (!donation) {
                return res.status(400).json({ message: 'no donations found' })
            }
            res.status(200).json(donation)
        }
    } catch (error) {
        console.error('Unexpected error:', error);
        res.status(500).json({ message: 'something went wrong' })
    }
})

router.post('/edit-doninfo', async (req: Request, res: Response) => {
    const donId = req.body.donation.don_id
    const userId = req.body.user.user_id
    const supporter_name = req.body.user.name
    const campaign = req.body.donation.campaign
    const designation = req.body.donation.designation
    const frequency = req.body.donation.frequency

    try {
        const { data, error } = await supabase
            .from('user_donations')
            .select('*')
            .eq('don_id', donId)
        const { data: donation, error: donError } = await supabase
            .from('donation')
            .update({
                campaign,
                designation,
                frequency,
            })
            .eq("don_id", donId)
            .select()

        const { data: user, error: userError } = await supabase
            .from('user')
            .update({
                name: supporter_name
            })
            .eq("user_id", userId)
            .select()

        if (error || donError || userError) {
            console.error('Error fetching data', error, donError, userError);
            res.status(500).json({ message: 'something went wrong' })
        } else {
            res.status(200).json({ message: "updated successfully", success: { donation, user } })
        }
    } catch (error) {
        console.error('Unexpected error:', error);
        res.status(500).json({ message: 'something went wrong' })
    }
})

export default router