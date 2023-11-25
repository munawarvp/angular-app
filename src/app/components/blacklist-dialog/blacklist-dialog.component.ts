import { Component, Inject } from '@angular/core';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BlacklistService } from 'src/app/service/fds-sample/blacklist.service';

@Component({
  selector: 'app-blacklist-dialog',
  templateUrl: './blacklist-dialog.component.html',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, ReactiveFormsModule],
})
export class BlacklistDialogComponent {
  form: FormGroup
  constructor(
    public dialogRef: MatDialogRef<BlacklistDialogComponent>,
    private fb: FormBuilder,
    private myApiService: BlacklistService,
    @Inject(MAT_DIALOG_DATA) public data?: any,
  ) {
    this.form = this.fb.group({
      type: ['', Validators.required], // You can add validators here
      value: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      console.log(formData, 'dataaaa');
      const data = {
        [formData.type]: formData.value
      }
      console.log(data, 'new dataaaa');
      this.myApiService.createBlacklist(data).subscribe((response) => {
        this.dialogRef.close(formData);
      })
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
