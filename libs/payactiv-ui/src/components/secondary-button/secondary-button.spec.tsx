import { newSpecPage } from '@stencil/core/testing';
import { SecondaryButton } from './secondary-button';

describe('secondary-button', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [SecondaryButton],
      html: '<secondary-button></secondary-button>'
    });
    expect(root).toEqualHtml(`
      <secondary-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </secondary-button>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [SecondaryButton],
      html: `<secondary-button first="Stencil" last="'Don't call me a framework' JS"></secondary-button>`
    });
    expect(root).toEqualHtml(`
      <secondary-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </secondary-button>
    `);
  });
});
