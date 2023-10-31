import React, { useRef } from "react";

import AutoCompleteSuggestions from "@/components/AutoCompleteSuggestions";
import { STATUS_CODES } from "@/constants";
import { useAppDispatch } from "@/hooks/redux";
import { useGoogleMaps } from "@/hooks/useGoogleMaps";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { setCenter } from "@/store/reducers";

import {
    AutoCompeteSearchWrapper,
    SearchBox,
    SearchIcon,
    SearchInput
} from "./styled"
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";

export default function AutoCompleteSearch() {
    const dispatch = useAppDispatch()
    const ref = useRef<HTMLDivElement>(null);
    const { ready, value, suggestions, setValue, init, clearSuggestions } = usePlacesAutocomplete({ initOnMount: false, debounce: 300 });
    const { status, data } = suggestions

    const isLoaded = useGoogleMaps()
    useOnClickOutside(ref, clearSuggestions);

    React.useEffect(() => {
        isLoaded && init()
    }, [isLoaded, init])

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleSelect = (description: string) => {
        console.log('test');

        setValue(description, false);
        clearSuggestions();

        getGeocode({ address: description }).then((results) => {
            const { lat, lng } = getLatLng(results[0]);
            dispatch(setCenter({ lat, lng }))
        });
    };

    return (
        <AutoCompeteSearchWrapper data-testid='auto-compete-search' ref={ref}>
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
