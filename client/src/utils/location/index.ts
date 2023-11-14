import { ERRORS } from "@/constants";
import { ILocationResult } from "./interfaces";

export const getBrowserLocation = (): Promise<ILocationResult> => {
    return new Promise((resolve, reject) => {
        if (!('geolocation' in navigator)) {
            reject(new Error(ERRORS['error-geo']))
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const location = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }

                // const location = {
                //     lat: 52.0975500,
                //     lng: 23.6877500,
                // }

                const geocoder = new google.maps.Geocoder()

                geocoder.geocode({ location }, (results: google.maps.GeocoderResult[] | null, status: google.maps.GeocoderStatus) => {
                    if (status !== google.maps.GeocoderStatus.OK || !results || !results.length) {
                        return reject(ERRORS['error-geo']);
                    }

                    const city = results[0].address_components.find(address => address.types.includes('locality') || address.types.includes("postal_town"))?.long_name || '';
                    const country = results[0].address_components.find(address => address.types.includes('country'))?.long_name || '';

                    resolve({ location, city, country })
                });
            },
            () => reject(new Error(ERRORS['error-geo']))
        );
    });
};
