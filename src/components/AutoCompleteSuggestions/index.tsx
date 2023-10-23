import { AutoCompleteSuggestionsProps } from "./interfaces";
import { ListSuggestions, ListSuggestionsItem } from "./styled";

export default function AutoCompleteSuggestions({ suggestions, handleSelectSuggestion }: AutoCompleteSuggestionsProps) {
    
    const handleClicktSuggestion = (description: string) => {
        handleSelectSuggestion(description)
    }
    
    return (
        <ListSuggestions>
            {suggestions.map(suggestion =>
                <ListSuggestionsItem key={suggestion.place_id} onClick={() => handleClicktSuggestion(suggestion.description)}>
                    <strong>{suggestion.structured_formatting.main_text}</strong>
                    <small>{suggestion.structured_formatting.secondary_text}</small>
                </ListSuggestionsItem>
            )}
        </ListSuggestions>
    );
}