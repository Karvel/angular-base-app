import { Component, ChangeDetectionStrategy } from '@angular/core';

import { environment } from '../../../../../environments/environment';
import { Utils } from '../../../utils/utils';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  public copyrightYear: string = Utils.getCopyrightYear();
  public clientEnvironment = {
    name: environment.name,
    version: environment.version,
  };
}
