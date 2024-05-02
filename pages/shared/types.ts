export interface UserType {
  id: number;
  name: string;
  balance: number;
  card_type: string;
  card_number: string;
  created_at: Date;
}

export interface DonationType {
  don_id: number;
  supporter_id: number;
  campaign: string;
  designation: string;
  donation_date: Date;
  success_date: Date;
  frequency: string;
  amount: number;
  created_at: Date;
  updated_at: Date;
  donate_to: number;
  payment_method: string
  user: {
    id: number
    name: string
    card_number: string
  }
}