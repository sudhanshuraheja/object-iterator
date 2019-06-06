const o = require('./index')

test('Test objectIterator', () => {
    expect(o.objects.isArray([123])).toBe(true)
    
    const i = new o.Iterator({'key': 'abc'})
    expect(i.$('key').value()).toEqual('abc')
})