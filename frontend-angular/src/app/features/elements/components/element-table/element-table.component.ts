import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Element } from "../../../../core/models/element";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-element-table",
  standalone: true,
  styleUrls: ["./element-table.component.css"],
  templateUrl: "./element-table.component.html"
})
export class ElementTableComponent {
  @Input() public elements: Element[] = [];
}
