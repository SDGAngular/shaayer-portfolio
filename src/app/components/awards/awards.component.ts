import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})

export class AwardsComponent {
  @Input() awardList: any = [];
  constructor(private router: Router){}

  openAwards(award: any): void {

    if(award.proofList && award.proofList.length>0){

      const eachWork = {
        pictureList:award.proofList
      }
      sessionStorage.setItem('gallery', JSON.stringify(eachWork));
      this.router.navigate(['gallery']);
      return 
    }
    if (award && award.linkedImage && award.linkedImage.length > 0) {
      const linkedImage: string = award.linkedImage ?? '';
      window.open(linkedImage, '_blank')?.focus();
    }
  }
}
