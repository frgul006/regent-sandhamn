import { Component, h, Host, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'regent-button',
  styleUrl: 'regent-button.css',
  shadow: true,
})
export class RegentButton {
  /**
   * Color of the button
   */
  @Prop() color: 'primary' | 'secondary' = 'secondary';

  /**
   * Should this behave like a link or a button?
   * If 'BUTTON' this will render an internal `<button>`-element
   */
  @Prop() type: 'button' | 'link' = 'button';

  /**
   * Optional parameter. Used to change the type of the internal button if `type` is set to 'BUTTON'
   */
  @Prop() buttonType: 'button' | 'submit' = 'button';

  /**
   * Optional parameter. Specifies the URL of the page the link goes to if `type` is set to 'LINK'
   */
  @Prop() href: string = '';

  @Listen('click', { capture: true })
  onClick(ev: UIEvent) {
    console.log('click', ev);
  }

  render() {
    return (
      <Host
        class={{
          'regent-button': true,
          'regent-button--primary': this.color === 'primary',
          'regent-button--secondary': this.color === 'secondary',
        }}
      >
        {this.type === 'button' ? (
          <button type={this.buttonType.toLowerCase()}>
            <slot></slot>
          </button>
        ) : (
          <a href={this.href}>
            <slot></slot>
          </a>
        )}
      </Host>
    );
  }
}
