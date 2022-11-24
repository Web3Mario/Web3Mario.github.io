"use strict";(self.webpackChunkintswap_frontend=self.webpackChunkintswap_frontend||[]).push([[8655],{8655:(ee,f,s)=>{s.r(f),s.d(f,{RemoveModule:()=>H});var l=s(8692),g=s(7976),T=s(8239),d=s(2024),c=s(2673),C=s(4121),m=s(1528),M=s(2147),k=s(3151),e=s(4537),O=s(8696),y=s(9376),w=s(3755),P=s(9869),A=s(4602),Z=s(1730),h=s(3331),b=s(9638),x=s(7327),p=s(92),_=s(132),v=s(5372);function z(i,a){1&i&&e.GkF(0)}function q(i,a){1&i&&e.GkF(0)}function S(i,a){1&i&&e.GkF(0)}function I(i,a){1&i&&(e.TgZ(0,"mat-icon",26),e._uU(1,"autorenew "),e.qZA())}function N(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"button",24),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(),r=e.MAs(59);return e.KtG(o.openConfirmDialog(r))}),e.YNc(1,I,2,0,"mat-icon",25),e._uU(2),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("disabled",!t.pair||t.isAdding||t.parseInt(t.nftValue)<=0),e.xp6(1),e.Q6J("ngIf",t.isAdding),e.xp6(1),e.hij("",t.pair?"Remove Liquidity":"Invalid Pair"," ")}}function V(i,a){if(1&i&&(e.TgZ(0,"div",31),e._UZ(1,"div",32)(2,"div",33)(3,"div",34)(4,"div",35)(5,"div",36)(6,"div",37),e.TgZ(7,"div",38),e._uU(8),e.ALo(9,"number"),e.qZA(),e.TgZ(10,"div",39),e._uU(11),e.ALo(12,"number"),e.qZA()()),2&i){const t=e.oxw(2);e.xp6(8),e.HOy(" ",t.parseInt(t.maxNFTOutput)+1," ",t.collectionSymbol," + ",e.xi3(9,8,t.formatTokenValue(t.roundUpTokenOutput,t.baseTokenDecimals||"18"),"1.2-4")," ",t.tokenSymbol," "),e.xp6(3),e.HOy(" ",t.roundDown(t.maxNFTOutput)," ",t.collectionSymbol," + ",e.xi3(12,11,t.formatTokenValue(t.roundDownTokenOutput,t.baseTokenDecimals||"18"),"1.2-4")," ",t.tokenSymbol," ")}}function U(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",27)(1,"nz-input-number",28),e.NdJ("ngModelChange",function(o){e.CHM(t);const r=e.oxw();return e.KtG(r.removeLiquidityValue=o)}),e.qZA(),e.YNc(2,V,13,14,"div",29),e.TgZ(3,"nz-slider",30),e.NdJ("ngModelChange",function(o){e.CHM(t);const r=e.oxw();return e.KtG(r.removeLiquidityValue=o)})("ngModelChange",function(o){e.CHM(t);const r=e.oxw();return e.KtG(r.onLiquidityValueChange(o))}),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("nzSize","large")("nzMin",0)("nzMin",100)("ngModel",t.removeLiquidityValue)("nzPrecision",0)("nzFormatter",t.formatterPercent),e.xp6(1),e.Q6J("ngIf",100==t.removeLiquidityValue),e.xp6(1),e.Q6J("nzMarks",t.marks)("ngModel",t.removeLiquidityValue)("nzStep",t.liquidityStep)("nzMax",100)}}function L(i,a){1&i&&(e.TgZ(0,"mat-icon",54),e._uU(1,"check_circle "),e.qZA())}const R=function(i){return{"selected-tokenId":i}};function F(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",51),e.NdJ("click",function(){const r=e.CHM(t).$implicit,u=e.oxw(3);return e.KtG(u.addOrRemoveTokenId(r.id.tokenId))}),e.YNc(1,L,2,0,"mat-icon",52),e._UZ(2,"img",53),e.TgZ(3,"div"),e._uU(4),e.qZA()()}if(2&i){const t=a.$implicit,n=e.oxw(3);e.Q6J("ngClass",e.VKq(5,R,n.isSelectedTokenId(t.id.tokenId))),e.xp6(1),e.Q6J("ngIf",n.isSelectedTokenId(t.id.tokenId)),e.xp6(1),e.Q6J("src",t.media.gateway?t.media.gateway:"/assets/imgs/mockNft.png",e.LSH)("alt",t.title),e.xp6(2),e.Oqu("#"+n.hexToString(t.id.tokenId))}}function D(i,a){if(1&i&&(e.TgZ(0,"span",46),e._uU(1,"selected: "),e.TgZ(2,"span",47),e._uU(3),e.qZA(),e._uU(4),e.qZA(),e._UZ(5,"div",48),e.TgZ(6,"div",49),e.YNc(7,F,5,7,"div",50),e.qZA()),2&i){const t=e.oxw(2);e.xp6(3),e.Oqu(t.selectedTokenIds.length),e.xp6(1),e.hij(" / ",t.nftValue,""),e.xp6(3),e.Q6J("ngForOf",t.poolNftList)("ngForTrackBy",t.trackByNftItems)}}function J(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",40)(1,"nz-input-number",41),e.NdJ("ngModelChange",function(o){e.CHM(t);const r=e.oxw();return e.KtG(r.nftValue=o)})("ngModelChange",function(o){e.CHM(t);const r=e.oxw();return e.KtG(r.updateTokenValue(o))}),e.qZA(),e.TgZ(2,"div",42),e._UZ(3,"img",43)(4,"div",4),e.TgZ(5,"span"),e._uU(6,"NFT"),e.qZA(),e._UZ(7,"div",4),e.qZA(),e.TgZ(8,"nz-slider",44),e.NdJ("ngModelChange",function(o){e.CHM(t);const r=e.oxw();return e.KtG(r.nftValue=o)})("ngModelChange",function(o){e.CHM(t);const r=e.oxw();return e.KtG(r.updateTokenValue(o))}),e.qZA()(),e.YNc(9,D,8,4,"ng-template",null,45,e.W1O)}if(2&i){const t=e.MAs(10),n=e.oxw();e.Q6J("nzPopoverContent",t)("nzPopoverVisible",n.nftBalance>0)("nzPopoverTrigger",null),e.xp6(1),e.Q6J("nzSize","large")("nzMin",0)("nzMax",n.nftSliderMax)("ngModel",n.nftValue)("nzPrecision",0),e.xp6(7),e.Q6J("ngModel",n.nftValue)("nzMin",0)("nzMax",n.nftSliderMax)}}function j(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",55)(1,"nz-input-number",56),e.NdJ("ngModelChange",function(o){e.CHM(t);const r=e.oxw();return e.KtG(r.tokenValue=o)}),e.qZA(),e.TgZ(2,"div",42),e._UZ(3,"img",43)(4,"div",4),e.TgZ(5,"span"),e._uU(6,"WETH"),e.qZA(),e._UZ(7,"div",4),e.qZA(),e._UZ(8,"div",57),e.qZA()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("nzSize","large")("nzMin",0)("ngModel",t.tokenValue)("nzDisabled",!0)}}function B(i,a){1&i&&(e.TgZ(0,"mat-icon",65),e._uU(1,"autorenew "),e.qZA())}function Y(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",58)(1,"span",59),e._uU(2,"Add Liquidity"),e.qZA(),e._UZ(3,"div",60),e.TgZ(4,"span",61),e._uU(5),e.qZA(),e.TgZ(6,"span",62),e._uU(7),e.qZA(),e.TgZ(8,"span",61),e._uU(9),e.qZA(),e.TgZ(10,"span",62),e._uU(11),e.ALo(12,"number"),e.qZA(),e.TgZ(13,"span",61),e._uU(14,"Burn Lp Token :"),e.qZA(),e.TgZ(15,"span",62),e._uU(16),e.ALo(17,"number"),e.qZA(),e.TgZ(18,"span",61),e._uU(19,"Share of Pool :"),e.qZA(),e.TgZ(20,"span",62),e._uU(21),e.ALo(22,"number"),e.qZA(),e.TgZ(23,"button",63),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.confirmAdd())}),e.YNc(24,B,2,0,"mat-icon",64),e._uU(25),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(5),e.hij("Remove ",null==t.pair||null==t.pair.collection?null:t.pair.collection.symbol," :"),e.xp6(2),e.Oqu(t.nftValue),e.xp6(2),e.hij("Remove ",null==t.pair||null==t.pair.token?null:t.pair.token.symbol," :"),e.xp6(2),e.Oqu(e.xi3(12,9,t.tokenValue,"1.2-2")),e.xp6(5),e.Oqu(e.xi3(17,12,t.lpTokenInput,"1.2-4")),e.xp6(5),e.hij("",e.xi3(22,15,t.shareOutput,"1.2-4"),"%"),e.xp6(2),e.Q6J("disabled",t.parseInt(t.nftValue)<=0||t.isAdding),e.xp6(1),e.Q6J("ngIf",t.isAdding),e.xp6(1),e.hij("","Remove Liquidity"," ")}}const Q=[{path:"",component:(()=>{class i{constructor(t,n,o,r,u,G,K,W,E){this.location=t,this.route=n,this.router=o,this.matDialog=r,this.cacheService=u,this.httpService=G,this.graphqlService=K,this.accountService=W,this.web3Service=E,this.liquidityStep=.1,this.removeLiquidityValue=0,this.marks={0:"0%",100:"100%"},this.nftBalance=2,this.tokenBalance=10,this.formatterPercent=X=>Math.floor(100*X)/100+" %",this.nftValue="0",this.tokenValue="0",this.price="0",this.poolNftBalance=0,this.poolNftList=[],this.lpTokenInput="0",this.maxNFTOutput="0",this.roundDownTokenOutput="0",this.roundUpTokenOutput="0",this.isLoadingAddLiquidityInfo=!0,this.isNFTApproved=!1,this.isTokenApproved=!1,this.isQuerying=!0,this.isApprovingToken=!0,this.isApprovingNFT=!0,this.isAdding=!1,this.selectedTokenIds=[],this.userLiquidity="0",this.shareOutput=0,this.showPopover=!0,this.queryNftValue$=new C.X("0")}get nftSliderMax(){return this.removeLiquidityValue<100?parseInt(this.roundDown(this.maxNFTOutput)):parseInt(this.roundDown(this.maxNFTOutput))+1}ngOnInit(){var t=this;this.pair$=this.route.paramMap.pipe((0,m.w)(n=>(this.nftAddress=n.get("nftAddress")||void 0,this.baseTokenAddress=n.get("baseTokenAddress")||void 0,this.cacheService.getPairAddress(this.nftAddress,this.baseTokenAddress))),(0,M.x)((n,o)=>n?.address==o?.address&&n?.price==o?.price&&n?.nftAmount==o?.nftAmount)),this.subPair=this.pair$.subscribe(function(){var n=(0,T.Z)(function*(o){t.pair=o,o?(t.price=t.formatTokenValue(o.price,o.token.decimals),t.tokenSymbol=o.token.symbol,t.collectionSymbol=o.collection.symbol,t.baseTokenDecimals=o.token.decimals,t.fetchUserLiquidity(),t.fetchPoolNFTs()):(t.tokenSymbol=t.baseTokenAddress&&(yield t.web3Service.getTokenSymbol(t.baseTokenAddress))[0],t.collectionSymbol=t.nftAddress&&(yield t.web3Service.getTokenSymbol(t.nftAddress))[0],t.baseTokenDecimals=t.baseTokenAddress&&(yield t.web3Service.getTokenDecimals(t.baseTokenAddress))[0])});return function(o){return n.apply(this,arguments)}}()),this.queryNftValueSub=this.queryNftValue$.pipe((0,k.b)(500),(0,m.w)(n=>this.pair&&parseInt(this.nftValue)>0?(this.isLoadingAddLiquidityInfo=!0,this.removeLiquidityValue=parseInt(this.nftValue)*this.liquidityStep>100?100:parseInt(this.nftValue)*this.liquidityStep,this.web3Service.invokeContract("IntswapV1Pair","getAddLiquidityInfo",[n],this.pair.address).then(o=>({deltaLPTokenAmount:o[0],deltaBaseToken:o[1]}))):Promise.resolve({deltaLPTokenAmount:"0",deltaBaseToken:"0"}))).subscribe(n=>{this.pair&&parseInt(this.nftValue)>0&&(this.tokenValue=this.formatTokenValue(n.deltaBaseToken,this.pair.token.decimals),this.lpTokenInput=this.formatTokenValue(n.deltaLPTokenAmount,"18"),this.shareOutput=d.O$.from(this.userLiquidity).add(d.O$.from(n.deltaLPTokenAmount)).mul(d.O$.from("10000")).div(d.O$.from(this.pair.liquidity)).toNumber()/100),this.isLoadingAddLiquidityInfo=!1,setTimeout(()=>this.nftValue=this.nftValue+"")})}onLiquidityValueChange(t){const n=Math.round(t/this.liquidityStep);n>=0&&n<parseInt(this.roundDown(this.maxNFTOutput))+1?(this.nftValue=n+"",this.updateTokenValue(n)):n==parseInt(this.roundDown(this.maxNFTOutput))+1&&(this.nftValue=n+"",this.tokenValue="2.333333",this.updateSelectedTokenIds(n))}updateTokenValue(t){t>=0&&(this.queryNftValue$.next(t),this.updateSelectedTokenIds(t)),0==t&&(this.nftValue="0",this.tokenValue="0",this.removeLiquidityValue=0,this.lpTokenInput="0")}updateSelectedTokenIds(t){t!=this.selectedTokenIds.length&&(this.selectedTokenIds=this.poolNftList.slice(0,t).map(n=>n.id.tokenId))}isSelectedTokenId(t){return this.selectedTokenIds.includes(t)}addOrRemoveTokenId(t){this.isSelectedTokenId(t)?this.selectedTokenIds.splice(this.selectedTokenIds.indexOf(t),1):this.selectedTokenIds.length<this.nftSliderMax&&this.selectedTokenIds.push(t)}trackByNftItems(t,n){return n.contract.address+""+n.id.tokenId}formatTokenValue(t,n){return(0,c.formatUnits)(t,n)}fetchPoolNFTs(){this.pair&&this.httpService.fetchNFTsOfCollectionByOwnerAddress(this.pair.address,this.pair.collection.address,!0).then(t=>{this.poolNftList=t.ownedNfts,this.poolNftBalance=t.totalCount})}fetchUserLiquidity(){this.suerLiquiditySub?.unsubscribe(),this.suerLiquiditySub=this.accountService.account$.subscribe(t=>{t&&this.graphqlService.fetchUserLiquidity(t,this.pair.address).then(({data:n})=>{n.liquidityInPair&&(this.userLiquidity=n.liquidityInPair.liquidity,this.shareOutput=d.O$.from(this.userLiquidity).sub(d.O$.from((0,c.parseUnits)(this.lpTokenInput,"18"))).mul(d.O$.from("10000")).div(d.O$.from(this.pair.liquidity)).toNumber()/100,this.fetchMaxOutputNFT())})})}fetchMaxOutputNFT(){this.pair&&this.web3Service.invokeContract("IntswapV1Pair","getLPTokenValue",[this.userLiquidity],this.pair.address).then(n=>{this.maxNFTOutput=(0,c.formatUnits)(n[0],"18"),this.liquidityStep=100/parseFloat(this.maxNFTOutput)})}roundDown(t,n){return d.O$.from((0,c.parseUnits)(t,n)).div(d.O$.from("10").pow(n||18)).toString()}parseInt(t){return parseInt(t)}parseFloat(t){return parseFloat(t)}goBack(){this.location.back()}hexToString(t){return d.O$.from(t).toString()}openConfirmDialog(t){this.confirmDialog=this.matDialog.open(t,{autoFocus:!1})}confirmAdd(){this.confirmDialog&&(this.confirmDialog.disableClose=!0),this.pair&&(this.isAdding=!0,this.web3Service.invokeContract("IntswapV1Pair","addLiquidityWithSpecificNFT",[this.selectedTokenIds,(0,c.parseUnits)(this.tokenValue,this.pair.token.decimals).toString()],this.pair.address).then(t=>{this.confirmDialog?.close(),this.nftValue="0"}).finally(()=>{this.confirmDialog&&(this.confirmDialog.disableClose=!1),this.isAdding=!1,this.selectedTokenIds=[]}))}openSearchTokenOrCollectionDialog(t){Promise.all([s.e(8592),s.e(1621)]).then(s.bind(s,2928)).then(({SearchTokenDialogComponent:n})=>{this.showPopover=!1;const o=this.matDialog.open(n);o.componentInstance.tokenType=t,o.afterClosed().subscribe(r=>{if(this.showPopover=!0,r)switch(t){case 0:this.switchToken(r.address,r.symbol,r.decimals);break;case 1:this.switchNft(r.address,r.symbol)}})})}switchNft(t,n){t&&this.router.navigate(this.baseTokenAddress?["app/swap/",t,this.baseTokenAddress]:["app/swap/",t]),this.collectionSymbol=n}switchToken(t,n,o){this.baseTokenAddress=t,this.tokenSymbol=n,this.baseTokenDecimals=o}ngOnDestroy(){this.subPair?.unsubscribe(),this.queryNftValueSub?.unsubscribe(),this.queryNftValueSub?.unsubscribe(),this.accountBalanceSub?.unsubscribe(),this.accountAllowanceSub?.unsubscribe(),this.accountNFTsSub?.unsubscribe(),this.suerLiquiditySub?.unsubscribe()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(l.Ye),e.Y36(g.gz),e.Y36(g.F0),e.Y36(O.uw),e.Y36(y.Q),e.Y36(w.O),e.Y36(P.J),e.Y36(A.B),e.Y36(Z.U))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-remove"]],decls:60,vars:23,consts:[[1,"card-wrapper"],[1,"card-header"],[1,"back-btn"],["mat-icon-button","",3,"click"],[1,"spacer"],[1,"card-title"],[1,"setting-btn"],[1,"divider"],[4,"ngTemplateOutlet"],[1,"switch-icon"],[1,"add-icon"],["mat-icon-button",""],[1,"result-wrapper"],[1,"input-label"],[1,"result-amount"],[1,"result-divider"],[1,"result-info"],[1,"result-info-value"],[1,"result-info-label"],["mat-button","","class","swap-btn",3,"disabled","click",4,"ngIf"],["liquidityInputTemplate",""],["nftInputTemplate",""],["tokenInputTemplate",""],["confirm",""],["mat-button","",1,"swap-btn",3,"disabled","click"],["color","warn","class","spin-icon querying-icon",4,"ngIf"],["color","warn",1,"spin-icon","querying-icon"],[1,"input-wrapper",2,"min-height","180px","grid-template-columns","1fr 1fr 3fr","padding","12px"],["nzBorderless","","nzPrecisionMode","cut","nzReadOnly","",1,"nft-input",2,"font-size","36px",3,"nzSize","nzMin","ngModel","nzPrecision","nzFormatter","ngModelChange"],["class","extra-selections",4,"ngIf"],[1,"nft-slider",3,"nzMarks","ngModel","nzStep","nzMax","ngModelChange"],[1,"extra-selections"],[1,"border-1"],[1,"border-2"],[1,"border-3"],[1,"border-4"],[1,"border-5"],[2,"grid-column-start","3","grid-column-end","4","grid-row-start","span 4"],[1,"extra-selection-item","selected-extra-selection-item",2,"align-self","center"],[1,"extra-selection-item",2,"align-self","start"],["nz-popover","","nzPopoverPlacement","right",1,"input-wrapper",3,"nzPopoverContent","nzPopoverVisible","nzPopoverTrigger"],["nzBorderless","","nzPrecisionMode","cut",1,"nft-input",3,"nzSize","nzMin","nzMax","ngModel","nzPrecision","ngModelChange"],[1,"nft-menu-btn"],["src","assets/imgs/logo1.png","alt","icon"],[1,"nft-slider",3,"ngModel","nzMin","nzMax","ngModelChange"],["nftList",""],[2,"font-size","24px"],[2,"color","rgb(255, 198, 230)"],[1,"result-divider",2,"margin","4px 0"],[1,"nft-list"],["class","nft-list-item",3,"ngClass","click",4,"ngFor","ngForOf","ngForTrackBy"],[1,"nft-list-item",3,"ngClass","click"],["class","selected-tokenId-icon","color","warn",4,"ngIf"],[3,"src","alt"],["color","warn",1,"selected-tokenId-icon"],[1,"input-wrapper",2,"cursor","no-drop"],["nzBorderless","",1,"nft-input",3,"nzSize","nzMin","ngModel","nzDisabled","ngModelChange"],[1,"price-nft-amount"],[1,"confirm-info",2,"background","rgb(255, 255, 255)"],[2,"min-height","24px","font-size","24px","font-weight","bolder","color","rgb(87, 87, 87)","grid-column-start","span 2"],[1,"result-divider",2,"grid-column-start","span 2","margin-left","0","margin-right","0"],[1,"confirm-info-label"],[1,"confirm-info-value"],["mat-button","",1,"confirm-btn",2,"grid-column-start","span 2","width","60%","justify-self","center","align-self","center","min-height","36px","font-size","14px","margin-top","12px",3,"disabled","click"],["color","warn","class","spin-icon querying-icon","style","top: 6px; left:12px;",4,"ngIf"],["color","warn",1,"spin-icon","querying-icon",2,"top","6px","left","12px"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),e.NdJ("click",function(){return n.goBack()}),e.TgZ(4,"mat-icon"),e._uU(5,"arrow_back"),e.qZA()()(),e._UZ(6,"div",4),e.TgZ(7,"div",5)(8,"span"),e._uU(9,"Remove Liquidity"),e.qZA()(),e._UZ(10,"div",4)(11,"div",6),e.qZA(),e._UZ(12,"div",7),e.YNc(13,z,1,0,"ng-container",8),e.TgZ(14,"div",9)(15,"mat-icon"),e._uU(16,"south"),e.qZA()(),e.YNc(17,q,1,0,"ng-container",8),e.TgZ(18,"div",10)(19,"button",11)(20,"mat-icon"),e._uU(21,"add"),e.qZA()()(),e.YNc(22,S,1,0,"ng-container",8),e.TgZ(23,"div",9)(24,"mat-icon"),e._uU(25,"keyboard_double_arrow_down"),e.qZA()(),e.TgZ(26,"div",12)(27,"span",13),e._uU(28,"Total"),e.qZA(),e.TgZ(29,"div",14),e._uU(30),e.ALo(31,"number"),e.qZA(),e._UZ(32,"div",15),e.TgZ(33,"div",16)(34,"div",17),e._uU(35),e.ALo(36,"number"),e.qZA(),e.TgZ(37,"div",18),e._uU(38,"Price"),e.qZA()(),e.TgZ(39,"div",16)(40,"div",17),e._uU(41),e.ALo(42,"number"),e.qZA(),e.TgZ(43,"div",18),e._uU(44,"Burn Lp Token"),e.qZA()(),e.TgZ(45,"div",16)(46,"div",17),e._uU(47),e.ALo(48,"number"),e.qZA(),e.TgZ(49,"div",18),e._uU(50,"Share of Pool"),e.qZA()()(),e.YNc(51,N,3,3,"button",19),e.qZA(),e.YNc(52,U,4,11,"ng-template",null,20,e.W1O),e.YNc(54,J,11,11,"ng-template",null,21,e.W1O),e.YNc(56,j,9,4,"ng-template",null,22,e.W1O),e.YNc(58,Y,26,18,"ng-template",null,23,e.W1O)),2&t){const o=e.MAs(53),r=e.MAs(55),u=e.MAs(57);e.xp6(13),e.Q6J("ngTemplateOutlet",o),e.xp6(4),e.Q6J("ngTemplateOutlet",r),e.xp6(5),e.Q6J("ngTemplateOutlet",u),e.xp6(8),e.HOy("",n.nftValue," ",n.collectionSymbol," + ",e.xi3(31,11,n.tokenValue,"1.2-2")," ",n.tokenSymbol,""),e.xp6(5),e.Oqu(e.xi3(36,14,n.price,"1.2-2")),e.xp6(6),e.Oqu(e.xi3(42,17,n.lpTokenInput,"1.2-2")),e.xp6(6),e.hij("",e.xi3(48,20,n.shareOutput,"1.2-2"),"%"),e.xp6(4),e.Q6J("ngIf",n.isQuerying||n.isNFTApproved&&n.isTokenApproved)}},dependencies:[l.mk,l.sg,l.O5,l.tP,h.Hw,b.lW,x._V,p.JJ,p.On,_.lU,v.jS,l.JJ],styles:[".card-wrapper[_ngcontent-%COMP%]{position:relative;max-width:420px;width:100%;border-radius:16px;border:1px solid rgba(94,104,135,.24);margin-top:1rem;margin-left:auto;margin-right:auto;margin-bottom:1rem;min-height:60vh;background:#fff;padding:12px}.card-header[_ngcontent-%COMP%]{width:100%;height:48px;display:flex;flex-direction:row;justify-content:center;align-items:center}.card-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:24px;font-weight:700}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.setting-btn[_ngcontent-%COMP%]{min-width:40px}.divider[_ngcontent-%COMP%]{height:1px;width:100%;margin:8px 0 12px;background:linear-gradient(90deg,#ff00d0 0%,#ffa600 100%)}.input-wrapper[_ngcontent-%COMP%]{position:relative;min-height:96px;width:100%;border-radius:16px;background:rgba(243,243,243,.3);border:2px solid rgba(94,104,135,0);transition:all .2s;display:grid;grid-template-columns:2fr 3fr 2fr;column-gap:12px;justify-items:center;align-items:center;box-sizing:border-box;padding:12px 12px 0}.input-wrapper[_ngcontent-%COMP%]:hover{border:2px solid rgba(228,178,201,.24)}.input-wrapper[_ngcontent-%COMP%]:hover   .input-label[_ngcontent-%COMP%]{border:2px solid rgba(228,178,201,.4)}[_nghost-%COMP%]     .ant-input-number-handler{border:none!important}[_nghost-%COMP%]     .ant-input-number-disabled{background:transparent}.nft-list[_ngcontent-%COMP%]{width:25vw;height:40vh}.nft-input[_ngcontent-%COMP%]{width:100%;font-size:28px;color:#7f7f7f;grid-column-start:span 2}.nft-menu-btn[_ngcontent-%COMP%]{width:100%;border-radius:16px;background:linear-gradient(45deg,#febae6 0%,#f9e1b4 100%);display:flex;justify-content:center;align-items:center;flex-direction:row;min-height:36px;padding:12px;cursor:pointer}.nft-menu-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:24px;height:24px}.nft-menu-btn[_ngcontent-%COMP%]:hover{background:linear-gradient(45deg,#f7d8fd 0%,#f9e6c2 100%)}.nft-slider[_ngcontent-%COMP%]{width:100%;margin:0 24px 0 48px;grid-column-start:span 2}[_nghost-%COMP%]     .ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open){border-color:#ffe6b8}[_nghost-%COMP%]     .ant-slider-track{background:linear-gradient(45deg,#f7d8fd 0%,#f9e6c2 100%)}[_nghost-%COMP%]     .ant-slider-handle{border:2px solid #ffa3da}.nft-balance[_ngcontent-%COMP%]{justify-self:end}.price-nft-amount[_ngcontent-%COMP%]{justify-self:start;padding:0 12px}.price-nft-amount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ff5fb7}.token-balance[_ngcontent-%COMP%]{grid-column-start:span 2;justify-self:end}.switch-icon[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center;margin:12px 0}.switch-icon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:linear-gradient(45deg,#f3bffc 0%,#ffe6b9 100%)}.switch-icon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff}.add-icon[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center;margin:-14px 0;box-sizing:border-box}.add-icon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:linear-gradient(45deg,#fbecff 0%,#fff8ea 100%);z-index:10;border:1px solid rgba(228,178,201,.24);box-sizing:border-box}.swap-info[_ngcontent-%COMP%]{width:100%;padding:12px;box-sizing:border-box;display:grid;row-gap:12px;grid-template-columns:2fr 3fr;font-size:18px}.swap-info-label[_ngcontent-%COMP%]{width:100%;justify-self:start;align-self:center}.swap-info-value[_ngcontent-%COMP%]{justify-self:end;align-self:center}.swap-btn[_ngcontent-%COMP%]{width:100%;min-height:72px;border-radius:16px;background:linear-gradient(45deg,#ffb6db 0%,#f9d4af 100%);color:#fff;font-size:36px;font-weight:bolder;margin:12px 0}.result-wrapper[_ngcontent-%COMP%]{position:relative;min-height:48px;width:100%;border-radius:16px;background:rgba(243,243,243,.3);border:2px solid rgba(94,104,135,0);transition:all .2s;display:grid;grid-template-columns:1fr 1fr 1fr;column-gap:12px;row-gap:12px;justify-items:center;align-items:center;box-sizing:border-box;padding:12px}.result-wrapper[_ngcontent-%COMP%]:hover{border:2px solid rgba(228,178,201,.24)}.result-wrapper[_ngcontent-%COMP%]:hover   .input-label[_ngcontent-%COMP%]{border:2px solid rgba(228,178,201,.4)}.input-label[_ngcontent-%COMP%]{box-sizing:border-box;position:absolute;left:12px;top:-18px;color:#ff5fb7;font-weight:bolder;font-size:18px;background:rgb(251,251,251);border-radius:16px;padding:0 12px;border:2px solid rgba(228,178,201,.24);transition:all .2s}.result-amount[_ngcontent-%COMP%]{grid-column-start:span 3;justify-self:center;align-self:center;min-height:48px;font-size:28px;font-weight:bolder;color:#575757}.result-info[_ngcontent-%COMP%]{color:#7f7f7f;display:flex;align-items:center;justify-content:center;flex-direction:column}.result-info[_ngcontent-%COMP%]   .result-info-value[_ngcontent-%COMP%]{color:#575757}.result-divider[_ngcontent-%COMP%]{grid-column-start:span 3;height:1px;width:100%;margin:0 24px;background:linear-gradient(90deg,#ffe9fb 0%,#fff3dc 100%)}.extra-selections[_ngcontent-%COMP%]{grid-column-start:span 1;grid-row-start:span 2;width:100%;height:100%;display:grid;grid-template-columns:12px 12px auto;grid-template-rows:repeat(12,1fr);margin-top:0}.border-1[_ngcontent-%COMP%], .border-2[_ngcontent-%COMP%], .border-3[_ngcontent-%COMP%], .border-4[_ngcontent-%COMP%], .border-5[_ngcontent-%COMP%]{width:100%;height:100%;box-sizing:border-box}.border-1[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:2;grid-row-start:1;grid-row-end:10;border-bottom:4px solid;border-image:linear-gradient(90deg,#f9e6c2 0%,#F9DCD6 100%) 1}.border-2[_ngcontent-%COMP%]{grid-column-start:2;grid-column-end:3;grid-row-start:1;grid-row-end:4}.border-3[_ngcontent-%COMP%]{grid-column-start:2;grid-column-end:3;grid-row-start:4;grid-row-end:7;border-bottom:4px solid;border-image:linear-gradient(90deg,#F9DCD6 0%,#ffbae6 100%) 1}.border-4[_ngcontent-%COMP%]{grid-column-start:2;grid-column-end:3;grid-row-start:7;grid-row-end:10;border-left:4px solid;border-image:linear-gradient(90deg,#F9DCD6 0%,#ffbae6 100%) 1}.border-5[_ngcontent-%COMP%]{grid-column-start:2;grid-column-end:3;grid-row-start:10;grid-row-end:13;border-top:4px solid;border-image:linear-gradient(90deg,#F9DCD6 0%,#ffbae6 100%) 1}.extra-selection-item[_ngcontent-%COMP%]{box-sizing:border-box;margin-left:-1px;grid-column-start:3;grid-column-end:4;grid-row-start:span 4;justify-self:center;text-align:center;width:100%;border-radius:16px;border:2px solid #ffe3f5;background:linear-gradient(45deg,#ffe3f5 0%,#fff0e1 100%);font-size:14px;font-weight:700;cursor:pointer;transition:all .2s;animation:fadeIn 1s ease 0s 1}.extra-selection-item[_ngcontent-%COMP%]:hover{border:2px solid #ff58c2}.selected-extra-selection-item[_ngcontent-%COMP%]{border:2px solid #fda2f7;background:linear-gradient(45deg,#fda2f7 0%,#fccd9f 100%)}.nft-list[_ngcontent-%COMP%]{width:25vw;max-height:50vh;overflow-x:hidden;overflow-y:auto;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;row-gap:6px;column-gap:6px;padding:12px;margin:0 -12px}.nft-list-item[_ngcontent-%COMP%]{width:100%;height:15vh;display:flex;align-items:center;justify-content:center;flex-direction:column;border:2px solid;border-image:linear-gradient(135deg,#fce6be 0%,#f3c4ff 100%) 1;border-radius:16px;overflow:hidden;box-sizing:border-box;position:relative;cursor:pointer;transition:all .2s}.nft-list-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:12vh;margin-bottom:12px}.nft-list-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;height:32px;text-align:center;overflow:hidden;text-overflow:ellipsis}.nft-list-item[_ngcontent-%COMP%]:hover{transform:scale(1.1);border-image:linear-gradient(135deg,#ffcb82 0%,#fd87ff 100%) 1;background:#fff;z-index:5}.selected-tokenId[_ngcontent-%COMP%]{border-image:linear-gradient(135deg,#feb856 0%,#fc64ff 100%) 1}.selected-tokenId-icon[_ngcontent-%COMP%]{position:absolute;top:4px;right:4px;background:#fff;border-radius:50%}.spin-icon[_ngcontent-%COMP%]{transform:rotate(45deg);animation:rotate 1.2s infinite linear}.confirm-info[_ngcontent-%COMP%]{margin:24px 0;width:100%;padding:12px;box-sizing:border-box;display:grid;grid-template-columns:2fr 3fr;font-size:18px;border-radius:16px;background:rgba(243,243,243,.3);border:2px solid rgba(94,104,135,0);transition:all .2s}.confirm-info[_ngcontent-%COMP%]:hover{border:2px solid rgba(228,178,201,.24)}.confirm-info-label[_ngcontent-%COMP%]{width:100%;justify-self:start;align-self:center}.confirm-info-value[_ngcontent-%COMP%]{justify-self:end;align-self:center}.confirm-btn[_ngcontent-%COMP%]{position:relative;width:100%;min-height:72px;border-radius:16px;background:linear-gradient(45deg,#ffb6db 0%,#fadba2 100%);color:#fff;font-size:36px;font-weight:bolder;margin-bottom:12px}.querying-icon[_ngcontent-%COMP%]{position:absolute;left:24px;top:24px}@keyframes rotate{to{transform:rotate(405deg)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}"]}),i})()}];let $=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.Bz.forChild(Q),g.Bz]}),i})(),H=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[l.ez,$,h.Ps,b.ot,x.Zf,p.u5,_.$6,v.N3]}),i})()}}]);