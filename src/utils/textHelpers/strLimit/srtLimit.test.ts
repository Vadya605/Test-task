import { strLimit } from "."

describe('Проверка метода strLimit', () => {
    test('Тестирование лимита меньшего, чем длина', () => {
        expect(strLimit('Test number one', 4)).toBe('Test...')
    })

    test('Тестирование лимита большего, чем длина', () => {
        expect(strLimit('Test number two', 100)).toBe('Test number two')
    })

    test('Тестирование пустой строки', () => {
        expect(strLimit('', 0)).toBe('')
    })
})