import { AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Element } from "../../../../core/models/element";
import { ElementDataAccessService } from "../../../../core/services/element-data-access.service";
import { ElementTableComponent } from "../element-table/element-table.component";
import { Observable } from "rxjs";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, ElementTableComponent],
  selector: "app-element-dashboard",
  standalone: true,
  templateUrl: "./element-dashboard.component.html"
})
export class ElementDashboardComponent implements OnInit {
  public elements$!: Observable<Element[]>;

  constructor(private readonly elementDataAccessService: ElementDataAccessService) {}

  public ngOnInit(): void {
    this.elements$ = this.elementDataAccessService.retrieveElements();
  }
}
