/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html, property } from '@polymer/lit-element';

// These are the elements needed by this element.
import { plusIcon, minusIcon } from './resume-icons.js';

// These are the shared styles needed by this element.
import { ButtonSharedStyles } from './button-shared-styles.js';

// This is a reusable element. It is not connected to the store. You can
// imagine that it could just as well be a third-party element that you
// got from someone else.
class CounterElement extends LitElement {
  protected render() {
    return html`
      ${ButtonSharedStyles}
      <style>
        span { width: 20px; display: inline-block; text-align: center; font-weight: bold;}
      </style>
      <div>
        <p>
          Clicked: <span>${this.clicks}</span> times.
          Value is <span>${this.value}</span>.
          <button @click="${this._onIncrement}" title="Add 1">${plusIcon}</button>
          <button @click="${this._onDecrement}" title="Minus 1">${minusIcon}</button>
        </p>
      </div>
    `;
  }

  @property({type: Number})
  clicks = 0;

  @property({type: Number})
  value = 0;

  private _onIncrement() {
    this.value++;
    this.clicks++;
    this.dispatchEvent(new CustomEvent('counter-incremented'));
  }

  private _onDecrement() {
    this.value--;
    this.clicks++;
    this.dispatchEvent(new CustomEvent('counter-decremented'));
  }
}

window.customElements.define('counter-element', CounterElement);
