import {Component, Input} from '@angular/core';
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-no-result',
  templateUrl: './no-result.component.html',
  styleUrls: ['./no-result.component.css']
})
export class NoResultComponent {
  @Input() description: string = "Essayez de changer vos filtres de recherche ou de revenir à la page d'accueil";
  @Input() data: any[] = [];
  @Input() loading!: boolean;

  protected readonly faWindowClose = faWindowClose;

}
