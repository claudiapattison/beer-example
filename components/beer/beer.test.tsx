import React from 'react'
import { render } from '@testing-library/react'
import { Beer } from './beer'


describe('Beer', () => {
    it('renders a title', () => {
      const { getByRole } = render(<Beer name="Test Title" tagline="Test Tagline" image_url="https://via.placeholder.com/150/" abv={6} />)
  
      const beerTitle = getByRole('heading', {level: 3})
      expect(beerTitle).toHaveTextContent('Test Title')

    })
  })
 