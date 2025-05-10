import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the API slice
export const ContactApi = createApi({
  reducerPath: 'ContactApi', // Unique name for this slice
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://zebra-salon-contact-api.onrender.com/api/v1', // Base URL for your API
  }),
  endpoints: (builder) => ({
    // Define a query endpoint to fetch data
  

    // Define a mutation endpoint to create new contact
    createContact: builder.mutation({
      query: (newContact) => ({
        url: '/Contact', // Endpoint for POST request
        method: 'POST',
        body: newContact, // The contact data sent in the request body
        headers: {
          'Content-Type': 'application/json', // The body is JSON
        },
      }),
    }),
    // getcontact: builder.query({
    //   query: (data) => ({
    //     url: '/contact-get', // Endpoint for POST request
    //     method: 'GET',
    //     body: data, // The contact data sent in the request body
       
    //   }),
    // }),
  }),
});

// Export hooks for interacting with the endpoints
export const { 
 
  useCreateContactMutation ,
//   useGetcontactQuery
} = ContactApi;
