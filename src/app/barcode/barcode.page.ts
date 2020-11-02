import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.page.html',
  styleUrls: ['./barcode.page.scss'],
})
export class BarcodePage implements OnInit {
  data: any;

  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }
  scan() {
    this.barcodeScanner.scan().then((barcodeScanner) => {
      this.data = barcodeScanner.text;
    }).catch(err => {
      console.log('Error', err);
    });
  }
}
