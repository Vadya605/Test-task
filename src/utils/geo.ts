import { defaultCenter } from "./consts";

export const getBrowserLocation = (): Promise<{ lat: number; lng: number }> => {
    return new Promise((resolve, reject) => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude: lat, longitude: lng } = position.coords;
                    resolve({ lat, lng });
                },
                () => reject(defaultCenter)
            );
        } else {
            reject(defaultCenter);
        }
    });
};

// React.useEffect(() => {
//     getBrowserLocation()
//       .then((location) => {
//         setCenter(location);
//       })
//       .catch((defaultLocation) => {
//         setCenter(defaultLocation);
//       });
//   }, []);
