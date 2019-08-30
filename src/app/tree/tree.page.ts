import { Component, OnInit } from '@angular/core';
declare const TreeView: any;

@Component({
  selector: 'app-tree',
  templateUrl: './tree.page.html',
  styleUrls: ['./tree.page.scss'],
})
export class TreePage implements OnInit {

  public tree: any;
  public raw: any;
  public treeData=[];

  constructor() { }

  ngOnInit() {

    this.raw=[
      {sender:'652.23', reciever:'652.04', isSend:true, RecieveDate: new Date(), FlowStatus:'Read'},
      {sender:'652.23', reciever:'652.03', isSend:true},
      {sender:'652.23', reciever:'652.07', isSend:false},
      {sender:'652.23', reciever:'652.05', isSend:true},
      {sender:'652.23', reciever:'652.08', isSend:false},
      {sender:'652.23', reciever:'652.02', isSend:false},
      {sender:'652.23', reciever:'652.10', isSend:false},
      {sender:'652.23', reciever:'652.06', isSend:false},
      {sender:'652.23', reciever:'652.20', isSend:false},
      {sender:'652.23', reciever:'652.09', isSend:false},
      {sender:'652.23', reciever:'652.22', isSend:false},
      {sender:'652.23', reciever:'652.16', isSend:true},
      {sender:'652.23', reciever:'652.21', isSend:true},
      {sender:'652.23', reciever:'652.17', isSend:true},
      {sender:'652.23', reciever:'652.23', isSend:true},
      {sender:'652.23', reciever:'652.18', isSend:true},
      {sender:'652.23', reciever:'652.24', isSend:true},
      {sender:'652.23', reciever:'652.19', isSend:false},
      {sender:'652.23', reciever:'652.26', isSend:true},
      {sender:'652.23', reciever:'652.01', isSend:true},
      {sender:'652.23', reciever:'652.13', isSend:true},
      {sender:'652.23', reciever:'652.12', isSend:true},
      {sender:'652.23', reciever:'652.11', isSend:true},
      {sender:'652.23', reciever:'652.15', isSend:false},
      {sender:'652.23', reciever:'652.30', isSend:true},
      {sender:'652.23', reciever:'652.25', isSend:false},
      {sender:'652.04', reciever:'sarocha.h', isSend:false},
      {sender:'652.04', reciever:'arttakarn.s', isSend:true},
      {sender:'652.13', reciever:'suppong.s', isSend:false},
      {sender:'652.13', reciever:'nidkamol.y', isSend:false},
      {sender:'652.13', reciever:'sukumal.w', isSend:false},
      {sender:'652.13', reciever:'warangkana.a', isSend:false},
      {sender:'652.13', reciever:'titrapa.s', isSend:false},
      {sender:'652.18', reciever:'juthaporn.m', isSend:false},
      {sender:'652.18', reciever:'chaovalit.p', isSend:false},
      {sender:'652.18', reciever:'chatchai.m', isSend:false},
      {sender:'652.18', reciever:'titichayar.m', isSend:false},
      {sender:'652.18', reciever:'pornprapa.c', isSend:false},
      {sender:'652.18', reciever:'nawarat.k', isSend:false},
      {sender:'652.18', reciever:'pairin.m', isSend:false},
      {sender:'652.18', reciever:'pimpaka.sr', isSend:false},
      {sender:'652.18', reciever:'budsakorn.s', isSend:false},
      {sender:'652.18', reciever:'pirunphak.n', isSend:false},
      {sender:'652.18', reciever:'thiranun.j', isSend:false},
      {sender:'652.18', reciever:'punyathit.y', isSend:false},
      {sender:'652.18', reciever:'paisarn.s', isSend:false},
      {sender:'652.18', reciever:'napat.ph', isSend:false},
      {sender:'652.18', reciever:'yurawatdhanan.s', isSend:false},
      {sender:'652.18', reciever:'wanida.c', isSend:false},
      {sender:'652.18', reciever:'somchai.p', isSend:false},
      {sender:'652.18', reciever:'wallop.c', isSend:false},
      {sender:'652.18', reciever:'ratanamon.k', isSend:false},
      {sender:'652.18', reciever:'652.18', isSend:false},
      {sender:'652.18', reciever:'songkarn.n', isSend:false},
      {sender:'652.18', reciever:'sirinat.s', isSend:false},
      {sender:'652.18', reciever:'vattana.c', isSend:false},
      {sender:'652.18', reciever:'sutida.t', isSend:false},
      {sender:'652.18', reciever:'arun.s', isSend:false},
      {sender:'652.18', reciever:'sutatta.s', isSend:false},
      {sender:'652.23', reciever:'jutamas.c', isSend:false},
      {sender:'652.23', reciever:'kanokporn.b', isSend:false},
      {sender:'652.23', reciever:'chawiwan.m', isSend:true},
      {sender:'652.23', reciever:'kiattinan.l', isSend:false},
      {sender:'652.23', reciever:'thitirat.r', isSend:false},
      {sender:'652.23', reciever:'marasi.s', isSend:false},
      {sender:'652.23', reciever:'supansa.i', isSend:false},
      {sender:'652.23', reciever:'narongkorn.p', isSend:false},
      {sender:'652.23', reciever:'vuttichai.k', isSend:false},
      {sender:'652.23', reciever:'sompit.p', isSend:false},
      {sender:'652.23', reciever:'buddhachart.y', isSend:false},
      {sender:'652.23', reciever:'nicha.k', isSend:false},
      {sender:'652.05', reciever:'rattanavalee.m', isSend:true},
      {sender:'652.05', reciever:'terawan.s', isSend:false},
      {sender:'652.05', reciever:'wanwisa.u', isSend:false},
      {sender:'652.24', reciever:'janejira.n', isSend:false},
      {sender:'652.24', reciever:'tipsukhon.c', isSend:false},
      {sender:'652.24', reciever:'nopparat.pu', isSend:false},
      {sender:'652.24', reciever:'worawut.b', isSend:false},
      {sender:'652.24', reciever:'ataikarn.j', isSend:false},
      {sender:'652.24', reciever:'wassana.su', isSend:false},
      {sender:'652.16', reciever:'kolayuth.ji', isSend:true},
      {sender:'rattanavalee.m', reciever:'suwit.v', isSend:true},
      {sender:'652.12', reciever:'ooyjariya.p', isSend:true},
      {sender:'arttakarn.s', reciever:'nuchjaree.b ', isSend:true},
      {sender:'arttakarn.s', reciever:'duriyang.k', isSend:true},
      {sender:'652.21', reciever:'watchara.p', isSend:false},
      {sender:'suwit.v', reciever:'worawut.y', isSend:false},
      {sender:'suwit.v', reciever:'watchaniya.j', isSend:false},
      {sender:'suwit.v', reciever:'tichai.i', isSend:false},
      {sender:'suwit.v', reciever:'natwipa.v', isSend:true},
      {sender:'652.03', reciever:'piyatida.s', isSend:true},
      {sender:'nuchjaree.b', reciever:'thanaphol.p', isSend:false},
      {sender:'duriyang.k', reciever:'surasit.l', isSend:false},
      {sender:'duriyang.k', reciever:'chonlanat.s', isSend:false},
      {sender:'piyatida.s', reciever:'chaowalit.a', isSend:true},
      {sender:'kolayuth.ji', reciever:'jintana.wo', isSend:false},
      {sender:'kolayuth.ji', reciever:'jitladda.j', isSend:false},
      {sender:'kolayuth.ji', reciever:'chantra.k', isSend:false},
      {sender:'kolayuth.ji', reciever:'woradol.y', isSend:false},
      {sender:'kolayuth.ji', reciever:'chanitta.t', isSend:false},
      {sender:'kolayuth.ji', reciever:'jintana.k', isSend:false},
      {sender:'kolayuth.ji', reciever:'chaowalite.s', isSend:false},
      {sender:'kolayuth.ji', reciever:'orapin.s', isSend:false},
      {sender:'kolayuth.ji', reciever:'porntip.t', isSend:true},
      {sender:'kolayuth.ji', reciever:'tipawan.k', isSend:false},
      {sender:'kolayuth.ji', reciever:'noppdol.n', isSend:false},
      {sender:'kolayuth.ji', reciever:'tikumporn.j', isSend:false},
      {sender:'kolayuth.ji', reciever:'thiparat.p', isSend:false},
      {sender:'kolayuth.ji', reciever:'netthip.k', isSend:false},
      {sender:'kolayuth.ji', reciever:'tiwawan.n', isSend:false},
      {sender:'kolayuth.ji', reciever:'arunee.n', isSend:false},
      {sender:'kolayuth.ji', reciever:'phattakrist.t', isSend:false},
      {sender:'kolayuth.ji', reciever:'watcharanon.k', isSend:false},
      {sender:'kolayuth.ji', reciever:'sonthaya.ka', isSend:false},
      {sender:'kolayuth.ji', reciever:'pattarapol.s', isSend:false},
      {sender:'kolayuth.ji', reciever:'sanit.m', isSend:false},
      {sender:'kolayuth.ji', reciever:'lakana.r', isSend:false},
      {sender:'ooyjariya.p', reciever:'kunrapat.p', isSend:false},
      {sender:'ooyjariya.p', reciever:'kurt.j', isSend:false},
      {sender:'ooyjariya.p', reciever:'kamon.s', isSend:false},
      {sender:'ooyjariya.p', reciever:'kitti.y', isSend:false},
      {sender:'ooyjariya.p', reciever:'kanchit.b', isSend:false},
      {sender:'ooyjariya.p', reciever:'tanavoot.n', isSend:false},
      {sender:'ooyjariya.p', reciever:'jirayut.l', isSend:false},
      {sender:'ooyjariya.p', reciever:'jutima.po', isSend:false},
      {sender:'ooyjariya.p', reciever:'nichakan.p', isSend:false},
      {sender:'ooyjariya.p', reciever:'donlawan.s', isSend:false},
      {sender:'ooyjariya.p', reciever:'nattapong.kar', isSend:false},
      {sender:'ooyjariya.p', reciever:'hathaipart.b', isSend:false},
      {sender:'ooyjariya.p', reciever:'chavalit.s', isSend:false},
      {sender:'ooyjariya.p', reciever:'treenet.k', isSend:false},
      {sender:'ooyjariya.p', reciever:'thasaphat.d', isSend:false},
      {sender:'ooyjariya.p', reciever:'charwangsuk.k', isSend:false},
      {sender:'ooyjariya.p', reciever:'chatchai.t', isSend:false},
      {sender:'ooyjariya.p', reciever:'theerapat.c', isSend:false},
      {sender:'ooyjariya.p', reciever:'nopphanan.n', isSend:false},
      {sender:'ooyjariya.p', reciever:'narin.j', isSend:false},
      {sender:'ooyjariya.p', reciever:'thanyaporn.pis', isSend:false},
      {sender:'ooyjariya.p', reciever:'thanyawat.b', isSend:false},
      {sender:'ooyjariya.p', reciever:'buarapha.k', isSend:false},
      {sender:'ooyjariya.p', reciever:'nareenart.k', isSend:false},
      {sender:'ooyjariya.p', reciever:'tidathip.c', isSend:false},
      {sender:'ooyjariya.p', reciever:'noppachai.t', isSend:false},
      {sender:'ooyjariya.p', reciever:'mantana.tu', isSend:false},
      {sender:'ooyjariya.p', reciever:'yothin.n', isSend:false},
      {sender:'ooyjariya.p', reciever:'petcharaporn.p', isSend:false},
      {sender:'ooyjariya.p', reciever:'panyaporn.s', isSend:false},
      {sender:'ooyjariya.p', reciever:'pamok.r', isSend:false},
      {sender:'ooyjariya.p', reciever:'piyanon.s', isSend:false},
      {sender:'ooyjariya.p', reciever:'pansachon.n', isSend:false},
      {sender:'ooyjariya.p', reciever:'pisut.m', isSend:false},
      {sender:'ooyjariya.p', reciever:'ratda.p', isSend:false},
      {sender:'ooyjariya.p', reciever:'pratompong.j', isSend:false},
      {sender:'ooyjariya.p', reciever:'benjapron.y', isSend:false},
      {sender:'ooyjariya.p', reciever:'ratchanee.t', isSend:false},
      {sender:'ooyjariya.p', reciever:'rungtiwa.d', isSend:false},
      {sender:'ooyjariya.p', reciever:'wachranan.s', isSend:false},
      {sender:'ooyjariya.p', reciever:'sakthep.j', isSend:false},
      {sender:'ooyjariya.p', reciever:'monta.h', isSend:false},
      {sender:'ooyjariya.p', reciever:'sutthipong.ku', isSend:false},
      {sender:'ooyjariya.p', reciever:'siriluck.t', isSend:false},
      {sender:'ooyjariya.p', reciever:'sarinya.k', isSend:false},
      {sender:'ooyjariya.p', reciever:'sukunya.p', isSend:false},
      {sender:'ooyjariya.p', reciever:'sakon.pr', isSend:false},
      {sender:'ooyjariya.p', reciever:'sureewan.k', isSend:false},
      {sender:'ooyjariya.p', reciever:'sopa.t', isSend:false},
      {sender:'ooyjariya.p', reciever:'sangsan.t', isSend:false},
      {sender:'ooyjariya.p', reciever:'oomthip.w', isSend:false},
      {sender:'ooyjariya.p', reciever:'umaporn.s', isSend:false},
      {sender:'ooyjariya.p', reciever:'outhen.p', isSend:false},
      {sender:'ooyjariya.p', reciever:'sumalee.ta', isSend:false},
      {sender:'chaowalit.a', reciever:'suthida.k', isSend:true},
      {sender:'chaowalit.a', reciever:'phattiraporn.a', isSend:false},
      {sender:'chaowalit.a', reciever:'suphasit.w', isSend:true},
      {sender:'652.11', reciever:'wallapa.f', isSend:true},
      {sender:'suthida.k', reciever:'tritika.p', isSend:false},
      {sender:'suthida.k', reciever:'duangkamol.t', isSend:false},
      {sender:'suthida.k', reciever:'auttha.s', isSend:false},
      {sender:'suthida.k', reciever:'sakkarin.h', isSend:false},
      {sender:'suthida.k', reciever:'nantawan.c', isSend:true},
      {sender:'suthida.k', reciever:'prachya.p', isSend:true},
      {sender:'nantawan.c', reciever:'chaowalit.a', isSend:false},
      {sender:'nantawan.c', reciever:'chattraya.n', isSend:false},
      {sender:'nantawan.c', reciever:'jetniphat.b', isSend:false},
      {sender:'nantawan.c', reciever:'jirapat.o', isSend:false},
      {sender:'nantawan.c', reciever:'chakkrawut.b', isSend:false},
      {sender:'nantawan.c', reciever:'photchanee.b', isSend:false},
      {sender:'nantawan.c', reciever:'bunyanut.p', isSend:false},
      {sender:'nantawan.c', reciever:'premraphi.o', isSend:true},
      {sender:'nantawan.c', reciever:'prassanee.t', isSend:false},
      {sender:'nantawan.c', reciever:'nantawan.c', isSend:false},
      {sender:'nantawan.c', reciever:'titiporn.p', isSend:false},
      {sender:'nantawan.c', reciever:'vorathon.p', isSend:false},
      {sender:'nantawan.c', reciever:'laddawan.kl', isSend:false},
      {sender:'nantawan.c', reciever:'wannapa.w', isSend:false},
      {sender:'nantawan.c', reciever:'suthida.k', isSend:false},
      {sender:'nantawan.c', reciever:'walaiporn.s', isSend:true},
      {sender:'nantawan.c', reciever:'woralak.po', isSend:false},
      {sender:'nantawan.c', reciever:'wassana.k', isSend:false},
      {sender:'nantawan.c', reciever:'siwakron.t', isSend:false},
      {sender:'nantawan.c', reciever:'sudjit.w', isSend:false},
      {sender:'nantawan.c', reciever:'sumapar.t', isSend:false},
      {sender:'nantawan.c', reciever:'sunee.sah', isSend:false},
      {sender:'nantawan.c', reciever:'supunnika.k', isSend:false},
      {sender:'nantawan.c', reciever:'apinya.m', isSend:false},
      {sender:'wallapa.f', reciever:'nitinan.s', isSend:false},
      {sender:'wallapa.f', reciever:'varinthorn.b', isSend:false},
      {sender:'wallapa.f', reciever:'chiranan.i', isSend:false},
      {sender:'wallapa.f', reciever:'chalakorn.u', isSend:false},
      {sender:'wallapa.f', reciever:'jenjila.b', isSend:true},
      {sender:'wallapa.f', reciever:'prakorb.c', isSend:false},
      {sender:'wallapa.f', reciever:'watcharaporn.c', isSend:false},
      {sender:'wallapa.f', reciever:'wisuta.wa', isSend:false},
      {sender:'wallapa.f', reciever:'maythika.p', isSend:false},
      {sender:'wallapa.f', reciever:'piyawat.j', isSend:false},
      {sender:'wallapa.f', reciever:'chinida.p', isSend:false},
      {sender:'wallapa.f', reciever:'patcharanun.y', isSend:false},
      {sender:'wallapa.f', reciever:'duangta.k', isSend:false},
      {sender:'wallapa.f', reciever:'pawana.t', isSend:false},
      {sender:'wallapa.f', reciever:'chavinee.b', isSend:false},
      {sender:'wallapa.f', reciever:'doungrouthai.k', isSend:false},
      {sender:'wallapa.f', reciever:'ranoo.y', isSend:false},
      {sender:'wallapa.f', reciever:'suphattra.s', isSend:false},
      {sender:'wallapa.f', reciever:'akanit.b', isSend:false},
      {sender:'wallapa.f', reciever:'ying.mu', isSend:false},
      {sender:'wallapa.f', reciever:'nuengruethai.k', isSend:false},
    ];

    // this.raw=[
    //   {sender:'pamok', reciever:'jirayut', isSend:true},
    //   {sender:'jirayut', reciever:'chatchai', isSend:true},
    //   {sender:'chatchai', reciever:'pamok', isSend:true},
    //   {sender:'pamok', reciever:'jirayut', isSend:false},
    // ];

    this.addTreeNode(this.treeData, '652.23');

    this.tree = new TreeView(this.treeData, 'tree');

  }

  findSenderNode(node: any, sender: string){
    let selectn:any = false;
    node.forEach(n => {
      if(sender == n.name){
        // console.log(n);
        selectn=n;
      }
    });
    return selectn;
  }

  addTreeNode( node: any, sender: string ){
    // console.log(node);
    this.raw.forEach(log => {
      //walk only log that not added
      if( typeof log.isAdded === 'undefined' ){
        //find sender to keep reciever but except sender==reciever
        if( log.sender==sender && log.sender!=log.reciever ){

          //mark added
          log.isAdded=true;

          //if isset sender
          var selectNode = this.findSenderNode(node, sender);
          
          //check is send again
          if(log.isSend){

            if( selectNode ){
              // var selectNode = this.findSenderNode(node, sender);
              console.log(sender);
              console.log(selectNode);
              this.addTreeNode(selectNode.children, log.reciever);
            }else{
              node.push({
                name: sender,RecieveDate:new Date().toLocaleString(), children:[]
              });
              this.addTreeNode(node[node.length-1].children, log.reciever);
            }

          }else{

            //if isset sender
            // var selectNode = this.findSenderNode(node, sender);
            if( selectNode ){
              // var selectNode = this.findSenderNode(node, sender);
              // console.log(sender);
              // console.log(selectNode);
              selectNode.children.push({name:log.reciever,RecieveDate:new Date().toLocaleString(), children:[]});
            }else{
              node.push({
                name: sender, children:[ {name:log.reciever, RecieveDate:new Date().toLocaleString(), children:[]} ]
              });
            }

          }
          
        }
      }
    });
  }

}
