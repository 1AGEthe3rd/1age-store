import {offers} from '../offers.js';
export function mountStore(host,group){
 const root=document.createElement('section');host.append(root);
 const make=(tag,t,parent=root)=>{const e=document.createElement(tag);e.textContent=t;parent.append(e);return e;};
 const link=(name,url,parent=root)=>{const a=make('a',name,parent);a.href=url;return a;};
 if(group==='merch'){
 make('p','Future official 1AGE merchandise, virtual apparel and collectibles. No products, prices or inventory are available in this prototype.');
 for(const title of ['Physical merchandise','Virtual apparel','Official collectibles']){const c=make('article','');c.className='mission-card';make('strong',title,c);make('p','Collection planned · not for sale',c);}
 }else if(group==='welcome'){
 make('p','Official first-party 1AGE showroom. Explore existing service information or the future merchandise gallery. Independent businesses belong in Shop.');
 link('Explore independent businesses','https://1age.shop/');link('Open existing showroom','../application.html');
 }else{
 const offer=offers[group];if(!offer)return;
 make('strong',offer.title);make('p',offer.category);make('p',offer.copy);make('p',offer.price);make('p',offer.status);
 for(const item of offer.links){const url=new URL(item.href,new URL('../',import.meta.url));if(url.origin===location.origin&&url.pathname.includes('/checkout/'))continue;link(item.label,url.href);}
 if(group==='cash')link('Open 1AGE Cash','https://1age.cash/');
 if(group==='checkout')make('p','This spatial build does not launch checkout or charge anything. Existing nonfinancial test terminal remains available from the original showroom.');
 }
}
