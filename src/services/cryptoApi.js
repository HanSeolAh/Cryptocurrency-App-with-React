import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '4b04c26367msh95481e88b31e0c7p156816jsn32023d673462'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query ({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getExchanges: builder.query ({
            query: () => createRequest('/exchanges'),
        }),
        getCryptoDetails: builder.query ({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query ({
            query: ({ coinId, timePeriod }) => createRequest(`coin/${coinId}/history?timeperiod=${timePeriod}`),
        })
    })
});

export const {
    useGetCryptosQuery, 
    useGetExchangesQuery, 
    useGetCryptoDetailsQuery, 
    useGetCryptoHistoryQuery} = cryptoApi;