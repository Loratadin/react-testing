const { generateText } = require('./util');

test('should output name and age', () => {
    const text = generateText('Jer', 6)
    expect(text).toBe('Jer (6 years old)')
})

test('should output data-less text', () => {
    const text = generateText('', null)
    expect(text).toBe(' (null years old)')
})