(function(e){function o(o){for(var a,r,c=o[0],s=o[1],l=o[2],u=0,w=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&w.push(n[r][0]),n[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);d&&d(o);while(w.length)w.shift()();return i.push.apply(i,l||[]),t()}function t(){for(var e,o=0;o<i.length;o++){for(var t=i[o],a=!0,c=1;c<t.length;c++){var s=t[c];0!==n[s]&&(a=!1)}a&&(i.splice(o--,1),e=r(r.s=t[0]))}return e}var a={},n={app:0},i=[];function r(o){if(a[o])return a[o].exports;var t=a[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=a,r.d=function(e,o,t){r.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,o){if(1&o&&(e=r(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var a in e)r.d(t,a,function(o){return e[o]}.bind(null,a));return t},r.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(o,"a",o),o},r.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=o,c=c.slice();for(var l=0;l<c.length;l++)o(c[l]);var d=s;i.push([0,"chunk-vendors"]),t()})({0:function(e,o,t){e.exports=t("56d7")},1446:function(e,o,t){"use strict";var a=t("f310"),n=t.n(a);n.a},"56d7":function(e,o,t){"use strict";t.r(o);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("v-app",[t("v-app-bar",{staticStyle:{"z-index":"2"},attrs:{color:"primary",app:"",dark:""}},[t("v-app-bar-nav-icon",{on:{click:function(o){return o.stopPropagation(),e.toggleLocationList(o)}}}),t("v-toolbar-title",{staticClass:"font-weight-bold text-body-2 text-sm-h6"},[e._v(" Ambisoniczna mapa Trójmiasta ")])],1),t("LocationList",{attrs:{showList:e.showList},on:{selectedLocationChanged:function(o){return e.onSelectedLocationChanged(o)}}}),t("Map",{attrs:{selectedLocation:e.selectedLocation},on:{selectedLocationChanged:function(o){return e.onSelectedLocationChanged(o)}}}),t("InfoSheet",{attrs:{showInfoSheet:e.showInfoSheet,selectedLocation:e.selectedLocation},on:{closeInfoSheet:e.closeInfoSheet}})],1)},i=[],r=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("v-container",{staticClass:"pa-0 ma-0",staticStyle:{width:"100%",height:"100vh"},attrs:{fluid:""}},[t("vl-map",{staticStyle:{width:"100%",height:"100%"},attrs:{"load-tiles-while-animating":!0,"load-tiles-while-interacting":!0},on:{click:function(o){return e.compareClickPointWithAllLocationsCoordinates(o)}}},[t("vl-view",{ref:"mapView",attrs:{zoom:e.zoom,center:e.center,rotation:e.rotation},on:{"update:zoom":function(o){e.zoom=o},"update:center":function(o){e.center=o},"update:rotation":function(o){e.rotation=o}}}),t("vl-layer-tile",{attrs:{id:"osm"}},[t("vl-source-osm")],1),e._l(e.locations,(function(o){return[e._l(o.places,(function(o){return[t("vl-feature",{key:o.name},[t("vl-geom-circle",{attrs:{coordinates:e.calculateCoordinates(o.coordinates),radius:e.circleRadius}})],1)]}))]}))],2)],1)},c=[],s=(t("4160"),t("159b"),[{city:"Gdynia",places:[{name:"Orłowo - Promenada",videoUrl:"https://www.youtube.com/embed/vMSAmFI9i08",description:"\n          Promenada Królowej Marysieńki to nadmorski deptak w Gdyni-Orłowie ciągnący się od ulicy Przebendowskich do Orłowskiego mola. \n          Roztacza się stąd wspaniały widok na Zatokę Gdańską, Klif Orłowski, a podczas dobrej pogody można podziwiać Półwysep Helski.\n          Na terenie promenady znajdują się liczne drzewa, krzewy oraz kwiaty. \n          Jest tu wiele ławek, trawników na pikniki rodzinne, plac zabaw dla dzieci.\n          Warto tu się wybrać na rodzinny spacer.\n        ",coordinates:[18.562761,54.477822]},{name:"Orłowo - Skwer Antoniego Suchanka",videoUrl:"https://www.youtube.com/embed/CzChXgcIDbw",description:"\n          Ławeczka Antoniego Suchanka znajduje się w Gdyni-Orłowie przy molo, na skwerze jego imienia. \n          Została odsłonięta 31 maja 2009. Jej autorem jest rzeźbiarz gdyński Zdzisław Koseda.\n          Ławeczka przedstawia artystę siedzącego na ławce parkowej i pogrążonego w pracy. \n          Obok niego na ławce leży kaseta z przyborami malarskimi.\n        ",coordinates:[18.564038,54.480681]},{name:"Orłowo - Plaża",videoUrl:"https://www.youtube.com/embed/h7XRcJNtP1g",description:"\n          Plaża znana jest z ładnego widoku na Cypel Redłowski, znajduje się 15 min spacerem od dworca Gdynia Orłowo. \n          Na szerokości 100 metrów do końca sierpnia plaża jest strzeżona, szerokość plaży to 30 m. \n          Zaplecze turystyczne jest tutaj dość skromne, ale za to można kupić świeżo uwędzoną rybę prosto od rybaka. \n        ",coordinates:[18.565539,54.482516]},{name:"Orłowo - Molo",videoUrl:"https://www.youtube.com/embed/gIeWFMgyFUM",description:"\n          Drewniane molo znajdujące się w nadmorskiej, południowej dzielnicy Gdyni.\n          Nieopodal znajduje się Scena Letnia Teatru Miejskiego w Gdyni. \n          Będąc na molo można podziwiać Klif Orłowski.\n        ",coordinates:[18.566779,54.479738]},{name:"Skwer Kościuszki",videoUrl:"https://www.youtube.com/embed/y27v07CRaxM",description:"\n          Reprezentacyjna ulica Śródmieścia Gdyni stanowiąca wspólnie z ulicą 10 Lutego i aleją Jana Pawła II wizytówkę Gdyni.\n          Przy Skwerze Kościuszki cumują Dar Pomorza oraz ORP Błyskawica. \n          Nieopodal znajduje się również Muzeum Oceanograficzne, Akwarium Morskie oraz przystań Żeglugi Pasażerskiej.\n        ",coordinates:[18.559007,54.518421]},{name:"Bulwar Nadmorski",videoUrl:"https://www.youtube.com/embed/G5xtX190bcE",description:"\n          Bulwar Nadmorski to najpopularniejszy w Gdyni trakt spacerowy. \n          Ma 1.5 km długości, jest częstym miejscem przechadzek i wycieczek rowerowych. \n          Jest jednym ze znaków rozpoznawczych Gdyni obok Skweru Kościuszki i żaglowca 'Dar Pomorze'.\n        ",coordinates:[18.551318,54.51256]},{name:"Port Gdynia",videoUrl:"https://www.youtube.com/embed/VWvx6ufz02A",description:"\n          Handlowy port morski nad Zatoką Gdańską, położony na Pobrzeżu Kaszubskim. \n          Jest trzecim co do wielkości portem morskim w Polsce (po Gdańsku i Szczecinie).\n          Należy do Europejskiej Organizacji Portów Morskich. \n          Materiał zarejestrowano podczas wypłynięcia promu Stena Line z Gdyni do Karlskrony. \n        ",coordinates:[18.547769,54.534704]}]},{city:"Sopot",places:[{name:"Molo",videoUrl:"https://www.youtube.com/embed/WXFOchbI0qg",description:"\n          Molo to jeden z najpopularniejszych polskich obiektów rekreacyjno-imprezowych, wizytówka kurortu.\n          Obiekt składa się z 2 części: drewnianej i lądowej.\n          Część lądowa (Skwer Kuracyjny) to plac o powierzchni 20 tys. mkw., na którym znajdują się: przepiękna zabytkowa fontanna, latarnia morska z punktem widokowym, muszla koncertowa, punkty gastronomiczne oraz dużo zieleni. \n          Na placu mogą byś organizowane imprezy masowe do 6 tys. osób, a w okresie zimowym funkcjonuje tu sztuczne lodowisko.\n        ",coordinates:[18.574833,54.447474]},{name:"Monciak",videoUrl:"https://www.youtube.com/embed/B2SIt_aaxpE",description:"\n          Monciak, czyli prowadząca do mola ulica Bohaterów Monte Cassino, to najsłynniejszy w kraju deptak, przy którym mieszczą się liczne puby i galerie, a latem prezentują się uliczne teatry wędrowne i muzycy. \n          Ulica ma około 635 metrów długości i jest zamknięta dla ruchu samochodowego, co czyni z niej jeden z najsłynniejszych deptaków w Polsce.\n          Zabudowę Monciaka stanowią XIX- i XX-wieczne kamieniczki.\n          Ulicę wieńczy niewielki plac z fontanną, który później przechodzi w molo.\n        ",coordinates:[18.566958,54.444098]},{name:"Park Północny",videoUrl:"https://www.youtube.com/embed/bJODWTvc8HY",description:'\n          Park Północny w Sopocie rozciąga się od Grand Hotelu do potoku Swelinia, który stanowi granicę z Gdynią.\n          W jego sąsiedztwie usytuowany jest budynek Teatru na Plaży, gdzie często odbywają się tu imprezy z dziedziny teatru, muzyki i filmu.\n          Na terenie parku znajdują się dwa pomniki: Jerzego Haffnera - twórcy uzdrowiska w Sopocie oraz kamienna rzeźba zatytuowana "Pragnienie".\n        ',coordinates:[18.566114,54.449337]}]},{city:"Gdańsk",places:[{name:"Westerplatte",videoUrl:"https://www.youtube.com/embed/mpfcT4qxXms",description:"\n          Od wieków Westerplatte pełniło punkt obronny dla Gdańska. \n          To tu kolejne armie budowały miejsca oporu przed najeźdźcą. \n          Przed wojną istniał tu także dobrze prosperujący kurort.\n          Obecnie na Westerplatte zwiedzać można dobrze zachowaną Wartownię nr 1, symboliczny cmentarzyk obrońców Westerplatte oraz budynek nowych koszarów. \n          Symbolem Westerplatte jest Pomnik Obrońców Wybrzeża, postawiony tu w czasie komunizmu i niestety zawierający wiele przekłamań historycznych.\n        ",coordinates:[18.667028,54.406525]},{name:"Stogi - Plaża",videoUrl:"https://www.youtube.com/embed/IR9pozkJRBY",description:"\n          Plaża na Stogach jest jedną z najczystszych plaż w Trójmieście. \n          Jej długość to 4 km, w tym 400 m kąpieliska, a w niektórych miejscach jest szeroka nawet na 100 m.\n          Jedną z atrakcji tego miejsca jest Letni Stadion, wyposażony w trybuny na 1500 osób, na którym odbywają się liczne turnieje – m.in. plażowe rugby i piłka ręczna.\n          Ponadto klimatu dodaje widok na pobliski Terminal Kontenerowy.\n        ",coordinates:[18.727846,54.376199]},{name:"Nowy Port - Latarnia Morska",videoUrl:"https://www.youtube.com/embed/ZYvGDgvNNO8",description:"\n          Latarnia morska w Nowym Porcie to budowla, która przez lata wskazywała statkom drogę do gdańskiego portu.\n          Ośmiokątna wieża, zakończona galerią i laterną z miedzianą kopułą, sięga wysokości 27,3 metra.\n          Obecnie jest to jedyna prywatna latarnia morska w Polsce, z której w sezonie od wiosny do jesieni można podziwiać widok na całą Zatokę Gdańską.\n        ",coordinates:[18.661273,54.407051]},{name:"Długi Targ",videoUrl:"https://www.youtube.com/embed/LoNlZo8X5xI",description:"\n          Reprezentacyjny plac w Gdańsku, w dzielnicy Śródmieście, na Głównym Mieście.\n          Pełni funkcję rynku, jest przedłużeniem ul. Długiej, z którą tworzy tzw. Drogę Królewską.\n          Na Długim Targu znajdują się również liczne zabytki, w tym m.in.: Fontanna Neptuna, Dwór Artusa czy Brama Zielona.\n        ",coordinates:[18.653879,54.348381]},{name:"Park Oliwski - Potok Oliwski",videoUrl:"https://www.youtube.com/embed/YtCptlTF4MQ",description:"\n          Potok Oliwski jest jednym z głównych cieków odwadniających obszar Lasów Oliwskich, który uchodzi do Zatoki Gdańskiej.\n          Wzdłuż potoku funkcjonowały liczne urządzenia, obiekty zabudowy hydrotechnicznej: przegrody z przepustami, stawy, zbiorniki młyńskie, oraz urządzenia gospodarcze: młyny, kuźnie, folusze.\n          W materiale przedstawiono wodospad po dawnym młynie VII, znajdujący się na terenie Parku Oliwskiego.\n        ",coordinates:[18.561691,54.411094]},{name:"Park Oliwski - Pałac Opatów",videoUrl:"https://www.youtube.com/embed/gGNjyCC--a4",description:"\n          Zabytkowy pałac w Gdańsku Oliwie, umiejscowiony w Parku Oliwskim.\n          Obecnie mieści się tam Oddział Sztuki Nowoczesnej Muzeum Narodowego w Gdańsku.\n          Stała Galeria Polskiej Sztuki Nowoczesnej prezentuje około 400 dzieł najwybitniejszych artystów XIX i XX wieku.\n          Artyści, których dzieła prezentowane są w Galerii: Jan Matejko, Piotr Michałowski, Olga Boznańska, Jacek Malczewski, Stanisław Wyspiański, Wojciech Weiss.\n        ",coordinates:[18.560225,54.410508]}]}]),l=s,d=t("2986"),u={name:"Map",data:function(){return{zoom:11,center:Object(d["W"])([18.62,54.45]),rotation:0,circleRadius:350,locations:l}},props:{selectedLocation:Object},watch:{selectedLocation:{handler:function(e){null!==e&&this.$refs.mapView.animate({zoom:17},{center:this.calculateNewCenter(e.coordinates)})}}},methods:{calculateCoordinates:function(e){return Object(d["W"])(e)},calculateNewCenter:function(e){var o=this.calculateCoordinates(e);return o[0]-=100,o[1]-=50,o},compareClickPointWithAllLocationsCoordinates:function(e){var o=this,t=e.coordinate,a=null;l.forEach((function(e){e.places.forEach((function(e){var n=o.calculateCoordinates(e.coordinates);t[0]>n[0]-o.circleRadius&&t[0]<n[0]+o.circleRadius&&t[1]>n[1]-o.circleRadius&&t[1]<n[1]+o.circleRadius&&(a=e)}))})),this.$emit("selectedLocationChanged",a)}}},w=u,p=t("2877"),m=t("6544"),y=t.n(m),z=t("a523"),k=Object(p["a"])(w,r,c,!1,null,null,null),h=k.exports;y()(k,{VContainer:z["a"]});var f=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("v-navigation-drawer",{staticClass:"pt-14",staticStyle:{"z-index":"1"},attrs:{fixed:"","hide-overlay":"",stateless:""},model:{value:e.showList,callback:function(o){e.showList=o},expression:"showList"}},[t("v-list",[t("v-subheader",{staticClass:"text-subtitle-1 font-weight-bold"},[e._v(" Lokalizacje ")]),e._l(e.locations,(function(o,a){return t("v-list-group",{key:a,scopedSlots:e._u([{key:"activator",fn:function(){return[t("v-list-item-title",{staticClass:"font-weight-bold"},[e._v(" "+e._s(o.city)+" ")])]},proxy:!0}],null,!0)},e._l(o.places,(function(o,a){return t("v-list-item",{key:a,staticClass:"text-subtitle-2 font-weight-regular",on:{click:function(t){return e.selectLocation(o)}}},[e._v(" "+e._s(o.name)+" ")])})),1)}))],2)],1)},b=[],j={name:"LocationList",data:function(){return{locations:l}},props:{showList:Boolean},methods:{selectLocation:function(e){this.$emit("selectedLocationChanged",e)}}},v=j,g=t("8860"),L=t("56b0"),S=t("da13"),O=t("5d23"),P=t("f774"),C=t("e0c7"),I=Object(p["a"])(v,f,b,!1,null,null,null),_=I.exports;y()(I,{VList:g["a"],VListGroup:L["a"],VListItem:S["a"],VListItemTitle:O["a"],VNavigationDrawer:P["a"],VSubheader:C["a"]});var x=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("v-bottom-sheet",{attrs:{selectedLocation:e.selectedLocation,"hide-overlay":"",persistent:"","no-click-animation":"",inset:""},model:{value:e.showInfoSheet,callback:function(o){e.showInfoSheet=o},expression:"showInfoSheet"}},[null!==e.selectedLocation?t("v-card",{attrs:{flat:"",outlined:""}},[t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"12",md:"6"}},[t("v-card-title",{staticClass:"font-weight-bold text-body-2 text-sm-h6"},[e._v(" "+e._s(e.selectedLocation.name)+" ")]),t("v-card-text",{staticClass:"text-justify"},[e._v(" "+e._s(e.selectedLocation.description)+" ")]),t("v-card-actions",[t("a",{staticClass:"d-md-none",attrs:{href:e.selectedLocation.videoUrl}},[t("v-btn",{attrs:{icon:""}},[t("v-icon",[e._v("mdi-youtube")])],1)],1),t("v-spacer"),t("v-btn",{attrs:{color:"primary",text:""},on:{click:e.closeInfoSheet}},[e._v(" Zamknij ")])],1)],1),t("v-col",{attrs:{cols:"12",md:"6"}},[t("iframe",{attrs:{src:e.selectedLocation.videoUrl,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1)],1)],1):e._e()],1)},M=[],G={name:"InfoSheet",props:{showInfoSheet:Boolean,selectedLocation:Object},methods:{closeInfoSheet:function(){this.$emit("closeInfoSheet")}}},V=G,N=(t("1446"),t("288c")),W=t("8336"),U=t("b0af"),T=t("99d9"),R=t("62ad"),A=t("132d"),B=t("0fd9"),J=t("2fa4"),X=Object(p["a"])(V,x,M,!1,null,"52a8df60",null),Z=X.exports;y()(X,{VBottomSheet:N["a"],VBtn:W["a"],VCard:U["a"],VCardActions:T["a"],VCardText:T["b"],VCardTitle:T["c"],VCol:R["a"],VContainer:z["a"],VIcon:A["a"],VRow:B["a"],VSpacer:J["a"]});var D={name:"App",data:function(){return{showList:!0,showInfoSheet:!1,selectedLocation:null}},methods:{toggleLocationList:function(){this.showList=!this.showList},onSelectedLocationChanged:function(e){this.selectedLocation=e,this.showInfoSheet=!!e},closeInfoSheet:function(){this.showInfoSheet=!1}},components:{InfoSheet:Z,Map:h,LocationList:_}},K=D,E=t("7496"),$=t("40dc"),F=t("5bc1"),H=t("2a7f"),Y=Object(p["a"])(K,n,i,!1,null,null,null),q=Y.exports;y()(Y,{VApp:E["a"],VAppBar:$["a"],VAppBarNavIcon:F["a"],VToolbarTitle:H["a"]});var Q=t("f309");a["a"].use(Q["a"]);var ee=new Q["a"]({}),oe=t("1cf8");a["a"].config.productionTip=!1,a["a"].use(oe["a"]),new a["a"]({vuetify:ee,render:function(e){return e(q)}}).$mount("#app")},f310:function(e,o,t){}});
//# sourceMappingURL=app.e8896cf8.js.map