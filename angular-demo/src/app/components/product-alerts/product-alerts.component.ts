import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/classes/product';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  /* The @Input decorator indicates that the property value passes in from the component's parent ProductListComponent */
  @Input() product : Product | undefined;
  /* configuration with @Output() decorator allows the ProductAlertsComponent to emit an event when the value of the notify property changes */
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
