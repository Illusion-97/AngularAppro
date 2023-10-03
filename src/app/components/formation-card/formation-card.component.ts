import {Component, Input} from '@angular/core';
import {faArrowRight, faCheck, faClock, faMoneyBill} from "@fortawesome/free-solid-svg-icons";
import {Formation} from "../../models/formation";

@Component({
  selector: 'app-formation-card',
  templateUrl: './formation-card.component.html',
  styleUrls: ['./formation-card.component.css']
})
export class FormationCardComponent {

  @Input() formation!: Formation;
  @Input() isFavorite: boolean = false;
  protected readonly faClock = faClock;
  protected readonly faMoneyBill = faMoneyBill;
  protected readonly faCheck = faCheck;

  protected readonly faArrowRight = faArrowRight;


  goToUrl(url: string): void {
    window.open(url, '_blank');
  }

}
