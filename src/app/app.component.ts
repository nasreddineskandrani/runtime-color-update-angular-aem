import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { css } from 'emotion';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {ViewEncapsulation, HostBinding} from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import cssVars from 'css-vars-ponyfill';

@Component({
  selector: 'my-app',
  template: `

  GG WP! 
  
  <h1>Angular 6 test runtime var css</h1>

  <form [formGroup]="form">
    color success
    <input formControlName="colorA" type="text" max="32" />
    <br />
    <br />
    color warning
    <input formControlName="colorB" type="text" max="32" />
  </form>

  {{ helloColor$  | async }}
    
  <hello></hello>
`,
  styles: [`
    .or-global-border {
      border: 1px solid blue;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  form = new FormGroup({
    colorA: new FormControl(null),
    colorB: new FormControl(null)
  });

  helloColor$ = this.form.valueChanges.pipe(
    tap(({ colorA, colorB }) => {
      cssVars({
        variables: {
          '--aem-bg-success': colorA,
          '--aem-bg-warning': colorB
        }
      });
    }),
    map(({ color }) => color)
  );

  constructor(private sanitizer: DomSanitizer) {}
}
