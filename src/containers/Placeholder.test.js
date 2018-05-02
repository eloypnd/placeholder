import React from 'react'
import renderer from 'react-test-renderer'
import { PlaceholderContainer } from './Placeholder'

it('PlaceholderContainer renders correctly', () => {
  const tree = renderer
    .create(<PlaceholderContainer fetchPlaceholder={() => {}} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
