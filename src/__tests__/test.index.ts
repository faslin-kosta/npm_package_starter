import { test_function } from '../index'

test('test_function', () => {
  expect(test_function('name')).toBe(`[test]:name`)
})
