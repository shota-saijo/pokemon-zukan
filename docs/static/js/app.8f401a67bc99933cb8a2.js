webpackJsonp([1],{"7zck":function(n,e){},NHnr:function(n,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("7+uW"),m={render:function(){var n=this.$createElement,e=this._self._c||n;return e("v-app",{attrs:{dark:""}},[e("v-toolbar",{attrs:{color:"red",dense:"",fixed:"","clipped-left":"",app:""}},[e("v-toolbar-title",{staticClass:"mr-5 align-center"},[e("span",{staticClass:"title"},[this._v("ポケモン図鑑")])])],1),this._v(" "),e("v-content",[e("v-container",{attrs:{"fill-height":"","grid-list-md":""}},[this._t("default")],2)],1)],1)},staticRenderFns:[]},r=a("VU/8")({name:"BaseLayout"},m,!1,null,null,null).exports,t=a("Xxa5"),i=a.n(t),l=a("exGp"),s=a.n(l),u=a("22C0"),c=a.n(u),p=a("woOf"),g=a.n(p),d=a("bOdI"),h=a.n(d),k={name:"Detail",props:{pokemon:{type:Object,required:!0},species:{type:Object,required:!0}},data:function(){return{tab:null,version:0}},computed:{status:function(){return this.pokemon.stats.map(function(n){return h()({},n.stat.name.replace("-",""),n.base_stat)}).reduce(function(n,e){return g()(n,e)},{})},weight:function(){return this.pokemon.weight/10+"kg"},height:function(){return"0."+this.pokemon.height+"m"},texts:function(){return this.species.flavor_text_entries.filter(function(n){return"ja"===n.language.name}).map(function(n){return{version:n.version.name,text:n.flavor_text.replace(/。/g,"。<br>")}})},text:function(){return this.texts[this.version]},genera:function(){return this.species.genera.filter(function(n){return"ja"===n.language.name}).map(function(n){return n.genus})}},methods:{toggleVersion:function(){var n=this.version+1;this.version=n>=4?n%this.texts.length:n}}},b={render:function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("v-card-text",[a("v-tabs",{attrs:{left:"","hide-slider":""},model:{value:n.tab,callback:function(e){n.tab=e},expression:"tab"}},[a("v-tabs-slider"),n._v(" "),a("v-tab",[n._v("基本情報")]),n._v(" "),a("v-tab",[n._v("種族値")]),n._v(" "),a("v-tabs-items",{model:{value:n.tab,callback:function(e){n.tab=e},expression:"tab"}},[a("v-tab-item",[a("div",[a("v-chip",{attrs:{label:"",color:"primary","text-color":"white"}},[n._v("ぜんこくNo. "+n._s(("00"+n.pokemon.id).slice(-3)))])],1),n._v(" "),a("div",[n.text?a("v-chip",{attrs:{label:"",color:"primary","text-color":"white"},on:{click:n.toggleVersion}},[n._v(n._s(n.$t("versions."+n.text.version)))]):n._e()],1),n._v(" "),n.text?a("blockquote",{staticClass:"ml-3",domProps:{innerHTML:n._s(n.text.text)}}):n._e(),n._v(" "),a("v-chip",{attrs:{label:"",color:"primary","text-color":"white"}},[n._v("重さ: "+n._s(n.weight))]),n._v(" "),a("v-chip",{attrs:{label:"",color:"primary","text-color":"white"}},[n._v("高さ: "+n._s(n.height))])],1),n._v(" "),a("v-tab-item",[a("div",[a("v-chip",{attrs:{label:"",color:"black","text-color":"white"}},[n._v("HP: "+n._s(n.status.hp))])],1),n._v(" "),a("div",[a("v-chip",{attrs:{label:"",color:"red","text-color":"white"}},[n._v("こうげき: "+n._s(n.status.attack))])],1),n._v(" "),a("div",[a("v-chip",{attrs:{label:"",color:"yellow","text-color":"white"}},[n._v("ぼうぎょ: "+n._s(n.status.defense))])],1),n._v(" "),a("div",[a("v-chip",{attrs:{label:"",color:"blue","text-color":"white"}},[n._v("とくこう: "+n._s(n.status.specialattack))])],1),n._v(" "),a("div",[a("v-chip",{attrs:{label:"",color:"green","text-color":"white"}},[n._v("とくぼう: "+n._s(n.status.specialdefense))])],1),n._v(" "),a("div",[a("v-chip",{attrs:{label:"",color:"pink","text-color":"white"}},[n._v("すばやさ: "+n._s(n.status.speed))])],1)])],1)],1)],1)},staticRenderFns:[]},v=a("VU/8")(k,b,!1,null,null,null).exports,f="https://pokeapi.co/api/v2",y=c.a.createInstance(),w={name:"Card",components:{detail:v},props:{name:{type:String,required:!0}},data:function(){return{loading:!0,show:!1,pokemon:null,pokemonSpecies:null}},methods:{getPokemonFromApi:function(){var n=this;return s()(i.a.mark(function e(){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.$http.get(f+"/pokemon/"+n.name+"/");case 2:a=e.sent,n.pokemon=a.data,y.setItem("pokemon."+n.name,a.data);case 5:case"end":return e.stop()}},e,n)}))()},getPokemonSpeciesFromApi:function(){var n=this;return s()(i.a.mark(function e(){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.$http.get(f+"/pokemon-species/"+n.name+"/");case 2:a=e.sent,n.pokemonSpecies=a.data,y.setItem("pokemon.species."+n.name,a.data);case 5:case"end":return e.stop()}},e,n)}))()},getPokemonFromStorage:function(){var n=this;return s()(i.a.mark(function e(){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.getItem("pokemon."+n.name);case 2:a=e.sent,n.pokemon=a;case 4:case"end":return e.stop()}},e,n)}))()},getPokemonSpeciesFromStorage:function(){var n=this;return s()(i.a.mark(function e(){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.getItem("pokemon.species."+n.name);case 2:a=e.sent,n.pokemonSpecies=a;case 4:case"end":return e.stop()}},e,n)}))()}},created:function(){var n=this;return s()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getPokemonFromStorage();case 2:return e.next=4,n.getPokemonSpeciesFromStorage();case 4:if(n.pokemon){e.next=7;break}return e.next=7,n.getPokemonFromApi();case 7:if(n.pokemonSpecies){e.next=10;break}return e.next=10,n.getPokemonSpeciesFromApi();case 10:n.loading=!1;case 11:case"end":return e.stop()}},e,n)}))()}},x={render:function(){var n=this,e=n.$createElement,a=n._self._c||e;return n.loading?a("v-card",[a("v-card-text",[a("v-progress-circular",{attrs:{indeterminate:"",size:100,width:7,color:"primary"}})],1)],1):a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("h3",[n._v(n._s(n.pokemonSpecies.names.find(function(n){return"ja"===n.language.name}).name))]),n._v(" "),a("v-spacer"),n._v(" "),n._l(n.pokemon.types,function(e){return a("v-chip",{key:e.slot,attrs:{color:n.$t("type-colors."+e.type.name),"text-color":"white"}},[n._v(n._s(n.$t("types."+e.type.name)))])})],2),n._v(" "),a("v-card-media",{attrs:{src:n.pokemon.sprites.front_default,contain:"",height:"200px"},on:{click:function(e){n.show=!n.show}}}),n._v(" "),a("v-slide-y-transition",[n.show?a("detail",{attrs:{pokemon:n.pokemon,species:n.pokemonSpecies}}):n._e()],1)],1)},staticRenderFns:[]},_=a("VU/8")(w,x,!1,null,null,null).exports,z=a("j0OM"),j=a.n(z),P={name:"List",components:{card:_},data:function(){return{displayPerPage:10,page:1}},computed:{start:function(){return(this.page-1)*this.displayPerPage},end:function(){return this.page*this.displayPerPage},displayPokemons:function(){var n=this;return j.a.list.filter(function(e,a){return n.start<=a&&a<n.end})},count:function(){return j.a.list.length},pageCount:function(){return Math.ceil(this.count/this.displayPerPage)}},methods:{previous:function(){this.page=this.page-1},next:function(){this.page=this.page+1}}},q={render:function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-spacer"),n._v(" "),a("v-btn",{attrs:{disabled:1===n.page},on:{click:n.previous}},[n._v("前へ")]),n._v(" "),a("v-btn",{attrs:{disabled:n.pageCount===n.page},on:{click:n.next}},[n._v("次へ")])],1),n._v(" "),n._l(n.displayPokemons,function(n){return a("v-flex",{key:n.no},[a("card",{attrs:{name:n.name}})],1)})],2)},staticRenderFns:[]},S={name:"App",components:{"base-layout":r,list:a("VU/8")(P,q,!1,null,null,null).exports}},F={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",{attrs:{id:"app"}},[e("base-layout",[e("list")],1)],1)},staticRenderFns:[]},$=a("VU/8")(S,F,!1,null,null,null).exports,V=a("3EgV"),A=a.n(V),C=a("TXmL"),O=a("mtWM"),E=a.n(O),I=a("Rf8U"),M=a.n(I),R=a("cZB7"),U=a.n(R);a("7zck");o.a.config.productionTip=!1,o.a.use(A.a),o.a.use(C.a),o.a.use(M.a,E.a);var H=new C.a({locale:"ja",messages:U.a});new o.a({el:"#app",i18n:H,components:{App:$},template:"<App/>"})},cZB7:function(n,e){n.exports={ja:{types:{poison:"どく",grass:"くさ",fire:"ほのお",normal:"ノーマル",fighting:"かくとう",flying:"ひこう",ground:"じめん",rock:"いわ",bug:"むし",ghost:"ゴースト",steel:"はがね",water:"みず",electric:"でんき",psychic:"エスパー",ice:"こおり",dragon:"ドラゴン",dark:"あく",fairy:"フェアリー"},"type-colors":{poison:"purple",grass:"teal",fire:"red",normal:"white",fighting:"deep-orange lighten-1",flying:"blue-grey lighten-5",ground:"brown",rock:"brown darken-1",bug:"light-green darken-2",ghost:"purple darken-2",steel:"blue-grey lighten-4",water:"blue",electric:"yellow",psychic:"purple accent-3",ice:"light-blue darken-1",dragon:"light-blue darken-4",dark:"grey darken-4",fairy:"pink accent-1"},versions:{red:"赤",blue:"青",yellow:"黄",gold:"金",silver:"銀",crystal:"クリスタル",ruby:"ルビー",sapphire:"サファイア",emerald:"エメラルド",firered:"ファイアレッド",leafgreen:"リーフグリーン",diamond:"ダイアモンド",pearl:"パール",platinum:"プラチナ",heartgold:"ハートゴールド",soulsilver:"ソウルシルバー",black:"ブラック",white:"ホワイト","black-2":"ブラック２","white-2":"ホワイト２",x:"X",y:"Y","omega-ruby":"オメガルビー","alpha-sapphire":"アルファサファイア",sun:"サン",moon:"ムーン",colosseum:"コロシアム",xd:"XD"}}}},j0OM:function(n,e){n.exports={list:[{no:"1",name:"bulbasaur"},{no:"2",name:"ivysaur"},{no:"3",name:"venusaur"},{no:"4",name:"charmander"},{no:"5",name:"charmeleon"},{no:"6",name:"charizard"},{no:"7",name:"squirtle"},{no:"8",name:"wartortle"},{no:"9",name:"blastoise"},{no:"10",name:"caterpie"},{no:"11",name:"metapod"},{no:"12",name:"butterfree"},{no:"13",name:"weedle"},{no:"14",name:"kakuna"},{no:"15",name:"beedrill"},{no:"16",name:"pidgey"},{no:"17",name:"pidgeotto"},{no:"18",name:"pidgeot"},{no:"19",name:"rattata"},{no:"20",name:"raticate"},{no:"21",name:"spearow"},{no:"22",name:"fearow"},{no:"23",name:"ekans"},{no:"24",name:"arbok"},{no:"25",name:"pikachu"},{no:"26",name:"raichu"},{no:"27",name:"sandshrew"},{no:"28",name:"sandslash"},{no:"29",name:"nidoran-f"},{no:"30",name:"nidorina"},{no:"31",name:"nidoqueen"},{no:"32",name:"nidoran-m"},{no:"33",name:"nidorino"},{no:"34",name:"nidoking"},{no:"35",name:"clefairy"},{no:"36",name:"clefable"},{no:"37",name:"vulpix"},{no:"38",name:"ninetales"},{no:"39",name:"jigglypuff"},{no:"40",name:"wigglytuff"},{no:"41",name:"zubat"},{no:"42",name:"golbat"},{no:"43",name:"oddish"},{no:"44",name:"gloom"},{no:"45",name:"vileplume"},{no:"46",name:"paras"},{no:"47",name:"parasect"},{no:"48",name:"venonat"},{no:"49",name:"venomoth"},{no:"50",name:"diglett"},{no:"51",name:"dugtrio"},{no:"52",name:"meowth"},{no:"53",name:"persian"},{no:"54",name:"psyduck"},{no:"55",name:"golduck"},{no:"56",name:"mankey"},{no:"57",name:"primeape"},{no:"58",name:"growlithe"},{no:"59",name:"arcanine"},{no:"60",name:"poliwag"},{no:"61",name:"poliwhirl"},{no:"62",name:"poliwrath"},{no:"63",name:"abra"},{no:"64",name:"kadabra"},{no:"65",name:"alakazam"},{no:"66",name:"machop"},{no:"67",name:"machoke"},{no:"68",name:"machamp"},{no:"69",name:"bellsprout"},{no:"70",name:"weepinbell"},{no:"71",name:"victreebel"},{no:"72",name:"tentacool"},{no:"73",name:"tentacruel"},{no:"74",name:"geodude"},{no:"75",name:"graveler"},{no:"76",name:"golem"},{no:"77",name:"ponyta"},{no:"78",name:"rapidash"},{no:"79",name:"slowpoke"},{no:"80",name:"slowbro"},{no:"81",name:"magnemite"},{no:"82",name:"magneton"},{no:"83",name:"farfetchd"},{no:"84",name:"doduo"},{no:"85",name:"dodrio"},{no:"86",name:"seel"},{no:"87",name:"dewgong"},{no:"88",name:"grimer"},{no:"89",name:"muk"},{no:"90",name:"shellder"},{no:"91",name:"cloyster"},{no:"92",name:"gastly"},{no:"93",name:"haunter"},{no:"94",name:"gengar"},{no:"95",name:"onix"},{no:"96",name:"drowzee"},{no:"97",name:"hypno"},{no:"98",name:"krabby"},{no:"99",name:"kingler"},{no:"100",name:"voltorb"},{no:"101",name:"electrode"},{no:"102",name:"exeggcute"},{no:"103",name:"exeggutor"},{no:"104",name:"cubone"},{no:"105",name:"marowak"},{no:"106",name:"hitmonlee"},{no:"107",name:"hitmonchan"},{no:"108",name:"lickitung"},{no:"109",name:"koffing"},{no:"110",name:"weezing"},{no:"111",name:"rhyhorn"},{no:"112",name:"rhydon"},{no:"113",name:"chansey"},{no:"114",name:"tangela"},{no:"115",name:"kangaskhan"},{no:"116",name:"horsea"},{no:"117",name:"seadra"},{no:"118",name:"goldeen"},{no:"119",name:"seaking"},{no:"120",name:"staryu"},{no:"121",name:"starmie"},{no:"122",name:"mr-mime"},{no:"123",name:"scyther"},{no:"124",name:"jynx"},{no:"125",name:"electabuzz"},{no:"126",name:"magmar"},{no:"127",name:"pinsir"},{no:"128",name:"tauros"},{no:"129",name:"magikarp"},{no:"130",name:"gyarados"},{no:"131",name:"lapras"},{no:"132",name:"ditto"},{no:"133",name:"eevee"},{no:"134",name:"vaporeon"},{no:"135",name:"jolteon"},{no:"136",name:"flareon"},{no:"137",name:"porygon"},{no:"138",name:"omanyte"},{no:"139",name:"omastar"},{no:"140",name:"kabuto"},{no:"141",name:"kabutops"},{no:"142",name:"aerodactyl"},{no:"143",name:"snorlax"},{no:"144",name:"articuno"},{no:"145",name:"zapdos"},{no:"146",name:"moltres"},{no:"147",name:"dratini"},{no:"148",name:"dragonair"},{no:"149",name:"dragonite"},{no:"150",name:"mewtwo"},{no:"151",name:"mew"},{no:"152",name:"chikorita"},{no:"153",name:"bayleef"},{no:"154",name:"meganium"},{no:"155",name:"cyndaquil"},{no:"156",name:"quilava"},{no:"157",name:"typhlosion"},{no:"158",name:"totodile"},{no:"159",name:"croconaw"},{no:"160",name:"feraligatr"},{no:"161",name:"sentret"},{no:"162",name:"furret"},{no:"163",name:"hoothoot"},{no:"164",name:"noctowl"},{no:"165",name:"ledyba"},{no:"166",name:"ledian"},{no:"167",name:"spinarak"},{no:"168",name:"ariados"},{no:"169",name:"crobat"},{no:"170",name:"chinchou"},{no:"171",name:"lanturn"},{no:"172",name:"pichu"},{no:"173",name:"cleffa"},{no:"174",name:"igglybuff"},{no:"175",name:"togepi"},{no:"176",name:"togetic"},{no:"177",name:"natu"},{no:"178",name:"xatu"},{no:"179",name:"mareep"},{no:"180",name:"flaaffy"},{no:"181",name:"ampharos"},{no:"182",name:"bellossom"},{no:"183",name:"marill"},{no:"184",name:"azumarill"},{no:"185",name:"sudowoodo"},{no:"186",name:"politoed"},{no:"187",name:"hoppip"},{no:"188",name:"skiploom"},{no:"189",name:"jumpluff"},{no:"190",name:"aipom"},{no:"191",name:"sunkern"},{no:"192",name:"sunflora"},{no:"193",name:"yanma"},{no:"194",name:"wooper"},{no:"195",name:"quagsire"},{no:"196",name:"espeon"},{no:"197",name:"umbreon"},{no:"198",name:"murkrow"},{no:"199",name:"slowking"},{no:"200",name:"misdreavus"},{no:"201",name:"unown"},{no:"202",name:"wobbuffet"},{no:"203",name:"girafarig"},{no:"204",name:"pineco"},{no:"205",name:"forretress"},{no:"206",name:"dunsparce"},{no:"207",name:"gligar"},{no:"208",name:"steelix"},{no:"209",name:"snubbull"},{no:"210",name:"granbull"},{no:"211",name:"qwilfish"},{no:"212",name:"scizor"},{no:"213",name:"shuckle"},{no:"214",name:"heracross"},{no:"215",name:"sneasel"},{no:"216",name:"teddiursa"},{no:"217",name:"ursaring"},{no:"218",name:"slugma"},{no:"219",name:"magcargo"},{no:"220",name:"swinub"},{no:"221",name:"piloswine"},{no:"222",name:"corsola"},{no:"223",name:"remoraid"},{no:"224",name:"octillery"},{no:"225",name:"delibird"},{no:"226",name:"mantine"},{no:"227",name:"skarmory"},{no:"228",name:"houndour"},{no:"229",name:"houndoom"},{no:"230",name:"kingdra"},{no:"231",name:"phanpy"},{no:"232",name:"donphan"},{no:"233",name:"porygon2"},{no:"234",name:"stantler"},{no:"235",name:"smeargle"},{no:"236",name:"tyrogue"},{no:"237",name:"hitmontop"},{no:"238",name:"smoochum"},{no:"239",name:"elekid"},{no:"240",name:"magby"},{no:"241",name:"miltank"},{no:"242",name:"blissey"},{no:"243",name:"raikou"},{no:"244",name:"entei"},{no:"245",name:"suicune"},{no:"246",name:"larvitar"},{no:"247",name:"pupitar"},{no:"248",name:"tyranitar"},{no:"249",name:"lugia"},{no:"250",name:"ho-oh"},{no:"251",name:"celebi"},{no:"252",name:"treecko"},{no:"253",name:"grovyle"},{no:"254",name:"sceptile"},{no:"255",name:"torchic"},{no:"256",name:"combusken"},{no:"257",name:"blaziken"},{no:"258",name:"mudkip"},{no:"259",name:"marshtomp"},{no:"260",name:"swampert"},{no:"261",name:"poochyena"},{no:"262",name:"mightyena"},{no:"263",name:"zigzagoon"},{no:"264",name:"linoone"},{no:"265",name:"wurmple"},{no:"266",name:"silcoon"},{no:"267",name:"beautifly"},{no:"268",name:"cascoon"},{no:"269",name:"dustox"},{no:"270",name:"lotad"},{no:"271",name:"lombre"},{no:"272",name:"ludicolo"},{no:"273",name:"seedot"},{no:"274",name:"nuzleaf"},{no:"275",name:"shiftry"},{no:"276",name:"taillow"},{no:"277",name:"swellow"},{no:"278",name:"wingull"},{no:"279",name:"pelipper"},{no:"280",name:"ralts"},{no:"281",name:"kirlia"},{no:"282",name:"gardevoir"},{no:"283",name:"surskit"},{no:"284",name:"masquerain"},{no:"285",name:"shroomish"},{no:"286",name:"breloom"},{no:"287",name:"slakoth"},{no:"288",name:"vigoroth"},{no:"289",name:"slaking"},{no:"290",name:"nincada"},{no:"291",name:"ninjask"},{no:"292",name:"shedinja"},{no:"293",name:"whismur"},{no:"294",name:"loudred"},{no:"295",name:"exploud"},{no:"296",name:"makuhita"},{no:"297",name:"hariyama"},{no:"298",name:"azurill"},{no:"299",name:"nosepass"},{no:"300",name:"skitty"},{no:"301",name:"delcatty"},{no:"302",name:"sableye"},{no:"303",name:"mawile"},{no:"304",name:"aron"},{no:"305",name:"lairon"},{no:"306",name:"aggron"},{no:"307",name:"meditite"},{no:"308",name:"medicham"},{no:"309",name:"electrike"},{no:"310",name:"manectric"},{no:"311",name:"plusle"},{no:"312",name:"minun"},{no:"313",name:"volbeat"},{no:"314",name:"illumise"},{no:"315",name:"roselia"},{no:"316",name:"gulpin"},{no:"317",name:"swalot"},{no:"318",name:"carvanha"},{no:"319",name:"sharpedo"},{no:"320",name:"wailmer"},{no:"321",name:"wailord"},{no:"322",name:"numel"},{no:"323",name:"camerupt"},{no:"324",name:"torkoal"},{no:"325",name:"spoink"},{no:"326",name:"grumpig"},{no:"327",name:"spinda"},{no:"328",name:"trapinch"},{no:"329",name:"vibrava"},{no:"330",name:"flygon"},{no:"331",name:"cacnea"},{no:"332",name:"cacturne"},{no:"333",name:"swablu"},{no:"334",name:"altaria"},{no:"335",name:"zangoose"},{no:"336",name:"seviper"},{no:"337",name:"lunatone"},{no:"338",name:"solrock"},{no:"339",name:"barboach"},{no:"340",name:"whiscash"},{no:"341",name:"corphish"},{no:"342",name:"crawdaunt"},{no:"343",name:"baltoy"},{no:"344",name:"claydol"},{no:"345",name:"lileep"},{no:"346",name:"cradily"},{no:"347",name:"anorith"},{no:"348",name:"armaldo"},{no:"349",name:"feebas"},{no:"350",name:"milotic"},{no:"351",name:"castform"},{no:"352",name:"kecleon"},{no:"353",name:"shuppet"},{no:"354",name:"banette"},{no:"355",name:"duskull"},{no:"356",name:"dusclops"},{no:"357",name:"tropius"},{no:"358",name:"chimecho"},{no:"359",name:"absol"},{no:"360",name:"wynaut"},{no:"361",name:"snorunt"},{no:"362",name:"glalie"},{no:"363",name:"spheal"},{no:"364",name:"sealeo"},{no:"365",name:"walrein"},{no:"366",name:"clamperl"},{no:"367",name:"huntail"},{no:"368",name:"gorebyss"},{no:"369",name:"relicanth"},{no:"370",name:"luvdisc"},{no:"371",name:"bagon"},{no:"372",name:"shelgon"},{no:"373",name:"salamence"},{no:"374",name:"beldum"},{no:"375",name:"metang"},{no:"376",name:"metagross"},{no:"377",name:"regirock"},{no:"378",name:"regice"},{no:"379",name:"registeel"},{no:"380",name:"latias"},{no:"381",name:"latios"},{no:"382",name:"kyogre"},{no:"383",name:"groudon"},{no:"384",name:"rayquaza"},{no:"385",name:"jirachi"},{no:"386",name:"deoxys-normal"},{no:"387",name:"turtwig"},{no:"388",name:"grotle"},{no:"389",name:"torterra"},{no:"390",name:"chimchar"},{no:"391",name:"monferno"},{no:"392",name:"infernape"},{no:"393",name:"piplup"},{no:"394",name:"prinplup"},{no:"395",name:"empoleon"},{no:"396",name:"starly"},{no:"397",name:"staravia"},{no:"398",name:"staraptor"},{no:"399",name:"bidoof"},{no:"400",name:"bibarel"},{no:"401",name:"kricketot"},{no:"402",name:"kricketune"},{no:"403",name:"shinx"},{no:"404",name:"luxio"},{no:"405",name:"luxray"},{no:"406",name:"budew"},{no:"407",name:"roserade"},{no:"408",name:"cranidos"},{no:"409",name:"rampardos"},{no:"410",name:"shieldon"},{no:"411",name:"bastiodon"},{no:"412",name:"burmy"},{no:"413",name:"wormadam-plant"},{no:"414",name:"mothim"},{no:"415",name:"combee"},{no:"416",name:"vespiquen"},{no:"417",name:"pachirisu"},{no:"418",name:"buizel"},{no:"419",name:"floatzel"},{no:"420",name:"cherubi"},{no:"421",name:"cherrim"},{no:"422",name:"shellos"},{no:"423",name:"gastrodon"},{no:"424",name:"ambipom"},{no:"425",name:"drifloon"},{no:"426",name:"drifblim"},{no:"427",name:"buneary"},{no:"428",name:"lopunny"},{no:"429",name:"mismagius"},{no:"430",name:"honchkrow"},{no:"431",name:"glameow"},{no:"432",name:"purugly"},{no:"433",name:"chingling"},{no:"434",name:"stunky"},{no:"435",name:"skuntank"},{no:"436",name:"bronzor"},{no:"437",name:"bronzong"},{no:"438",name:"bonsly"},{no:"439",name:"mime-jr"},{no:"440",name:"happiny"},{no:"441",name:"chatot"},{no:"442",name:"spiritomb"},{no:"443",name:"gible"},{no:"444",name:"gabite"},{no:"445",name:"garchomp"},{no:"446",name:"munchlax"},{no:"447",name:"riolu"},{no:"448",name:"lucario"},{no:"449",name:"hippopotas"},{no:"450",name:"hippowdon"},{no:"451",name:"skorupi"},{no:"452",name:"drapion"},{no:"453",name:"croagunk"},{no:"454",name:"toxicroak"},{no:"455",name:"carnivine"},{no:"456",name:"finneon"},{no:"457",name:"lumineon"},{no:"458",name:"mantyke"},{no:"459",name:"snover"},{no:"460",name:"abomasnow"},{no:"461",name:"weavile"},{no:"462",name:"magnezone"},{no:"463",name:"lickilicky"},{no:"464",name:"rhyperior"},{no:"465",name:"tangrowth"},{no:"466",name:"electivire"},{no:"467",name:"magmortar"},{no:"468",name:"togekiss"},{no:"469",name:"yanmega"},{no:"470",name:"leafeon"},{no:"471",name:"glaceon"},{no:"472",name:"gliscor"},{no:"473",name:"mamoswine"},{no:"474",name:"porygon-z"},{no:"475",name:"gallade"},{no:"476",name:"probopass"},{no:"477",name:"dusknoir"},{no:"478",name:"froslass"},{no:"479",name:"rotom"},{no:"480",name:"uxie"},{no:"481",name:"mesprit"},{no:"482",name:"azelf"},{no:"483",name:"dialga"},{no:"484",name:"palkia"},{no:"485",name:"heatran"},{no:"486",name:"regigigas"},{no:"487",name:"giratina-altered"},{no:"488",name:"cresselia"},{no:"489",name:"phione"},{no:"490",name:"manaphy"},{no:"491",name:"darkrai"},{no:"492",name:"shaymin-land"},{no:"493",name:"arceus"},{no:"494",name:"victini"},{no:"495",name:"snivy"},{no:"496",name:"servine"},{no:"497",name:"serperior"},{no:"498",name:"tepig"},{no:"499",name:"pignite"},{no:"500",name:"emboar"},{no:"501",name:"oshawott"},{no:"502",name:"dewott"},{no:"503",name:"samurott"},{no:"504",name:"patrat"},{no:"505",name:"watchog"},{no:"506",name:"lillipup"},{no:"507",name:"herdier"},{no:"508",name:"stoutland"},{no:"509",name:"purrloin"},{no:"510",name:"liepard"},{no:"511",name:"pansage"},{no:"512",name:"simisage"},{no:"513",name:"pansear"},{no:"514",name:"simisear"},{no:"515",name:"panpour"},{no:"516",name:"simipour"},{no:"517",name:"munna"},{no:"518",name:"musharna"},{no:"519",name:"pidove"},{no:"520",name:"tranquill"},{no:"521",name:"unfezant"},{no:"522",name:"blitzle"},{no:"523",name:"zebstrika"},{no:"524",name:"roggenrola"},{no:"525",name:"boldore"},{no:"526",name:"gigalith"},{no:"527",name:"woobat"},{no:"528",name:"swoobat"},{no:"529",name:"drilbur"},{no:"530",name:"excadrill"},{no:"531",name:"audino"},{no:"532",name:"timburr"},{no:"533",name:"gurdurr"},{no:"534",name:"conkeldurr"},{no:"535",name:"tympole"},{no:"536",name:"palpitoad"},{no:"537",name:"seismitoad"},{no:"538",name:"throh"},{no:"539",name:"sawk"},{no:"540",name:"sewaddle"},{no:"541",name:"swadloon"},{no:"542",name:"leavanny"},{no:"543",name:"venipede"},{no:"544",name:"whirlipede"},{no:"545",name:"scolipede"},{no:"546",name:"cottonee"},{no:"547",name:"whimsicott"},{no:"548",name:"petilil"},{no:"549",name:"lilligant"},{no:"550",name:"basculin-red-striped"},{no:"551",name:"sandile"},{no:"552",name:"krokorok"},{no:"553",name:"krookodile"},{no:"554",name:"darumaka"},{no:"555",name:"darmanitan-standard"},{no:"556",name:"maractus"},{no:"557",name:"dwebble"},{no:"558",name:"crustle"},{no:"559",name:"scraggy"},{no:"560",name:"scrafty"},{no:"561",name:"sigilyph"},{no:"562",name:"yamask"},{no:"563",name:"cofagrigus"},{no:"564",name:"tirtouga"},{no:"565",name:"carracosta"},{no:"566",name:"archen"},{no:"567",name:"archeops"},{no:"568",name:"trubbish"},{no:"569",name:"garbodor"},{no:"570",name:"zorua"},{no:"571",name:"zoroark"},{no:"572",name:"minccino"},{no:"573",name:"cinccino"},{no:"574",name:"gothita"},{no:"575",name:"gothorita"},{no:"576",name:"gothitelle"},{no:"577",name:"solosis"},{no:"578",name:"duosion"},{no:"579",name:"reuniclus"},{no:"580",name:"ducklett"},{no:"581",name:"swanna"},{no:"582",name:"vanillite"},{no:"583",name:"vanillish"},{no:"584",name:"vanilluxe"},{no:"585",name:"deerling"},{no:"586",name:"sawsbuck"},{no:"587",name:"emolga"},{no:"588",name:"karrablast"},{no:"589",name:"escavalier"},{no:"590",name:"foongus"},{no:"591",name:"amoonguss"},{no:"592",name:"frillish"},{no:"593",name:"jellicent"},{no:"594",name:"alomomola"},{no:"595",name:"joltik"},{no:"596",name:"galvantula"},{no:"597",name:"ferroseed"},{no:"598",name:"ferrothorn"},{no:"599",name:"klink"},{no:"600",name:"klang"},{no:"601",name:"klinklang"},{no:"602",name:"tynamo"},{no:"603",name:"eelektrik"},{no:"604",name:"eelektross"},{no:"605",name:"elgyem"},{no:"606",name:"beheeyem"},{no:"607",name:"litwick"},{no:"608",name:"lampent"},{no:"609",name:"chandelure"},{no:"610",name:"axew"},{no:"611",name:"fraxure"},{no:"612",name:"haxorus"},{no:"613",name:"cubchoo"},{no:"614",name:"beartic"},{no:"615",name:"cryogonal"},{no:"616",name:"shelmet"},{no:"617",name:"accelgor"},{no:"618",name:"stunfisk"},{no:"619",name:"mienfoo"},{no:"620",name:"mienshao"},{no:"621",name:"druddigon"},{no:"622",name:"golett"},{no:"623",name:"golurk"},{no:"624",name:"pawniard"},{no:"625",name:"bisharp"},{no:"626",name:"bouffalant"},{no:"627",name:"rufflet"},{no:"628",name:"braviary"},{no:"629",name:"vullaby"},{no:"630",name:"mandibuzz"},{no:"631",name:"heatmor"},{no:"632",name:"durant"},{no:"633",name:"deino"},{no:"634",name:"zweilous"},{no:"635",name:"hydreigon"},{no:"636",name:"larvesta"},{no:"637",name:"volcarona"},{no:"638",name:"cobalion"},{no:"639",name:"terrakion"},{no:"640",name:"virizion"},{no:"641",name:"tornadus-incarnate"},{no:"642",name:"thundurus-incarnate"},{no:"643",name:"reshiram"},{no:"644",name:"zekrom"},{no:"645",name:"landorus-incarnate"},{no:"646",name:"kyurem"},{no:"647",name:"keldeo-ordinary"},{no:"648",name:"meloetta-aria"},{no:"649",name:"genesect"},{no:"650",name:"chespin"},{no:"651",name:"quilladin"},{no:"652",name:"chesnaught"},{no:"653",name:"fennekin"},{no:"654",name:"braixen"},{no:"655",name:"delphox"},{no:"656",name:"froakie"},{no:"657",name:"frogadier"},{no:"658",name:"greninja"},{no:"659",name:"bunnelby"},{no:"660",name:"diggersby"},{no:"661",name:"fletchling"},{no:"662",name:"fletchinder"},{no:"663",name:"talonflame"},{no:"664",name:"scatterbug"},{no:"665",name:"spewpa"},{no:"666",name:"vivillon"},{no:"667",name:"litleo"},{no:"668",name:"pyroar"},{no:"669",name:"flabebe"},{no:"670",name:"floette"},{no:"671",name:"florges"},{no:"672",name:"skiddo"},{no:"673",name:"gogoat"},{no:"674",name:"pancham"},{no:"675",name:"pangoro"},{no:"676",name:"furfrou"},{no:"677",name:"espurr"},{no:"678",name:"meowstic-male"},{no:"679",name:"honedge"},{no:"680",name:"doublade"},{no:"681",name:"aegislash-shield"},{no:"682",name:"spritzee"},{no:"683",name:"aromatisse"},{no:"684",name:"swirlix"},{no:"685",name:"slurpuff"},{no:"686",name:"inkay"},{no:"687",name:"malamar"},{no:"688",name:"binacle"},{no:"689",name:"barbaracle"},{no:"690",name:"skrelp"},{no:"691",name:"dragalge"},{no:"692",name:"clauncher"},{no:"693",name:"clawitzer"},{no:"694",name:"helioptile"},{no:"695",name:"heliolisk"},{no:"696",name:"tyrunt"},{no:"697",name:"tyrantrum"},{no:"698",name:"amaura"},{no:"699",name:"aurorus"},{no:"700",name:"sylveon"},{no:"701",name:"hawlucha"},{no:"702",name:"dedenne"},{no:"703",name:"carbink"},{no:"704",name:"goomy"},{no:"705",name:"sliggoo"},{no:"706",name:"goodra"},{no:"707",name:"klefki"},{no:"708",name:"phantump"},{no:"709",name:"trevenant"},{no:"710",name:"pumpkaboo-average"},{no:"711",name:"gourgeist-average"},{no:"712",name:"bergmite"},{no:"713",name:"avalugg"},{no:"714",name:"noibat"},{no:"715",name:"noivern"},{no:"716",name:"xerneas"},{no:"717",name:"yveltal"},{no:"718",name:"zygarde"},{no:"719",name:"diancie"},{no:"720",name:"hoopa"},{no:"721",name:"volcanion"},{no:"722",name:"rowlet"},{no:"723",name:"dartrix"},{no:"724",name:"decidueye"},{no:"725",name:"litten"},{no:"726",name:"torracat"},{no:"727",name:"incineroar"},{no:"728",name:"popplio"},{no:"729",name:"brionne"},{no:"730",name:"primarina"},{no:"731",name:"pikipek"},{no:"732",name:"trumbeak"},{no:"733",name:"toucannon"},{no:"734",name:"yungoos"},{no:"735",name:"gumshoos"},{no:"736",name:"grubbin"},{no:"737",name:"charjabug"},{no:"738",name:"vikavolt"},{no:"739",name:"crabrawler"},{no:"740",name:"crabominable"},{no:"741",name:"oricorio-baile"},{no:"742",name:"cutiefly"},{no:"743",name:"ribombee"},{no:"744",name:"rockruff"},{no:"745",name:"lycanroc-midday"},{no:"746",name:"wishiwashi-solo"},{no:"747",name:"mareanie"},{no:"748",name:"toxapex"},{no:"749",name:"mudbray"},{no:"750",name:"mudsdale"},{no:"751",name:"dewpider"},{no:"752",name:"araquanid"},{no:"753",name:"fomantis"},{no:"754",name:"lurantis"},{no:"755",name:"morelull"},{no:"756",name:"shiinotic"},{no:"757",name:"salandit"},{no:"758",name:"salazzle"},{no:"759",name:"stufful"},{no:"760",name:"bewear"},{no:"761",name:"bounsweet"},{no:"762",name:"steenee"},{no:"763",name:"tsareena"},{no:"764",name:"comfey"},{no:"765",name:"oranguru"},{no:"766",name:"passimian"},{no:"767",name:"wimpod"},{no:"768",name:"golisopod"},{no:"769",name:"sandygast"},{no:"770",name:"palossand"},{no:"771",name:"pyukumuku"},{no:"772",name:"type-null"},{no:"773",name:"silvally"},{no:"774",name:"minior-red-meteor"},{no:"775",name:"komala"},{no:"776",name:"turtonator"},{no:"777",name:"togedemaru"},{no:"778",name:"mimikyu-disguised"},{no:"779",name:"bruxish"},{no:"780",name:"drampa"},{no:"781",name:"dhelmise"},{no:"782",name:"jangmo-o"},{no:"783",name:"hakamo-o"},{no:"784",name:"kommo-o"},{no:"785",name:"tapu-koko"},{no:"786",name:"tapu-lele"},{no:"787",name:"tapu-bulu"},{no:"788",name:"tapu-fini"},{no:"789",name:"cosmog"},{no:"790",name:"cosmoem"},{no:"791",name:"solgaleo"},{no:"792",name:"lunala"},{no:"793",name:"nihilego"},{no:"794",name:"buzzwole"},{no:"795",name:"pheromosa"},{no:"796",name:"xurkitree"},{no:"797",name:"celesteela"},{no:"798",name:"kartana"},{no:"799",name:"guzzlord"},{no:"800",name:"necrozma"},{no:"801",name:"magearna"},{no:"802",name:"marshadow"},{no:"10001",name:"deoxys-attack"},{no:"10002",name:"deoxys-defense"},{no:"10003",name:"deoxys-speed"},{no:"10004",name:"wormadam-sandy"},{no:"10005",name:"wormadam-trash"},{no:"10006",name:"shaymin-sky"},{no:"10007",name:"giratina-origin"},{no:"10008",name:"rotom-heat"},{no:"10009",name:"rotom-wash"},{no:"10010",name:"rotom-frost"},{no:"10011",name:"rotom-fan"},{no:"10012",name:"rotom-mow"},{no:"10013",name:"castform-sunny"},{no:"10014",name:"castform-rainy"},{no:"10015",name:"castform-snowy"},{no:"10016",name:"basculin-blue-striped"},{no:"10017",name:"darmanitan-zen"},{no:"10018",name:"meloetta-pirouette"},{no:"10019",name:"tornadus-therian"},{no:"10020",name:"thundurus-therian"},{no:"10021",name:"landorus-therian"},{no:"10022",name:"kyurem-black"},{no:"10023",name:"kyurem-white"},{no:"10024",name:"keldeo-resolute"},{no:"10025",name:"meowstic-female"},{no:"10026",name:"aegislash-blade"},{no:"10027",name:"pumpkaboo-small"},{no:"10028",name:"pumpkaboo-large"},{no:"10029",name:"pumpkaboo-super"},{no:"10030",name:"gourgeist-small"},{no:"10031",name:"gourgeist-large"},{no:"10032",name:"gourgeist-super"},{no:"10033",name:"venusaur-mega"},{no:"10034",name:"charizard-mega-x"},{no:"10035",name:"charizard-mega-y"},{no:"10036",name:"blastoise-mega"},{no:"10037",name:"alakazam-mega"},{no:"10038",name:"gengar-mega"},{no:"10039",name:"kangaskhan-mega"},{no:"10040",name:"pinsir-mega"},{no:"10041",name:"gyarados-mega"},{no:"10042",name:"aerodactyl-mega"},{no:"10043",name:"mewtwo-mega-x"},{no:"10044",name:"mewtwo-mega-y"},{no:"10045",name:"ampharos-mega"},{no:"10046",name:"scizor-mega"},{no:"10047",name:"heracross-mega"},{no:"10048",name:"houndoom-mega"},{no:"10049",name:"tyranitar-mega"},{no:"10050",name:"blaziken-mega"},{no:"10051",name:"gardevoir-mega"},{no:"10052",name:"mawile-mega"},{no:"10053",name:"aggron-mega"},{no:"10054",name:"medicham-mega"},{no:"10055",name:"manectric-mega"},{no:"10056",name:"banette-mega"},{no:"10057",name:"absol-mega"},{no:"10058",name:"garchomp-mega"},{no:"10059",name:"lucario-mega"},{no:"10060",name:"abomasnow-mega"},{no:"10061",name:"floette-eternal"},{no:"10062",name:"latias-mega"},{no:"10063",name:"latios-mega"},{no:"10064",name:"swampert-mega"},{no:"10065",name:"sceptile-mega"},{no:"10066",name:"sableye-mega"},{no:"10067",name:"altaria-mega"},{no:"10068",name:"gallade-mega"},{no:"10069",name:"audino-mega"},{no:"10070",name:"sharpedo-mega"},{no:"10071",name:"slowbro-mega"},{no:"10072",name:"steelix-mega"},{no:"10073",name:"pidgeot-mega"},{no:"10074",name:"glalie-mega"},{no:"10075",name:"diancie-mega"},{no:"10076",name:"metagross-mega"},{no:"10077",name:"kyogre-primal"},{no:"10078",name:"groudon-primal"},{no:"10079",name:"rayquaza-mega"},{no:"10080",name:"pikachu-rock-star"},{no:"10081",name:"pikachu-belle"},{no:"10082",name:"pikachu-pop-star"},{no:"10083",name:"pikachu-phd"},{no:"10084",name:"pikachu-libre"},{no:"10085",name:"pikachu-cosplay"},{no:"10086",name:"hoopa-unbound"},{no:"10087",name:"camerupt-mega"},{no:"10088",name:"lopunny-mega"},{no:"10089",name:"salamence-mega"},{no:"10090",name:"beedrill-mega"},{no:"10091",name:"rattata-alola"},{no:"10092",name:"raticate-alola"},{no:"10093",name:"raticate-totem-alola"},{no:"10094",name:"pikachu-original-cap"},{no:"10095",name:"pikachu-hoenn-cap"},{no:"10096",name:"pikachu-sinnoh-cap"},{no:"10097",name:"pikachu-unova-cap"},{no:"10098",name:"pikachu-kalos-cap"},{no:"10099",name:"pikachu-alola-cap"},{no:"10100",name:"raichu-alola"},{no:"10101",name:"sandshrew-alola"},{no:"10102",name:"sandslash-alola"},{no:"10103",name:"vulpix-alola"},{no:"10104",name:"ninetales-alola"},{no:"10105",name:"diglett-alola"},{no:"10106",name:"dugtrio-alola"},{no:"10107",name:"meowth-alola"},{no:"10108",name:"persian-alola"},{no:"10109",name:"geodude-alola"},{no:"10110",name:"graveler-alola"},{no:"10111",name:"golem-alola"},{no:"10112",name:"grimer-alola"},{no:"10113",name:"muk-alola"},{no:"10114",name:"exeggutor-alola"},{no:"10115",name:"marowak-alola"},{no:"10116",name:"greninja-battle-bond"},{no:"10117",name:"greninja-ash"},{no:"10118",name:"zygarde-10"},{no:"10119",name:"zygarde-50"},{no:"10120",name:"zygarde-complete"},{no:"10121",name:"gumshoos-totem"},{no:"10122",name:"vikavolt-totem"},{no:"10123",name:"oricorio-pom-pom"},{no:"10124",name:"oricorio-pau"},{no:"10125",name:"oricorio-sensu"},{no:"10126",name:"lycanroc-midnight"},{no:"10127",name:"wishiwashi-school"},{no:"10128",name:"lurantis-totem"},{no:"10129",name:"salazzle-totem"},{no:"10130",name:"minior-orange-meteor"},{no:"10131",name:"minior-yellow-meteor"},{no:"10132",name:"minior-green-meteor"},{no:"10133",name:"minior-blue-meteor"},{no:"10134",name:"minior-indigo-meteor"},{no:"10135",name:"minior-violet-meteor"},{no:"10136",name:"minior-red"},{no:"10137",name:"minior-orange"},{no:"10138",name:"minior-yellow"},{no:"10139",name:"minior-green"},{no:"10140",name:"minior-blue"},{no:"10141",name:"minior-indigo"},{no:"10142",name:"minior-violet"},{no:"10143",name:"mimikyu-busted"},{no:"10144",name:"mimikyu-totem-disguised"},{no:"10145",name:"mimikyu-totem-busted"},{no:"10146",name:"kommo-o-totem"},{no:"10147",name:"magearna-original"}]}}},["NHnr"]);
//# sourceMappingURL=app.8f401a67bc99933cb8a2.js.map