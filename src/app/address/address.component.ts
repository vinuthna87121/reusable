import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {
  
    @Input() address: { street: string, city: string, state: string, zip: string } = {
      street: '',
      city: '',
      state: '',
      zip: ''
    };
  
    // @Output() addressChange = new EventEmitter<{ street: string, city: string, state: string, zip: string }>();
  
    // onAddressChange() {
    //   this.addressChange.emit(this.address);
    // }
  }


