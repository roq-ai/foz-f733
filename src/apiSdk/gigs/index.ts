import axios from 'axios';
import queryString from 'query-string';
import { GigInterface, GigGetQueryInterface } from 'interfaces/gig';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getGigs = async (query?: GigGetQueryInterface): Promise<PaginatedInterface<GigInterface>> => {
  const response = await axios.get('/api/gigs', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createGig = async (gig: GigInterface) => {
  const response = await axios.post('/api/gigs', gig);
  return response.data;
};

export const updateGigById = async (id: string, gig: GigInterface) => {
  const response = await axios.put(`/api/gigs/${id}`, gig);
  return response.data;
};

export const getGigById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/gigs/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteGigById = async (id: string) => {
  const response = await axios.delete(`/api/gigs/${id}`);
  return response.data;
};
