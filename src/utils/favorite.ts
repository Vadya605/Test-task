import { IFavorite } from "@/interfaces/IFavorite";
import { getDatabase, ref, set, push, get, remove } from "firebase/database";


export function addFavorite(userId: string, favoriteItem: IFavorite) {
    const db = getDatabase();
    const favoritesRef = ref(db, `favorites/${userId}`);

    const newFavoriteRef = push(favoritesRef);

    return set(newFavoriteRef, favoriteItem);
}

export function removeFavorite(userId: string, favoriteId: string) {
    const db = getDatabase();
    return new Promise((resolve, reject) => {
        const favoritesRef = ref(db, `favorites/${userId}`);
        get(favoritesRef)
            .then(result => {
                result.forEach(item => {
                    const id = item.key
                    const data = item.val()

                    if (data.place_id === favoriteId) {
                        remove(ref(db, `favorites/${userId}/${id}`))
                            .then(() => resolve('confirm'))
                            .catch((err) => reject(err))
                    }
                })
            })
            .catch(err => reject(err))
    })
}

export async function getFavorites(userId: string) {
    try {
        const db = getDatabase()
        const starCountRef = ref(db, `favorites/${ userId }`);
        const snapshot = await get(starCountRef);
        const data: IFavorite[] = [];

        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                data.push(childSnapshot.val());
            });
        }

        return data;
    } catch (error) {
        throw error;
    }
}