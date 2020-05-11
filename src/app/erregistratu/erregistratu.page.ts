import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-erregistratu',
  templateUrl: './erregistratu.page.html',
  styleUrls: ['./erregistratu.page.scss'],
})
export class ErregistratuPage implements OnInit {

  myForm: FormGroup;

  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder) { this.myForm = this.createMyForm();}

    saveData(){
    console.log(this.myForm.value);
  }

  ngOnInit() {
  }

  private createMyForm(){
    return this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      passwordRetry: this.formBuilder.group({
        password: ['', Validators.required],
        passwordConfirmation: ['', Validators.required]
      }),
    });
  }

}
