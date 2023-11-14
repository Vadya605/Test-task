export interface IUser {
    id: string,
    email: string,
    token: string,
    city: string,
    country: string,
    [key: string]: string;
}