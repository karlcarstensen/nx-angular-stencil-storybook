import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { defineCustomElements } from "@nx-angular-stencil-storybook/payactiv-ui/loader";

defineCustomElements(window);

@NgModule({
  imports: [CommonModule],
})
export class PayactivUiAngularModule {}
