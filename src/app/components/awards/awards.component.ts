import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})

export class AwardsComponent {
  @Input() awardList: any = [];

  openAwards(award: any): void {
    if (award && award.linkedImage && award.linkedImage.length > 0) {
      const linkedImage: string = award.linkedImage ?? '';
      window.open(linkedImage, '_blank')?.focus();
    }
  }
}
