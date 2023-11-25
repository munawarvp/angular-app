import { Component, OnInit } from '@angular/core';
import { BlacklistService } from 'src/app/service/fds-sample/blacklist.service';
import {MatDialog} from '@angular/material/dialog';
import { BlacklistDialogComponent } from 'src/app/components/blacklist-dialog/blacklist-dialog.component';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  data : any;

  constructor(private myApiService: BlacklistService, public dialog: MatDialog) {}
  ngOnInit(): void {
    this.myApiService.fetchBlacklist().subscribe((response) => {
      this.data = response;
      console.log(this.data,'data');
      
    })
  }



  openDialog(): void {
    const dialogRef = this.dialog.open(BlacklistDialogComponent, {
      data: {name: 'this.name', animal: 'this.animal'},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result)(this.data.push(result))
    });
  }
}
