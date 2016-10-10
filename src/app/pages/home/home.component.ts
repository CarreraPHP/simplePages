import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private title: string = 'Heading';
  private content: string = `Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.`;

  public jumboContent: string = `This is an example to show the potential of an offcanvas layout pattern in Bootstrap. Try some responsive-range viewport sizes to see it in action.`;
  public jumboTitle: string = 'Hello, world!';
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
