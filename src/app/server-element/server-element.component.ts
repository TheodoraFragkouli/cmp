import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ng on init');
    console.log('TextContent :'+  this.header.nativeElement.textContent);
    console.log('text content of paragraph : ' + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ng on Changes ');
    console.log( changes);
  }

  ngDoCheck(): void {
    console.log('Do change ');
  }

  ngAfterContentInit(): void {
    console.log('ng after content init');
    console.log('text content of paragraph : ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ng after content checked');
  }

  ngAfterViewInit(): void {
    console.log('ng after view init');
    console.log('TextContent :'+  this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ng after view checked');
  }

  ngOnDestroy(): void {
    console.log('ng on destroy');
  }
}
