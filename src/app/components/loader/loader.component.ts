import { Component } from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  loading: boolean = false;

  constructor(router: Router) { // Déclarer une visibilité sur une variable du constructeur en fait un attribut de la classe
    router.events.subscribe({
      next : (e) => {

        // switch true (ou toute autre valeur fixée) permet d'inverser le fonctionnement habituel
        // ici, on vérifie que les evaluations de chaque cas produisent bien la valeur attendue par le switch
        switch (true) {
          case e instanceof NavigationStart: {
            this.loading = true;
            break;
          }

          case e instanceof NavigationEnd :
          case e instanceof NavigationCancel :
          case e instanceof NavigationError : {
            this.loading = false;
            break;
          }

          default : break;
        }
        NavigationEnd
        NavigationError
        NavigationCancel
      }
    })
  }

}
