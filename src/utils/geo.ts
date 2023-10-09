import { DEFAULT_CENTER } from "@/constants";

export const getBrowserLocation = (): Promise<{ lat: number; lng: number }> => {
    return new Promise((resolve, reject) => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude: lat, longitude: lng } = position.coords;
                    resolve({ lat, lng });
                },
                () => reject(DEFAULT_CENTER)
            );
        } else {
            reject(DEFAULT_CENTER);
        }
    });
};
