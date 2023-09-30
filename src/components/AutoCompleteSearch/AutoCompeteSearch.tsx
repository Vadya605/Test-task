import { SearchBox, SearchIcon, SearchInput } from "./AutoCompeteSearchStyle"
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import React from "react";

interface AutoCompeteSearchProps {
    isLoaded: boolean
}

const AutoCompleteSearch = ({ isLoaded }: AutoCompeteSearchProps) => {
    React.useEffect(() => {
        if (isLoaded) {
            init()
        }
    }, [isLoaded])
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        init,
        clearSuggestions,
    } = usePlacesAutocomplete({
        initOnMount: false,
        debounce: 300,
    });
    const ref = useOnclickOutside(() => {
        // When the user clicks outside of the component, we can dismiss
        // the searched suggestions by calling this method
        clearSuggestions();
    });

    const handleInput = (e: any) => {
        // Update the keyword of the input element
        setValue(e.target.value);
    };

    const handleSelect =
        ({ description }: any) =>
            () => {
                console.log(description);

                // When the user selects a place, we can replace the keyword without request data from API
                // by setting the second parameter to "false"
                setValue(description, false);
                clearSuggestions();

                // Get latitude and longitude via utility functions
                getGeocode({ address: description }).then((results) => {
                    const { lat, lng } = getLatLng(results[0]);
                    console.log("📍 Coordinates: ", { lat, lng });
                });
            };

    const renderSuggestions = () =>
        data.map((suggestion) => {
            const {
                place_id,
                structured_formatting: { main_text, secondary_text },
            } = suggestion;

            return (
                <li key={place_id} onClick={handleSelect(suggestion)}>
                    <strong>{main_text}</strong> <small>{secondary_text}</small>
                </li>
            );
        });
    return (
        <div>
            <SearchBox ref={ref}>
                <SearchIcon />
                <SearchInput 
                    placeholder='Место адрес...' 
                    value={value}
                    onChange={handleInput}
                    disabled={!ready} 
                />
            </SearchBox>
            {status === "OK" && <ul>{renderSuggestions()}</ul>}
        </div>
    )
};

export default AutoCompleteSearch