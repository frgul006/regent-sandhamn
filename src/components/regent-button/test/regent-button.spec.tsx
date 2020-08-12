import { newSpecPage } from '@stencil/core/testing';
import { RegentButton } from '../regent-button';

describe('regent-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RegentButton],
      html: `<regent-button></regent-button>`,
    });
    expect(page.root).toEqualHtml(`
      <regent-button class="regent-button regent-button--secondary">
        <mock:shadow-root>
          <button type="button">
            <slot></slot>
          </button>
        </mock:shadow-root>
      </regent-button>
    `);
  });
});
