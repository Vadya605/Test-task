import { IAutoCompleteSuggestionsProps } from "./interfaces";
import { ListSuggestions, ListSuggestionsItem } from "./styled";

export default function AutoCompleteSuggestions({ suggestions, handleSelectSuggestion }: IAutoCompleteSuggestionsProps) {    
    return (
        <ListSuggestions>
            {suggestions.map(suggestion =>
                <ListSuggestionsItem 
                    key={suggestion.place_id} 
                    onClick={handleSelectSuggestion.bind(null, suggestion.description)}
                >
                    <strong>{suggestion.structured_formatting.main_text}</strong>
                    <small>{suggestion.structured_formatting.secondary_text}</small>
                </ListSuggestionsItem>
            )}
        </ListSuggestions>
    );
}