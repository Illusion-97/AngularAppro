import {NgClass} from "@angular/common";

export interface TableColumnDefinition<T> {
  matColumnDef: string;
  matHeader?: string;
  ngClass?: NgClass;
  dateFormat?: string;
}
