import { Injectable } from '@angular/core';
import { File } from "@ionic-native/file/ngx";
import { FileTransfer, FileTransferObject } from "@ionic-native/file-transfer/ngx";
import { FileOpener } from "@ionic-native/file-opener/ngx";
import { HttpClient } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Platform, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { present } from '@ionic/core/dist/types/utils/overlays';
import { DataRowOutlet } from '@angular/cdk/table';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {
  constructor(
    private fileOpener: FileOpener,
    private transfer: FileTransfer,
    private file: File,
    public http: HttpClient,
    private iab: InAppBrowser,
    private platform: Platform,
    private document: DocumentViewer,
    private alertCtrl: AlertController,
    public loadingController: LoadingController,
    public toastController: ToastController
  ) { }
  m: any;
  mm: any;
  time: any;
  time1: any;
  sec: any;
  dateth: string;

  filename: any;
  datetimethai(cdate: any) {

    this.m = cdate.split('-'); //split YYYY AND MM
    this.time = this.m[2].split('T'); //split dd time
    this.time1 = this.time[1].split(':'); //split time
    this.sec = this.time1[2].split('.');   //split milliseconds
    this.m[0] = parseInt(this.m[0]) + 543;
    this.mm = this.time[0] + "/" + this.m[1] + "/" + this.m[0] + " " + this.time1[0] + ":" + this.time1[1];
    return this.mm;
  }
  datethai(cdate: any) {

    this.m = cdate.split('-');
    this.time = this.m[2].split('T');
    this.m[0] = parseInt(this.m[0]) + 543;
    this.mm = this.time[0] + "/" + this.m[1] + "/" + this.m[0];
    return this.mm;
  }


  async download(DocOID: any) {
    const toast = await this.toastController.create({
      message: 'Please wait for downloading.'
    });


    let postData = new FormData();
    postData.append("DocOID", DocOID);
    this.http.post("https://app.rmutp.ac.th/api/edoc/docfile", postData)
      .subscribe(data => {
        toast.present();
        let downloadUrl = "https://edoc.rmutp.ac.th/upload_file/" + data["Table"][0]["FilePath"];
        let path = this.file.dataDirectory;
        const fileTransfer: FileTransferObject = this.transfer.create();

        fileTransfer.download(downloadUrl, path + data["Table"][0]["OldFileName"]).then(entry => {
          let url = entry.toURL();

          if (this.platform.is('ios')) {
            this.document.viewDocument(url, 'application/pdf', {});
          } else {
            this.fileOpener.open(url, 'application/pdf')
              .then(() => console.log('File is opened'))
              .catch(e => console.log('Error opening file', e));
          }
          toast.dismiss();
        });

      }, error => {
        this.downloaderror();
        console.log(error);
      });
  }
  
  async downloaderror() {
    const toast = await this.toastController.create({
      message: 'Download Error!!.',
      duration: 3000
    });
    await toast.present();
  }

  async presentLoading() {

    const loading = await this.loadingController.create({
      message: 'Loading...',
    });
    await loading.present();


  }

}