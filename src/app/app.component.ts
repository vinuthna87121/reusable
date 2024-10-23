import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AddressComponent } from './address/address.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddressComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Address';
  userAddress1= {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  };
  userAddress2= {
    street: '126 Main St',
    city: 'Anytown',
    state: 'Pa',
    zip: '17055'
  };

  // onAddressChange(newAddress: { street: string, city: string, state: string, zip: string }) {
  //   this.userAddress1 = newAddress;
  //   this.userAddress2 = newAddress;
  //   // handle the updated address
  // }
 
    
  
  }
  

