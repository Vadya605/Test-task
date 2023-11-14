import { IRecommendation } from '@/interfaces';
import { IUserGeographicData } from '@/interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const recommendationsAPI = createApi({
    reducerPath: 'recommendationsApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
    endpoints: (builder) => ({
        fetchRecommendations: builder.query<IRecommendation[], IUserGeographicData>({
            query: (params: IUserGeographicData) => ({
                url: '/recommendations',
                params: params
            }),
        }),
    }),
});

export const { useFetchRecommendationsQuery } = recommendationsAPI;
