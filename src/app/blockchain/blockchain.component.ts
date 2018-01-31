import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Blockchain } from './blockchain.model';
import { AppState } from './../app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {
  angForm: FormGroup;
  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ]
   });
  }

  addCoin(name, price) {
    console.log('x');
    this.store.dispatch({
      type: 'ADD_COIN',
      payload: <Blockchain> {
        name: name,
        price: price
      }
    });
  }

  ngOnInit() {
  }

}
