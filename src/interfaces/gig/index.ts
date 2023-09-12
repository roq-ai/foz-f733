import { BidInterface } from 'interfaces/bid';
import { StartupInterface } from 'interfaces/startup';
import { GetQueryInterface } from 'interfaces';

export interface GigInterface {
  id?: string;
  title: string;
  description: string;
  startup_id: string;
  created_at?: any;
  updated_at?: any;
  bid?: BidInterface[];
  startup?: StartupInterface;
  _count?: {
    bid?: number;
  };
}

export interface GigGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  startup_id?: string;
}
