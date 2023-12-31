import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, combineLatest, finalize} from "rxjs";
import {PageEvent} from "@angular/material/paginator";
import {Formation, getFormationForm} from "../../models/formation";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FormationService} from "../../services/formation.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formations: Formation[] = [];
  searchForm: FormGroup = getFormationForm();
  loading: boolean = false;
  error: string = '';
  itemsPerPage: BehaviorSubject<number> = new BehaviorSubject<number>(20);
  currentPage: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  totalItems?: number;
  protected readonly faMagnifyingGlass = faMagnifyingGlass;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: FormationService
  ) {
  }

  handleSubmit() {
    if (this.searchForm.valid) {
      this.loading = true;
      this.service
        .searchByParam(
          this.currentPage.value,
          this.itemsPerPage.value,
          this.searchForm.value)
        .pipe(
          finalize(() => {
            this.loading = false
          }))
        .subscribe({
          next: ({content, total}) => {
            this.formations = content
            this.totalItems = total;
          }
        })

    }

  }

  ngOnInit() {
    combineLatest([this.currentPage, this.itemsPerPage])
      .subscribe(() => this.handleSubmit());
  }

  pageChanged(page: PageEvent) {
    this.itemsPerPage.next(page.pageSize);
    this.currentPage.next(page.pageIndex);
  }

  isInvalid(control: string) {
    const c = this.searchForm.get(control);
    return c ? !c.pristine && c.invalid : true
  }

}
