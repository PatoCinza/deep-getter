const { deepGet, deepGetOrElse, isNothing } = require('../index')
const mock = {
  data: {
    colors: [ 'gray', 'blue' ],
    details: {
      hasImage: true,
      falseProp: false
    },
    '12': 'value'
  }
}

describe('deepGet function', () => {
  it('should return the property value', () => {
    expect(deepGet(mock, 'data.details.hasImage')).toEqual(mock.data.details.hasImage)
  })

  it('should return false in false property instead of Nothing', () => {
    expect(deepGet(mock, 'data.details.falseProp')).toEqual(mock.data.details.falseProp)
  })

  it('should access array index in path', () => {
    expect(deepGet(mock, 'data.colors.1')).toEqual(mock.data.colors[1])
  })

  it('should access numeric keys in path', () => {
    expect(deepGet(mock, 'data.12')).toEqual(mock.data['12'])
  })
})

describe('isNothing function', () => {
  it('should return true when deepGet returns Nothing', () => {
    expect(isNothing(deepGet({}, 'prop.prop'))).toBe(true)
  })

  it('should return false when deepGet returns Nothing', () => {
    expect(isNothing(deepGet(mock, 'data.colors'))).toBe(false)
  })

  it('Nothing should not be equal to another instance of Nothing', () => {
    expect(deepGet({}, 'prop.prop') === { isNothing: true }).toBe(false)
  })
})

describe('failsafe environment', () => {
  it('should return Nothing when accessing not existent key', () => {
    expect(isNothing(deepGet(mock, 'data.error'))).toBe(true)
  })

  it('should not break when accessing subsequent non existent keys', () => {
    expect(isNothing(deepGet(mock, 'data.error.error.error.error'))).toBe(true)
  })
})

describe('deepGetOrElse function', () => {
  it('should return truthy property value', () => {
    expect(deepGetOrElse(mock, 'data.details.falseProp', false))
      .toEqual(mock.data.details.falseProp)
  })

  it('should return falsy property value', () => {
    expect(deepGetOrElse(mock, 'data.details.falseProp', true))
      .toEqual(mock.data.details.falseProp)
  })

  it('should return fallback value', () => {
    expect(deepGetOrElse(mock, 'data.details.nonexistent', 'fallbackValue'))
      .toEqual('fallbackValue')
  })
})
