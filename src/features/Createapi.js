import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const createApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://zebra-salon-contact-api.onrender.com/api/v1/' }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => 'Contact',
    }),
    createContact: builder.mutation({
      query: (newContact) => ({
        url: 'Contact',
        method: 'POST',
        body: newContact,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const { useGetContactsQuery } = createApi;