import{u as p,r as $}from"./state-a52549c1.mjs";import{_ as q,d as V,w as C,r as a,o as v,c as E,a as t,b as e,e as n,f as c,g as j,t as A,h as z}from"./entry-0f130451.mjs";const D=V({setup(m,{expose:o}){o();const u=p("MAITRISE",[]),s=p("ARMURE",{selected:"",maitrise:0,ca:0,caBonus:0});C(s,()=>{$()},{deep:!0});const r={maitrise:u,armure:s};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),y=n("br",null,null,-1),I=n("h3",null,"Historique: Bricoleur",-1),k=n("p",null,[c(" Vous inventez toutes sortes de petites choses afin de satisfaire votre imagination fertile. Vos comp\xE9tences en ing\xE9nierie s'expriment avec beaucoup de cr\xE9ativit\xE9 et il est impossible de deviner ce que vous allez bien pouvoir inventer ensuite. Il s'agira peut-\xEAtre d'un g\xE9nial appareil qui aura un potentiel fabuleux... ou qui risquera d'exploser. "),n("br"),c(" Choisissez deux primes de caract\xE9ristiques. Une de ces primes doit \xEAtre de Dext\xE9rit\xE9 ou d'Intelligence et l'autre est une prime de caract\xE9ristique libre. "),n("br"),n("b",null,"Vous \xEAtes qualifi\xE9 dans les comp\xE9tences Artisanat et Connaissance de l'ing\xE9nierie"),c(". Vous gagnez le don de "),n("b",null,"comp\xE9tence Artisanat sp\xE9cialis\xE9. [Alchimie]")],-1),R=n("br",null,null,-1),P=n("br",null,null,-1),w=n("br",null,null,-1),L=n("h3",null,"Elfe visionnaire",-1),T=n("p",null,[c(" Vous avez le pouvoir inn\xE9 de d\xE9tecter et comprendre les ph\xE9nom\xE8nes magiques. Vous pouvez lancer le tour de magie d\xE9tection de la magie comme un sort inn\xE9 arcanique \xE0 volont\xE9. Un tour de magie est intensifi\xE9 \xE0 un niveau de sort \xE9gal \xE0 la moiti\xE9 de votre niveau arrondi \xE0 l'entier sup\xE9rieur. En outre, vous gagnez un "),n("b",null,"bonus de circonstances de +1 \xE0 vos tests pour Identifier la magie et D\xE9chiffrer un texte de nature magique"),c(". Ces actions font g\xE9n\xE9ralement appel aux comp\xE9tences Arcanes, Nature, Occultisme ou Religion ")],-1),M=n("br",null,null,-1),O=n("br",null,null,-1),U=n("br",null,null,-1),B=n("h3",null,"Dons Ancestraux",-1),N=n("br",null,null,-1),F=n("h4",null,"Magie Surnaturelle (Don 1)",-1),G=n("p",null,[c(" Votre magie elfique se manifeste sous la forme d'un sort arcanique simple, m\xEAme si vous n'avez pas \xE9t\xE9 form\xE9 \xE0 la magie."),n("br"),n("b",null,"Choisissez un tour de magie"),c(" dans la liste des sorts arcaniques (page 306). Vous pouvez lancer ce tour de magie comme un "),n("b",null,"sort inn\xE9 arcanique"),c(" \xE0 volont\xE9. Un tour de magie est intensifi\xE9 \xE0 un niveau de sort \xE9gal \xE0 la moiti\xE9 de votre niveau arrondi \xE0 l'entier sup\xE9rieur. ")],-1),H=n("br",null,null,-1),J=n("br",null,null,-1),Q=n("br",null,null,-1),X=n("h3",null,"Alignement",-1),K=n("p",null,"Bon et Neutre",-1),W=n("br",null,null,-1),Y=n("br",null,null,-1),Z=n("br",null,null,-1),ee=n("h3",null,"Langues",-1),te=n("p",null,"Commun, Elfique, C\xE9leste, Draconique, Sylvestre, Abyssal",-1);function ne(m,o,u,s,r,f){const d=a("v-card-text"),l=a("v-col"),i=a("v-row"),_=a("v-card");return v(),E(_,{class:"ma-0 pa-0",flat:"",tile:""},{default:t(()=>[e(i,{align:"center"},{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(d,{class:"text-start"},{default:t(()=>[y,I,k,R,P,w,L,T,M,O,U,B,N,F,G,H,J,Q,X,K,W,Y,Z,ee,te]),_:1})]),_:1})]),_:1})]),_:1})}var se=q(D,[["render",ne]]);const oe={},ae={class:"image float-end",src:"/images/icon.jpg",width:"270",height:"480",alt:"Nuxt logo"};function le(m,o){return v(),j("img",ae)}var ie=q(oe,[["render",le]]);const re=V({props:{select:{type:[String],required:!0}},setup(m,{expose:o}){o();const u=m;let s=p("",{full:0,mod:0});switch(u.select){case"Force":s=p("CARACT_FORCE",{full:0,mod:0});break;case"Dext\xE9rit\xE9":s=p("CARACT_DEXTERITE",{full:0,mod:0});break;case"Constitution":s=p("CARACT_CONSTITUTION",{full:0,mod:0});break;case"Intelligence":s=p("CARACT_INTELLIGENCE",{full:0,mod:0});break;case"Sagesse":s=p("CARACT_SAGESSE",{full:0,mod:0});break;case"Charisme":s=p("CARACT_CHARISME",{full:0,mod:0});break}C(s,()=>{$()},{deep:!0});const r={props:u,caracteristique:s};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),ue=c("10"),ce=c("-"),de=c("+");function _e(m,o,u,s,r,f){const d=a("v-card-text"),l=a("v-col"),i=a("v-btn"),_=a("v-card-actions"),b=a("v-row"),g=a("v-card");return v(),E(g,{class:"mx-0 mt-0 mb-6 pa-0",flat:"",tile:""},{default:t(()=>[e(b,{align:"center"},{default:t(()=>[e(l,{cols:"6"},{default:t(()=>[e(d,{class:"text-start"},{default:t(()=>[n("h3",null,A(s.caracteristique.full)+" : "+A(s.props.select),1)]),_:1})]),_:1}),e(l,{cols:"6"},{default:t(()=>[e(_,{class:"justify-end"},{default:t(()=>[e(i,{onClick:o[0]||(o[0]=h=>s.caracteristique.full=10)},{default:t(()=>[ue]),_:1}),e(i,{onClick:o[1]||(o[1]=h=>s.caracteristique.full--)},{default:t(()=>[ce]),_:1}),e(i,{onClick:o[2]||(o[2]=h=>s.caracteristique.full++)},{default:t(()=>[de]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}var pe=q(re,[["render",_e]]);const me=V({setup(m,{expose:o}){o(),$();const u={};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}}),xe=n("h2",null,"Valeurs de Caract\xE9ristique",-1);function ve(m,o,u,s,r,f){const d=a("v-card-text"),l=pe,i=a("v-col"),_=a("v-row"),b=a("v-card");return v(),E(b,{class:"mx-0 mb-0 mt-4 pa-0",flat:"",tile:""},{default:t(()=>[e(_,{align:"center"},{default:t(()=>[e(i,{cols:"12"},{default:t(()=>[e(d,{class:"text-start mb-4"},{default:t(()=>[xe]),_:1}),e(d,null,{default:t(()=>[e(l,{select:"Force"}),e(l,{select:"Dext\xE9rit\xE9"}),e(l,{select:"Constitution"}),e(l,{select:"Intelligence"}),e(l,{select:"Sagesse"}),e(l,{select:"Charisme"})]),_:1})]),_:1})]),_:1})]),_:1})}var Ee=q(me,[["render",ve]]);const fe=V({setup(m,{expose:o}){o();const u=p("MAITRISE",[]),s=p("POINTS_DE_VIE",{max:0,acutel:0});function r(){s.value.acutel>0&&s.value.acutel--}function f(){s.value.acutel<s.value.max&&s.value.acutel++}C(s,()=>{$()},{deep:!0});const d={maitrise:u,pointsDeVie:s,subPointsDeVie:r,addPointsDeVie:f};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}),be=c("-"),ge=c("+"),he=c("Max");function qe(m,o,u,s,r,f){const d=a("v-card-text"),l=a("v-col"),i=a("v-btn"),_=a("v-card-actions"),b=a("v-row"),g=a("v-card");return v(),E(g,{class:"ma-0 pa-0",flat:"",tile:""},{default:t(()=>[e(b,{align:"center"},{default:t(()=>[e(l,{cols:"4"},{default:t(()=>[e(d,{class:"text-start"},{default:t(()=>[n("h3",null,A(s.pointsDeVie.acutel)+": Points De Vie",1)]),_:1})]),_:1}),e(l,{cols:"4"},{default:t(()=>[e(_,{class:"text-start"},{default:t(()=>[e(i,{onClick:s.subPointsDeVie},{default:t(()=>[be]),_:1}),e(i,{onClick:s.addPointsDeVie},{default:t(()=>[ge]),_:1}),e(i,{onClick:o[0]||(o[0]=h=>s.pointsDeVie.acutel=s.pointsDeVie.max)},{default:t(()=>[he]),_:1})]),_:1})]),_:1}),e(l,{cols:"4"},{default:t(()=>[e(d,{class:"text-start"},{default:t(()=>[n("h3",null,"(Max: "+A(s.pointsDeVie.max)+")",1)]),_:1})]),_:1})]),_:1})]),_:1})}var $e=q(fe,[["render",qe]]);const Ve=V({setup(m,{expose:o}){o();const u=p("MAITRISE",[]),s=p("ARMURE",{selected:"",maitrise:0,ca:0,caBonus:0});C(s,()=>{$()},{deep:!0});const r={maitrise:u,armure:s};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),Ce=c("-"),Ae=c("+"),ze=c("R");function Se(m,o,u,s,r,f){const d=a("v-card-text"),l=a("v-col"),i=a("v-btn"),_=a("v-card-actions"),b=a("v-select"),g=a("v-row"),h=a("v-card");return v(),E(h,{class:"ma-0 pa-0",flat:"",tile:""},{default:t(()=>[e(g,{align:"center"},{default:t(()=>[e(l,{cols:"4"},{default:t(()=>[e(d,{class:"text-start"},{default:t(()=>[n("h3",null,A(s.armure.ca)+": Classe d'armure",1)]),_:1})]),_:1}),e(l,{cols:"4"},{default:t(()=>[e(_,{class:"text-start"},{default:t(()=>[e(i,{onClick:o[0]||(o[0]=x=>s.armure.caBonus--)},{default:t(()=>[Ce]),_:1}),e(i,{onClick:o[1]||(o[1]=x=>s.armure.caBonus++)},{default:t(()=>[Ae]),_:1}),e(i,{onClick:o[2]||(o[2]=x=>s.armure.caBonus=0)},{default:t(()=>[ze]),_:1})]),_:1})]),_:1}),e(l,{cols:"4"},{default:t(()=>[e(d,{class:"text-start"},{default:t(()=>[e(b,{density:"compact",items:s.maitrise,"hide-details":"","single-line":"",modelValue:s.armure.selected,"onUpdate:modelValue":o[3]||(o[3]=x=>s.armure.selected=x)},null,8,["items","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})}var je=q(Ve,[["render",Se]]);const De=V({props:{select:{type:[String],required:!0}},setup(m,{expose:o}){o();const u=m,s=p("MAITRISE",[]);let r=p("",{selected:"",maitrise:0,full:0,bonus:0});switch(u.select){case"Vigueur":r=p("SAUVE_VIGUEUR",{selected:"",maitrise:0,full:0,bonus:0});break;case"R\xE9flexes":r=p("SAUVE_REFLEXES",{selected:"",maitrise:0,full:0,bonus:0});break;case"Volont\xE9":r=p("SAUVE_VOLONTE",{selected:"",maitrise:0,full:0,bonus:0});break}C(r,()=>{$()},{deep:!0});const f={props:u,maitrise:s,sauvegarde:r};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}}),ye=c("-"),Ie=c("+"),ke=c("R");function Re(m,o,u,s,r,f){const d=a("v-card-text"),l=a("v-col"),i=a("v-btn"),_=a("v-card-actions"),b=a("v-select"),g=a("v-row"),h=a("v-card");return v(),E(h,{class:"ma-0 pa-0",flat:"",tile:""},{default:t(()=>[e(g,{align:"center"},{default:t(()=>[e(l,{cols:"4"},{default:t(()=>[e(d,null,{default:t(()=>[n("h3",null,A(s.sauvegarde.full)+" : "+A(s.props.select),1)]),_:1})]),_:1}),e(l,{cols:"4"},{default:t(()=>[e(_,{class:"text-start"},{default:t(()=>[e(i,{onClick:o[0]||(o[0]=x=>s.sauvegarde.bonus--)},{default:t(()=>[ye]),_:1}),e(i,{onClick:o[1]||(o[1]=x=>s.sauvegarde.bonus++)},{default:t(()=>[Ie]),_:1}),e(i,{onClick:o[2]||(o[2]=x=>s.sauvegarde.bonus=0)},{default:t(()=>[ke]),_:1})]),_:1})]),_:1}),e(l,{cols:"4"},{default:t(()=>[e(d,null,{default:t(()=>[e(b,{density:"compact",items:s.maitrise,"hide-details":"","single-line":"",modelValue:s.sauvegarde.selected,"onUpdate:modelValue":o[3]||(o[3]=x=>s.sauvegarde.selected=x)},null,8,["items","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})}var Pe=q(De,[["render",Re]]);const we=V({setup(m,{expose:o}){o();const u=p("MAITRISE",[]),s=p("PERCEPTION",{selected:"",maitrise:0,full:0,bonus:0});C(s,()=>{$()},{deep:!0});const r={maitrise:u,perception:s};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),Le=c("-"),Te=c("+"),Me=c("R");function Oe(m,o,u,s,r,f){const d=a("v-card-text"),l=a("v-col"),i=a("v-btn"),_=a("v-card-actions"),b=a("v-select"),g=a("v-row"),h=a("v-card");return v(),E(h,{class:"ma-0 pa-0",flat:"",tile:""},{default:t(()=>[e(g,{align:"center"},{default:t(()=>[e(l,{cols:"4"},{default:t(()=>[e(d,{class:"text-start"},{default:t(()=>[n("h3",null,A(s.perception.full)+": Perception",1)]),_:1})]),_:1}),e(l,{cols:"4"},{default:t(()=>[e(_,{class:"text-start"},{default:t(()=>[e(i,{onClick:o[0]||(o[0]=x=>s.perception.bonus--)},{default:t(()=>[Le]),_:1}),e(i,{onClick:o[1]||(o[1]=x=>s.perception.bonus++)},{default:t(()=>[Te]),_:1}),e(i,{onClick:o[2]||(o[2]=x=>s.perception.bonus=0)},{default:t(()=>[Me]),_:1})]),_:1})]),_:1}),e(l,{cols:"4"},{default:t(()=>[e(d,{class:"text-start"},{default:t(()=>[e(b,{density:"compact",items:s.maitrise,"hide-details":"","single-line":"",modelValue:s.perception.selected,"onUpdate:modelValue":o[3]||(o[3]=x=>s.perception.selected=x)},null,8,["items","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})}var Ue=q(we,[["render",Oe]]);const Be=V({setup(m,{expose:o}){o();const u=p("MAITRISE",[]),s=p("DD_DE_CLASSE",{selected:"",maitrise:0,full:0,bonus:0});C(s,()=>{$()},{deep:!0});const r={maitrise:u,ddDeClasse:s};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),Ne=c("-"),Fe=c("+"),Ge=c("R");function He(m,o,u,s,r,f){const d=a("v-card-text"),l=a("v-col"),i=a("v-btn"),_=a("v-card-actions"),b=a("v-select"),g=a("v-row"),h=a("v-card");return v(),E(h,{class:"ma-0 pa-0",flat:"",tile:""},{default:t(()=>[e(g,{align:"center"},{default:t(()=>[e(l,{cols:"4"},{default:t(()=>[e(d,{class:"text-start"},{default:t(()=>[n("h3",null,A(s.ddDeClasse.full)+": DD de Classe",1)]),_:1})]),_:1}),e(l,{cols:"4"},{default:t(()=>[e(_,{class:"text-start"},{default:t(()=>[e(i,{onClick:o[0]||(o[0]=x=>s.ddDeClasse.bonus--)},{default:t(()=>[Ne]),_:1}),e(i,{onClick:o[1]||(o[1]=x=>s.ddDeClasse.bonus++)},{default:t(()=>[Fe]),_:1}),e(i,{onClick:o[2]||(o[2]=x=>s.ddDeClasse.bonus=10)},{default:t(()=>[Ge]),_:1})]),_:1})]),_:1}),e(l,{cols:"4"},{default:t(()=>[e(d,{class:"text-start"},{default:t(()=>[e(b,{density:"compact",items:s.maitrise,"hide-details":"","single-line":"",modelValue:s.ddDeClasse.selected,"onUpdate:modelValue":o[3]||(o[3]=x=>s.ddDeClasse.selected=x)},null,8,["items","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})}var Je=q(Be,[["render",He]]);const Qe=V({setup(m,{expose:o}){o(),$();const u={};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}});function Xe(m,o,u,s,r,f){const d=$e,l=je,i=Pe,_=Ue,b=Je,g=a("v-card-text"),h=a("v-col"),x=a("v-row"),S=a("v-card");return v(),E(S,{class:"ma-0 pa-0",flat:"",tile:""},{default:t(()=>[e(x,{align:"center"},{default:t(()=>[e(h,{cols:"12"},{default:t(()=>[e(g,null,{default:t(()=>[e(d),e(l),e(i,{select:"Vigueur"}),e(i,{select:"R\xE9flexes"}),e(i,{select:"Volont\xE9"}),e(_),e(b)]),_:1})]),_:1})]),_:1})]),_:1})}var Ke=q(Qe,[["render",Xe]]);const We=V({setup(m,{expose:o}){o();const u=p("MAITRISE",[]),s=p("ARMURE",{selected:"",maitrise:0,ca:0,caBonus:0});C(s,()=>{$()},{deep:!0});const r={maitrise:u,armure:s};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),Ye=n("h3",null,"Les sorts intensifi\xE9s",-1),Ze=n("p",null," Quand vous obtenez des emplacements de sort de niveau 2 et plus, vous pouvez les remplir avec des versions plus puissantes de sorts de niveau inf\xE9rieur. Cela augmente le niveau du sort, l'intensifiant pour qu'il corresponde \xE0 l'emplacement de sort. Nombre de sorts poss\xE8dent des am\xE9liorations sp\xE9cifiques quand ils sont intensifi\xE9s \xE0 un niveau donn\xE9. ",-1),et=n("br",null,null,-1),tt=n("h3",null,"Les tours de magie",-1),nt=n("p",null," Un tour de magie est un type de sort qui n'utilise pas d'emplacement de sort. Il se lance \xE0 volont\xE9 chaque jour, aussi souvent que vous le d\xE9sirez. Un tour de magie est toujours automatiquement intensifi\xE9 jusqu'\xE0 la moiti\xE9 de votre niveau arrondi \xE0 l'entier sup\xE9rieur, donc g\xE9n\xE9ralement \xE9gal au sort de plus haut niveau que vous pouvez lancer en tant que magicien. Par exemple, les tours de magie d'un magicien de niveau 1 sont de niveau 1, tandis que ceux d'un magicien de niveau 5 sont de niveau 3. ",-1),st=n("br",null,null,-1),ot=n("h3",null,"Le grimoire",-1),at=n("p",null," Chaque sort arcanique poss\xE8de une version \xE9crite, normalement consign\xE9e dans un grimoire. Vous commencez avec un grimoire d'une valeur de 10 pa ou moins (comme indiqu\xE9 p. 290) que vous recevez gratuitement et, chaque jour, vous devez l'\xE9tudier pour pr\xE9parer vos sorts. Il contient un \xE9ventail de 10 tours de magie arcaniques et cinq sorts arcaniques de niveau 1 de votre choix. Vous faites votre choix parmi les sorts ordinaires de la liste des sorts arcaniques (p. 306) ou parmi d'autres sorts arcaniques auxquels vous avez acc\xE8s. \xC0 vous de d\xE9cider de la forme et du nom de votre grimoire. Ce peut \xEAtre un livre moisi \xE0 la reliure de cuir ou un ensemble de minces disques de m\xE9tal gliss\xE9s sur un anneau d'airain. Son nom peut \xEAtre \xE9sot\xE9rique, comme le Libram cramoisi ou plus acad\xE9mique, comme \xC9tudes de terrain de la transmutation appliqu\xE9e. \xC0 chaque fois que vous gagnez un niveau, vous ajoutez \xE0 votre grimoire deux sorts arcaniques de n'importe quel niveau que vous \xEAtes capable de lancer. Vous pouvez aussi utiliser la comp\xE9tence Arcanes pour lui ajouter d'autres sorts d\xE9couverts au fil de vos aventures, comme expliqu\xE9 p. 241. ",-1),lt=n("br",null,null,-1),it=n("h3",null,"Am\xE9lioration de l'harmonisation avec le familier",-1),rt=n("p",null," Cela fait longtemps que vous pensez qu'il suffit d'affiner la magie qui lie un magicien \xE0 son familier pour am\xE9liorer leur lien mystique par rapport \xE0 celui s\xE9curis\xE9, mais g\xE9n\xE9rique, que la majorit\xE9 des magiciens utilisent. Vous avez form\xE9 un tel pacte avec votre familier et en tirez plus d'avantages que les autres magiciens. Vous obtenez le don de magicien Familier comme don bonus. Votre familier gagne un pouvoir suppl\xE9mentaire, puis un autre quand vous atteignez les niveaux 6, 12 et 18. Votre lien avec votre familier modifie la capacit\xE9 de classe lien arcanique : vous stockez l'\xE9nergie magique dans votre familier et non dans un objet vous appartenant. De plus, vous gagnez l'action gratuite Drain de familier au lieu de Drain d'objet li\xE9. Elle peut s'utiliser \xE0 chaque fois qu'un pouvoir vous permet d'utiliser Drain d'objet li\xE9 et fonctionne \xE0 l'identique, sauf que vous tirez votre magie du familier et non d'un objet. ",-1),ut=n("br",null,null,-1),ct=n("h3",null,"Les \xE9coles arcaniques",-1),dt=n("p",null," Si vous vous sp\xE9cialisez dans une \xE9cole arcanique plut\xF4t que de toutes les \xE9tudier \xE0 parts \xE9gales (comme les universalistes), vous gagnez un emplacement de sort suppl\xE9mentaire de chaque niveau que vous savez lancer. Ces emplacements accueillent uniquement des sorts de votre \xE9cole arcanique de pr\xE9dilection. De plus, vous pouvez pr\xE9parer un tour de magie de plus de votre \xE9cole de pr\xE9dilection. Vous ajoutez aussi un autre sort arcanique de votre \xE9cole de pr\xE9dilection \xE0 votre grimoire. Vous apprenez un sort d'\xE9cole, un type de sort sp\xE9cial enseign\xE9 aux \xE9tudiants de votre \xE9cole arcanique. Les sorts d'\xE9cole font partie des sorts focalis\xE9s. Il faut d\xE9penser 1 point de focalisation pour lancer un sort focalis\xE9 et vous commencez avec une r\xE9serve de focalisation de 1 point. Elle se remplit lors de vos pr\xE9paratifs quotidiens et vous pouvez r\xE9cup\xE9rer 1 point de focalisation en consacrant 10 minutes \xE0 l'\xE9tude de votre grimoire ou \xE0 des recherches arcaniques, en utilisant l'activit\xE9 Refocaliser. Un sort focalis\xE9 est automatiquement intensifi\xE9 \xE0 la moiti\xE9 de votre niveau arrondi \xE0 l'entier sup\xE9rieur. Un sort focalis\xE9 n'a pas besoin d'emplacement de sort et vous ne pouvez pas utiliser un tel emplacement pour le lancer. Certains dons accordent d'autres sorts focalis\xE9s et augmentent la taille de votre r\xE9serve de focalisation, bien que cette derni\xE8re ne puisse jamais contenir plus de 3 points. Les r\xE8gles compl\xE8tes concernant les sorts focalis\xE9s figurent page 300. ",-1),_t=n("br",null,null,-1),pt=n("h3",null,"\xC9vocation",-1),mt=n("p",null," En tant qu'\xE9vocateur, vous baignez dans la puissance brute de la magie et l'utilisez pour cr\xE9er ou d\xE9truire ais\xE9ment. Vous faites appel aux \xE9l\xE9ments, \xE0 la force ou \xE0 l'\xE9nergie pour d\xE9vaster vos ennemis ou vous aider. Vous savez que l'approche la plus directe est la plus \xE9l\xE9gante. Vous ajoutez un sort d'\xE9vocation de niveau 1 (comme d\xE9charge \xE9lectrique) \xE0 votre grimoire. Vous apprenez le sort d'\xE9cole trait de force (p. 396) ",-1),xt=n("br",null,null,-1),vt=n("h3",null,"Dons de Magicien",-1),Et=n("p",null,[n("b",null,"Familier"),c(" (Gratuit avec la th\xE8se), "),n("b",null,"Familier am\xE9lior\xE9"),c(" (Obtenue niveau 4) ")],-1);function ft(m,o,u,s,r,f){const d=a("v-card-text"),l=a("v-col"),i=a("v-row"),_=a("v-card");return v(),E(_,{class:"ma-0 pa-0",flat:"",tile:""},{default:t(()=>[e(i,{align:"center"},{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(d,{class:"text-start"},{default:t(()=>[Ye,Ze,et,tt,nt,st,ot,at,lt,it,rt,ut,ct,dt,_t,pt,mt,xt,vt,Et]),_:1})]),_:1})]),_:1})]),_:1})}var bt=q(We,[["render",ft]]);const gt=V({setup(m,{expose:o}){o();const u=p("MAITRISE",[]),s=p("ARMURE",{selected:"",maitrise:0,ca:0,caBonus:0});C(s,()=>{$()},{deep:!0});const r={maitrise:u,armure:s};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),ht=n("h3",null,"D\xE9voument de l'alchimiste",-1),qt=n("p",null," Vous mettez en pratique votre int\xE9r\xEAt pour l'alchimie. Vous devenez qualifi\xE9 dans les bombes alchimiques et l'Artisanat ; si vous \xE9tiez d\xE9j\xE0 qualifi\xE9 en Artisanat, vous devenez \xE0 la place qualifi\xE9 dans une comp\xE9tence de votre choix. Vous devenez qualifi\xE9 dans le DD de classe d'alchimiste. Vous gagnez la capacit\xE9 de classe d'alchimiste r\xE9actifs impr\xE9gn\xE9s, en m\xEAme temps qu'un nombre de r\xE9actifs quotidiens \xE9gal \xE0 votre niveau. Vous obtenez \xE9galement le don Artisanat alchimique, ainsi que quatre formules suppl\xE9mentaires pour des objets alchimiques de niveau 1, et le pouvoir de cr\xE9er des objets gratuits lors de vos pr\xE9paratifs quotidiens. Votre niveau d'alchimie avanc\xE9e est de 1 et n'augmente pas de son propre chef. Sp\xE9cial. Vous ne pouvez pas s\xE9lectionner un autre don de d\xE9vouement avant d'avoir obtenu deux autres dons de l'arch\xE9type alchimiste ",-1),$t=n("br",null,null,-1),Vt=n("h3",null,"Artisanat alchimique",-1),Ct=n("p",null," Vous pouvez utiliser l'activit\xE9 Artisanat pour cr\xE9er des objets alchimiques. Quand vous choisissez ce don, vous ajoutez imm\xE9diatement les formules de quatre objets alchimiques ordinaires de niveau 1 \xE0 votre formulaire. ",-1),At=n("br",null,null,-1),zt=n("h3",null,"Artisanat sp\xE9cialis\xE9 (Alchimie)",-1),St=n("p",null," Votre formation s'est concentr\xE9e sur l'Artisanat d'un type d'objet en particulier. S\xE9lectionnez une des sp\xE9cialit\xE9s list\xE9es ci-dessous. Vous gagnez un bonus de circonstances de +1 aux tests d'Artisanat pour Fabriquer des objets de ce type. Si vous \xEAtes un ma\xEEtre en Artisanat, ce bonus augmente \xE0 +2. S'il n'est pas \xE9vident de d\xE9terminer si la sp\xE9cialit\xE9 s'applique, c'est le MJ qui d\xE9cide. Certaines sp\xE9cialit\xE9s peuvent ne s'appliquer que partiellement. Par exemple, si vous r\xE9alisiez un morgenstern en poss\xE9dant la sp\xE9cialit\xE9 \xE9b\xE9nisterie, le MJ pourrait ne vous accorder que la moiti\xE9 de votre bonus parce que l'objet n\xE9cessite \xE0 la fois forge et \xE9b\xE9nisterie. ",-1),jt=n("br",null,null,-1);function Dt(m,o,u,s,r,f){const d=a("v-card-text"),l=a("v-col"),i=a("v-row"),_=a("v-card");return v(),E(_,{class:"ma-0 pa-0",flat:"",tile:""},{default:t(()=>[e(i,{align:"center"},{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(d,{class:"text-start"},{default:t(()=>[ht,qt,$t,Vt,Ct,At,zt,St,jt]),_:1})]),_:1})]),_:1})]),_:1})}var yt=q(gt,[["render",Dt]]);const It=V({setup(m,{expose:o}){o();const u=p("MAITRISE",[]),s=p("ARMURE",{selected:"",maitrise:0,ca:0,caBonus:0});C(s,()=>{$()},{deep:!0});const r={maitrise:u,armure:s};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),kt=n("h4",null,"Feu Gr\xE9geois inf\xE9rieur (Bombe)",-1),Rt=n("p",null,[c(" Le feu gr\xE9geois est un m\xE9lange de liquides volatiles qui s'enflamment une fois expos\xE9s \xE0 l'air. Il inflige les d\xE9g\xE2ts de feu, les d\xE9g\xE2ts de feu persistants et les d\xE9g\xE2ts d'\xE9claboussure indiqu\xE9s. Plusieurs types de bombes donnent un bonus d'objet aux jets d'attaque. "),n("i",null,"Cette bombe inflige 1d8 d\xE9g\xE2ts de feu, 1 d\xE9g\xE2t de feu persistant et 1 d\xE9g\xE2t d'\xE9claboussure de feu.")],-1),Pt=n("br",null,null,-1),wt=n("h4",null,"Antidote inf\xE9rieur (\xC9lixir)",-1),Lt=n("p",null,[c(" L'antidote vous prot\xE8ge contre les toxines. Lorsque vous le buvez, vous recevez un bonus d'objet aux jets de Vigueur contre les poisons pendant 6 h. "),n("i",null,"Vous gagnez un bonus d'objet de +2.")],-1),Tt=n("br",null,null,-1),Mt=n("h4",null,"Antimaladie inf\xE9rieur (\xC9lixir)",-1),Ot=n("p",null,[c(" L'antimaladie renforce les d\xE9fenses du corps contre les maladies. Lorsque vous le buvez, vous recevez un bonus d'objet aux jets de Vigueur(+2) contre les maladies pendant 24 h. Cela s'applique aussi \xE0 vos jets de sauvegarde contre la progression d'une maladie. "),n("i",null,"Vous gagnez un bonus d'objet de +2.")],-1),Ut=n("br",null,null,-1),Bt=n("h4",null,"\xC9lixir de vie inf\xE9rieur (\xC9lixir)",-1),Nt=n("p",null,[c(" L'\xE9lixir de vie acc\xE9l\xE8re le processus de gu\xE9rison naturel du corps et son syst\xE8me immunitaire. En le buvant, vous r\xE9cup\xE9rez le nombre de points de vie indiqu\xE9 et gagnez un bonus d'objet aux jets de sauvegarde contre la maladie et le poison pendant 10 min. "),n("i",null,"L'\xE9lixir restaure 1d6 points de vie, le bonus est de +1.")],-1),Ft=n("br",null,null,-1),Gt=n("h4",null,"Mutag\xE8ne cognitif inf\xE9rieur (\xC9lixir)",-1),Ht=n("p",null,[c(" Votre esprit devient limpide et rien n'entrave vos facult\xE9s intellectuelles, mais la mati\xE8re physique vous semble \xE9ph\xE9m\xE8re."),n("br"),c(" Avantage. Vous gagnez un bonus d'objet aux tests d'Arcanes, d'Artisanat, de Connaissances, d'Occultisme et de Soci\xE9t\xE9, ainsi qu'\xE0 tous les tests pour Se souvenir. Vos \xE9checs critiques aux tests de Se souvenir deviennent de simples \xE9checs."),n("br"),c(" Inconv\xE9nient. Vous subissez un malus de -2 aux jets d'attaque avec une arme ou \xE0 mains nues, ainsi qu'aux tests d'Athl\xE9tisme et d'Acrobaties. Vous \xEAtes surcharg\xE9 \xE0 partir de 2 Encombrements de moins que d'ordinaire et le maximum d'Encombrements que vous pouvez porter est r\xE9duit de 4. "),n("i",null,"Le bonus est de +1 et la dur\xE9e de 1 min.")],-1),Jt=n("br",null,null,-1),Qt=n("h4",null,"Mutag\xE8ne juggernaut inf\xE9rieur (\xC9lixir)",-1),Xt=n("p",null,[c(" Apr\xE8s avoir bu ce mutag\xE8ne, votre corps devient plus imposant et robuste. Vous rayonnez de sant\xE9, mais vous devenez lourdaud et peu observateur."),n("br"),c(" Avantage. Vous gagnez un bonus d'objet aux jets de Vigueur ainsi que le nombre de points de vie temporaires indiqu\xE9. Lorsque vous poss\xE9dez votre maximum de points de vie depuis 1 minute compl\xE8te, vous r\xE9cup\xE9rez les points de vie temporaires."),n("br"),c(" Inconv\xE9nient. Vous subissez un malus de -2 aux jets de Volont\xE9 et d'initiative et aux tests de Perception. "),n("br"),n("i",null,"Le bonus est de +1 et la dur\xE9e de 1 min.")],-1),Kt=n("br",null,null,-1),Wt=n("h4",null,"Venin de mille-pattes g\xE9ant (Poison)",-1),Yt=n("p",null,[c(" Le venin de mille-pattes g\xE9ant cause une forte raideur dans les muscles."),n("br"),c(" Jet de sauvegarde Vigueur DD 17 ; Dur\xE9e maximum 6 rounds ; Stade 1 1d6 d\xE9g\xE2ts de poison (1 round) ; Stade 2 1d8 d\xE9g\xE2ts de poison et pris au d\xE9pourvu (1 round) ; Stade 3 1d12 d\xE9g\xE2ts de poison, maladroit 1 et pris au d\xE9pourvu (1 round). "),n("i",null,"Effet d'application: Blessure")],-1),Zt=n("br",null,null,-1),en=n("h4",null,"B\xE2ton fumig\xE8ne inf\xE9rieur (Outil)",-1),tn=n("p",null,[c(" D'un mouvement sec, vous faites sortir de l'objet un \xE9pais \xE9cran de fum\xE9e opaque qui occupe une explosion centr\xE9e sur un angle de votre espace. Toutes les cr\xE9atures au sein de cette zone sont masqu\xE9es et les autres sont masqu\xE9es \xE0 leurs yeux. La fum\xE9e persiste 1 min ou jusqu'\xE0 \xEAtre dispers\xE9e par un vent fort. "),n("i",null,"L'explosion a un rayon de 1,5 m")],-1),nn=n("br",null,null,-1);function sn(m,o,u,s,r,f){const d=a("v-card-text"),l=a("v-col"),i=a("v-row"),_=a("v-card");return v(),E(_,{class:"ma-0 pa-0",flat:"",tile:""},{default:t(()=>[e(i,{align:"center"},{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(d,{class:"text-start"},{default:t(()=>[kt,Rt,Pt,wt,Lt,Tt,Mt,Ot,Ut,Bt,Nt,Ft,Gt,Ht,Jt,Qt,Xt,Kt,Wt,Yt,Zt,en,tn,nn]),_:1})]),_:1})]),_:1})]),_:1})}var on=q(It,[["render",sn]]);const an=V({setup(m,{expose:o}){o();const u=p("PAGE",0);$();const s={page:u,Magicien:bt,Alchimiste:yt,FormulesAlchimique:on};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),ln=c(" actions ");function rn(m,o,u,s,r,f){const d=se,l=a("v-col"),i=ie,_=a("v-row"),b=Ee,g=a("v-card-text"),h=Ke,x=a("v-card");return v(),E(x,{class:"h-screen ma-0 pa-0",color:"dark-grey",flat:"",tile:""},{default:t(()=>[s.page==0?(v(),E(_,{key:0},{default:t(()=>[e(l,{cols:"9"},{default:t(()=>[e(d)]),_:1}),e(l,{cols:"3"},{default:t(()=>[e(i)]),_:1})]),_:1})):z("",!0),s.page==1?(v(),E(_,{key:1},{default:t(()=>[e(l,{cols:"4"},{default:t(()=>[e(g,{class:"text-start"},{default:t(()=>[e(b)]),_:1})]),_:1}),e(l,{cols:"5"},{default:t(()=>[e(g,{class:"text-start"},{default:t(()=>[e(h)]),_:1})]),_:1}),e(l,{cols:"3"},{default:t(()=>[e(i)]),_:1})]),_:1})):z("",!0),s.page==2?(v(),E(_,{key:2},{default:t(()=>[e(l,{cols:"9"},{default:t(()=>[ln]),_:1}),e(l,{cols:"3"},{default:t(()=>[e(i)]),_:1})]),_:1})):z("",!0),s.page==3?(v(),E(_,{key:3},{default:t(()=>[e(l,{cols:"9"},{default:t(()=>[e(s.Magicien)]),_:1}),e(l,{cols:"3"},{default:t(()=>[e(i)]),_:1})]),_:1})):z("",!0),s.page==4?(v(),E(_,{key:4},{default:t(()=>[e(l,{cols:"9"},{default:t(()=>[e(s.Alchimiste)]),_:1}),e(l,{cols:"3"},{default:t(()=>[e(i)]),_:1})]),_:1})):z("",!0),s.page==5?(v(),E(_,{key:5},{default:t(()=>[e(l,{cols:"9"}),e(l,{cols:"3"},{default:t(()=>[e(i)]),_:1})]),_:1})):z("",!0),s.page==6?(v(),E(_,{key:6},{default:t(()=>[e(l,{cols:"9"},{default:t(()=>[e(s.FormulesAlchimique)]),_:1}),e(l,{cols:"3"},{default:t(()=>[e(i)]),_:1})]),_:1})):z("",!0)]),_:1})}var dn=q(an,[["render",rn]]);export{dn as default};