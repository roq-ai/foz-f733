import { UserInterface } from 'interfaces/user';
import { GigInterface } from 'interfaces/gig';
import { GetQueryInterface } from 'interfaces';

export interface BidInterface {
  id?: string;
  amount: number;
  user_id: string;
  gig_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  gig?: GigInterface;
  _count?: {};
}

export interface BidGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  gig_id?: string;
}
