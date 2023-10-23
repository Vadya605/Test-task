export interface AutoCompleteSuggestionsProps {
    suggestions: google.maps.places.AutocompletePrediction[],
    handleSelectSuggestion: (description: string) => void
}