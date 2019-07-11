const { generateText, checkAndGenerate } = require('./util');

test('should output name and age', () => {
    const text = generateText('Jer', 6)
    expect(text).toBe('Jer (6 years old)')
})

test('should output data-less text', () => {
    const text = generateText('', null)
    expect(text).toBe(' (null years old)')
})

test('should require properties', () => {
    const text = generateText()
    expect(text).toBe('undefined (undefined years old)')
})

// integration test
test('should validate and generate text', () => {
    const text = checkAndGenerate('Jer', 6)
    expect(text).toBe('Jer (6 years old)')
})