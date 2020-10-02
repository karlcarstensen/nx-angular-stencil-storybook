import { Component, h } from '@stencil/core';

@Component({
  tag: 'primary-button',
  styleUrl: 'primary-button.scss',
  shadow: true,
})

export class PrimaryButton {

  render() {
    return <button>Primary Button</button>;
  }
}
