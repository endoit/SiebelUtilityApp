(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ed99816"],{1405:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-row",{staticClass:"pt-12 px-12 d-flex align-center justify-center"},[s("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[s("CompareSelect",{attrs:{name:e.selectNameFirst},on:{"data-selected":e.dataSelectedFirst,"data-clear":e.dataClearFirst}})],1),s("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[s("CompareSelect",{attrs:{name:e.selectNameSecond},on:{"data-selected":e.dataSelectedSecond,"data-clear":e.dataClearSecond}})],1)],1),s("v-row",{staticClass:"d-flex justify-center my-0"},[s("v-col",{staticClass:"py-0",attrs:{cols:"12",sm:"2",md:"2"}},[s("v-select",{directives:[{name:"show",rawName:"v-show",value:e.showServerselect,expression:"showServerselect"}],staticClass:"py-2",attrs:{items:e.listOfServersFirst,label:"Select server to compare 1","return-object":"",solo:"",outlined:"",dense:""},model:{value:e.selectedServerFirst,callback:function(t){e.selectedServerFirst=t},expression:"selectedServerFirst"}})],1),s("v-col",{staticClass:"justify-center py-0",attrs:{cols:"12",sm:"3",md:"3"}},[s("v-card",{staticClass:"px-2 py-2 align-center justify-center",attrs:{elevation:"0"}},[s("v-select",{attrs:{items:e.paramtypes,"item-text":"name","item-value":"value",disabled:e.paramTypeDisabled,label:"Select param type","return-object":"",solo:"",outlined:"",dense:""},model:{value:e.selectedParamtTypeComp,callback:function(t){e.selectedParamtTypeComp=t},expression:"selectedParamtTypeComp"}}),s("v-btn",{staticClass:"white--text",attrs:{block:"",loading:e.isLoading,disabled:e.compareButtonDisabled,color:this.$store.state.selectedTemplate.color?this.$store.state.selectedTemplate.color+" darken-1":"primary"},on:{click:e.compareData}},[s("v-badge",{staticClass:"px-2",attrs:{value:e.isDisabledBadge,content:"TRIAL",bordered:"",color:"warning"}},[e._v(" Compare ")])],1)],1)],1),s("v-col",{staticClass:"py-0",attrs:{cols:"12",sm:"2",md:"2"}},[s("v-select",{directives:[{name:"show",rawName:"v-show",value:e.showServerselect,expression:"showServerselect"}],staticClass:"py-2",attrs:{items:e.listOfServersSecond,label:"Select server to compare 2","return-object":"",solo:"",outlined:"",dense:""},model:{value:e.selectedServerSecond,callback:function(t){e.selectedServerSecond=t},expression:"selectedServerSecond"}})],1)],1),s("v-row",{staticClass:"d-flex justify-center"},[s("v-divider",{staticClass:"pt-8"})],1),s("v-row",{staticClass:"d-flex align-center justify-center py-0"},[s("v-col",{staticClass:"py-0",attrs:{cols:"12",sm:"5",md:"5"}},[s("v-card",{staticClass:"px-4 py-0 align-center justify-center",attrs:{disabled:e.disableFilters,elevation:"0"}},[s("v-card-title",{staticClass:"px-0 pb-0 align-center justify-center"},[e._v(" Search & Filter ")]),s("v-card-text",{staticClass:"px-4 py-0"},[s("v-text-field",{staticClass:"py-0",attrs:{label:"Search",flat:"","hide-details":"",clearable:"","clear-icon":"mdi-close-circle-outline"},model:{value:e.searchComp,callback:function(t){e.searchComp=t},expression:"searchComp"}})],1),s("v-card-actions",{staticClass:"align-center justify-center"},[s("v-btn-toggle",{attrs:{multiple:""},model:{value:e.diffButtonsComp,callback:function(t){e.diffButtonsComp=t},expression:"diffButtonsComp"}},[s("v-btn",{attrs:{value:"same"}},[s("v-icon",{attrs:{color:"green"}},[e._v("mdi-check")])],1),s("v-btn",{attrs:{value:"diff"}},[s("v-icon",{attrs:{color:"orange"}},[e._v("mdi-not-equal-variant")])],1),s("v-btn",{attrs:{value:"plus"}},[s("v-icon",{attrs:{color:"red"}},[e._v("mdi-plus")])],1)],1)],1)],1)],1)],1),s("v-row",{staticClass:"py-4"},[s("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[s("CompareTree",{attrs:{inputTreeData:e.filteredDataFirst}})],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[s("CompareTree",{attrs:{inputTreeData:e.filteredDataSecond}})],1)],1)],1)},a=[],n=(s("13d5"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-row",[s("v-col",{staticClass:"px-4",attrs:{cols:"12",sm:"12",md:"12"}},[s("h1",{staticClass:"d-flex align-center justify-center"},[e._v(" "+e._s(this.name)+" ")]),s("div",{staticClass:"py-4 d-flex align-center justify-center"},[s("v-btn-toggle",{attrs:{shaped:"",mandatory:"",color:""+(this.$store.state.selectedTemplate.color?this.$store.state.selectedTemplate.color:"primary")},model:{value:e.selectedButton,callback:function(t){e.selectedButton=t},expression:"selectedButton"}},[s("v-btn",{attrs:{value:"LIVE"},on:{click:e.switchToLive}},[e._v(" LIVE ")]),s("v-btn",{attrs:{value:"SNAPSHOT"},on:{click:e.switchToSnapshot}},[e._v(" SNAPSHOT ")])],1)],1),s("v-select",{staticClass:"pt-2 d-flex align-center justify-center",attrs:{"item-text":"name","item-value":"value",items:e.inputData,label:e.profileSnpashotText,"return-object":"",solo:"",outlined:"",dense:""},model:{value:e.inputDataComp,callback:function(t){e.inputDataComp=t},expression:"inputDataComp"}})],1)],1)],1)}),r=[],o=s("5532"),l=s("c427");class d{getSnapshotList(){return l["a"].get("/snapshots/snapshotlist")}readSnapshot(e){return l["a"].post("/snapshots/readsnapshot",e)}}var c=new d,h={name:"Compare",data:()=>({button:"LIVE",selectedDataSet:"",inputData:[]}),props:["name"],computed:{profileSnpashotText:{get(){return"LIVE"==this.button?"Select profile":"Select snapshot"}},inputDataComp:{get(){return this.inputData},set(e){return this.selectedDataSet=e,this.$emit("data-selected",e,this.button),this.inputData}},selectedButton:{get(){return this.button},set(e){return this.button=e,this.selectedDataSet="",this.$emit("data-clear"),this.button}}},mounted(){this.switchToLive()},methods:{dataTranform(e){var t=[];for(let s in e)e[s].name=s,t.push(e[s]);return t},async switchToSnapshot(){try{const e=await c.getSnapshotList(this.$store.state.selectedTemplate.name);this.inputData=e.data}catch(e){console.log(e)}},async switchToLive(){try{const e=await o["a"].getAll();this.inputData=this.dataTranform(e.data)}catch(e){console.log(e)}}}},p=h,u=(s("b962"),s("2877")),m=s("6544"),v=s.n(m),f=s("8336"),g=(s("7e58"),s("604c")),b=g["a"].extend({name:"button-group",provide(){return{btnToggle:this}},computed:{classes(){return g["a"].options.computed.classes.call(this)}},methods:{genData:g["a"].options.methods.genData}}),S=s("a9ad"),C=s("58df"),y=Object(C["a"])(b,S["a"]).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes(){return{...b.options.computed.classes.call(this),"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile,...this.themeClasses}}},methods:{genData(){const e=this.setTextColor(this.color,{...b.options.methods.genData.call(this)});return this.group?e:this.setBackgroundColor(this.backgroundColor,e)}}}),w=s("62ad"),O=s("0fd9"),D=s("b974"),T=Object(u["a"])(p,n,r,!1,null,"89bcac76",null),k=T.exports;v()(T,{VBtn:f["a"],VBtnToggle:y,VCol:w["a"],VRow:O["a"],VSelect:D["a"]});var j=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-row",{staticClass:"pb-8"},[s("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[s("v-card",[e.isData?s("v-treeview",{attrs:{"open-all":"",dense:"",rounded:"",hoverable:"","open-on-click":"",items:e.showData},scopedSlots:e._u([{key:"prepend",fn:function(t){var i=t.item;return[s("v-icon",{attrs:{color:"same"===i.diff?"green":"diff"===i.diff?"orange":(i.diff,"red")},domProps:{textContent:e._s("mdi-"+("same"===i.diff?"check":"diff"===i.diff?"not-equal-variant":"plus"===i.diff?"plus":"minus"))}})]}}],null,!1,3242650573)}):e._e(),e.isData?e._e():s("v-subheader",{staticClass:"d-flex align-center justify-center"},[e._v(" No data to show ")])],1)],1)],1)},x=[],B={name:"CompareTree",data:()=>({}),props:["inputTreeData"],computed:{showData(){return this.inputTreeData},isData(){return this.inputTreeData.length>0&&"true"}},mounted(){},watch:{},methods:{}},P=B,$=s("b0af"),_=s("132d"),A=s("e0c7"),I=(s("fa9e"),s("0789")),F=s("3206"),L=s("80d2");const V=Object(C["a"])(S["a"],Object(F["a"])("treeview")),E={activatable:Boolean,activeClass:{type:String,default:"v-treeview-node--active"},color:{type:String,default:"primary"},disablePerNode:Boolean,expandIcon:{type:String,default:"$subgroup"},indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},itemChildren:{type:String,default:"children"},itemDisabled:{type:String,default:"disabled"},itemKey:{type:String,default:"id"},itemText:{type:String,default:"name"},loadChildren:Function,loadingIcon:{type:String,default:"$loading"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"},openOnClick:Boolean,rounded:Boolean,selectable:Boolean,selectedColor:{type:String,default:"accent"},shaped:Boolean,transition:Boolean,selectionType:{type:String,default:"leaf",validator:e=>["leaf","independent"].includes(e)}},N=V.extend().extend({name:"v-treeview-node",inject:{treeview:{default:null}},props:{level:Number,item:{type:Object,default:()=>null},parentIsDisabled:Boolean,...E},data:()=>({hasLoaded:!1,isActive:!1,isIndeterminate:!1,isLoading:!1,isOpen:!1,isSelected:!1}),computed:{disabled(){return Object(L["q"])(this.item,this.itemDisabled)||!this.disablePerNode&&this.parentIsDisabled&&"leaf"===this.selectionType},key(){return Object(L["q"])(this.item,this.itemKey)},children(){const e=Object(L["q"])(this.item,this.itemChildren);return e&&e.filter(e=>!this.treeview.isExcluded(Object(L["q"])(e,this.itemKey)))},text(){return Object(L["q"])(this.item,this.itemText)},scopedProps(){return{item:this.item,leaf:!this.children,selected:this.isSelected,indeterminate:this.isIndeterminate,active:this.isActive,open:this.isOpen}},computedIcon(){return this.isIndeterminate?this.indeterminateIcon:this.isSelected?this.onIcon:this.offIcon},hasChildren(){return!!this.children&&(!!this.children.length||!!this.loadChildren)}},created(){this.treeview.register(this)},beforeDestroy(){this.treeview.unregister(this)},methods:{checkChildren(){return new Promise(e=>{if(!this.children||this.children.length||!this.loadChildren||this.hasLoaded)return e();this.isLoading=!0,e(this.loadChildren(this.item))}).then(()=>{this.isLoading=!1,this.hasLoaded=!0})},open(){this.isOpen=!this.isOpen,this.treeview.updateOpen(this.key,this.isOpen),this.treeview.emitOpen()},genLabel(){const e=[];return this.$scopedSlots.label?e.push(this.$scopedSlots.label(this.scopedProps)):e.push(this.text),this.$createElement("div",{slot:"label",staticClass:"v-treeview-node__label"},e)},genPrependSlot(){return this.$scopedSlots.prepend?this.$createElement("div",{staticClass:"v-treeview-node__prepend"},this.$scopedSlots.prepend(this.scopedProps)):null},genAppendSlot(){return this.$scopedSlots.append?this.$createElement("div",{staticClass:"v-treeview-node__append"},this.$scopedSlots.append(this.scopedProps)):null},genContent(){const e=[this.genPrependSlot(),this.genLabel(),this.genAppendSlot()];return this.$createElement("div",{staticClass:"v-treeview-node__content"},e)},genToggle(){return this.$createElement(_["a"],{staticClass:"v-treeview-node__toggle",class:{"v-treeview-node__toggle--open":this.isOpen,"v-treeview-node__toggle--loading":this.isLoading},slot:"prepend",on:{click:e=>{e.stopPropagation(),this.isLoading||this.checkChildren().then(()=>this.open())}}},[this.isLoading?this.loadingIcon:this.expandIcon])},genCheckbox(){return this.$createElement(_["a"],{staticClass:"v-treeview-node__checkbox",props:{color:this.isSelected||this.isIndeterminate?this.selectedColor:void 0,disabled:this.disabled},on:{click:e=>{e.stopPropagation(),this.isLoading||this.checkChildren().then(()=>{this.$nextTick(()=>{this.isSelected=!this.isSelected,this.isIndeterminate=!1,this.treeview.updateSelected(this.key,this.isSelected),this.treeview.emitSelected()})})}}},[this.computedIcon])},genLevel(e){return Object(L["j"])(e).map(()=>this.$createElement("div",{staticClass:"v-treeview-node__level"}))},genNode(){const e=[this.genContent()];return this.selectable&&e.unshift(this.genCheckbox()),this.hasChildren?e.unshift(this.genToggle()):e.unshift(...this.genLevel(1)),e.unshift(...this.genLevel(this.level)),this.$createElement("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-treeview-node__root",class:{[this.activeClass]:this.isActive},on:{click:()=>{this.openOnClick&&this.hasChildren?this.checkChildren().then(this.open):this.activatable&&!this.disabled&&(this.isActive=!this.isActive,this.treeview.updateActive(this.key,this.isActive),this.treeview.emitActive())}}}),e)},genChild(e,t){return this.$createElement(N,{key:Object(L["q"])(e,this.itemKey),props:{activatable:this.activatable,activeClass:this.activeClass,item:e,selectable:this.selectable,selectedColor:this.selectedColor,color:this.color,disablePerNode:this.disablePerNode,expandIcon:this.expandIcon,indeterminateIcon:this.indeterminateIcon,offIcon:this.offIcon,onIcon:this.onIcon,loadingIcon:this.loadingIcon,itemKey:this.itemKey,itemText:this.itemText,itemDisabled:this.itemDisabled,itemChildren:this.itemChildren,loadChildren:this.loadChildren,transition:this.transition,openOnClick:this.openOnClick,rounded:this.rounded,shaped:this.shaped,level:this.level+1,selectionType:this.selectionType,parentIsDisabled:t},scopedSlots:this.$scopedSlots})},genChildrenWrapper(){if(!this.isOpen||!this.children)return null;const e=[this.children.map(e=>this.genChild(e,this.disabled))];return this.$createElement("div",{staticClass:"v-treeview-node__children"},e)},genTransition(){return this.$createElement(I["a"],[this.genChildrenWrapper()])}},render(e){const t=[this.genNode()];return this.transition?t.push(this.genTransition()):t.push(this.genChildrenWrapper()),e("div",{staticClass:"v-treeview-node",class:{"v-treeview-node--leaf":!this.hasChildren,"v-treeview-node--click":this.openOnClick,"v-treeview-node--disabled":this.disabled,"v-treeview-node--rounded":this.rounded,"v-treeview-node--shaped":this.shaped,"v-treeview-node--selected":this.isSelected},attrs:{"aria-expanded":String(this.isOpen)}},t)}});var q=N,K=s("7560"),R=s("d9bd");function W(e,t,s){const i=Object(L["q"])(e,s);return i.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}function z(e,t,s,i,a,n,r){if(e(t,s,a))return!0;const o=Object(L["q"])(t,n);if(o){let t=!1;for(let l=0;l<o.length;l++)z(e,o[l],s,i,a,n,r)&&(t=!0);if(t)return!0}return r.add(Object(L["q"])(t,i)),!1}var X=Object(C["a"])(Object(F["b"])("treeview"),K["a"]).extend({name:"v-treeview",provide(){return{treeview:this}},props:{active:{type:Array,default:()=>[]},dense:Boolean,disabled:Boolean,filter:Function,hoverable:Boolean,items:{type:Array,default:()=>[]},multipleActive:Boolean,open:{type:Array,default:()=>[]},openAll:Boolean,returnObject:{type:Boolean,default:!1},search:String,value:{type:Array,default:()=>[]},...E},data:()=>({level:-1,activeCache:new Set,nodes:{},openCache:new Set,selectedCache:new Set}),computed:{excludedItems(){const e=new Set;if(!this.search)return e;for(let t=0;t<this.items.length;t++)z(this.filter||W,this.items[t],this.search,this.itemKey,this.itemText,this.itemChildren,e);return e}},watch:{items:{handler(){const e=Object.keys(this.nodes).map(e=>Object(L["q"])(this.nodes[e].item,this.itemKey)),t=this.getKeys(this.items),s=Object(L["c"])(t,e);if(!s.length&&t.length<e.length)return;s.forEach(e=>delete this.nodes[e]);const i=[...this.selectedCache];this.selectedCache=new Set,this.activeCache=new Set,this.openCache=new Set,this.buildTree(this.items),Object(L["l"])(i,[...this.selectedCache])||this.emitSelected()},deep:!0},active(e){this.handleNodeCacheWatcher(e,this.activeCache,this.updateActive,this.emitActive)},value(e){this.handleNodeCacheWatcher(e,this.selectedCache,this.updateSelected,this.emitSelected)},open(e){this.handleNodeCacheWatcher(e,this.openCache,this.updateOpen,this.emitOpen)}},created(){const e=e=>this.returnObject?Object(L["q"])(e,this.itemKey):e;this.buildTree(this.items);for(const t of this.value.map(e))this.updateSelected(t,!0,!0);for(const t of this.active.map(e))this.updateActive(t,!0)},mounted(){(this.$slots.prepend||this.$slots.append)&&Object(R["c"])("The prepend and append slots require a slot-scope attribute",this),this.openAll?this.updateAll(!0):(this.open.forEach(e=>this.updateOpen(this.returnObject?Object(L["q"])(e,this.itemKey):e,!0)),this.emitOpen())},methods:{updateAll(e){Object.keys(this.nodes).forEach(t=>this.updateOpen(Object(L["q"])(this.nodes[t].item,this.itemKey),e)),this.emitOpen()},getKeys(e,t=[]){for(let s=0;s<e.length;s++){const i=Object(L["q"])(e[s],this.itemKey);t.push(i);const a=Object(L["q"])(e[s],this.itemChildren);a&&t.push(...this.getKeys(a))}return t},buildTree(e,t=null){var s;for(let i=0;i<e.length;i++){const a=e[i],n=Object(L["q"])(a,this.itemKey),r=null!==(s=Object(L["q"])(a,this.itemChildren))&&void 0!==s?s:[],o=this.nodes.hasOwnProperty(n)?this.nodes[n]:{isSelected:!1,isIndeterminate:!1,isActive:!1,isOpen:!1,vnode:null},l={vnode:o.vnode,parent:t,children:r.map(e=>Object(L["q"])(e,this.itemKey)),item:a};if(this.buildTree(r,n),"independent"!==this.selectionType&&null!==t&&!this.nodes.hasOwnProperty(n)&&this.nodes.hasOwnProperty(t)?l.isSelected=this.nodes[t].isSelected:(l.isSelected=o.isSelected,l.isIndeterminate=o.isIndeterminate),l.isActive=o.isActive,l.isOpen=o.isOpen,this.nodes[n]=l,r.length&&"independent"!==this.selectionType){const{isSelected:e,isIndeterminate:t}=this.calculateState(n,this.nodes);l.isSelected=e,l.isIndeterminate=t}!this.nodes[n].isSelected||"independent"!==this.selectionType&&0!==l.children.length||this.selectedCache.add(n),this.nodes[n].isActive&&this.activeCache.add(n),this.nodes[n].isOpen&&this.openCache.add(n),this.updateVnodeState(n)}},calculateState(e,t){const s=t[e].children,i=s.reduce((e,s)=>(e[0]+=+Boolean(t[s].isSelected),e[1]+=+Boolean(t[s].isIndeterminate),e),[0,0]),a=!!s.length&&i[0]===s.length,n=!a&&(i[0]>0||i[1]>0);return{isSelected:a,isIndeterminate:n}},emitOpen(){this.emitNodeCache("update:open",this.openCache)},emitSelected(){this.emitNodeCache("input",this.selectedCache)},emitActive(){this.emitNodeCache("update:active",this.activeCache)},emitNodeCache(e,t){this.$emit(e,this.returnObject?[...t].map(e=>this.nodes[e].item):[...t])},handleNodeCacheWatcher(e,t,s,i){e=this.returnObject?e.map(e=>Object(L["q"])(e,this.itemKey)):e;const a=[...t];Object(L["l"])(a,e)||(a.forEach(e=>s(e,!1)),e.forEach(e=>s(e,!0)),i())},getDescendants(e,t=[]){const s=this.nodes[e].children;t.push(...s);for(let i=0;i<s.length;i++)t=this.getDescendants(s[i],t);return t},getParents(e){let t=this.nodes[e].parent;const s=[];while(null!==t)s.push(t),t=this.nodes[t].parent;return s},register(e){const t=Object(L["q"])(e.item,this.itemKey);this.nodes[t].vnode=e,this.updateVnodeState(t)},unregister(e){const t=Object(L["q"])(e.item,this.itemKey);this.nodes[t]&&(this.nodes[t].vnode=null)},isParent(e){return this.nodes[e].children&&this.nodes[e].children.length},updateActive(e,t){if(!this.nodes.hasOwnProperty(e))return;this.multipleActive||this.activeCache.forEach(e=>{this.nodes[e].isActive=!1,this.updateVnodeState(e),this.activeCache.delete(e)});const s=this.nodes[e];s&&(t?this.activeCache.add(e):this.activeCache.delete(e),s.isActive=t,this.updateVnodeState(e))},updateSelected(e,t,s=!1){if(!this.nodes.hasOwnProperty(e))return;const i=new Map;if("independent"!==this.selectionType){for(const n of this.getDescendants(e))Object(L["q"])(this.nodes[n].item,this.itemDisabled)&&!s||(this.nodes[n].isSelected=t,this.nodes[n].isIndeterminate=!1,i.set(n,t));const a=this.calculateState(e,this.nodes);this.nodes[e].isSelected=t,this.nodes[e].isIndeterminate=a.isIndeterminate,i.set(e,t);for(const t of this.getParents(e)){const e=this.calculateState(t,this.nodes);this.nodes[t].isSelected=e.isSelected,this.nodes[t].isIndeterminate=e.isIndeterminate,i.set(t,e.isSelected)}}else this.nodes[e].isSelected=t,this.nodes[e].isIndeterminate=!1,i.set(e,t);for(const[a,n]of i.entries())this.updateVnodeState(a),"leaf"===this.selectionType&&this.isParent(a)||(!0===n?this.selectedCache.add(a):this.selectedCache.delete(a))},updateOpen(e,t){if(!this.nodes.hasOwnProperty(e))return;const s=this.nodes[e],i=Object(L["q"])(s.item,this.itemChildren);i&&!i.length&&s.vnode&&!s.vnode.hasLoaded?s.vnode.checkChildren().then(()=>this.updateOpen(e,t)):i&&i.length&&(s.isOpen=t,s.isOpen?this.openCache.add(e):this.openCache.delete(e),this.updateVnodeState(e))},updateVnodeState(e){const t=this.nodes[e];t&&t.vnode&&(t.vnode.isSelected=t.isSelected,t.vnode.isIndeterminate=t.isIndeterminate,t.vnode.isActive=t.isActive,t.vnode.isOpen=t.isOpen)},isExcluded(e){return!!this.search&&this.excludedItems.has(e)}},render(e){const t=this.items.length?this.items.filter(e=>!this.isExcluded(Object(L["q"])(e,this.itemKey))).map(e=>{const t=q.options.methods.genChild.bind(this);return t(e,this.disabled||Object(L["q"])(e,this.itemDisabled))}):this.$slots.default;return e("div",{staticClass:"v-treeview",class:{"v-treeview--hoverable":this.hoverable,"v-treeview--dense":this.dense,...this.themeClasses}},t)}}),H=Object(u["a"])(P,j,x,!1,null,null,null),Y=H.exports;v()(H,{VCard:$["a"],VCol:w["a"],VIcon:_["a"],VRow:O["a"],VSubheader:A["a"],VTreeview:X});var J=s("24fb");const M=new J["c"],G=new J["a"],Q=new J["b"],U=new J["f"],Z=new J["e"];var ee={name:"CompareView",components:{CompareSelect:k,CompareTree:Y},data:()=>({selectNameFirst:"Compare...",selectNameSecond:"...To",bLoading:!1,search:"",caseSensitive:"",diffButtons:[],selectedDataSetFirst:"",selectedDataTypeFirst:"",selectedDataSetSecond:"",selectedDataTypeSecond:"",listOfServersFirst:[],listOfServersSecond:[],selectedServerFirst:"",selectedServerSecond:"",dataSetFirst:{},dataSetSecond:{},showDataFirst:[],showDataSecond:[],filteredDataFirst:[],filteredDataSecond:[],selectedParamtType:{name:"",value:""},paramtypes:[{name:"Enterprise parameters",value:"entParam"},{name:"Named subsystems",value:"nss"},{name:"Server parameters",value:"serParam"},{name:"Component definitions",value:"entComp"},{name:"Server components",value:"serComp"}]}),computed:{paramTypeDisabled(){return!this.selectedDataSetFirst||!this.selectedDataSetSecond},compareButtonDisabled(){var e=!0;return"serParam"!=this.selectedParamtType.value&&"serComp"!=this.selectedParamtType.value||this.selectedServerFirst&&this.selectedServerFirst||(e=!1),!(this.selectedDataSetFirst&&this.selectedDataSetSecond&&this.selectedParamtType.value&&!this.bLoading&&!this.isDisabledBadge&&e)},showServerselect(){return"serParam"==this.selectedParamtType.value||"serComp"==this.selectedParamtType.value},disableFilters(){return 0==this.showDataFirst.length&&0==this.showDataSecond.length},isLoading(){return this.bLoading},isDisabledBadge(){return!!this.$store.state.trial},searchComp:{get(){return this.search},set(e){this.search=e,this.filteredDataFirst=this.filter(this.showDataFirst,this.search,this.diffButtons),this.filteredDataSecond=this.filter(this.showDataSecond,this.search,this.diffButtons)}},diffButtonsComp:{get(){return this.diffButtons},set(e){this.diffButtons=e,this.filteredDataFirst=this.filter(this.showDataFirst,this.search,this.diffButtons),this.filteredDataSecond=this.filter(this.showDataSecond,this.search,this.diffButtons)}},selectedParamtTypeComp:{get(){return this.selectedParamtType},set(e){return this.selectedParamtType=e,this.bLoading=!0,this.listOfServersFirst=[],this.selectedServerFirst="",this.listOfServersSecond=[],this.selectedServerSecond="",this.getCompareData(),this.selectedParamtType}}},methods:{filter(e,t,s){const i=(e,a)=>{if(a.name.indexOf(t)>-1){if(!(s.length>0))return e.push(a),e;for(let t of s)if(a.diff==t&&!("children"in a))return e.push(a),e}if(Array.isArray(a.children)){const t=a.children.reduce(i,[]);t.length&&e.push({...a,children:t})}return e};return e.reduce(i,[])},dataSelectedFirst(e,t){this.dataClearFirst(),this.selectedDataSetFirst=e,this.selectedDataTypeFirst=t},dataSelectedSecond(e,t){this.dataClearSecond(),this.selectedDataSetSecond=e,this.selectedDataTypeSecond=t},dataClearFirst(){this.selectedDataSetFirst="",this.selectedDataTypeFirst="",this.listOfServersFirst=[],this.selectedServerFirst="",this.selectedParamtType={name:"",value:""}},dataClearSecond(){this.selectedDataSetSecond="",this.selectedDataTypeSecond="",this.listOfServersSecond=[],this.selectedServerSecond="",this.selectedParamtType={name:"",value:""}},async getLiveData(e){var t=[];switch(this.selectedParamtType.value){case"entParam":t=await M.getAll(e);break;case"entComp":t=await G.getAll(e);break;case"serParam":t=await U.getAll(e);break;case"serComp":t=await Z.getAll(e);break;case"nss":t=await Q.getAll(e);break;default:console.log("default",this.selectedParamtType.value);break}return t.data},async readSnapshotData(e){try{const t=await c.readSnapshot({snapshotName:e});return t.data[this.selectedParamtType.value]}catch(t){console.log(t)}},async getCompareData(){try{"SNAPSHOT"==this.selectedDataTypeFirst?this.dataSetFirst=await this.readSnapshotData(this.selectedDataSetFirst):this.dataSetFirst=await this.getLiveData(this.selectedDataSetFirst.name),"SNAPSHOT"==this.selectedDataTypeSecond?this.dataSetSecond=await this.readSnapshotData(this.selectedDataSetSecond):this.dataSetSecond=await this.getLiveData(this.selectedDataSetSecond.name),"serParam"!=this.selectedParamtType.value&&"serComp"!=this.selectedParamtType.value||(this.listOfServersFirst=Object.keys(this.dataSetFirst),this.listOfServersSecond=Object.keys(this.dataSetSecond)),this.bLoading=!1}catch(e){console.log(e)}},compareData(){console.log("Contact us for full version")}}},te=ee,se=s("4ca6"),ie=s("99d9"),ae=s("ce7e"),ne=s("8654"),re=Object(u["a"])(te,i,a,!1,null,null,null);t["default"]=re.exports;v()(re,{VBadge:se["a"],VBtn:f["a"],VBtnToggle:y,VCard:$["a"],VCardActions:ie["a"],VCardText:ie["b"],VCardTitle:ie["c"],VCol:w["a"],VDivider:ae["a"],VIcon:_["a"],VRow:O["a"],VSelect:D["a"],VTextField:ne["a"]})},"24fb":function(e,t,s){"use strict";s.d(t,"c",(function(){return a})),s.d(t,"a",(function(){return n})),s.d(t,"b",(function(){return r})),s.d(t,"f",(function(){return o})),s.d(t,"e",(function(){return l})),s.d(t,"d",(function(){return d})),s.d(t,"g",(function(){return c}));var i=s("c427");class a{getAll(e){return i["a"].get("zookeeper/entParam/"+e)}}class n{getAll(e){return i["a"].get("zookeeper/entComp/"+e)}}class r{getAll(e){return i["a"].get("zookeeper/nss/"+e)}}class o{getAll(e){return i["a"].get("zookeeper/serParam/"+e)}}class l{getAll(e){return i["a"].get("zookeeper/serComp/"+e)}}class d{getAll(e){return i["a"].get("zookeeper/eventlog/"+e)}}class c{createSnapshot(e){return i["a"].get("/zookeeper/snapshot/"+e)}}},"4ca6":function(e,t,s){"use strict";s("ff44");var i=s("132d"),a=s("a9ad"),n=s("7560"),r=s("f2e7"),o=s("f40d"),l=s("fe6c"),d=s("58df"),c=s("80d2");t["a"]=Object(d["a"])(a["a"],Object(l["b"])(["left","bottom"]),n["a"],r["a"],o["a"]).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes(){return{"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile,...this.themeClasses}},computedBottom(){return this.bottom?"auto":this.computedYOffset},computedLeft(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop(){return this.bottom?this.computedYOffset:"auto"},computedXOffset(){return this.calcPosition(this.offsetX)},computedYOffset(){return this.calcPosition(this.offsetY)},isRtl(){return this.$vuetify.rtl},offset(){return this.overlap?this.dot?8:12:this.dot?2:4},styles(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition(e){return`calc(100% - ${Object(c["i"])(e||this.offset)})`},genBadge(){const e=this.$vuetify.lang,t=this.$attrs["aria-label"]||e.t(this.label),s=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":t,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),i=this.$createElement("span",s,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[i]):i},genBadgeContent(){if(this.dot)return;const e=Object(c["t"])(this,"badge");return e||(this.content?String(this.content):this.icon?this.$createElement(i["a"],this.icon):void 0)},genBadgeWrapper(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render(e){const t=[this.genBadgeWrapper()],s=[Object(c["t"])(this)],{"aria-atomic":i,"aria-label":a,"aria-live":n,role:r,title:o,...l}=this.$attrs;return this.inline&&this.left?s.unshift(t):s.push(t),e("span",{staticClass:"v-badge",attrs:l,class:this.classes},s)}})},"615b":function(e,t,s){},"7e58":function(e,t,s){},"99d9":function(e,t,s){"use strict";s.d(t,"a",(function(){return n})),s.d(t,"b",(function(){return o})),s.d(t,"c",(function(){return l}));var i=s("b0af"),a=s("80d2");const n=Object(a["k"])("v-card__actions"),r=Object(a["k"])("v-card__subtitle"),o=Object(a["k"])("v-card__text"),l=Object(a["k"])("v-card__title");i["a"]},b0af:function(e,t,s){"use strict";s("615b");var i=s("10d2"),a=s("297c"),n=s("1c87"),r=s("58df");t["a"]=Object(r["a"])(a["a"],n["a"],i["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...n["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...i["a"].options.computed.classes.call(this)}},styles(){const e={...i["a"].options.computed.styles.call(this)};return this.img&&(e.background=`url("${this.img}") center center / cover no-repeat`),e}},methods:{genProgress(){const e=a["a"].options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render(e){const{tag:t,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),e(t,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},b962:function(e,t,s){"use strict";s("f844")},f844:function(e,t,s){},fa9e:function(e,t,s){},ff44:function(e,t,s){}}]);
//# sourceMappingURL=chunk-2ed99816.bc243b25.js.map