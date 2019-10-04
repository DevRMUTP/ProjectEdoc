import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { async } from 'q';
import { HttpClient } from '@angular/common/http';
import { FunctionService } from '../services/function.service';
import { from } from 'rxjs';
import { LoadingController, AlertController } from '@ionic/angular';
import { SPINNERS } from '@ionic/core/dist/types/components/spinner/spinner-configs';
import { CdkTreeNodeOutletContext } from '@angular/cdk/tree';
import { DatePipe } from '@angular/common';
import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { testUserAgent } from '@ionic/core/dist/types/utils/platform';


@Component({
  selector: 'litsbook.page',
  templateUrl: './litsbook.page.html',
  styleUrls: ['./litsbook.page.scss'],

})
export class LitsbookPage implements OnInit {
  // fileTransfer: FileTransferObject;
  constructor(
    private storage: Storage,
    public http: HttpClient,
    private functionservice: FunctionService,
    public navCtrl: NavController,
    public loadingController: LoadingController,
    public datepipe: DatePipe,
    private alertCtrl: AlertController,
    public modalController: ModalController
    // public navParams: NavParams
  ) { }

  UserData: any;
  edocdata: any;
  inputevent: any;
  searchtype = 'Nodoc';
  fdate: string;
  tdate: string;
  fordate: any;
  todate: any;
  docflow: any;
  loading: any;


  ngOnInit() {
    this.storage.get('UserData').then((val) => {
      this.UserData = val;
      this.getedoc();
      console.log(this.UserData);
    });
  }

  onChangeinputsearch(event) {
    this.inputevent = event.target.value;
    console.log(this.inputevent);
    this.getsearch();
  }

  onChangedate(event) {
    this.fdate = this.fordate.getFullYear() + '-' + (this.fordate.getMonth() + 1) + '-' + (this.fordate.getDate()) + ' 00:00';
    this.todate = event.target.value;
    this.tdate = this.todate.getFullYear() + '-' + (this.todate.getMonth() + 1) + '-' + (this.todate.getDate()) + ' 23:59';
    console.log(this.fdate);
    console.log(this.tdate);
    this.getsearch();
  }

  getsearch() {
    let postData1 = new FormData();
    postData1.append("Username", this.UserData.username);
    if (this.inputevent != null) {
      postData1.append(this.searchtype, this.inputevent);
    }
    if (this.fdate != null && this.tdate != null) {
      postData1.append('fordate', this.fdate);
      postData1.append('todate', this.tdate);
    }
    this.http.post("https://app.rmutp.ac.th/api/edoc/FindEdoc", postData1)
      .subscribe(data => {
        this.edocdata = data["Table"];
        console.log(this.edocdata);
      }, error => {
        console.log(error);
      });
  }

  clear() {
    this.fordate = null;
    this.todate = null;
    this.fdate = null;
    this.tdate = null;
    this.getsearch();
  }


  async getedoc() {

    const loading = await this.loadingController.create({
      message: 'Loading...',
    });
    await loading.present();

    let postData1 = new FormData();
    postData1.append("Username", this.UserData.username);
    //postData1.append("Password", this.UserData.password);
    this.http.post("https://app.rmutp.ac.th/api/edoc/ShowEdoc", postData1)
      .subscribe(data => {
        this.edocdata = data["Table"];
        console.log(this.edocdata);
        loading.dismiss();
      }, error => {
        console.log(error);
        loading.dismiss();
      });


  }

  godocflow(DocFlowOID: string, DocOID: string, DocCreateByAccount: string) {
    this.docflow = { DocFlowOid: DocFlowOID, DocOID: DocOID, DocCreateByAccount: DocCreateByAccount };
    this.storage.set('docflow', this.docflow);
    console.log(this.docflow);
    let postData1 = new FormData();
    postData1.append("DocOID", DocOID);
    postData1.append("RecieveByAccount", this.UserData.username);
    
    this.http.post("https://app.rmutp.ac.th/api/edoc/updatedoceflowstatus", postData1)
      .subscribe(data => {
        console.log(data);
        this.getedoc();
      }, error => {
        console.log(error);
      });
    this.navCtrl.navigateForward('/detailedoc');
  }

  clearform() {
    if (this.inputevent != null || this.fordate != null || this.todate != null) {
      this.inputevent = null;
      this.fordate = null;
      this.todate = null;
      this.fdate = null;
      this.tdate = null;
      this.getsearch();
      console.log("clear data");

    }
  }

  async DeleteEdocConfirm(DocOID: any, RecievebyAccount: any) {
    const loading = await this.loadingController.create({
      message: 'Deleteing...',
    });
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: 'ต้องการลบเอกการนี้หรือไม่ ?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Yes',
          handler: () => {
            loading.present();
            console.log('Confirm Yes');
            let postData1 = new FormData();
            postData1.append("RecieveByAccount", RecievebyAccount);
            postData1.append("DocOID", DocOID);
            this.http.post("https://app.rmutp.ac.th/api/edoc/deleteEdoc", postData1)
              .subscribe(data => {
                console.log(data);
                loading.dismiss();
                this.getedoc();
              }, error => {
                console.log(error);
                loading.dismiss();
              });
          }
        }
      ]
    });
    await alert.present();
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getedoc();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }



  // download(DocOID: any) {
  //   let postData = new FormData();
  //   postData.append("DocOID", DocOID);
  //   this.http.post("https://app.rmutp.ac.th/api/edoc/docfile", postData)
  //     .subscribe(data => {

  //     }, error => {
  //       console.log(error);
  //     });       
  // }

  // async presentLoading() {

  //   const loading = await this.loadingController.create({
  //     message: 'Loading...',
  //   });
  //   await loading.present();


  // }

  // download() {
  //   const fileTransfer: FileTransferObject = this.transfer.create();
  //   const url = 'http://edoc.rmutp.ac.th/upload_file/';
  //   fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
  //     console.log('download complete: ' + entry.toURL());
  //   }, (error) => {
  //     // handle error
  //   });
  // }



}