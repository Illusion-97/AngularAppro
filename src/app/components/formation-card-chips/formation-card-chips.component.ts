import {Component, Input} from '@angular/core';
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-formation-card-chips',
  templateUrl: './formation-card-chips.component.html',
  styleUrls: ['./formation-card-chips.component.css']
})
export class FormationCardChipsComponent {

  @Input() value!: string | boolean | number;
  @Input() icon!: IconDefinition;
  @Input() bg?: string;
}
