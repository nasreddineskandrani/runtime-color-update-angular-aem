import { Component, Input, HostBinding } from '@angular/core';
import { css } from 'emotion';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

const Hello = css({
  fontFamily: 'Lato'
});

@Component({
  selector: 'hello',
  template: `
  <div class="parent or-global-border">
    <h1 class="lol1">Hello success!</h1>
    <h1 class="lol2">Hello warning!</h1>
  </div>
  `,
 styles: [`
    host {
      
    }
    .or-global-border {
      border: 1px solid red;
    }

    .lol1 {
      background: var(--aem-bg-success);
    }

    .lol2 {
      background: var(--aem-bg-warning);
    }

  `]
})
export class HelloComponent {
  @Input() name: string;
  @Input() color: string;

  helloClassName = Hello;

  constructor(private sanitizer: DomSanitizer) {}
}
