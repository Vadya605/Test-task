import React from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";

import { STATUS_CODES } from "@/constants";
import { useAppDispatch } from "@/hooks/redux";
import { useGoogleMaps } from "@/hooks/useGoogleMaps";
import { MapServices } from "@/store/reducers";

import {
    AutoCompeteSearchWrapper,
    ListSuggestions,
    ListSuggestionsItem,
    SearchBox,
    SearchIcon,
    SearchInput
} from "./styled"

export default function AutoCompleteSearch() {
    const isLoaded = useGoogleMaps()

    React.useEffect(() => {
        isLoaded && init()
    }, [isLoaded])

    const dispatch = useAppDispatch()

    const { ready, value, suggestions: { status, data }, setValue, init, clearSuggestions, } = usePlacesAutocomplete({ initOnMount: false, debounce: 300 });

    const ref = useOnclickOutside(() => {
        clearSuggestions();
    });

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleSelect =
        (description: string) =>
            () => {
                setValue(description, false);
                clearSuggestions();

                getGeocode({ address: description }).then((results) => {
                    const { lat, lng } = getLatLng(results[0]);
                    dispatch(MapServices.actions.setCenter({ lat, lng }))
                });
            };

    const renderSuggestions = () =>
        data.map((suggestion) => {
            const { place_id, structured_formatting: { main_text, secondary_text } } = suggestion;

            return (
                <ListSuggestionsItem key={place_id} onClick={handleSelect(suggestion.description)}>
                    <strong>{main_text}</strong>
                    <small>{secondary_text}</small>
                </ListSuggestionsItem>
            );
        });
    return (
        <AutoCompeteSearchWrapper ref={ref}>
            <SearchBox isActive={status === STATUS_CODES.OK}>
                <SearchIcon />
                <SearchInput
                    placeholder='Место адрес...'
                    value={value}
                    onChange={handleInput}
                    disabled={!ready}
                />
            </SearchBox>
            {status === STATUS_CODES.OK && <ListSuggestions>{renderSuggestions()}</ListSuggestions>}
        </AutoCompeteSearchWrapper>
    )
}
