import {text} from '@storybook/addon-knobs';

export default {
  title: 'Button'
};

export const SecondaryButton = () => {
  const firstProp = text('First prop', 'StencilJS');
  const middleProp = text('Middle prop', 'Storybook');
  const lastProp = text('Last prop', 'Test');
  return `<secondary-button></secondary-button>`;
};
