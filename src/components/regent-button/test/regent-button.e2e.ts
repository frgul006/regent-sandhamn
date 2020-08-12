import { newE2EPage } from '@stencil/core/testing';

describe('regent-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<regent-button></regent-button>');

    const element = await page.find('regent-button');
    expect(element).toHaveClass('hydrated');
  });
});
