"use strict";(self.webpackChunkintswap_frontend=self.webpackChunkintswap_frontend||[]).push([[3768],{3768:(Fn,T,l)=>{l.r(T),l.d(T,{LpLaunchPoolModule:()=>In});var f=l(88692),v=l(7976),a=l(2024),m=l(92673),V=l(54121),A=l(61528),q=l(42147),J=l(83151),p=l(27969),F=l(15696),Y=l(91786),Q=l(98168),j=l(66393),Z=l(33568),M=l(84945),b=l(57445),R=l(62686),B=l(41781),x=l(91095),n=l(64537),W=l(19376),H=l(96195),K=l(39869),G=l(94602),D=l(65707),E=l(88696),X=l(3755),L=l(9638),y=l(83331),O=l(93706),w=l(20092),I=l(15372),S=l(53863),k=l(13288);function nn(e,r){if(1&e&&(n.TgZ(0,"div",27)(1,"div",14),n._uU(2,"Free mint amount:"),n.qZA(),n.TgZ(3,"div",28),n._uU(4),n.qZA(),n.TgZ(5,"div",14),n._uU(6,"Remain reward amount:"),n.qZA(),n.TgZ(7,"div",28),n._uU(8),n.qZA(),n.TgZ(9,"div",14),n._uU(10,"NFT Price:"),n.qZA(),n.TgZ(11,"div",28),n._uU(12),n.ALo(13,"number"),n.qZA(),n.TgZ(14,"div",14),n._uU(15,"Start Time:"),n.qZA(),n.TgZ(16,"div",28),n._uU(17),n.ALo(18,"date"),n.qZA()()),2&e){const t=r.ngIf,o=n.oxw().ngIf,i=n.oxw();n.xp6(4),n.hij(" ",null==t.incentiveStrategyInfo?null:t.incentiveStrategyInfo.totalRewardAmount," "),n.xp6(4),n.hij("",null==t.incentiveStrategyInfo?null:t.incentiveStrategyInfo.remainAmount," "),n.xp6(4),n.AsE("",n.xi3(13,5,i.formatTokenValue((null==o.pool||null==o.pool.pair?null:o.pool.pair.price)||"0","18"),"1.2-8")," ",null==o.pool||null==o.pool.pair||null==o.pool.pair.token?null:o.pool.pair.token.symbol,""),n.xp6(5),n.hij(" ",null!=t.incentiveStrategyInfo&&t.incentiveStrategyInfo.startTime?n.xi3(18,8,1e3*(null==t.incentiveStrategyInfo?null:t.incentiveStrategyInfo.startTime),"YYYY/MM/dd HH:mm:ss"):"- -"," ")}}function tn(e,r){if(1&e&&(n.ynx(0),n._UZ(1,"img",33),n.BQk()),2&e){const t=r.ngIf,o=n.oxw(2).$implicit,i=n.oxw(3);n.xp6(1),n.Q6J("lazyLoad",i.buildUrl(t))("defaultImage","/assets/imgs/mockNft.png")("alt",o.title)}}const on=function(e,r){return["/","app","nft",e,r]};function en(e,r){if(1&e&&(n.TgZ(0,"div",31),n.YNc(1,tn,2,3,"ng-container",8),n.ALo(2,"async"),n.TgZ(3,"div",32),n._uU(4),n.qZA()()),2&e){const t=n.oxw().$implicit,o=n.oxw(2).ngIf,i=n.oxw();n.Q6J("routerLink",n.WLB(5,on,null==o.pool||null==o.pool.pair?null:o.pool.pair.address,i.hexToString(t.tokenId))),n.xp6(1),n.Q6J("ngIf",n.lcZ(2,3,t.url$)),n.xp6(3),n.Oqu("#"+i.hexToString(t.tokenId))}}function rn(e,r){1&e&&n.YNc(0,en,5,8,"ng-template",30)}function ln(e,r){if(1&e&&(n.ynx(0),n.YNc(1,rn,1,0,null,29),n.BQk()),2&e){const t=r.ngIf,o=n.oxw(2);n.xp6(1),n.Q6J("ngForOf",t.ownedNfts)("ngForTrackBy",o.trackByNftItems)}}function an(e,r){1&e&&(n.TgZ(0,"mat-icon",36),n._uU(1," autorenew "),n.qZA())}function sn(e,r){if(1&e){const t=n.EpF();n.TgZ(0,"div",22),n.NdJ("click",function(){n.CHM(t);const i=n.oxw().ngIf,s=n.oxw(2);return n.KtG(s.onStake(i))}),n.YNc(1,an,2,0,"mat-icon",35),n.TgZ(2,"span"),n._uU(3,"Stake"),n.qZA()()}if(2&e){const t=n.oxw(3);n.xp6(1),n.Q6J("ngIf",t.isStaking)}}function cn(e,r){1&e&&(n.TgZ(0,"mat-icon",36),n._uU(1," autorenew "),n.qZA())}function dn(e,r){if(1&e){const t=n.EpF();n.TgZ(0,"div",22),n.NdJ("click",function(){n.CHM(t);const i=n.oxw(3);return n.KtG(i.onApprove())}),n.YNc(1,cn,2,0,"mat-icon",23),n.TgZ(2,"span"),n._uU(3,"Approve"),n.qZA()()}if(2&e){const t=n.oxw(3);n.xp6(1),n.Q6J("ngIf",t.isApproving)}}function pn(e,r){if(1&e){const t=n.EpF();n.TgZ(0,"div",18)(1,"span",19),n._uU(2,"Stake"),n.qZA(),n.TgZ(3,"nz-input-number",20),n.NdJ("ngModelChange",function(i){n.CHM(t);const s=n.oxw(2);return n.KtG(s.stakeInputValue=i)}),n.qZA(),n.TgZ(4,"button",21),n.NdJ("click",function(){n.CHM(t);const i=n.oxw(2);return n.KtG(i.maxStakeValue())}),n._uU(5," MAX"),n.qZA(),n.YNc(6,sn,4,1,"div",34),n.YNc(7,dn,4,1,"div",34),n.TgZ(8,"div",24),n._uU(9),n.qZA(),n._UZ(10,"div"),n.TgZ(11,"div",25),n._uU(12),n.qZA()()}if(2&e){const t=r.ngIf,o=n.oxw(2);n.xp6(3),n.Q6J("nzSize","large")("nzMin",.01)("ngModel",o.stakeInputValue),n.xp6(3),n.Q6J("ngIf",o.isApproved),n.xp6(1),n.Q6J("ngIf",!o.isApproved),n.xp6(2),n.Oqu(o.stakeInputErrorMsg),n.xp6(3),n.hij("Balance: ",o.formatTokenValue(t||"0","18")," ")}}function un(e,r){1&e&&(n.TgZ(0,"mat-icon",36),n._uU(1," autorenew "),n.qZA())}function gn(e,r){1&e&&(n.ynx(0),n._UZ(1,"div",56),n.TgZ(2,"mat-icon",57),n._uU(3,"check_circle "),n.qZA(),n.BQk())}function fn(e,r){if(1&e&&(n.ynx(0),n._UZ(1,"img",33),n.BQk()),2&e){const t=r.ngIf,o=n.oxw().$implicit,i=n.oxw(6);n.xp6(1),n.Q6J("lazyLoad",i.buildUrl(t))("defaultImage","/assets/imgs/mockNft.png")("alt",o.title)}}const mn=function(e){return{"selected-tokenId":e}};function _n(e,r){if(1&e){const t=n.EpF();n.TgZ(0,"div",55),n.NdJ("click",function(){const s=n.CHM(t).$implicit,u=n.oxw(3).ngIf,_=n.oxw().ngIf,h=n.oxw(2);return n.KtG(h.addOrRemoveTokenId(s.tokenId,_.claimableAmount||0,u.ownedNfts))}),n.YNc(1,gn,4,0,"ng-container",8),n.YNc(2,fn,2,3,"ng-container",8),n.ALo(3,"async"),n.TgZ(4,"div"),n._uU(5),n.qZA()()}if(2&e){const t=r.$implicit,o=n.oxw(6);n.Q6J("ngClass",n.VKq(6,mn,o.isSelectedTokenId(t.tokenId))),n.xp6(1),n.Q6J("ngIf",o.isSelectedTokenId(t.tokenId)),n.xp6(1),n.Q6J("ngIf",n.lcZ(3,4,t.url$)),n.xp6(3),n.Oqu("#"+o.hexToString(t.tokenId))}}function hn(e,r){if(1&e&&(n.ynx(0),n.YNc(1,_n,6,8,"div",54),n.BQk()),2&e){const t=r.$implicit;n.xp6(1),n.Q6J("ngForOf",t)}}function vn(e,r){if(1&e&&(n.TgZ(0,"div",48)(1,"span",49),n._uU(2,"selected: "),n.TgZ(3,"span",50),n._uU(4),n.qZA(),n._uU(5),n.qZA(),n._UZ(6,"div",51),n.TgZ(7,"div",52),n.YNc(8,hn,2,1,"ng-container",53),n.qZA()()),2&e){const t=n.oxw().ngIf,o=n.oxw().ngIf,i=n.oxw(2);n.xp6(4),n.Oqu(i.selectedTokenIds.length),n.xp6(1),n.hij(" / ",o.claimableAmount||0,""),n.xp6(3),n.Q6J("ngForOf",t.nftListForVirtualScroll)}}function xn(e,r){if(1&e){const t=n.EpF();n.ynx(0),n.TgZ(1,"nz-input-number",42),n.NdJ("ngModelChange",function(i){n.CHM(t);const s=n.oxw(3);return n.KtG(s.nftValue=i)})("ngModelChange",function(i){const u=n.CHM(t).ngIf,_=n.oxw().ngIf,h=n.oxw(2);return n.KtG(h.updateTokenValue(i,_.claimableAmount||0,u.ownedNfts))}),n.qZA(),n.TgZ(2,"div",22),n.NdJ("click",function(){n.CHM(t);const i=n.MAs(11),s=n.oxw().ngIf,u=n.oxw(2);return n.KtG(u.openNftList(i,s.claimableAmount||0))}),n._UZ(3,"img",43)(4,"div",44),n.TgZ(5,"span"),n._uU(6),n.qZA(),n._UZ(7,"div",44),n.qZA(),n.TgZ(8,"nz-slider",45),n.NdJ("ngModelChange",function(i){n.CHM(t);const s=n.oxw(3);return n.KtG(s.nftValue=i)})("ngModelChange",function(i){const u=n.CHM(t).ngIf,_=n.oxw().ngIf,h=n.oxw(2);return n.KtG(h.updateTokenValue(i,_.claimableAmount||0,u.ownedNfts))}),n.qZA(),n._UZ(9,"div",46),n.YNc(10,vn,9,3,"ng-template",null,47,n.W1O),n.BQk()}if(2&e){const t=n.oxw().ngIf,o=n.oxw().ngIf,i=n.oxw();n.xp6(1),n.Q6J("nzSize","large")("nzMin",0)("nzMax",t.claimableAmount||0)("ngModel",i.nftValue)("nzPrecision",0),n.xp6(2),n.Q6J("src",i.getTokenIcon((null==o.pool||null==o.pool.pair||null==o.pool.pair.collection?null:o.pool.pair.collection.address)||""),n.LSH),n.xp6(3),n.hij("Select ",(null==i.pair||null==i.pair.collection?null:i.pair.collection.symbol)||"NFT",""),n.xp6(2),n.Q6J("ngModel",i.nftValue)("nzMin",0)("nzMax",t.claimableAmount||0)}}function bn(e,r){1&e&&(n.TgZ(0,"mat-icon",58),n._uU(1," autorenew "),n.qZA())}function wn(e,r){if(1&e){const t=n.EpF();n.TgZ(0,"div",37)(1,"h1",38),n._uU(2,"Reward Info"),n.qZA(),n.TgZ(3,"div",14),n._uU(4,"Total Reward Rate:"),n.qZA(),n.TgZ(5,"div",15),n._uU(6),n.ALo(7,"async"),n.qZA(),n.TgZ(8,"div",14),n._uU(9,"Your Staked Proportion:"),n.qZA(),n.TgZ(10,"div",15),n._uU(11),n.ALo(12,"number"),n.qZA(),n.TgZ(13,"div",14),n._uU(14,"Your Claimable NFT Amount:"),n.qZA(),n.TgZ(15,"div",15),n._uU(16),n.qZA(),n.TgZ(17,"div",14),n._uU(18,"Next NFT Rewards Estimated Countdown:"),n.qZA(),n.TgZ(19,"div",15),n._uU(20),n.ALo(21,"async"),n.qZA(),n.TgZ(22,"div",39),n.YNc(23,xn,12,10,"ng-container",8),n.ALo(24,"async"),n.qZA(),n.TgZ(25,"div",40),n.NdJ("click",function(){n.CHM(t);const i=n.oxw(2);return n.KtG(i.claimAll())}),n.YNc(26,bn,2,0,"mat-icon",41),n._uU(27,"Claim "),n.qZA()()}if(2&e){const t=r.ngIf,o=n.oxw().ngIf,i=n.oxw();n.xp6(6),n.AsE("",n.lcZ(7,7,null==o.pool?null:o.pool.ratePerDay$)," ",(null==o.pool||null==o.pool.pair||null==o.pool.pair.collection?null:o.pool.pair.collection.symbol)||"NFT","/Day "),n.xp6(5),n.hij("",n.xi3(12,9,(null==o.pool?null:o.pool.proportion)||0,"1.2-2")," %"),n.xp6(5),n.Oqu(t.claimableAmount||0),n.xp6(4),n.Oqu(n.lcZ(21,12,null==o.pool?null:o.pool.countdown$)),n.xp6(3),n.Q6J("ngIf",n.lcZ(24,14,null==o.pool?null:o.pool.nftList$)),n.xp6(3),n.Q6J("ngIf",i.isClaiming)}}const kn=function(e){return{incentiveStrategyInfo:e}},Cn=function(e,r){return["/","app","add",e,r]},Pn=function(e){return{claimableAmount:e}};function Tn(e,r){if(1&e){const t=n.EpF();n.TgZ(0,"div",2)(1,"button",3),n.NdJ("click",function(){n.CHM(t);const i=n.oxw();return n.KtG(i.goBack())}),n.TgZ(2,"mat-icon"),n._uU(3,"arrow_back"),n.qZA()(),n.TgZ(4,"div",4)(5,"h1",5),n._uU(6),n.qZA(),n.YNc(7,nn,19,11,"div",6),n.ALo(8,"async"),n.TgZ(9,"h1"),n._uU(10,"Total Reward NFT"),n.qZA(),n.TgZ(11,"swiper",7),n.YNc(12,ln,2,2,"ng-container",8),n.ALo(13,"async"),n.qZA()(),n.TgZ(14,"div",9)(15,"div",10)(16,"h1"),n._uU(17),n.qZA(),n.TgZ(18,"p"),n._uU(19,"Stake LP Token to Earn Rewards"),n.qZA(),n.TgZ(20,"a",11),n._uU(21,">> Get Lp Token"),n.qZA()(),n._UZ(22,"div",12),n.TgZ(23,"div",13)(24,"div",14),n._uU(25,"Total Staked:"),n.qZA(),n.TgZ(26,"div",15),n._uU(27),n.ALo(28,"number"),n.qZA(),n.TgZ(29,"div",14),n._uU(30,"Staked Ratio"),n.qZA(),n.TgZ(31,"div",15),n._uU(32),n.ALo(33,"number"),n.qZA(),n.TgZ(34,"div",14),n._uU(35,"TVL:"),n.qZA(),n.TgZ(36,"div",15),n._uU(37),n.ALo(38,"async"),n.qZA(),n._UZ(39,"div",14)(40,"div",15),n.qZA(),n.TgZ(41,"div",16),n.YNc(42,pn,13,7,"div",17),n.ALo(43,"async"),n.TgZ(44,"div",18)(45,"span",19),n._uU(46,"Withdraw"),n.qZA(),n.TgZ(47,"nz-input-number",20),n.NdJ("ngModelChange",function(i){n.CHM(t);const s=n.oxw();return n.KtG(s.withdrawInputValue=i)}),n.qZA(),n.TgZ(48,"button",21),n.NdJ("click",function(){n.CHM(t);const i=n.oxw();return n.KtG(i.maxWithdrawValue())}),n._uU(49," MAX"),n.qZA(),n.TgZ(50,"div",22),n.NdJ("click",function(){const s=n.CHM(t).ngIf,u=n.oxw();return n.KtG(u.onWithdraw((null==s.pool?null:s.pool.userStakedAmount)||"0"))}),n.YNc(51,un,2,0,"mat-icon",23),n.TgZ(52,"span"),n._uU(53,"Withdraw"),n.qZA()(),n.TgZ(54,"div",24),n._uU(55),n.qZA(),n._UZ(56,"div"),n.TgZ(57,"div",25),n._uU(58),n.qZA()()()(),n.YNc(59,wn,28,16,"div",26),n.ALo(60,"async"),n.qZA()}if(2&e){const t=r.ngIf,o=n.oxw();n.xp6(6),n.hij(" ",(null==t.pool||null==t.pool.pair||null==t.pool.pair.collection?null:t.pool.pair.collection.name)||"NFT"," LaunchPool "),n.xp6(1),n.Q6J("ngIf",n.VKq(41,kn,n.lcZ(8,25,null==t.pool?null:t.pool.incentiveStrategyInfo$))),n.xp6(4),n.Q6J("loop",!0)("loopFillGroupWithBlank",!0)("allowTouchMove",!0)("speed",500)("slidesPerView",8)("slidesPerGroup",8)("spaceBetween",5)("navigation",!0),n.xp6(1),n.Q6J("ngIf",n.lcZ(13,27,null==t.pool?null:t.pool.nftList$)),n.xp6(5),n.AsE("",null==t.pool||null==t.pool.pair||null==t.pool.pair.collection?null:t.pool.pair.collection.symbol,"-",null==t.pool||null==t.pool.pair||null==t.pool.pair.token?null:t.pool.pair.token.symbol,""),n.xp6(3),n.Q6J("routerLink",n.WLB(43,Cn,null==t.pool||null==t.pool.pair||null==t.pool.pair.collection?null:t.pool.pair.collection.address,null==t.pool||null==t.pool.pair||null==t.pool.pair.token?null:t.pool.pair.token.address)),n.xp6(7),n.hij(" ",n.xi3(28,29,o.formatTokenValue((null==t.pool||null==t.pool.pair||null==t.pool.pair.lpStakingPool?null:t.pool.pair.lpStakingPool.totalStakingAmount)||"0","18"),"1.2-4")," Lp-Token"),n.xp6(5),n.hij("",n.xi3(33,32,null==t.pool?null:t.pool.stakedRatio,"1.2-4")," %"),n.xp6(5),n.hij("$ ",n.lcZ(38,35,null==t.pool?null:t.pool.tvl$),""),n.xp6(5),n.Q6J("ngIf",n.lcZ(43,37,o.userLiquidity$)),n.xp6(5),n.Q6J("nzSize","large")("nzMin",.01)("ngModel",o.withdrawInputValue),n.xp6(4),n.Q6J("ngIf",o.isWithdrawing),n.xp6(4),n.Oqu(o.withdrawInputErrorMsg),n.xp6(3),n.hij("Staked: ",o.formatTokenValue((null==t.pool?null:t.pool.userStakedAmount)||"0","18")," "),n.xp6(1),n.Q6J("ngIf",n.VKq(46,Pn,n.lcZ(60,39,null==t.pool?null:t.pool.claimableAmount$)))}}function An(e,r){1&e&&(n.TgZ(0,"div",59)(1,"mat-icon",60),n._uU(2,"autorenew"),n.qZA()())}const Zn=function(e){return{pool:e}};x.ZP.use([x.W_,x.oM,x.eZ]);const Mn=[{path:"",component:(()=>{class e{constructor(t,o,i,s,u,_,h,Sn,Un){this.location=t,this.route=o,this.cacheService=i,this.web3Service=s,this.graphqlService=u,this.accountService=_,this.chainInfoService=h,this.matDialog=Sn,this.httpService=Un,this.userLiquidity$=new V.X("0"),this.stakeInputValue="0",this.stakeInputErrorMsg="",this.withdrawInputValue="0",this.withdrawInputErrorMsg="",this.isApproved=!1,this.isStaking=!1,this.isWithdrawing=!1,this.isClaiming=!1,this.isApproving=!1,this.nftValue="0",this.selectedTokenIds=[],this.pool$=this.route.paramMap.pipe((0,A.w)(c=>(this.pairAddress=c.get("pairAddress")||void 0,this.cacheService.getPairByAddress(this.pairAddress)))).pipe((0,q.x)((c,g)=>c?.address==g?.address&&c?.lpStakingPool.totalStakingAmount==g?.lpStakingPool.totalStakingAmount&&c?.lpStakingPool.userStaking?.length==g?.lpStakingPool.userStaking?.length&&!!g?.lpStakingPool.userStaking&&g?.lpStakingPool.userStaking.length>0&&c?.lpStakingPool.userStaking[0].amount==g?.lpStakingPool.userStaking[0].amount),(0,J.b)(1e3),(0,p.U)(c=>{if(!c)return null;this.pair=c;const g=a.O$.from(c.lpStakingPool.totalStakingAmount).mul(a.O$.from("10000")).div(a.O$.from(c.liquidity)).toNumber()/100,U=this.cacheService.ethPrice$.pipe((0,p.U)(d=>a.O$.from(d).mul(a.O$.from(c.tvl)).mul(a.O$.from(parseInt(100*g+""))).div(a.O$.from("10").pow(30)).toString())),C=!!c.lpStakingPool.userStaking&&c.lpStakingPool.userStaking.length>0&&a.O$.from(c.lpStakingPool.userStaking[0].amount).gt(a.O$.from("0")),$=C?a.O$.from(c.lpStakingPool.userStaking[0].amount).div(a.O$.from("10")).mul(a.O$.from("10")).toString():"0",$n=a.O$.from(c.lpStakingPool.totalStakingAmount).isZero()?0:a.O$.from($).mul(a.O$.from("10000")).div(a.O$.from(c.lpStakingPool.totalStakingAmount)).toNumber()/100,P=this.fetchStrategyIncentive(c),z=this.fetchClaimableReward(c),zn=z.pipe((0,p.U)(d=>Math.floor(Number(d)))),Nn=z.pipe((0,p.U)(d=>Number(d)-Math.floor(Number(d))));return{pair:c,stakedRatio:g,tvl$:U,isUserStaked:C,userStakedAmount:$,userStaked$:U.pipe((0,p.U)(d=>C?a.O$.from(c.lpStakingPool.userStaking[0].amount).mul(a.O$.from(d)).div(a.O$.from(c.lpStakingPool.totalStakingAmount)).toString():"0")),proportion:$n,ratePerDay$:P.pipe((0,p.U)(d=>(0,m.formatUnits)(a.O$.from(d.rewardRate).mul(a.O$.from("86400")),"18"))),incentiveStrategyInfo$:P,claimableAmount$:zn,countdown$:(0,F.a)([(0,Y.H)(0,1e3),Nn,P]).pipe((0,p.U)(([d,Vn,qn])=>{const N=a.O$.from(qn.rewardRate),Jn=N.isZero()?0:a.O$.from((0,m.parseUnits)(1-Vn+"","18")).div(N).toNumber();return(0,B.lR)(1e3*(Jn-d))})),nftList$:this.httpService.fetchNFTsOfCollectionByOwnerAddress(this.chainInfoService.getChainConfig().contractAddressMap[c.factory].IntswapV1Launchpool,c.collection.address).pipe((0,p.U)(d=>({...d,nftListForVirtualScroll:this.buildVirtualScrollNftList(d.ownedNfts,5)})))}}),(0,Q.b)(c=>(c&&this.fetchUserLiquidity(c.pair),c)))}fetchStrategyIncentive(t){return(0,j.D)(this.web3Service.invokeContract(`IntswapV1Launchpool::${t.factory}`,"incentives",[t.address])).pipe((0,p.U)(o=>({totalRewardAmount:o[4],remainAmount:o[5],rewardRate:o[7],startTime:o[3]})),(0,Z.K)(()=>(0,M.of)({totalRewardAmount:"0",remainAmount:"0",rewardRate:"0",startTime:0})))}openNftList(t,o){0!=o&&this.matDialog.open(t).afterClosed().subscribe(s=>{})}buildVirtualScrollNftList(t,o){let i,s=[];for(i=0;i<t.length;i+=o)s.push(t.slice(i,i+o));return s}ngOnInit(){}parseFloat(t){return parseFloat(t)}sumApy(t){let o=0;for(let i=0;i<t.length;i++)o+=t[i].apy;return o}fetchClaimableReward(t){return this.accountService.account$.pipe((0,A.w)(o=>o?this.web3Service.invokeContract(`IntswapV1Launchpool::${t.factory}`,"earned",[t.address,o]).then(i=>this.formatTokenValue(i[1],"18")):"0"),(0,Z.K)(()=>(0,M.of)("0")))}goBack(){this.location.back()}formatTokenValue(t,o){return(0,m.formatUnits)(t,o)}fetchUserLiquidity(t){this.subUser=this.accountService.account$.subscribe(o=>{o&&this.graphqlService.fetchUserLiquidity(o,t.address).then(({data:i})=>{const s=i.liquidityInPair?i.liquidityInPair.liquidity:"0";this.userLiquidity$.next(a.O$.from(s).div(a.O$.from("10")).mul(a.O$.from("10")).toString()),this.fetchUserAllowance(t,s)}),this.userLiquidity$.next("0")})}fetchUserAllowance(t,o){(0,b.z)(this.accountService.account$).then(i=>{i?(this.isApproving=!0,this.web3Service.invokeContract("ERC20","allowance",[i,this.web3Service.ContractAddressMap[t.factory].IntswapV1StakingCenter],t.address).then(s=>this.isApproved=a.O$.from(s[0]).gte(a.O$.from(o))).finally(()=>this.isApproving=!1)):this.isApproved=!1})}onStake(t){this.isStaking||0==parseFloat(this.stakeInputValue)||a.O$.from(t).lt((0,m.parseUnits)(this.stakeInputValue+"","18"))||this.pairAddress&&this.pair&&(this.isStaking=!0,this.web3Service.invokeContract(`IntswapV1StakingCenter::${this.pair.factory}`,"stake",[this.pairAddress,(0,m.parseUnits)(this.stakeInputValue+"","18").toString()]).then(o=>{this.stakeInputValue="0"}).finally(()=>this.isStaking=!1))}onWithdraw(t){this.isWithdrawing||0==parseFloat(this.withdrawInputValue)||a.O$.from(t).lt((0,m.parseUnits)(this.withdrawInputValue+"","18"))||this.pairAddress&&this.pair&&(this.isWithdrawing=!0,this.web3Service.invokeContract(`IntswapV1StakingCenter::${this.pair.factory}`,"withdraw",[this.pairAddress,(0,m.parseUnits)(this.withdrawInputValue+"","18").toString()]).then(o=>{this.withdrawInputValue="0"}).finally(()=>this.isWithdrawing=!1))}claimAll(){this.isClaiming||!this.pair||0==this.selectedTokenIds.length||(this.isClaiming=!0,this.web3Service.invokeContract(`IntswapV1Launchpool::${this.pair.factory}`,"getRewardByOwner",[this.pair.address,this.selectedTokenIds]).then(t=>{}).finally(()=>this.isClaiming=!1))}onApprove(){this.isApproving||(this.isApproving=!0,this.pairAddress&&this.pair&&this.web3Service.invokeContract("ERC20","approve",[this.web3Service.ContractAddressMap[this.pair.factory].IntswapV1StakingCenter,R.fV],this.pairAddress).then(t=>{this.isApproved=!0}).finally(()=>this.isApproving=!1))}maxStakeValue(){(0,b.z)(this.userLiquidity$.pipe((0,p.U)(t=>this.formatTokenValue(t||"0","18")))).then(t=>this.stakeInputValue=t)}maxWithdrawValue(){(0,b.z)(this.pool$.pipe((0,p.U)(t=>this.formatTokenValue(t?.userStakedAmount||"0","18")))).then(t=>this.withdrawInputValue=t)}ngOnDestroy(){this.subUser?.unsubscribe()}trackByNftItems(t,o){return this.pair?.collection.address+""+o.tokenId}updateTokenValue(t,o,i){t>o||(t>=0&&this.updateSelectedTokenIds(t,i),0==t&&(this.nftValue="0"))}updateSelectedTokenIds(t,o){t!=this.selectedTokenIds.length&&(this.selectedTokenIds=o.slice(0,t).map(i=>i.tokenId))}isSelectedTokenId(t){return this.selectedTokenIds.includes(t)}addOrRemoveTokenId(t,o,i){this.isSelectedTokenId(t)?this.selectedTokenIds.splice(this.selectedTokenIds.indexOf(t),1):this.selectedTokenIds.length<o&&this.selectedTokenIds.push(t),this.nftValue=this.selectedTokenIds.length+"",this.updateTokenValue(this.selectedTokenIds.length,o,i)}getTokenIcon(t){return this.cacheService.getTokenIcon(t)}buildUrl(t){return"string"==typeof t?t.includes("data:")?t:"https://ik.imagekit.io/usamieru/tr:w-300,q-20/"+t:"/assets/imgs/mockNft.png"}hexToString(t){return a.O$.from(t).toString()}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(f.Ye),n.Y36(v.gz),n.Y36(W.Q),n.Y36(H.U),n.Y36(K.J),n.Y36(G.B),n.Y36(D.Z),n.Y36(E.uw),n.Y36(X.O))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-lp-launch-pool"]],decls:4,vars:5,consts:[["class","pool-wrapper",4,"ngIf"],["loading",""],[1,"pool-wrapper"],["mat-icon-button","",2,"margin-left","-12px","grid-column-start","span 2",3,"click"],[1,"total-reward-nft",2,"grid-column-start","span 2"],[2,"font-weight","bold","font-size","2rem"],["style","display: grid; grid-template-columns: 1fr 1fr 1fr 1fr;font-size: 1rem;column-gap: 3vw;row-gap: 1rem; width: 65%;padding: 1rem 0;",4,"ngIf"],["direction","horizontal",2,"min-height","15vh",3,"loop","loopFillGroupWithBlank","allowTouchMove","speed","slidesPerView","slidesPerGroup","spaceBetween","navigation"],[4,"ngIf"],[1,"pool-card"],[1,"title"],[3,"routerLink"],[1,"divider"],[1,"info"],[1,"label"],[1,"value"],[1,"option"],["class","input-wrapper","style","grid-template-columns: 3fr 1fr 2fr;",4,"ngIf"],[1,"input-wrapper",2,"grid-template-columns","3fr 1fr 2fr"],[1,"input-label"],["nzBorderless","",1,"nft-input",2,"grid-column-start","span 1",3,"nzSize","nzMin","ngModel","ngModelChange"],["mat-button","","color","primary",2,"font-size","1.2rem","font-weight","bold",3,"click"],[1,"nft-menu-btn",3,"click"],["color","warn","class","spin-icon querying-icon","style","left:12px;",4,"ngIf"],[1,"price-nft-amount"],[1,"token-balance"],["class","reward-card",4,"ngIf"],[2,"display","grid","grid-template-columns","1fr 1fr 1fr 1fr","font-size","1rem","column-gap","3vw","row-gap","1rem","width","65%","padding","1rem 0"],[1,"value",2,"justify-self","end"],[4,"ngFor","ngForOf","ngForTrackBy"],["swiperSlide",""],[1,"nft-in-pool-item",3,"routerLink"],[2,"color","#000"],[3,"lazyLoad","defaultImage","alt"],["class","nft-menu-btn",3,"click",4,"ngIf"],["color","warn","class","spin-icon querying-icon","style"," left:12px;",4,"ngIf"],["color","warn",1,"spin-icon","querying-icon",2,"left","12px"],[1,"reward-card"],[2,"grid-column-start","span 2","justify-self","center"],[1,"input-wrapper"],[1,"reward-token-btn",2,"grid-column-start","span 2","width","100%",3,"click"],["color","warn","class","spin-icon querying-icon","style","top: 12px; left:12px;",4,"ngIf"],["nzBorderless","","nzPrecisionMode","cut",1,"nft-input",3,"nzSize","nzMin","nzMax","ngModel","nzPrecision","ngModelChange"],["alt","icon",3,"src"],[1,"spacer"],[1,"nft-slider",3,"ngModel","nzMin","nzMax","ngModelChange"],[1,"nft-balance"],["nftList",""],[1,"nft-list-wrapper"],[2,"font-size","24px"],[2,"color","rgb(255, 198, 230)"],[1,"result-divider",2,"margin","4px 0"],[1,"nft-list"],[4,"ngFor","ngForOf"],["class","nft-list-item",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"nft-list-item",3,"ngClass","click"],[1,"selected-tokenId-icon-bg"],["color","warn",1,"selected-tokenId-icon"],["color","warn",1,"spin-icon","querying-icon",2,"top","12px","left","12px"],[1,"loading-mask"],["color","primary",1,"spin-icon"]],template:function(t,o){1&t&&(n.YNc(0,Tn,61,48,"div",0),n.ALo(1,"async"),n.YNc(2,An,3,0,"ng-template",null,1,n.W1O)),2&t&&n.Q6J("ngIf",n.VKq(3,Zn,n.lcZ(1,1,o.pool$)))},dependencies:[f.mk,f.sg,f.O5,L.lW,v.rH,v.yS,y.Hw,O._V,w.JJ,w.On,I.jS,S.z1,k.nF,k.YC,f.Ov,f.JJ,f.uU],styles:[".pool-wrapper[_ngcontent-%COMP%]{width:80%;margin:1rem auto;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto 1fr;row-gap:2rem;column-gap:2rem;position:relative}.pool-card[_ngcontent-%COMP%]{width:100%;background:rgba(35,1,33,.3);border:3px solid rgba(97,84,94,.3098039216);-webkit-backdrop-filter:blur(12px) brightness(1.5);backdrop-filter:blur(12px) brightness(1.5);border-radius:16px;padding:12px 24px 24px;position:relative;border:3px solid rgba(94,104,135,.4)}.pool-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.pool-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{grid-column-start:span 2;font-weight:bolder}.pool-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:700}.pool-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:700;justify-self:end;text-decoration:underline}.pool-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;column-gap:24px;row-gap:12px;padding:12px;align-items:center}.pool-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-weight:700}.pool-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{justify-self:end}.label[_ngcontent-%COMP%]{font-weight:700}.total-reward-nft[_ngcontent-%COMP%]{width:100%;min-height:20vh;background:rgba(35,1,33,.3);border:3px solid rgba(97,84,94,.3098039216);-webkit-backdrop-filter:blur(12px) brightness(1.5);backdrop-filter:blur(12px) brightness(1.5);border-radius:16px;padding:24px;position:relative;border:3px solid rgba(94,104,135,.4)}.nft-in-pool-item[_ngcontent-%COMP%]{max-height:calc(10vw + 30px);max-width:10vw;display:flex;align-items:center;justify-content:center;flex-direction:column;border:4px solid;border-image:linear-gradient(135deg,#ffe9c1 0%,#f0b3ff 100%) 1;margin-bottom:48px;overflow:hidden;cursor:pointer;transition:all .2s;background:#ffffff}.nft-in-pool-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;border-bottom:2px solid rgb(255,224,224)}.nft-in-pool-item[_ngcontent-%COMP%]:hover{border-image:linear-gradient(135deg,#ffd587 0%,#df60ff 100%) 1}.reward-card[_ngcontent-%COMP%]{width:100%;background:rgba(35,1,33,.3);border:3px solid rgba(97,84,94,.3098039216);-webkit-backdrop-filter:blur(12px) brightness(1.5);backdrop-filter:blur(12px) brightness(1.5);border-radius:16px;padding:12px 24px 24px;position:relative;border:3px solid rgba(94,104,135,.4);display:grid;grid-template-columns:3fr 2fr;column-gap:24px;row-gap:12px;align-items:center}.reward-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-weight:700}.reward-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{justify-self:end}.input-wrapper[_ngcontent-%COMP%]{grid-column-start:span 2;position:relative;min-height:96px;width:100%;border-radius:16px;background:rgba(255,223,223,.1);border:2px solid rgba(94,104,135,0);transition:all .2s;display:grid;grid-template-columns:1fr 1fr 1fr;column-gap:12px;justify-items:center;align-items:center;box-sizing:border-box;padding:12px 12px 0;margin:24px 0}.input-wrapper[_ngcontent-%COMP%]:hover{border:2px solid rgba(228,178,201,.24)}.input-wrapper[_ngcontent-%COMP%]:hover   .input-label[_ngcontent-%COMP%]{border:2px solid rgba(228,178,201,.4)}[_nghost-%COMP%]     .ant-input-number-handler{border:none!important}[_nghost-%COMP%]     .ant-input-number-disabled{background:transparent}.nft-input[_ngcontent-%COMP%]{width:100%;font-size:28px;color:#7f7f7f;grid-column-start:span 2}.nft-menu-btn[_ngcontent-%COMP%]{position:relative;width:100%;border-radius:16px;background:linear-gradient(45deg,#ff6eb6 0%,#ffcc6e 100%);display:flex;justify-content:center;align-items:center;flex-direction:row;min-height:36px;padding:12px;cursor:pointer;transition:all .2s;color:#240011}.nft-menu-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:24px;height:24px;border-radius:50%}.nft-menu-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{max-width:5rem;margin-left:1rem;overflow:hidden;text-overflow:ellipsis}.nft-menu-btn[_ngcontent-%COMP%]:hover{background:linear-gradient(45deg,#fe54a9 0%,#fabf52 100%)}.nft-slider[_ngcontent-%COMP%]{width:100%;margin:0 24px 0 48px;grid-column-start:span 2}[_nghost-%COMP%]     .ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open){border-color:#ffe6b8}[_nghost-%COMP%]     .ant-slider-track{background:linear-gradient(45deg,#ff6eb6 0%,#ffcc6e 100%)}[_nghost-%COMP%]     .ant-slider-handle{border:2px solid #ffa3da}.price-nft-amount[_ngcontent-%COMP%]{justify-self:start;padding:0 12px}.token-balance[_ngcontent-%COMP%]{grid-column-start:span 1;justify-self:end;overflow:hidden}.input-label[_ngcontent-%COMP%]{box-sizing:border-box;position:absolute;left:12px;top:-18px;color:#ff5fb7;font-weight:bolder;font-size:18px;background:rgb(251,251,251);border-radius:16px;padding:0 12px;border:2px solid rgba(228,178,201,.24);transition:all .2s}.nft-list-wrapper[_ngcontent-%COMP%]{background:rgba(35,1,33,.3);border:3px solid rgba(97,84,94,.3098039216);-webkit-backdrop-filter:blur(12px) brightness(1.5);backdrop-filter:blur(12px) brightness(1.5);width:75vw;height:75vh;padding:24px 0 24px 24px;border-radius:12px;border:2px solid rgba(228,178,201,.24)}.nft-list[_ngcontent-%COMP%]{width:100%;height:calc(100% - 40px);display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;row-gap:18px;column-gap:24px;padding:12px 24px 12px 12px;overflow-x:hidden;overflow-y:auto}.symbol[_ngcontent-%COMP%]{font-size:18px;color:#7f7f7f;max-width:80px;overflow:hidden;text-overflow:ellipsis;display:inline-block;margin:0 12px}.nft-list-item[_ngcontent-%COMP%]{width:100%;height:32vh;display:flex;align-items:center;justify-content:center;flex-direction:column;border:2px solid;border-image:linear-gradient(135deg,#fce6be 0%,#f3c4ff 100%) 1;overflow:hidden;box-sizing:border-box;position:relative;cursor:pointer;transition:all .2s}.nft-list-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:calc(100% - 34px);margin-bottom:12px}.nft-list-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;height:32px;text-align:center;overflow:hidden;text-overflow:ellipsis}.nft-list-item[_ngcontent-%COMP%]:hover{transform:scale(1.1);border-image:linear-gradient(135deg,#ffcb82 0%,#fd87ff 100%) 1;background:rgba(35,1,33,.3);border:3px solid rgba(97,84,94,.3098039216);-webkit-backdrop-filter:blur(12px) brightness(1.5);backdrop-filter:blur(12px) brightness(1.5);z-index:5}.selected-tokenId[_ngcontent-%COMP%]{border-image:linear-gradient(135deg,#ff9500 0%,#fa00ff 100%) 1;background:#2e002f}.selected-tokenId-icon-bg[_ngcontent-%COMP%]{position:absolute;top:0;right:0;border-top:2rem solid #000;border-right:2rem solid #000;border-bottom:2rem solid transparent;border-left:2rem solid transparent;width:0!important;height:0!important}.selected-tokenId-icon[_ngcontent-%COMP%]{position:absolute;top:4px;right:4px;background:rgba(35,1,33,.3);border:3px solid rgba(97,84,94,.3098039216);-webkit-backdrop-filter:blur(12px) brightness(1.5);backdrop-filter:blur(12px) brightness(1.5);border-radius:50%}.claimable-rewards[_ngcontent-%COMP%]{min-height:10vh;width:100%}.claimable-reward-item[_ngcontent-%COMP%]{width:90%;padding:4px 12px;display:grid;grid-template-columns:3fr 2fr;align-items:center;background:rgba(255,223,223,.1);border:2px solid rgba(228,178,201,.14);transition:all .2s;column-gap:12px;border-radius:12px;margin:0 auto 12px}.claimable-reward-item[_ngcontent-%COMP%]   .reward-strategy-name[_ngcontent-%COMP%]{font-weight:700;justify-self:start}.claimable-reward-item[_ngcontent-%COMP%]   .reward-token-name[_ngcontent-%COMP%]{font-weight:700;justify-self:center}.claimable-reward-item[_ngcontent-%COMP%]   .reward-token-value[_ngcontent-%COMP%]{font-weight:700;justify-self:end;padding:12px}.reward-token-btn[_ngcontent-%COMP%]{position:relative;justify-self:center;width:40%;margin:0 auto;border-radius:16px;background:linear-gradient(45deg,#ff6eb6 0%,#ffcc6e 100%);display:flex;justify-content:center;align-items:center;flex-direction:row;padding:12px;cursor:pointer;font-weight:700;font-size:18px}.reward-token-btn[_ngcontent-%COMP%]:hover{background:linear-gradient(45deg,#ff6eb6 0%,#ffcc6e 100%)}.strategy-card-list[_ngcontent-%COMP%]{grid-column-start:2;grid-column-end:3;grid-row-start:1;grid-row-end:3;width:100%;position:relative}.strategy-card[_ngcontent-%COMP%]{background:rgba(35,1,33,.3);border:3px solid rgba(97,84,94,.3098039216);-webkit-backdrop-filter:blur(12px) brightness(1.5);backdrop-filter:blur(12px) brightness(1.5);border-radius:8px;padding:12px 24px;margin-bottom:12px;width:100%;min-height:30vh;position:relative;border:3px solid rgba(94,104,135,.4)}.strategy-info-item[_ngcontent-%COMP%]{width:100%;padding:0 12px;display:grid;grid-template-columns:1fr 1fr;align-items:center;font-size:16px}.strategy-label[_ngcontent-%COMP%]{font-weight:700}.strategy-value[_ngcontent-%COMP%]{justify-self:end}.loading-mask[_ngcontent-%COMP%]{width:100%;height:100%;max-height:100vh;position:absolute;left:0;top:0;display:flex;justify-content:center;align-items:center;background:rgba(236,230,233,.1)}.spin-icon[_ngcontent-%COMP%]{transform:rotate(45deg);animation:rotate 1.2s infinite linear}@keyframes rotate{to{transform:rotate(405deg)}}.divider[_ngcontent-%COMP%]{height:1px;width:100%;background:linear-gradient(90deg,#ff8bea 0%,#ffd992 100%)}.querying-icon[_ngcontent-%COMP%]{position:absolute}"]}),e})()}];let Ln=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[v.Bz.forChild(Mn),v.Bz]}),e})();var yn=l(50132),On=l(35531);let In=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[f.ez,L.ot,Ln,y.Ps,O.Zf,w.u5,yn.$6,I.N3,On.Cl,S.mZ,k.kz]}),e})()}}]);