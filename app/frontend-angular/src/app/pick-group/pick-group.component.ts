import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import groups from 'src/assets/groups';

@Component({
  selector: 'app-pick-group',
  templateUrl: './pick-group.component.html',
  styleUrls: ['./pick-group.component.scss']
})
export class PickGroupComponent implements OnInit {

  constructor() { }

  groups: any[] = groups;
  @Output() onSubmit = new EventEmitter<string>();

  ngOnInit(): void {
  }

  groupForm = new FormGroup({
    group: new FormControl(null, Validators.required)
  });

  submit(){
    this.onSubmit.emit(this.groupForm.value.group);
  }

}
