import express, { Request, Response } from "express";
import { createClient } from '@supabase/supabase-js';
import { DonationType } from "../shared/types";

const router = express.Router()
const supabase = createClient(process.env.SUPABASE_URL as string, process.env.SUPABASE_KEY as string);

router.get('/', async (req: Request, res: Response) => {
    try {
        const { data: users, error: error } = await supabase
            .from('user')
            .select('*');

        if (error) {
            console.error('Error fetching data from user table:', error);
        } else {
            if (users.length < 0) {
                return res.status(400).json({ message: 'no users found' })
            }
            res.json(users)
        }
    } catch (error) {
        console.error('Unexpected error:', error);
        res.status(500).json({ message: 'something went wrong' })
    }
})

router.post('/donate', async (req: Request, res: Response) => {
    try {
        const newDonation = {
            supporter_id: req.body.supporter_id,
            campaign: req.body.campaign,
            designation: req.body.designation,
            frequency: req.body.frequency,
            amount: req.body.amount,
            donate_to: req.body.donate_to,
        }

        const { data: donation, error: error } = await supabase
            .from('donation')
            .insert([newDonation])
            .select()
        if (donation) {
            res.json(donation)
        } else {
            if (error) {
                console.error('Error fetching data from user table:', error);
            }
        }
    } catch (error) {
        console.error('Unexpected error:', error);
        res.status(500).json({ message: 'something went wrong' })
    }
})

export default router