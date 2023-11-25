import { Component, Input } from '@angular/core';
import { BlacklistService } from 'src/app/service/fds-sample/blacklist.service';

@Component({
  selector: 'app-blacklists',
  templateUrl: './blacklists.component.html',
  styleUrls: ['./blacklists.component.scss']
})
export class BlacklistsComponent {
  @Input('data')data?: any[];
  res : any;

  constructor(private myApiService: BlacklistService) {}

  deleteBlacklist(balcklist_id: number) {
    this.myApiService.deleteBlacklist(balcklist_id).subscribe((response)=> {
      this.res = response
      console.log(this.res, 'delee');
      const that = this.data?.findIndex(item => item.id === balcklist_id);
      if (that !== -1) {
        this.data?.splice(that as number, 1);
      }
    });
  }
}
