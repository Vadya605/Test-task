export interface IAutoCompleteSuggestionsProps {
    suggestions: google.maps.places.AutocompletePrediction[]
    handleSelectSuggestion: (description: string) => void
}
