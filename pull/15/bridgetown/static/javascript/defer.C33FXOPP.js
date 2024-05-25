import{a as E}from"/konnors-ninja-keys/pull/15/bridgetown/static/chunks/chunk-LWAKNQX4.js";import"/konnors-ninja-keys/pull/15/bridgetown/static/chunks/chunk-FF3H5YHN.js";import"/konnors-ninja-keys/pull/15/bridgetown/static/chunks/chunk-VUQAVPIB.js";import"/konnors-ninja-keys/pull/15/bridgetown/static/chunks/chunk-FGV7O5EN.js";import"/konnors-ninja-keys/pull/15/bridgetown/static/chunks/chunk-JKLUCBNI.js";import"/konnors-ninja-keys/pull/15/bridgetown/static/chunks/chunk-2YWHZK4O.js";import"/konnors-ninja-keys/pull/15/bridgetown/static/chunks/chunk-YHP7M6DV.js";import"/konnors-ninja-keys/pull/15/bridgetown/static/chunks/chunk-DPAIQ5IM.js";import{a as lt,c as st}from"/konnors-ninja-keys/pull/15/bridgetown/static/chunks/chunk-TQTBSHRM.js";var f=lt((V,J)=>{(function(){var l=function(t){var s=new l.Builder;return s.pipeline.add(l.trimmer,l.stopWordFilter,l.stemmer),s.searchPipeline.add(l.stemmer),t.call(s,s),s.build()};l.version="2.3.9";l.utils={},l.utils.warn=function(t){return function(s){t.console&&console.warn&&console.warn(s)}}(this),l.utils.asString=function(t){return t==null?"":t.toString()},l.utils.clone=function(t){if(t==null)return t;for(var s=Object.create(null),o=Object.keys(t),e=0;e<o.length;e++){var i=o[e],c=t[i];if(Array.isArray(c)){s[i]=c.slice();continue}if(typeof c=="string"||typeof c=="number"||typeof c=="boolean"){s[i]=c;continue}throw new TypeError("clone is not deep and does not support nested objects")}return s},l.FieldRef=function(t,s,o){this.docRef=t,this.fieldName=s,this._stringValue=o},l.FieldRef.joiner="/",l.FieldRef.fromString=function(t){var s=t.indexOf(l.FieldRef.joiner);if(s===-1)throw"malformed field ref string";var o=t.slice(0,s),e=t.slice(s+1);return new l.FieldRef(e,o,t)},l.FieldRef.prototype.toString=function(){return this._stringValue==null&&(this._stringValue=this.fieldName+l.FieldRef.joiner+this.docRef),this._stringValue};l.Set=function(t){if(this.elements=Object.create(null),t){this.length=t.length;for(var s=0;s<this.length;s++)this.elements[t[s]]=!0}else this.length=0},l.Set.complete={intersect:function(t){return t},union:function(){return this},contains:function(){return!0}},l.Set.empty={intersect:function(){return this},union:function(t){return t},contains:function(){return!1}},l.Set.prototype.contains=function(t){return!!this.elements[t]},l.Set.prototype.intersect=function(t){var s,o,e,i=[];if(t===l.Set.complete)return this;if(t===l.Set.empty)return t;this.length<t.length?(s=this,o=t):(s=t,o=this),e=Object.keys(s.elements);for(var c=0;c<e.length;c++){var r=e[c];r in o.elements&&i.push(r)}return new l.Set(i)},l.Set.prototype.union=function(t){return t===l.Set.complete?l.Set.complete:t===l.Set.empty?this:new l.Set(Object.keys(this.elements).concat(Object.keys(t.elements)))},l.idf=function(t,s){var o=0;for(var e in t)e!="_index"&&(o+=Object.keys(t[e]).length);var i=(s-o+.5)/(o+.5);return Math.log(1+Math.abs(i))},l.Token=function(t,s){this.str=t||"",this.metadata=s||{}},l.Token.prototype.toString=function(){return this.str},l.Token.prototype.update=function(t){return this.str=t(this.str,this.metadata),this},l.Token.prototype.clone=function(t){return t=t||function(s){return s},new l.Token(t(this.str,this.metadata),this.metadata)};l.tokenizer=function(t,s){if(t==null||t==null)return[];if(Array.isArray(t))return t.map(function(N){return new l.Token(l.utils.asString(N).toLowerCase(),l.utils.clone(s))});for(var o=t.toString().toLowerCase(),e=o.length,i=[],c=0,r=0;c<=e;c++){var n=o.charAt(c),b=c-r;if(n.match(l.tokenizer.separator)||c==e){if(b>0){var Q=l.utils.clone(s)||{};Q.position=[r,b],Q.index=i.length,i.push(new l.Token(o.slice(r,c),Q))}r=c+1}}return i},l.tokenizer.separator=/[\s\-]+/;l.Pipeline=function(){this._stack=[]},l.Pipeline.registeredFunctions=Object.create(null),l.Pipeline.registerFunction=function(t,s){s in this.registeredFunctions&&l.utils.warn("Overwriting existing registered function: "+s),t.label=s,l.Pipeline.registeredFunctions[t.label]=t},l.Pipeline.warnIfFunctionNotRegistered=function(t){var s=t.label&&t.label in this.registeredFunctions;s||l.utils.warn(`Function is not registered with pipeline. This may cause problems when serialising the index.
`,t)},l.Pipeline.load=function(t){var s=new l.Pipeline;return t.forEach(function(o){var e=l.Pipeline.registeredFunctions[o];if(e)s.add(e);else throw new Error("Cannot load unregistered function: "+o)}),s},l.Pipeline.prototype.add=function(){var t=Array.prototype.slice.call(arguments);t.forEach(function(s){l.Pipeline.warnIfFunctionNotRegistered(s),this._stack.push(s)},this)},l.Pipeline.prototype.after=function(t,s){l.Pipeline.warnIfFunctionNotRegistered(s);var o=this._stack.indexOf(t);if(o==-1)throw new Error("Cannot find existingFn");o=o+1,this._stack.splice(o,0,s)},l.Pipeline.prototype.before=function(t,s){l.Pipeline.warnIfFunctionNotRegistered(s);var o=this._stack.indexOf(t);if(o==-1)throw new Error("Cannot find existingFn");this._stack.splice(o,0,s)},l.Pipeline.prototype.remove=function(t){var s=this._stack.indexOf(t);s!=-1&&this._stack.splice(s,1)},l.Pipeline.prototype.run=function(t){for(var s=this._stack.length,o=0;o<s;o++){for(var e=this._stack[o],i=[],c=0;c<t.length;c++){var r=e(t[c],c,t);if(!(r==null||r===""))if(Array.isArray(r))for(var n=0;n<r.length;n++)i.push(r[n]);else i.push(r)}t=i}return t},l.Pipeline.prototype.runString=function(t,s){var o=new l.Token(t,s);return this.run([o]).map(function(e){return e.toString()})},l.Pipeline.prototype.reset=function(){this._stack=[]},l.Pipeline.prototype.toJSON=function(){return this._stack.map(function(t){return l.Pipeline.warnIfFunctionNotRegistered(t),t.label})};l.Vector=function(t){this._magnitude=0,this.elements=t||[]},l.Vector.prototype.positionForIndex=function(t){if(this.elements.length==0)return 0;for(var s=0,o=this.elements.length/2,e=o-s,i=Math.floor(e/2),c=this.elements[i*2];e>1&&(c<t&&(s=i),c>t&&(o=i),c!=t);)e=o-s,i=s+Math.floor(e/2),c=this.elements[i*2];if(c==t||c>t)return i*2;if(c<t)return(i+1)*2},l.Vector.prototype.insert=function(t,s){this.upsert(t,s,function(){throw"duplicate index"})},l.Vector.prototype.upsert=function(t,s,o){this._magnitude=0;var e=this.positionForIndex(t);this.elements[e]==t?this.elements[e+1]=o(this.elements[e+1],s):this.elements.splice(e,0,t,s)},l.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var t=0,s=this.elements.length,o=1;o<s;o+=2){var e=this.elements[o];t+=e*e}return this._magnitude=Math.sqrt(t)},l.Vector.prototype.dot=function(t){for(var s=0,o=this.elements,e=t.elements,i=o.length,c=e.length,r=0,n=0,b=0,Q=0;b<i&&Q<c;)r=o[b],n=e[Q],r<n?b+=2:r>n?Q+=2:r==n&&(s+=o[b+1]*e[Q+1],b+=2,Q+=2);return s},l.Vector.prototype.similarity=function(t){return this.dot(t)/this.magnitude()||0},l.Vector.prototype.toArray=function(){for(var t=new Array(this.elements.length/2),s=1,o=0;s<this.elements.length;s+=2,o++)t[o]=this.elements[s];return t},l.Vector.prototype.toJSON=function(){return this.elements};l.stemmer=function(){var t={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},s={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},o="[^aeiou]",e="[aeiouy]",i=o+"[^aeiouy]*",c=e+"[aeiou]*",r="^("+i+")?"+c+i,n="^("+i+")?"+c+i+"("+c+")?$",b="^("+i+")?"+c+i+c+i,Q="^("+i+")?"+e,N=new RegExp(r),C=new RegExp(b),y=new RegExp(n),M=new RegExp(Q),d=/^(.+?)(ss|i)es$/,g=/^(.+?)([^s])s$/,u=/^(.+?)eed$/,w=/^(.+?)(ed|ing)$/,U=/.$/,B=/(at|bl|iz)$/,W=new RegExp("([^aeiouylsz])\\1$"),S=new RegExp("^"+i+e+"[^aeiouwxy]$"),O=/^(.+?[^aeiou])y$/,Z=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,T=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,m=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,j=/^(.+?)(s|t)(ion)$/,A=/^(.+?)e$/,k=/ll$/,R=new RegExp("^"+i+e+"[^aeiouwxy]$"),v=function(a){var I,z,F,L,h,x,X;if(a.length<3)return a;if(F=a.substr(0,1),F=="y"&&(a=F.toUpperCase()+a.substr(1)),L=d,h=g,L.test(a)?a=a.replace(L,"$1$2"):h.test(a)&&(a=a.replace(h,"$1$2")),L=u,h=w,L.test(a)){var D=L.exec(a);L=N,L.test(D[1])&&(L=U,a=a.replace(L,""))}else if(h.test(a)){var D=h.exec(a);I=D[1],h=M,h.test(I)&&(a=I,h=B,x=W,X=S,h.test(a)?a=a+"e":x.test(a)?(L=U,a=a.replace(L,"")):X.test(a)&&(a=a+"e"))}if(L=O,L.test(a)){var D=L.exec(a);I=D[1],a=I+"i"}if(L=Z,L.test(a)){var D=L.exec(a);I=D[1],z=D[2],L=N,L.test(I)&&(a=I+t[z])}if(L=T,L.test(a)){var D=L.exec(a);I=D[1],z=D[2],L=N,L.test(I)&&(a=I+s[z])}if(L=m,h=j,L.test(a)){var D=L.exec(a);I=D[1],L=C,L.test(I)&&(a=I)}else if(h.test(a)){var D=h.exec(a);I=D[1]+D[2],h=C,h.test(I)&&(a=I)}if(L=A,L.test(a)){var D=L.exec(a);I=D[1],L=C,h=y,x=R,(L.test(I)||h.test(I)&&!x.test(I))&&(a=I)}return L=k,h=C,L.test(a)&&h.test(a)&&(L=U,a=a.replace(L,"")),F=="y"&&(a=F.toLowerCase()+a.substr(1)),a};return function(p){return p.update(v)}}(),l.Pipeline.registerFunction(l.stemmer,"stemmer");l.generateStopWordFilter=function(t){var s=t.reduce(function(o,e){return o[e]=e,o},{});return function(o){if(o&&s[o.toString()]!==o.toString())return o}},l.stopWordFilter=l.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),l.Pipeline.registerFunction(l.stopWordFilter,"stopWordFilter");l.trimmer=function(t){return t.update(function(s){return s.replace(/^\W+/,"").replace(/\W+$/,"")})},l.Pipeline.registerFunction(l.trimmer,"trimmer");l.TokenSet=function(){this.final=!1,this.edges={},this.id=l.TokenSet._nextId,l.TokenSet._nextId+=1},l.TokenSet._nextId=1,l.TokenSet.fromArray=function(t){for(var s=new l.TokenSet.Builder,o=0,e=t.length;o<e;o++)s.insert(t[o]);return s.finish(),s.root},l.TokenSet.fromClause=function(t){return"editDistance"in t?l.TokenSet.fromFuzzyString(t.term,t.editDistance):l.TokenSet.fromString(t.term)},l.TokenSet.fromFuzzyString=function(t,s){for(var o=new l.TokenSet,e=[{node:o,editsRemaining:s,str:t}];e.length;){var i=e.pop();if(i.str.length>0){var c=i.str.charAt(0),r;c in i.node.edges?r=i.node.edges[c]:(r=new l.TokenSet,i.node.edges[c]=r),i.str.length==1&&(r.final=!0),e.push({node:r,editsRemaining:i.editsRemaining,str:i.str.slice(1)})}if(i.editsRemaining!=0){if("*"in i.node.edges)var n=i.node.edges["*"];else{var n=new l.TokenSet;i.node.edges["*"]=n}if(i.str.length==0&&(n.final=!0),e.push({node:n,editsRemaining:i.editsRemaining-1,str:i.str}),i.str.length>1&&e.push({node:i.node,editsRemaining:i.editsRemaining-1,str:i.str.slice(1)}),i.str.length==1&&(i.node.final=!0),i.str.length>=1){if("*"in i.node.edges)var b=i.node.edges["*"];else{var b=new l.TokenSet;i.node.edges["*"]=b}i.str.length==1&&(b.final=!0),e.push({node:b,editsRemaining:i.editsRemaining-1,str:i.str.slice(1)})}if(i.str.length>1){var Q=i.str.charAt(0),N=i.str.charAt(1),C;N in i.node.edges?C=i.node.edges[N]:(C=new l.TokenSet,i.node.edges[N]=C),i.str.length==1&&(C.final=!0),e.push({node:C,editsRemaining:i.editsRemaining-1,str:Q+i.str.slice(2)})}}}return o},l.TokenSet.fromString=function(t){for(var s=new l.TokenSet,o=s,e=0,i=t.length;e<i;e++){var c=t[e],r=e==i-1;if(c=="*")s.edges[c]=s,s.final=r;else{var n=new l.TokenSet;n.final=r,s.edges[c]=n,s=n}}return o},l.TokenSet.prototype.toArray=function(){for(var t=[],s=[{prefix:"",node:this}];s.length;){var o=s.pop(),e=Object.keys(o.node.edges),i=e.length;o.node.final&&(o.prefix.charAt(0),t.push(o.prefix));for(var c=0;c<i;c++){var r=e[c];s.push({prefix:o.prefix.concat(r),node:o.node.edges[r]})}}return t},l.TokenSet.prototype.toString=function(){if(this._str)return this._str;for(var t=this.final?"1":"0",s=Object.keys(this.edges).sort(),o=s.length,e=0;e<o;e++){var i=s[e],c=this.edges[i];t=t+i+c.id}return t},l.TokenSet.prototype.intersect=function(t){for(var s=new l.TokenSet,o=void 0,e=[{qNode:t,output:s,node:this}];e.length;){o=e.pop();for(var i=Object.keys(o.qNode.edges),c=i.length,r=Object.keys(o.node.edges),n=r.length,b=0;b<c;b++)for(var Q=i[b],N=0;N<n;N++){var C=r[N];if(C==Q||Q=="*"){var y=o.node.edges[C],M=o.qNode.edges[Q],d=y.final&&M.final,g=void 0;C in o.output.edges?(g=o.output.edges[C],g.final=g.final||d):(g=new l.TokenSet,g.final=d,o.output.edges[C]=g),e.push({qNode:M,output:g,node:y})}}}return s},l.TokenSet.Builder=function(){this.previousWord="",this.root=new l.TokenSet,this.uncheckedNodes=[],this.minimizedNodes={}},l.TokenSet.Builder.prototype.insert=function(t){var s,o=0;if(t<this.previousWord)throw new Error("Out of order word insertion");for(var e=0;e<t.length&&e<this.previousWord.length&&t[e]==this.previousWord[e];e++)o++;this.minimize(o),this.uncheckedNodes.length==0?s=this.root:s=this.uncheckedNodes[this.uncheckedNodes.length-1].child;for(var e=o;e<t.length;e++){var i=new l.TokenSet,c=t[e];s.edges[c]=i,this.uncheckedNodes.push({parent:s,char:c,child:i}),s=i}s.final=!0,this.previousWord=t},l.TokenSet.Builder.prototype.finish=function(){this.minimize(0)},l.TokenSet.Builder.prototype.minimize=function(t){for(var s=this.uncheckedNodes.length-1;s>=t;s--){var o=this.uncheckedNodes[s],e=o.child.toString();e in this.minimizedNodes?o.parent.edges[o.char]=this.minimizedNodes[e]:(o.child._str=e,this.minimizedNodes[e]=o.child),this.uncheckedNodes.pop()}};l.Index=function(t){this.invertedIndex=t.invertedIndex,this.fieldVectors=t.fieldVectors,this.tokenSet=t.tokenSet,this.fields=t.fields,this.pipeline=t.pipeline},l.Index.prototype.search=function(t){return this.query(function(s){var o=new l.QueryParser(t,s);o.parse()})},l.Index.prototype.query=function(t){for(var s=new l.Query(this.fields),o=Object.create(null),e=Object.create(null),i=Object.create(null),c=Object.create(null),r=Object.create(null),n=0;n<this.fields.length;n++)e[this.fields[n]]=new l.Vector;t.call(s,s);for(var n=0;n<s.clauses.length;n++){var b=s.clauses[n],Q=null,N=l.Set.empty;b.usePipeline?Q=this.pipeline.runString(b.term,{fields:b.fields}):Q=[b.term];for(var C=0;C<Q.length;C++){var y=Q[C];b.term=y;var M=l.TokenSet.fromClause(b),d=this.tokenSet.intersect(M).toArray();if(d.length===0&&b.presence===l.Query.presence.REQUIRED){for(var g=0;g<b.fields.length;g++){var u=b.fields[g];c[u]=l.Set.empty}break}for(var w=0;w<d.length;w++)for(var U=d[w],B=this.invertedIndex[U],W=B._index,g=0;g<b.fields.length;g++){var u=b.fields[g],S=B[u],O=Object.keys(S),Z=U+"/"+u,T=new l.Set(O);if(b.presence==l.Query.presence.REQUIRED&&(N=N.union(T),c[u]===void 0&&(c[u]=l.Set.complete)),b.presence==l.Query.presence.PROHIBITED){r[u]===void 0&&(r[u]=l.Set.empty),r[u]=r[u].union(T);continue}if(e[u].upsert(W,b.boost,function($,tt){return $+tt}),!i[Z]){for(var m=0;m<O.length;m++){var j=O[m],A=new l.FieldRef(j,u),k=S[j],R;(R=o[A])===void 0?o[A]=new l.MatchData(U,u,k):R.add(U,u,k)}i[Z]=!0}}}if(b.presence===l.Query.presence.REQUIRED)for(var g=0;g<b.fields.length;g++){var u=b.fields[g];c[u]=c[u].intersect(N)}}for(var v=l.Set.complete,p=l.Set.empty,n=0;n<this.fields.length;n++){var u=this.fields[n];c[u]&&(v=v.intersect(c[u])),r[u]&&(p=p.union(r[u]))}var a=Object.keys(o),I=[],z=Object.create(null);if(s.isNegated()){a=Object.keys(this.fieldVectors);for(var n=0;n<a.length;n++){var A=a[n],F=l.FieldRef.fromString(A);o[A]=new l.MatchData}}for(var n=0;n<a.length;n++){var F=l.FieldRef.fromString(a[n]),L=F.docRef;if(v.contains(L)&&!p.contains(L)){var h=this.fieldVectors[F],x=e[F.fieldName].similarity(h),X;if((X=z[L])!==void 0)X.score+=x,X.matchData.combine(o[F]);else{var D={ref:L,score:x,matchData:o[F]};z[L]=D,I.push(D)}}}return I.sort(function(_,q){return q.score-_.score})},l.Index.prototype.toJSON=function(){var t=Object.keys(this.invertedIndex).sort().map(function(o){return[o,this.invertedIndex[o]]},this),s=Object.keys(this.fieldVectors).map(function(o){return[o,this.fieldVectors[o].toJSON()]},this);return{version:l.version,fields:this.fields,fieldVectors:s,invertedIndex:t,pipeline:this.pipeline.toJSON()}},l.Index.load=function(t){var s={},o={},e=t.fieldVectors,i=Object.create(null),c=t.invertedIndex,r=new l.TokenSet.Builder,n=l.Pipeline.load(t.pipeline);t.version!=l.version&&l.utils.warn("Version mismatch when loading serialised index. Current version of lunr '"+l.version+"' does not match serialized index '"+t.version+"'");for(var b=0;b<e.length;b++){var Q=e[b],N=Q[0],C=Q[1];o[N]=new l.Vector(C)}for(var b=0;b<c.length;b++){var Q=c[b],y=Q[0],M=Q[1];r.insert(y),i[y]=M}return r.finish(),s.fields=t.fields,s.fieldVectors=o,s.invertedIndex=i,s.tokenSet=r.root,s.pipeline=n,new l.Index(s)};l.Builder=function(){this._ref="id",this._fields=Object.create(null),this._documents=Object.create(null),this.invertedIndex=Object.create(null),this.fieldTermFrequencies={},this.fieldLengths={},this.tokenizer=l.tokenizer,this.pipeline=new l.Pipeline,this.searchPipeline=new l.Pipeline,this.documentCount=0,this._b=.75,this._k1=1.2,this.termIndex=0,this.metadataWhitelist=[]},l.Builder.prototype.ref=function(t){this._ref=t},l.Builder.prototype.field=function(t,s){if(/\//.test(t))throw new RangeError("Field '"+t+"' contains illegal character '/'");this._fields[t]=s||{}},l.Builder.prototype.b=function(t){t<0?this._b=0:t>1?this._b=1:this._b=t},l.Builder.prototype.k1=function(t){this._k1=t},l.Builder.prototype.add=function(t,s){var o=t[this._ref],e=Object.keys(this._fields);this._documents[o]=s||{},this.documentCount+=1;for(var i=0;i<e.length;i++){var c=e[i],r=this._fields[c].extractor,n=r?r(t):t[c],b=this.tokenizer(n,{fields:[c]}),Q=this.pipeline.run(b),N=new l.FieldRef(o,c),C=Object.create(null);this.fieldTermFrequencies[N]=C,this.fieldLengths[N]=0,this.fieldLengths[N]+=Q.length;for(var y=0;y<Q.length;y++){var M=Q[y];if(C[M]==null&&(C[M]=0),C[M]+=1,this.invertedIndex[M]==null){var d=Object.create(null);d._index=this.termIndex,this.termIndex+=1;for(var g=0;g<e.length;g++)d[e[g]]=Object.create(null);this.invertedIndex[M]=d}this.invertedIndex[M][c][o]==null&&(this.invertedIndex[M][c][o]=Object.create(null));for(var u=0;u<this.metadataWhitelist.length;u++){var w=this.metadataWhitelist[u],U=M.metadata[w];this.invertedIndex[M][c][o][w]==null&&(this.invertedIndex[M][c][o][w]=[]),this.invertedIndex[M][c][o][w].push(U)}}}},l.Builder.prototype.calculateAverageFieldLengths=function(){for(var t=Object.keys(this.fieldLengths),s=t.length,o={},e={},i=0;i<s;i++){var c=l.FieldRef.fromString(t[i]),r=c.fieldName;e[r]||(e[r]=0),e[r]+=1,o[r]||(o[r]=0),o[r]+=this.fieldLengths[c]}for(var n=Object.keys(this._fields),i=0;i<n.length;i++){var b=n[i];o[b]=o[b]/e[b]}this.averageFieldLength=o},l.Builder.prototype.createFieldVectors=function(){for(var t={},s=Object.keys(this.fieldTermFrequencies),o=s.length,e=Object.create(null),i=0;i<o;i++){for(var c=l.FieldRef.fromString(s[i]),r=c.fieldName,n=this.fieldLengths[c],b=new l.Vector,Q=this.fieldTermFrequencies[c],N=Object.keys(Q),C=N.length,y=this._fields[r].boost||1,M=this._documents[c.docRef].boost||1,d=0;d<C;d++){var g=N[d],u=Q[g],w=this.invertedIndex[g]._index,U,B,W;e[g]===void 0?(U=l.idf(this.invertedIndex[g],this.documentCount),e[g]=U):U=e[g],B=U*((this._k1+1)*u)/(this._k1*(1-this._b+this._b*(n/this.averageFieldLength[r]))+u),B*=y,B*=M,W=Math.round(B*1e3)/1e3,b.insert(w,W)}t[c]=b}this.fieldVectors=t},l.Builder.prototype.createTokenSet=function(){this.tokenSet=l.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())},l.Builder.prototype.build=function(){return this.calculateAverageFieldLengths(),this.createFieldVectors(),this.createTokenSet(),new l.Index({invertedIndex:this.invertedIndex,fieldVectors:this.fieldVectors,tokenSet:this.tokenSet,fields:Object.keys(this._fields),pipeline:this.searchPipeline})},l.Builder.prototype.use=function(t){var s=Array.prototype.slice.call(arguments,1);s.unshift(this),t.apply(this,s)},l.MatchData=function(t,s,o){for(var e=Object.create(null),i=Object.keys(o||{}),c=0;c<i.length;c++){var r=i[c];e[r]=o[r].slice()}this.metadata=Object.create(null),t!==void 0&&(this.metadata[t]=Object.create(null),this.metadata[t][s]=e)},l.MatchData.prototype.combine=function(t){for(var s=Object.keys(t.metadata),o=0;o<s.length;o++){var e=s[o],i=Object.keys(t.metadata[e]);this.metadata[e]==null&&(this.metadata[e]=Object.create(null));for(var c=0;c<i.length;c++){var r=i[c],n=Object.keys(t.metadata[e][r]);this.metadata[e][r]==null&&(this.metadata[e][r]=Object.create(null));for(var b=0;b<n.length;b++){var Q=n[b];this.metadata[e][r][Q]==null?this.metadata[e][r][Q]=t.metadata[e][r][Q]:this.metadata[e][r][Q]=this.metadata[e][r][Q].concat(t.metadata[e][r][Q])}}}},l.MatchData.prototype.add=function(t,s,o){if(!(t in this.metadata)){this.metadata[t]=Object.create(null),this.metadata[t][s]=o;return}if(!(s in this.metadata[t])){this.metadata[t][s]=o;return}for(var e=Object.keys(o),i=0;i<e.length;i++){var c=e[i];c in this.metadata[t][s]?this.metadata[t][s][c]=this.metadata[t][s][c].concat(o[c]):this.metadata[t][s][c]=o[c]}},l.Query=function(t){this.clauses=[],this.allFields=t},l.Query.wildcard=new String("*"),l.Query.wildcard.NONE=0,l.Query.wildcard.LEADING=1,l.Query.wildcard.TRAILING=2,l.Query.presence={OPTIONAL:1,REQUIRED:2,PROHIBITED:3},l.Query.prototype.clause=function(t){return"fields"in t||(t.fields=this.allFields),"boost"in t||(t.boost=1),"usePipeline"in t||(t.usePipeline=!0),"wildcard"in t||(t.wildcard=l.Query.wildcard.NONE),t.wildcard&l.Query.wildcard.LEADING&&t.term.charAt(0)!=l.Query.wildcard&&(t.term="*"+t.term),t.wildcard&l.Query.wildcard.TRAILING&&t.term.slice(-1)!=l.Query.wildcard&&(t.term=""+t.term+"*"),"presence"in t||(t.presence=l.Query.presence.OPTIONAL),this.clauses.push(t),this},l.Query.prototype.isNegated=function(){for(var t=0;t<this.clauses.length;t++)if(this.clauses[t].presence!=l.Query.presence.PROHIBITED)return!1;return!0},l.Query.prototype.term=function(t,s){if(Array.isArray(t))return t.forEach(function(e){this.term(e,l.utils.clone(s))},this),this;var o=s||{};return o.term=t.toString(),this.clause(o),this},l.QueryParseError=function(t,s,o){this.name="QueryParseError",this.message=t,this.start=s,this.end=o},l.QueryParseError.prototype=new Error,l.QueryLexer=function(t){this.lexemes=[],this.str=t,this.length=t.length,this.pos=0,this.start=0,this.escapeCharPositions=[]},l.QueryLexer.prototype.run=function(){for(var t=l.QueryLexer.lexText;t;)t=t(this)},l.QueryLexer.prototype.sliceString=function(){for(var t=[],s=this.start,o=this.pos,e=0;e<this.escapeCharPositions.length;e++)o=this.escapeCharPositions[e],t.push(this.str.slice(s,o)),s=o+1;return t.push(this.str.slice(s,this.pos)),this.escapeCharPositions.length=0,t.join("")},l.QueryLexer.prototype.emit=function(t){this.lexemes.push({type:t,str:this.sliceString(),start:this.start,end:this.pos}),this.start=this.pos},l.QueryLexer.prototype.escapeCharacter=function(){this.escapeCharPositions.push(this.pos-1),this.pos+=1},l.QueryLexer.prototype.next=function(){if(this.pos>=this.length)return l.QueryLexer.EOS;var t=this.str.charAt(this.pos);return this.pos+=1,t},l.QueryLexer.prototype.width=function(){return this.pos-this.start},l.QueryLexer.prototype.ignore=function(){this.start==this.pos&&(this.pos+=1),this.start=this.pos},l.QueryLexer.prototype.backup=function(){this.pos-=1},l.QueryLexer.prototype.acceptDigitRun=function(){var t,s;do t=this.next(),s=t.charCodeAt(0);while(s>47&&s<58);t!=l.QueryLexer.EOS&&this.backup()},l.QueryLexer.prototype.more=function(){return this.pos<this.length},l.QueryLexer.EOS="EOS",l.QueryLexer.FIELD="FIELD",l.QueryLexer.TERM="TERM",l.QueryLexer.EDIT_DISTANCE="EDIT_DISTANCE",l.QueryLexer.BOOST="BOOST",l.QueryLexer.PRESENCE="PRESENCE",l.QueryLexer.lexField=function(t){return t.backup(),t.emit(l.QueryLexer.FIELD),t.ignore(),l.QueryLexer.lexText},l.QueryLexer.lexTerm=function(t){if(t.width()>1&&(t.backup(),t.emit(l.QueryLexer.TERM)),t.ignore(),t.more())return l.QueryLexer.lexText},l.QueryLexer.lexEditDistance=function(t){return t.ignore(),t.acceptDigitRun(),t.emit(l.QueryLexer.EDIT_DISTANCE),l.QueryLexer.lexText},l.QueryLexer.lexBoost=function(t){return t.ignore(),t.acceptDigitRun(),t.emit(l.QueryLexer.BOOST),l.QueryLexer.lexText},l.QueryLexer.lexEOS=function(t){t.width()>0&&t.emit(l.QueryLexer.TERM)},l.QueryLexer.termSeparator=l.tokenizer.separator,l.QueryLexer.lexText=function(t){for(;;){var s=t.next();if(s==l.QueryLexer.EOS)return l.QueryLexer.lexEOS;if(s.charCodeAt(0)==92){t.escapeCharacter();continue}if(s==":")return l.QueryLexer.lexField;if(s=="~")return t.backup(),t.width()>0&&t.emit(l.QueryLexer.TERM),l.QueryLexer.lexEditDistance;if(s=="^")return t.backup(),t.width()>0&&t.emit(l.QueryLexer.TERM),l.QueryLexer.lexBoost;if(s=="+"&&t.width()===1||s=="-"&&t.width()===1)return t.emit(l.QueryLexer.PRESENCE),l.QueryLexer.lexText;if(s.match(l.QueryLexer.termSeparator))return l.QueryLexer.lexTerm}},l.QueryParser=function(t,s){this.lexer=new l.QueryLexer(t),this.query=s,this.currentClause={},this.lexemeIdx=0},l.QueryParser.prototype.parse=function(){this.lexer.run(),this.lexemes=this.lexer.lexemes;for(var t=l.QueryParser.parseClause;t;)t=t(this);return this.query},l.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]},l.QueryParser.prototype.consumeLexeme=function(){var t=this.peekLexeme();return this.lexemeIdx+=1,t},l.QueryParser.prototype.nextClause=function(){var t=this.currentClause;this.query.clause(t),this.currentClause={}},l.QueryParser.parseClause=function(t){var s=t.peekLexeme();if(s!=null)switch(s.type){case l.QueryLexer.PRESENCE:return l.QueryParser.parsePresence;case l.QueryLexer.FIELD:return l.QueryParser.parseField;case l.QueryLexer.TERM:return l.QueryParser.parseTerm;default:var o="expected either a field or a term, found "+s.type;throw s.str.length>=1&&(o+=" with value '"+s.str+"'"),new l.QueryParseError(o,s.start,s.end)}},l.QueryParser.parsePresence=function(t){var s=t.consumeLexeme();if(s!=null){switch(s.str){case"-":t.currentClause.presence=l.Query.presence.PROHIBITED;break;case"+":t.currentClause.presence=l.Query.presence.REQUIRED;break;default:var o="unrecognised presence operator'"+s.str+"'";throw new l.QueryParseError(o,s.start,s.end)}var e=t.peekLexeme();if(e==null){var o="expecting term or field, found nothing";throw new l.QueryParseError(o,s.start,s.end)}switch(e.type){case l.QueryLexer.FIELD:return l.QueryParser.parseField;case l.QueryLexer.TERM:return l.QueryParser.parseTerm;default:var o="expecting term or field, found '"+e.type+"'";throw new l.QueryParseError(o,e.start,e.end)}}},l.QueryParser.parseField=function(t){var s=t.consumeLexeme();if(s!=null){if(t.query.allFields.indexOf(s.str)==-1){var o=t.query.allFields.map(function(c){return"'"+c+"'"}).join(", "),e="unrecognised field '"+s.str+"', possible fields: "+o;throw new l.QueryParseError(e,s.start,s.end)}t.currentClause.fields=[s.str];var i=t.peekLexeme();if(i==null){var e="expecting term, found nothing";throw new l.QueryParseError(e,s.start,s.end)}switch(i.type){case l.QueryLexer.TERM:return l.QueryParser.parseTerm;default:var e="expecting term, found '"+i.type+"'";throw new l.QueryParseError(e,i.start,i.end)}}},l.QueryParser.parseTerm=function(t){var s=t.consumeLexeme();if(s!=null){t.currentClause.term=s.str.toLowerCase(),s.str.indexOf("*")!=-1&&(t.currentClause.usePipeline=!1);var o=t.peekLexeme();if(o==null){t.nextClause();return}switch(o.type){case l.QueryLexer.TERM:return t.nextClause(),l.QueryParser.parseTerm;case l.QueryLexer.FIELD:return t.nextClause(),l.QueryParser.parseField;case l.QueryLexer.EDIT_DISTANCE:return l.QueryParser.parseEditDistance;case l.QueryLexer.BOOST:return l.QueryParser.parseBoost;case l.QueryLexer.PRESENCE:return t.nextClause(),l.QueryParser.parsePresence;default:var e="Unexpected lexeme type '"+o.type+"'";throw new l.QueryParseError(e,o.start,o.end)}}},l.QueryParser.parseEditDistance=function(t){var s=t.consumeLexeme();if(s!=null){var o=parseInt(s.str,10);if(isNaN(o)){var e="edit distance must be numeric";throw new l.QueryParseError(e,s.start,s.end)}t.currentClause.editDistance=o;var i=t.peekLexeme();if(i==null){t.nextClause();return}switch(i.type){case l.QueryLexer.TERM:return t.nextClause(),l.QueryParser.parseTerm;case l.QueryLexer.FIELD:return t.nextClause(),l.QueryParser.parseField;case l.QueryLexer.EDIT_DISTANCE:return l.QueryParser.parseEditDistance;case l.QueryLexer.BOOST:return l.QueryParser.parseBoost;case l.QueryLexer.PRESENCE:return t.nextClause(),l.QueryParser.parsePresence;default:var e="Unexpected lexeme type '"+i.type+"'";throw new l.QueryParseError(e,i.start,i.end)}}},l.QueryParser.parseBoost=function(t){var s=t.consumeLexeme();if(s!=null){var o=parseInt(s.str,10);if(isNaN(o)){var e="boost must be numeric";throw new l.QueryParseError(e,s.start,s.end)}t.currentClause.boost=o;var i=t.peekLexeme();if(i==null){t.nextClause();return}switch(i.type){case l.QueryLexer.TERM:return t.nextClause(),l.QueryParser.parseTerm;case l.QueryLexer.FIELD:return t.nextClause(),l.QueryParser.parseField;case l.QueryLexer.EDIT_DISTANCE:return l.QueryParser.parseEditDistance;case l.QueryLexer.BOOST:return l.QueryParser.parseBoost;case l.QueryLexer.PRESENCE:return t.nextClause(),l.QueryParser.parsePresence;default:var e="Unexpected lexeme type '"+i.type+"'";throw new l.QueryParseError(e,i.start,i.end)}}},function(t,s){typeof define=="function"&&define.amd?define(s):typeof V=="object"?J.exports=s():t.lunr=s()}(this,function(){return l})})()});var ot=Object.defineProperty,et=(l,t,s)=>t in l?ot(l,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[t]=s,G=(l,t,s)=>(et(l,typeof t!="symbol"?t+"":t,s),s);var K=st(f(),1),H=class{static async fetchAndGenerateIndex(l=this.endpoint){let s=await(await fetch(l)).json(),o=new this;return o.generateIndex(s),{searchIndex:s,searchEngine:o}}async generateIndex(l){this.index=(0,K.default)(function(){this.ref("id"),this.field("id",{boost:1e3}),this.field("title",{boost:100}),this.field("categories",{boost:10}),this.field("tags",{boost:10}),this.field("url",{boost:100}),this.field("content",{boost:1}),l.forEach(t=>{t.content&&this.add(t)})}),this.indexData=l}performSearch(l,t=null){if(this.index){this.query=l;let s=l.trim().length>0,o=l.split(" ").map((c,r,n)=>`${c}${r===n.length-1?`* ${c}~1`:"~1"}`).join(" "),e=s?this.index.search(`${l} ${o}`):this.index.search(`"*" ${o}`);return e?.length>0?e.map(c=>{let r=this.indexData.find(Q=>Q.id==c.ref),n=this.previewTemplate(r.content,t),b=this.previewTemplate(r.title)+`<!--(${c.score})-->`;return{id:r.id.trim(),title:r.title.trim(),collection:r.collection,content:r.content.trim(),categories:r.categories,url:r.url.trim(),heading:b,preview:n}}):[]}else throw new Error("Search index hasn't yet loaded. Run the generateIndex function")}previewTemplate(l,t){t==null&&(t=300);let s=t/2,o;if(t){let e=l.toLowerCase(),i=this.query.toLowerCase().split(" ").map(c=>e.indexOf(c)).filter(c=>c!=-1).sort((c,r)=>c-r);i[1]&&(t=Math.min(i[1]-i[0],t)),o=l.substr(Math.max(0,i[0]-s),t+s)}else o=l;return l.startsWith(o)||(o="\u2026"+o),l.endsWith(o)||(o=o+"\u2026"),this.query.toLowerCase().split(" ").forEach(e=>{e!=""&&(o=o.replace(new RegExp(`(${e.replace(/[\.\*\+\(\)]/g,"")})`,"ig"),"<strong>$1</strong>"))}),o}};G(H,"endpoint","/bridgetown_quick_search/index.json");var P=H;var Y=class extends E{findMatches(l){let t=super.findMatches(l);return this.results.forEach(s=>{t.find(o=>o.id===s.id)||t.push(s)}),t}constructor(){super(),this.snippetLength=142,this.alwaysShowResults=!0,this.staticData=[],this.results=[],this.endpoint="/bridgetown_quick_search/index.json",this.handleInput=()=>{this.data=this.createData()}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,await this.fetchAndGenerateIndex()}willUpdate(l){l.has("endpoint")&&this.fetchAndGenerateIndex(),super.willUpdate(l)}open(){super.open(),this.data=this.createData()}async fetchAndGenerateIndex(){let{searchEngine:l,searchIndex:t}=await P.fetchAndGenerateIndex(this.endpoint);this.__searchEngine=l,this.__searchIndex=t,this.addEventListener("change",this.handleInput)}createData(){return this.results=this.showResultsForQuery(this._search),[...this.staticData,...this.results]}showResultsForQuery(l,t=100){if(this.latestQuery=l,this.alwaysShowResults===!0||l&&l.length>=1){let s=this.__searchEngine.performSearch(l||"*",this.snippetLength).slice(0,t),o=[];return s.length<=0?[]:(s.forEach(e=>{let i=this.transformResult(e);i&&o.push(i)}),o)}return[]}transformResult(l){let{id:t,title:s,categories:o,url:e,content:i,collection:c}=l;if(!e.endsWith(".json"))return o=o.split(/[-_]/).map(it).join(" "),{id:t,title:s,section:o,href:e}}};G(Y,"baseName","bridgetown-ninja-keys");G(Y,"properties",Object.assign(E.properties,{snippetLength:{attribute:"snippet-length",state:!0,type:Number},alwaysShowResults:{attribute:"always-show-results",reflect:!0,type:Boolean},endpoint:{reflect:!0},results:{state:!0,type:Array},staticData:{state:!0,type:Array}}));function it(l){return l.charAt(0).toUpperCase()+l.slice(1)}(window.requestIdleCallback||window.setTimeout)(async()=>{let l=[{id:"theme-light",icon:"<sl-icon name='sun'></sl-icon>",title:"Light Mode",section:"Theme",keywords:"theme",handler(){return window.applyTheme("light"),{keepOpen:!0}}},{id:"theme-dark",icon:"<sl-icon name='moon'></sl-icon>",title:"Dark Mode",section:"Theme",keywords:"theme",handler(){return window.applyTheme("dark"),{keepOpen:!0}}},{id:"theme-system",icon:"<sl-icon name='display'></sl-icon>",title:"System",section:"Theme",keywords:"theme",handler(){return window.applyTheme("system"),{keepOpen:!0}}}];(class extends Y{constructor(...t){super(...t),this.staticData=l}createData(){return this.results=this.showResultsForQuery(this._search||"*").reverse(),this.results.forEach(t=>{t.icon='<sl-icon name="link-45deg"></sl-icon>'}),[...this.staticData,...this.results]}open(){this.scrollTop=window.scrollY,document.body.classList.add("fixed-body"),document.body.scroll(0,this.scrollTop),this.nonModals.forEach(t=>{t.setAttribute("inert","")}),super.open()}close(){document.body.classList.remove("fixed-body"),window.scrollTo(0,this.scrollTop),super.close(),this.nonModals.forEach(t=>t.removeAttribute("inert"))}get nonModals(){return[...document.body.children].filter(t=>t.localName!=="bridgetown-ninja-keys")}}).define("bridgetown-ninja-keys")});
/*! Bundled license information:

lunr/lunr.js:
  (**
   * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 2.3.9
   * Copyright (C) 2020 Oliver Nightingale
   * @license MIT
   *)
  (*!
   * lunr.utils
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.Set
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.tokenizer
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.Pipeline
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.Vector
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.stemmer
   * Copyright (C) 2020 Oliver Nightingale
   * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
   *)
  (*!
   * lunr.stopWordFilter
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.trimmer
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.TokenSet
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.Index
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.Builder
   * Copyright (C) 2020 Oliver Nightingale
   *)
*/
//# sourceMappingURL=/konnors-ninja-keys/pull/15/bridgetown/static/javascript/defer.C33FXOPP.js.map
