export const checkPasswordMatch = (password: string, passwordConfirm: string): boolean => {
    return password === passwordConfirm
}

export const calculatePasswordStrength = (password: string) => {
    const lengthCriteria = Number(password.length >= 6)
    const digitCriteria = Number(/[0-9]/.test(password))
    const lowercaseCriteria = Number(/[a-z]/.test(password))
    const uppercaseCriteria = Number(/[A-Z]/.test(password))

    const strengthLevel = lengthCriteria + digitCriteria + lowercaseCriteria + uppercaseCriteria
    return (strengthLevel / 4) * 100;
}