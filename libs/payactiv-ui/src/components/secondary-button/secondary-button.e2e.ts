import { newE2EPage } from '@stencil/core/testing';

describe('secondary-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<secondary-button></secondary-button>');
    const element = await page.find('secondary-button');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<secondary-button></secondary-button>');
    const component = await page.find('secondary-button');
    const element = await page.find('secondary-button >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
