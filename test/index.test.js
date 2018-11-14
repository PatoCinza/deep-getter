const { getAll, isNothing } = require('../index')
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

describe('getAll function', () => {
  it('should return the property value', () => {
    expect(getAll(mock, 'data.details.hasImage')).toBe(true)
  })

  it('should return false in false property instead of Nothing', () => {
    expect(getAll(mock, 'data.details.falseProp')).toBe(false)
  })

  it('should access array index in path', () => {
    expect(getAll(mock, 'data.colors.1')).toEqual(mock.data.colors[1])
  })

  it('should access numeric keys in path', () => {
    expect(getAll(mock, 'data.12')).toEqual(mock.data['12'])
  })
})

describe('isNothing function', () => {
  it('should return true when getAll returns Nothing', () => {
    expect(isNothing(getAll({}, 'prop.prop'))).toBe(true)
  })

  it('should return false when getAll returns Nothing', () => {
    expect(isNothing(getAll(mock, 'data.colors'))).toBe(false)
  })

  it('Nothing should not be equal to another instance of Nothing', () => {
    expect(getAll({}, 'prop.prop') === { isNothing: true }).toBe(false)
  })
})

describe('failsafe environment', () => {
  it('should return Nothing when accessing not existent key', () => {
    expect(isNothing(getAll(mock, 'data.error'))).toBe(true)
  })

  it('should not break when accessing subsequent non existent keys', () => {
    expect(isNothing(getAll(mock, 'data.error.error.error.error'))).toBe(true)
  })
})
