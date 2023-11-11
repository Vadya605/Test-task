import { IRecommendation } from '@/interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const recommendationsAPI = createApi({
    reducerPath: 'recommendationsApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
    endpoints: (builder) => ({
        fetchRecommendations: builder.query<IRecommendation[], void>({
            query: () => '/recommendations',
        }),
    }),
});

export const { useFetchRecommendationsQuery } = recommendationsAPI;
