import React, { useRef } from "react";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";

import { STATUS_CODES } from "@/constants";
import { useAppDispatch } from "@/hooks/redux";
import { useGoogleMaps } from "@/hooks/useGoogleMaps";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { MapServices } from "@/store/reducers";

import {
    AutoCompeteSearchWrapper,
    SearchBox,
    SearchIcon,
    SearchInput
} from "./styled"
import AutoCompleteSuggestions from "../AutoCompleteSuggestions";

export default function AutoCompleteSearch() {
    const dispatch = useAppDispatch()
    const ref = useRef<HTMLDivElement>(null);
    const { ready, value, suggestions, setValue, init, clearSuggestions } = usePlacesAutocomplete({ initOnMount: false, debounce: 300 });
    const { status, data } = suggestions

    const isLoaded = useGoogleMaps()
    useOnClickOutside(ref, clearSuggestions);

    React.useEffect(() => {
        isLoaded && init()
    }, [isLoaded])

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleSelect = (description: string) => {
        console.log('test');

        setValue(description, false);
        clearSuggestions();

        getGeocode({ address: description }).then((results) => {
            const { lat, lng } = getLatLng(results[0]);
            dispatch(MapServices.actions.setCenter({ lat, lng }))
        });
    };

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
            {status === STATUS_CODES.OK && <AutoCompleteSuggestions suggestions={data} handleSelectSuggestion={handleSelect} />}
        </AutoCompeteSearchWrapper>
    )
}
