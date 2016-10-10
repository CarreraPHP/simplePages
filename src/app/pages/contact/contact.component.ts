import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  private title: string = 'Heading';
  private content: string = `Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.`;

  public contentList: Array<Object> = [];

  constructor() {
    for (var i = 0; i < 6; i++) {
      var o = {
        title: this.title,
        content: this.content
      };
      this.contentList.push(o);
    }
  }


  ngOnInit() {
  }

}
