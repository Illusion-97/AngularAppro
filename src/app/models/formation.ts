import {TableColumnDefinition} from "./table-column-definition";
import {FormControl, FormGroup, Validators} from "@angular/forms";

export interface Formation {
  id: number;
  url: string;
  title: string;
  duration: string;
  price: number;
  trainingProgram: string;
  objectives: string;
  prerequisites: string;
  published: boolean;
  trainingCenterName: string;
}

export interface Filter {
  priceMin?: number
  priceMax?: number
  keywords?: string
}

export function getFormationForm() {
  return new FormGroup<FiltersForm>({
    priceMin: new FormControl(null, {validators: [Validators.min(0)]}),
    priceMax: new FormControl(null, {validators: [Validators.min(0), Validators.max(20000)]}),
    keywords: new FormControl(null, {validators: [Validators.minLength(3), Validators.maxLength(10)]}),
  });
}


export interface FiltersForm {
  priceMin: FormControl<number | null>,
  priceMax: FormControl<number | null>,
  keywords: FormControl<string | null>,
}

export const INDEXED_PAGES_TABLE_DEFINITION: TableColumnDefinition<Formation>[] = [
  {matColumnDef: "title", matHeader: "Titre"},
  {matColumnDef: "trainingCenterName", matHeader: "Training Center"},
  {matColumnDef: "duration", matHeader: "Durée"},
  {matColumnDef: "price", matHeader: "Prix"}
]
