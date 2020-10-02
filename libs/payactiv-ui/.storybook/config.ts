import { configure, addDecorator } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { defineCustomElements } from '../../../dist/libs/payactiv-ui/loader';

defineCustomElements();

addDecorator(withKnobs);
configure(require.context('../src', true, /\.stories\.(j|t)sx?$/), module);
