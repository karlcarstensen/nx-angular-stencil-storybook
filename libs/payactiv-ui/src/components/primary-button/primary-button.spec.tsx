import { newSpecPage } from '@stencil/core/testing';
import { PrimaryButton } from './primary-button';

describe('primary-button', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [PrimaryButton],
      html: '<primary-button></primary-button>'
    });
    expect(root).toEqualHtml(`
      <primary-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </primary-button>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [PrimaryButton],
      html: `<primary-button first="Stencil" last="'Don't call me a framework' JS"></primary-button>`
    });
    expect(root).toEqualHtml(`
      <primary-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </primary-button>
    `);
  });
});
