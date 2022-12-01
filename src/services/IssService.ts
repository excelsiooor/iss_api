import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import { Ilocation, IPeopleInSpace } from '../models/IssDTO';

export const issApi = createApi({
  reducerPath: 'issApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://api.open-notify.org'}),
  endpoints: (build) => ({
    getLocation: build.query<Ilocation, string>({
      query: () => ({
        url: '/iss-now.json',
      }),
    }),
    getPeople: build.query<IPeopleInSpace, string>({
      query: () => ({
        url: '/astros.json',
      }),
    }),
  }),
});