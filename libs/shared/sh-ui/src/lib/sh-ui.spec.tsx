import { render } from '@testing-library/react';

import ShUi from './sh-ui';

describe('ShUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShUi />);
    expect(baseElement).toBeTruthy();
  });
});
