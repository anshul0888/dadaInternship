import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  editable = false;
  profile;
  constructor() { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      'name': new FormControl('John Ivy'),
      'intro': new FormControl('I am the best.'),
      'editable': new FormControl(false),
      'imageUrl': new FormControl('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')
    });
    this.profile = this.profileForm.value;
  }

  onSubmit() {
    console.log(this.profileForm.value);
    this.editable = !this.editable;
    this.profile = this.profileForm.value;
  }

  onEdit() {
    this.editable = !this.editable;
  }

  onCancel() {
    this.editable = !this.editable;
    this.profile = this.profileForm.value;
  }

}
