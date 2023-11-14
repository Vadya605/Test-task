import { useTypeSelector } from "./redux"

export function useAuth(){
    const { id, email, token } = useTypeSelector(state => state.User)
    
    return {
        isAuth: Boolean(id),
        email, 
        token, 
        id
    }
}