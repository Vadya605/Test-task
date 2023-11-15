import { useState } from "react";

import { Button, CircularProgress, Typography } from "@mui/material";

import { useFetchRecommendationsQuery } from "@/api";
import { RECOMMENDATION_SECTION } from "@/constants";
import { useTypeSelector } from "@/hooks";

import ExpandedCard from "../CardExpanded";
import { BoxLoader, RecommendationPanelWrapper, RecommendationSelector } from "./styled";

export default function RecommendationsPanel() {
    const [recommendationSection, setRerecommendationSection] = useState<string>(RECOMMENDATION_SECTION.CITY)
    const { User } = useTypeSelector(state => state)
    const params = { [recommendationSection]: User[recommendationSection] }
    const { data: recommendations, isLoading } = useFetchRecommendationsQuery(params)

    const handleClickButtonSelector = (section: string) => {
        setRerecommendationSection(section)
    }

    return (
        <RecommendationPanelWrapper>
            <Typography variant="h1">Рекомендации</Typography>
            <RecommendationSelector>
                <Button
                    onClick={handleClickButtonSelector.bind(null, RECOMMENDATION_SECTION.CITY)}
                    variant={recommendationSection === RECOMMENDATION_SECTION.CITY ? 'outlined' : 'contained'}
                >
                    По городу
                </Button>
                <Button
                    onClick={handleClickButtonSelector.bind(null, RECOMMENDATION_SECTION.COUNTRY)}
                    variant={recommendationSection === RECOMMENDATION_SECTION.COUNTRY ? 'outlined' : 'contained'}
                >
                    По стране
                </Button>
            </RecommendationSelector>
            { isLoading && <BoxLoader><CircularProgress color='primary' /></BoxLoader> }
            {
                recommendations?.map(recommendation => (
                    <ExpandedCard
                        key={recommendation.place_id}
                        cardItem={recommendation}
                    />
                ))
            }
        </RecommendationPanelWrapper>
    )
}