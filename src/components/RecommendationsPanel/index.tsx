import { Typography, Box, Button } from "@mui/material";
import CardRecommendation from "../CardRecommendation";
import { useFetchRecommendationsQuery } from "@/api";

import { RecommendationPanelWrapper, RecommendationSelector } from "./styled";

export default function RecommendationsPanel() {

    const { data: recommendations } = useFetchRecommendationsQuery()
    console.log(recommendations)

    return (
        <RecommendationPanelWrapper>
            <Typography variant="h1">Рекомендации</Typography>
                <RecommendationSelector>
                    <Button variant='contained'>По городу</Button>
                    <Button variant='contained'>По стране</Button>
                </RecommendationSelector>
            {
                recommendations?.map(recommendation => (
                    <CardRecommendation 
                        key={recommendation.place_id}
                        recommendationItem={recommendation} 
                    />
                ))
            }
        </RecommendationPanelWrapper>
    )
}