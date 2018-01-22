import { Pipe, PipeTransform } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'trustedSite'
})
export class TrustedResourceUrlPipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer) { }
  transform(url): any {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
