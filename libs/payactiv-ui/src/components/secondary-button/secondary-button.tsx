import { Component, h } from '@stencil/core';

@Component({
  tag: 'secondary-button',
  styleUrl: 'secondary-button.scss',
  shadow: true,
})

export class SecondaryButton {

  render() {
    return <button>Secondary Button</button>;
  }
}
