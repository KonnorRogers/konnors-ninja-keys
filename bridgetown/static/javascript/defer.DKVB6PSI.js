import{a as Y}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-OS7DTV2Z.js";import"/konnors-ninja-keys/bridgetown/static/chunks/chunk-3JPTN3DV.js";import"/konnors-ninja-keys/bridgetown/static/chunks/chunk-ELMMJU7Y.js";import"/konnors-ninja-keys/bridgetown/static/chunks/chunk-UQF2EDB7.js";import"/konnors-ninja-keys/bridgetown/static/chunks/chunk-VUR7V3FZ.js";import"/konnors-ninja-keys/bridgetown/static/chunks/chunk-SE7PYJDV.js";import"/konnors-ninja-keys/bridgetown/static/chunks/chunk-UYJG54BB.js";import"/konnors-ninja-keys/bridgetown/static/chunks/chunk-Q477UYHU.js";import{a as et,c as ot,d as S}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-HGOD5HCG.js";var H=et((J,f)=>{(function(){var l=function(t){var s=new l.Builder;return s.pipeline.add(l.trimmer,l.stopWordFilter,l.stemmer),s.searchPipeline.add(l.stemmer),t.call(s,s),s.build()};l.version="2.3.9";l.utils={},l.utils.warn=function(t){return function(s){t.console&&console.warn&&console.warn(s)}}(this),l.utils.asString=function(t){return t==null?"":t.toString()},l.utils.clone=function(t){if(t==null)return t;for(var s=Object.create(null),e=Object.keys(t),o=0;o<e.length;o++){var c=e[o],i=t[c];if(Array.isArray(i)){s[c]=i.slice();continue}if(typeof i=="string"||typeof i=="number"||typeof i=="boolean"){s[c]=i;continue}throw new TypeError("clone is not deep and does not support nested objects")}return s},l.FieldRef=function(t,s,e){this.docRef=t,this.fieldName=s,this._stringValue=e},l.FieldRef.joiner="/",l.FieldRef.fromString=function(t){var s=t.indexOf(l.FieldRef.joiner);if(s===-1)throw"malformed field ref string";var e=t.slice(0,s),o=t.slice(s+1);return new l.FieldRef(o,e,t)},l.FieldRef.prototype.toString=function(){return this._stringValue==null&&(this._stringValue=this.fieldName+l.FieldRef.joiner+this.docRef),this._stringValue};l.Set=function(t){if(this.elements=Object.create(null),t){this.length=t.length;for(var s=0;s<this.length;s++)this.elements[t[s]]=!0}else this.length=0},l.Set.complete={intersect:function(t){return t},union:function(){return this},contains:function(){return!0}},l.Set.empty={intersect:function(){return this},union:function(t){return t},contains:function(){return!1}},l.Set.prototype.contains=function(t){return!!this.elements[t]},l.Set.prototype.intersect=function(t){var s,e,o,c=[];if(t===l.Set.complete)return this;if(t===l.Set.empty)return t;this.length<t.length?(s=this,e=t):(s=t,e=this),o=Object.keys(s.elements);for(var i=0;i<o.length;i++){var r=o[i];r in e.elements&&c.push(r)}return new l.Set(c)},l.Set.prototype.union=function(t){return t===l.Set.complete?l.Set.complete:t===l.Set.empty?this:new l.Set(Object.keys(this.elements).concat(Object.keys(t.elements)))},l.idf=function(t,s){var e=0;for(var o in t)o!="_index"&&(e+=Object.keys(t[o]).length);var c=(s-e+.5)/(e+.5);return Math.log(1+Math.abs(c))},l.Token=function(t,s){this.str=t||"",this.metadata=s||{}},l.Token.prototype.toString=function(){return this.str},l.Token.prototype.update=function(t){return this.str=t(this.str,this.metadata),this},l.Token.prototype.clone=function(t){return t=t||function(s){return s},new l.Token(t(this.str,this.metadata),this.metadata)};l.tokenizer=function(t,s){if(t==null||t==null)return[];if(Array.isArray(t))return t.map(function(I){return new l.Token(l.utils.asString(I).toLowerCase(),l.utils.clone(s))});for(var e=t.toString().toLowerCase(),o=e.length,c=[],i=0,r=0;i<=o;i++){var L=e.charAt(i),b=i-r;if(L.match(l.tokenizer.separator)||i==o){if(b>0){var n=l.utils.clone(s)||{};n.position=[r,b],n.index=c.length,c.push(new l.Token(e.slice(r,i),n))}r=i+1}}return c},l.tokenizer.separator=/[\s\-]+/;l.Pipeline=function(){this._stack=[]},l.Pipeline.registeredFunctions=Object.create(null),l.Pipeline.registerFunction=function(t,s){s in this.registeredFunctions&&l.utils.warn("Overwriting existing registered function: "+s),t.label=s,l.Pipeline.registeredFunctions[t.label]=t},l.Pipeline.warnIfFunctionNotRegistered=function(t){var s=t.label&&t.label in this.registeredFunctions;s||l.utils.warn(`Function is not registered with pipeline. This may cause problems when serialising the index.
`,t)},l.Pipeline.load=function(t){var s=new l.Pipeline;return t.forEach(function(e){var o=l.Pipeline.registeredFunctions[e];if(o)s.add(o);else throw new Error("Cannot load unregistered function: "+e)}),s},l.Pipeline.prototype.add=function(){var t=Array.prototype.slice.call(arguments);t.forEach(function(s){l.Pipeline.warnIfFunctionNotRegistered(s),this._stack.push(s)},this)},l.Pipeline.prototype.after=function(t,s){l.Pipeline.warnIfFunctionNotRegistered(s);var e=this._stack.indexOf(t);if(e==-1)throw new Error("Cannot find existingFn");e=e+1,this._stack.splice(e,0,s)},l.Pipeline.prototype.before=function(t,s){l.Pipeline.warnIfFunctionNotRegistered(s);var e=this._stack.indexOf(t);if(e==-1)throw new Error("Cannot find existingFn");this._stack.splice(e,0,s)},l.Pipeline.prototype.remove=function(t){var s=this._stack.indexOf(t);s!=-1&&this._stack.splice(s,1)},l.Pipeline.prototype.run=function(t){for(var s=this._stack.length,e=0;e<s;e++){for(var o=this._stack[e],c=[],i=0;i<t.length;i++){var r=o(t[i],i,t);if(!(r==null||r===""))if(Array.isArray(r))for(var L=0;L<r.length;L++)c.push(r[L]);else c.push(r)}t=c}return t},l.Pipeline.prototype.runString=function(t,s){var e=new l.Token(t,s);return this.run([e]).map(function(o){return o.toString()})},l.Pipeline.prototype.reset=function(){this._stack=[]},l.Pipeline.prototype.toJSON=function(){return this._stack.map(function(t){return l.Pipeline.warnIfFunctionNotRegistered(t),t.label})};l.Vector=function(t){this._magnitude=0,this.elements=t||[]},l.Vector.prototype.positionForIndex=function(t){if(this.elements.length==0)return 0;for(var s=0,e=this.elements.length/2,o=e-s,c=Math.floor(o/2),i=this.elements[c*2];o>1&&(i<t&&(s=c),i>t&&(e=c),i!=t);)o=e-s,c=s+Math.floor(o/2),i=this.elements[c*2];if(i==t||i>t)return c*2;if(i<t)return(c+1)*2},l.Vector.prototype.insert=function(t,s){this.upsert(t,s,function(){throw"duplicate index"})},l.Vector.prototype.upsert=function(t,s,e){this._magnitude=0;var o=this.positionForIndex(t);this.elements[o]==t?this.elements[o+1]=e(this.elements[o+1],s):this.elements.splice(o,0,t,s)},l.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var t=0,s=this.elements.length,e=1;e<s;e+=2){var o=this.elements[e];t+=o*o}return this._magnitude=Math.sqrt(t)},l.Vector.prototype.dot=function(t){for(var s=0,e=this.elements,o=t.elements,c=e.length,i=o.length,r=0,L=0,b=0,n=0;b<c&&n<i;)r=e[b],L=o[n],r<L?b+=2:r>L?n+=2:r==L&&(s+=e[b+1]*o[n+1],b+=2,n+=2);return s},l.Vector.prototype.similarity=function(t){return this.dot(t)/this.magnitude()||0},l.Vector.prototype.toArray=function(){for(var t=new Array(this.elements.length/2),s=1,e=0;s<this.elements.length;s+=2,e++)t[e]=this.elements[s];return t},l.Vector.prototype.toJSON=function(){return this.elements};l.stemmer=function(){var t={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},s={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},e="[^aeiou]",o="[aeiouy]",c=e+"[^aeiouy]*",i=o+"[aeiou]*",r="^("+c+")?"+i+c,L="^("+c+")?"+i+c+"("+i+")?$",b="^("+c+")?"+i+c+i+c,n="^("+c+")?"+o,I=new RegExp(r),N=new RegExp(b),U=new RegExp(L),C=new RegExp(n),y=/^(.+?)(ss|i)es$/,g=/^(.+?)([^s])s$/,u=/^(.+?)eed$/,F=/^(.+?)(ed|ing)$/,d=/.$/,x=/(at|bl|iz)$/,X=new RegExp("([^aeiouylsz])\\1$"),k=new RegExp("^"+c+o+"[^aeiouwxy]$"),z=/^(.+?[^aeiou])y$/,Z=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,T=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,G=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,R=/^(.+?)(s|t)(ion)$/,A=/^(.+?)e$/,j=/ll$/,E=new RegExp("^"+c+o+"[^aeiouwxy]$"),v=function(a){var h,B,w,Q,D,p,m;if(a.length<3)return a;if(w=a.substr(0,1),w=="y"&&(a=w.toUpperCase()+a.substr(1)),Q=y,D=g,Q.test(a)?a=a.replace(Q,"$1$2"):D.test(a)&&(a=a.replace(D,"$1$2")),Q=u,D=F,Q.test(a)){var M=Q.exec(a);Q=I,Q.test(M[1])&&(Q=d,a=a.replace(Q,""))}else if(D.test(a)){var M=D.exec(a);h=M[1],D=C,D.test(h)&&(a=h,D=x,p=X,m=k,D.test(a)?a=a+"e":p.test(a)?(Q=d,a=a.replace(Q,"")):m.test(a)&&(a=a+"e"))}if(Q=z,Q.test(a)){var M=Q.exec(a);h=M[1],a=h+"i"}if(Q=Z,Q.test(a)){var M=Q.exec(a);h=M[1],B=M[2],Q=I,Q.test(h)&&(a=h+t[B])}if(Q=T,Q.test(a)){var M=Q.exec(a);h=M[1],B=M[2],Q=I,Q.test(h)&&(a=h+s[B])}if(Q=G,D=R,Q.test(a)){var M=Q.exec(a);h=M[1],Q=N,Q.test(h)&&(a=h)}else if(D.test(a)){var M=D.exec(a);h=M[1]+M[2],D=N,D.test(h)&&(a=h)}if(Q=A,Q.test(a)){var M=Q.exec(a);h=M[1],Q=N,D=U,p=E,(Q.test(h)||D.test(h)&&!p.test(h))&&(a=h)}return Q=j,D=N,Q.test(a)&&D.test(a)&&(Q=d,a=a.replace(Q,"")),w=="y"&&(a=w.toLowerCase()+a.substr(1)),a};return function(W){return W.update(v)}}(),l.Pipeline.registerFunction(l.stemmer,"stemmer");l.generateStopWordFilter=function(t){var s=t.reduce(function(e,o){return e[o]=o,e},{});return function(e){if(e&&s[e.toString()]!==e.toString())return e}},l.stopWordFilter=l.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),l.Pipeline.registerFunction(l.stopWordFilter,"stopWordFilter");l.trimmer=function(t){return t.update(function(s){return s.replace(/^\W+/,"").replace(/\W+$/,"")})},l.Pipeline.registerFunction(l.trimmer,"trimmer");l.TokenSet=function(){this.final=!1,this.edges={},this.id=l.TokenSet._nextId,l.TokenSet._nextId+=1},l.TokenSet._nextId=1,l.TokenSet.fromArray=function(t){for(var s=new l.TokenSet.Builder,e=0,o=t.length;e<o;e++)s.insert(t[e]);return s.finish(),s.root},l.TokenSet.fromClause=function(t){return"editDistance"in t?l.TokenSet.fromFuzzyString(t.term,t.editDistance):l.TokenSet.fromString(t.term)},l.TokenSet.fromFuzzyString=function(t,s){for(var e=new l.TokenSet,o=[{node:e,editsRemaining:s,str:t}];o.length;){var c=o.pop();if(c.str.length>0){var i=c.str.charAt(0),r;i in c.node.edges?r=c.node.edges[i]:(r=new l.TokenSet,c.node.edges[i]=r),c.str.length==1&&(r.final=!0),o.push({node:r,editsRemaining:c.editsRemaining,str:c.str.slice(1)})}if(c.editsRemaining!=0){if("*"in c.node.edges)var L=c.node.edges["*"];else{var L=new l.TokenSet;c.node.edges["*"]=L}if(c.str.length==0&&(L.final=!0),o.push({node:L,editsRemaining:c.editsRemaining-1,str:c.str}),c.str.length>1&&o.push({node:c.node,editsRemaining:c.editsRemaining-1,str:c.str.slice(1)}),c.str.length==1&&(c.node.final=!0),c.str.length>=1){if("*"in c.node.edges)var b=c.node.edges["*"];else{var b=new l.TokenSet;c.node.edges["*"]=b}c.str.length==1&&(b.final=!0),o.push({node:b,editsRemaining:c.editsRemaining-1,str:c.str.slice(1)})}if(c.str.length>1){var n=c.str.charAt(0),I=c.str.charAt(1),N;I in c.node.edges?N=c.node.edges[I]:(N=new l.TokenSet,c.node.edges[I]=N),c.str.length==1&&(N.final=!0),o.push({node:N,editsRemaining:c.editsRemaining-1,str:n+c.str.slice(2)})}}}return e},l.TokenSet.fromString=function(t){for(var s=new l.TokenSet,e=s,o=0,c=t.length;o<c;o++){var i=t[o],r=o==c-1;if(i=="*")s.edges[i]=s,s.final=r;else{var L=new l.TokenSet;L.final=r,s.edges[i]=L,s=L}}return e},l.TokenSet.prototype.toArray=function(){for(var t=[],s=[{prefix:"",node:this}];s.length;){var e=s.pop(),o=Object.keys(e.node.edges),c=o.length;e.node.final&&(e.prefix.charAt(0),t.push(e.prefix));for(var i=0;i<c;i++){var r=o[i];s.push({prefix:e.prefix.concat(r),node:e.node.edges[r]})}}return t},l.TokenSet.prototype.toString=function(){if(this._str)return this._str;for(var t=this.final?"1":"0",s=Object.keys(this.edges).sort(),e=s.length,o=0;o<e;o++){var c=s[o],i=this.edges[c];t=t+c+i.id}return t},l.TokenSet.prototype.intersect=function(t){for(var s=new l.TokenSet,e=void 0,o=[{qNode:t,output:s,node:this}];o.length;){e=o.pop();for(var c=Object.keys(e.qNode.edges),i=c.length,r=Object.keys(e.node.edges),L=r.length,b=0;b<i;b++)for(var n=c[b],I=0;I<L;I++){var N=r[I];if(N==n||n=="*"){var U=e.node.edges[N],C=e.qNode.edges[n],y=U.final&&C.final,g=void 0;N in e.output.edges?(g=e.output.edges[N],g.final=g.final||y):(g=new l.TokenSet,g.final=y,e.output.edges[N]=g),o.push({qNode:C,output:g,node:U})}}}return s},l.TokenSet.Builder=function(){this.previousWord="",this.root=new l.TokenSet,this.uncheckedNodes=[],this.minimizedNodes={}},l.TokenSet.Builder.prototype.insert=function(t){var s,e=0;if(t<this.previousWord)throw new Error("Out of order word insertion");for(var o=0;o<t.length&&o<this.previousWord.length&&t[o]==this.previousWord[o];o++)e++;this.minimize(e),this.uncheckedNodes.length==0?s=this.root:s=this.uncheckedNodes[this.uncheckedNodes.length-1].child;for(var o=e;o<t.length;o++){var c=new l.TokenSet,i=t[o];s.edges[i]=c,this.uncheckedNodes.push({parent:s,char:i,child:c}),s=c}s.final=!0,this.previousWord=t},l.TokenSet.Builder.prototype.finish=function(){this.minimize(0)},l.TokenSet.Builder.prototype.minimize=function(t){for(var s=this.uncheckedNodes.length-1;s>=t;s--){var e=this.uncheckedNodes[s],o=e.child.toString();o in this.minimizedNodes?e.parent.edges[e.char]=this.minimizedNodes[o]:(e.child._str=o,this.minimizedNodes[o]=e.child),this.uncheckedNodes.pop()}};l.Index=function(t){this.invertedIndex=t.invertedIndex,this.fieldVectors=t.fieldVectors,this.tokenSet=t.tokenSet,this.fields=t.fields,this.pipeline=t.pipeline},l.Index.prototype.search=function(t){return this.query(function(s){var e=new l.QueryParser(t,s);e.parse()})},l.Index.prototype.query=function(t){for(var s=new l.Query(this.fields),e=Object.create(null),o=Object.create(null),c=Object.create(null),i=Object.create(null),r=Object.create(null),L=0;L<this.fields.length;L++)o[this.fields[L]]=new l.Vector;t.call(s,s);for(var L=0;L<s.clauses.length;L++){var b=s.clauses[L],n=null,I=l.Set.empty;b.usePipeline?n=this.pipeline.runString(b.term,{fields:b.fields}):n=[b.term];for(var N=0;N<n.length;N++){var U=n[N];b.term=U;var C=l.TokenSet.fromClause(b),y=this.tokenSet.intersect(C).toArray();if(y.length===0&&b.presence===l.Query.presence.REQUIRED){for(var g=0;g<b.fields.length;g++){var u=b.fields[g];i[u]=l.Set.empty}break}for(var F=0;F<y.length;F++)for(var d=y[F],x=this.invertedIndex[d],X=x._index,g=0;g<b.fields.length;g++){var u=b.fields[g],k=x[u],z=Object.keys(k),Z=d+"/"+u,T=new l.Set(z);if(b.presence==l.Query.presence.REQUIRED&&(I=I.union(T),i[u]===void 0&&(i[u]=l.Set.complete)),b.presence==l.Query.presence.PROHIBITED){r[u]===void 0&&(r[u]=l.Set.empty),r[u]=r[u].union(T);continue}if(o[u].upsert(X,b.boost,function(lt,st){return lt+st}),!c[Z]){for(var G=0;G<z.length;G++){var R=z[G],A=new l.FieldRef(R,u),j=k[R],E;(E=e[A])===void 0?e[A]=new l.MatchData(d,u,j):E.add(d,u,j)}c[Z]=!0}}}if(b.presence===l.Query.presence.REQUIRED)for(var g=0;g<b.fields.length;g++){var u=b.fields[g];i[u]=i[u].intersect(I)}}for(var v=l.Set.complete,W=l.Set.empty,L=0;L<this.fields.length;L++){var u=this.fields[L];i[u]&&(v=v.intersect(i[u])),r[u]&&(W=W.union(r[u]))}var a=Object.keys(e),h=[],B=Object.create(null);if(s.isNegated()){a=Object.keys(this.fieldVectors);for(var L=0;L<a.length;L++){var A=a[L],w=l.FieldRef.fromString(A);e[A]=new l.MatchData}}for(var L=0;L<a.length;L++){var w=l.FieldRef.fromString(a[L]),Q=w.docRef;if(v.contains(Q)&&!W.contains(Q)){var D=this.fieldVectors[w],p=o[w.fieldName].similarity(D),m;if((m=B[Q])!==void 0)m.score+=p,m.matchData.combine(e[w]);else{var M={ref:Q,score:p,matchData:e[w]};B[Q]=M,h.push(M)}}}return h.sort(function($,tt){return tt.score-$.score})},l.Index.prototype.toJSON=function(){var t=Object.keys(this.invertedIndex).sort().map(function(e){return[e,this.invertedIndex[e]]},this),s=Object.keys(this.fieldVectors).map(function(e){return[e,this.fieldVectors[e].toJSON()]},this);return{version:l.version,fields:this.fields,fieldVectors:s,invertedIndex:t,pipeline:this.pipeline.toJSON()}},l.Index.load=function(t){var s={},e={},o=t.fieldVectors,c=Object.create(null),i=t.invertedIndex,r=new l.TokenSet.Builder,L=l.Pipeline.load(t.pipeline);t.version!=l.version&&l.utils.warn("Version mismatch when loading serialised index. Current version of lunr '"+l.version+"' does not match serialized index '"+t.version+"'");for(var b=0;b<o.length;b++){var n=o[b],I=n[0],N=n[1];e[I]=new l.Vector(N)}for(var b=0;b<i.length;b++){var n=i[b],U=n[0],C=n[1];r.insert(U),c[U]=C}return r.finish(),s.fields=t.fields,s.fieldVectors=e,s.invertedIndex=c,s.tokenSet=r.root,s.pipeline=L,new l.Index(s)};l.Builder=function(){this._ref="id",this._fields=Object.create(null),this._documents=Object.create(null),this.invertedIndex=Object.create(null),this.fieldTermFrequencies={},this.fieldLengths={},this.tokenizer=l.tokenizer,this.pipeline=new l.Pipeline,this.searchPipeline=new l.Pipeline,this.documentCount=0,this._b=.75,this._k1=1.2,this.termIndex=0,this.metadataWhitelist=[]},l.Builder.prototype.ref=function(t){this._ref=t},l.Builder.prototype.field=function(t,s){if(/\//.test(t))throw new RangeError("Field '"+t+"' contains illegal character '/'");this._fields[t]=s||{}},l.Builder.prototype.b=function(t){t<0?this._b=0:t>1?this._b=1:this._b=t},l.Builder.prototype.k1=function(t){this._k1=t},l.Builder.prototype.add=function(t,s){var e=t[this._ref],o=Object.keys(this._fields);this._documents[e]=s||{},this.documentCount+=1;for(var c=0;c<o.length;c++){var i=o[c],r=this._fields[i].extractor,L=r?r(t):t[i],b=this.tokenizer(L,{fields:[i]}),n=this.pipeline.run(b),I=new l.FieldRef(e,i),N=Object.create(null);this.fieldTermFrequencies[I]=N,this.fieldLengths[I]=0,this.fieldLengths[I]+=n.length;for(var U=0;U<n.length;U++){var C=n[U];if(N[C]==null&&(N[C]=0),N[C]+=1,this.invertedIndex[C]==null){var y=Object.create(null);y._index=this.termIndex,this.termIndex+=1;for(var g=0;g<o.length;g++)y[o[g]]=Object.create(null);this.invertedIndex[C]=y}this.invertedIndex[C][i][e]==null&&(this.invertedIndex[C][i][e]=Object.create(null));for(var u=0;u<this.metadataWhitelist.length;u++){var F=this.metadataWhitelist[u],d=C.metadata[F];this.invertedIndex[C][i][e][F]==null&&(this.invertedIndex[C][i][e][F]=[]),this.invertedIndex[C][i][e][F].push(d)}}}},l.Builder.prototype.calculateAverageFieldLengths=function(){for(var t=Object.keys(this.fieldLengths),s=t.length,e={},o={},c=0;c<s;c++){var i=l.FieldRef.fromString(t[c]),r=i.fieldName;o[r]||(o[r]=0),o[r]+=1,e[r]||(e[r]=0),e[r]+=this.fieldLengths[i]}for(var L=Object.keys(this._fields),c=0;c<L.length;c++){var b=L[c];e[b]=e[b]/o[b]}this.averageFieldLength=e},l.Builder.prototype.createFieldVectors=function(){for(var t={},s=Object.keys(this.fieldTermFrequencies),e=s.length,o=Object.create(null),c=0;c<e;c++){for(var i=l.FieldRef.fromString(s[c]),r=i.fieldName,L=this.fieldLengths[i],b=new l.Vector,n=this.fieldTermFrequencies[i],I=Object.keys(n),N=I.length,U=this._fields[r].boost||1,C=this._documents[i.docRef].boost||1,y=0;y<N;y++){var g=I[y],u=n[g],F=this.invertedIndex[g]._index,d,x,X;o[g]===void 0?(d=l.idf(this.invertedIndex[g],this.documentCount),o[g]=d):d=o[g],x=d*((this._k1+1)*u)/(this._k1*(1-this._b+this._b*(L/this.averageFieldLength[r]))+u),x*=U,x*=C,X=Math.round(x*1e3)/1e3,b.insert(F,X)}t[i]=b}this.fieldVectors=t},l.Builder.prototype.createTokenSet=function(){this.tokenSet=l.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())},l.Builder.prototype.build=function(){return this.calculateAverageFieldLengths(),this.createFieldVectors(),this.createTokenSet(),new l.Index({invertedIndex:this.invertedIndex,fieldVectors:this.fieldVectors,tokenSet:this.tokenSet,fields:Object.keys(this._fields),pipeline:this.searchPipeline})},l.Builder.prototype.use=function(t){var s=Array.prototype.slice.call(arguments,1);s.unshift(this),t.apply(this,s)},l.MatchData=function(t,s,e){for(var o=Object.create(null),c=Object.keys(e||{}),i=0;i<c.length;i++){var r=c[i];o[r]=e[r].slice()}this.metadata=Object.create(null),t!==void 0&&(this.metadata[t]=Object.create(null),this.metadata[t][s]=o)},l.MatchData.prototype.combine=function(t){for(var s=Object.keys(t.metadata),e=0;e<s.length;e++){var o=s[e],c=Object.keys(t.metadata[o]);this.metadata[o]==null&&(this.metadata[o]=Object.create(null));for(var i=0;i<c.length;i++){var r=c[i],L=Object.keys(t.metadata[o][r]);this.metadata[o][r]==null&&(this.metadata[o][r]=Object.create(null));for(var b=0;b<L.length;b++){var n=L[b];this.metadata[o][r][n]==null?this.metadata[o][r][n]=t.metadata[o][r][n]:this.metadata[o][r][n]=this.metadata[o][r][n].concat(t.metadata[o][r][n])}}}},l.MatchData.prototype.add=function(t,s,e){if(!(t in this.metadata)){this.metadata[t]=Object.create(null),this.metadata[t][s]=e;return}if(!(s in this.metadata[t])){this.metadata[t][s]=e;return}for(var o=Object.keys(e),c=0;c<o.length;c++){var i=o[c];i in this.metadata[t][s]?this.metadata[t][s][i]=this.metadata[t][s][i].concat(e[i]):this.metadata[t][s][i]=e[i]}},l.Query=function(t){this.clauses=[],this.allFields=t},l.Query.wildcard=new String("*"),l.Query.wildcard.NONE=0,l.Query.wildcard.LEADING=1,l.Query.wildcard.TRAILING=2,l.Query.presence={OPTIONAL:1,REQUIRED:2,PROHIBITED:3},l.Query.prototype.clause=function(t){return"fields"in t||(t.fields=this.allFields),"boost"in t||(t.boost=1),"usePipeline"in t||(t.usePipeline=!0),"wildcard"in t||(t.wildcard=l.Query.wildcard.NONE),t.wildcard&l.Query.wildcard.LEADING&&t.term.charAt(0)!=l.Query.wildcard&&(t.term="*"+t.term),t.wildcard&l.Query.wildcard.TRAILING&&t.term.slice(-1)!=l.Query.wildcard&&(t.term=""+t.term+"*"),"presence"in t||(t.presence=l.Query.presence.OPTIONAL),this.clauses.push(t),this},l.Query.prototype.isNegated=function(){for(var t=0;t<this.clauses.length;t++)if(this.clauses[t].presence!=l.Query.presence.PROHIBITED)return!1;return!0},l.Query.prototype.term=function(t,s){if(Array.isArray(t))return t.forEach(function(o){this.term(o,l.utils.clone(s))},this),this;var e=s||{};return e.term=t.toString(),this.clause(e),this},l.QueryParseError=function(t,s,e){this.name="QueryParseError",this.message=t,this.start=s,this.end=e},l.QueryParseError.prototype=new Error,l.QueryLexer=function(t){this.lexemes=[],this.str=t,this.length=t.length,this.pos=0,this.start=0,this.escapeCharPositions=[]},l.QueryLexer.prototype.run=function(){for(var t=l.QueryLexer.lexText;t;)t=t(this)},l.QueryLexer.prototype.sliceString=function(){for(var t=[],s=this.start,e=this.pos,o=0;o<this.escapeCharPositions.length;o++)e=this.escapeCharPositions[o],t.push(this.str.slice(s,e)),s=e+1;return t.push(this.str.slice(s,this.pos)),this.escapeCharPositions.length=0,t.join("")},l.QueryLexer.prototype.emit=function(t){this.lexemes.push({type:t,str:this.sliceString(),start:this.start,end:this.pos}),this.start=this.pos},l.QueryLexer.prototype.escapeCharacter=function(){this.escapeCharPositions.push(this.pos-1),this.pos+=1},l.QueryLexer.prototype.next=function(){if(this.pos>=this.length)return l.QueryLexer.EOS;var t=this.str.charAt(this.pos);return this.pos+=1,t},l.QueryLexer.prototype.width=function(){return this.pos-this.start},l.QueryLexer.prototype.ignore=function(){this.start==this.pos&&(this.pos+=1),this.start=this.pos},l.QueryLexer.prototype.backup=function(){this.pos-=1},l.QueryLexer.prototype.acceptDigitRun=function(){var t,s;do t=this.next(),s=t.charCodeAt(0);while(s>47&&s<58);t!=l.QueryLexer.EOS&&this.backup()},l.QueryLexer.prototype.more=function(){return this.pos<this.length},l.QueryLexer.EOS="EOS",l.QueryLexer.FIELD="FIELD",l.QueryLexer.TERM="TERM",l.QueryLexer.EDIT_DISTANCE="EDIT_DISTANCE",l.QueryLexer.BOOST="BOOST",l.QueryLexer.PRESENCE="PRESENCE",l.QueryLexer.lexField=function(t){return t.backup(),t.emit(l.QueryLexer.FIELD),t.ignore(),l.QueryLexer.lexText},l.QueryLexer.lexTerm=function(t){if(t.width()>1&&(t.backup(),t.emit(l.QueryLexer.TERM)),t.ignore(),t.more())return l.QueryLexer.lexText},l.QueryLexer.lexEditDistance=function(t){return t.ignore(),t.acceptDigitRun(),t.emit(l.QueryLexer.EDIT_DISTANCE),l.QueryLexer.lexText},l.QueryLexer.lexBoost=function(t){return t.ignore(),t.acceptDigitRun(),t.emit(l.QueryLexer.BOOST),l.QueryLexer.lexText},l.QueryLexer.lexEOS=function(t){t.width()>0&&t.emit(l.QueryLexer.TERM)},l.QueryLexer.termSeparator=l.tokenizer.separator,l.QueryLexer.lexText=function(t){for(;;){var s=t.next();if(s==l.QueryLexer.EOS)return l.QueryLexer.lexEOS;if(s.charCodeAt(0)==92){t.escapeCharacter();continue}if(s==":")return l.QueryLexer.lexField;if(s=="~")return t.backup(),t.width()>0&&t.emit(l.QueryLexer.TERM),l.QueryLexer.lexEditDistance;if(s=="^")return t.backup(),t.width()>0&&t.emit(l.QueryLexer.TERM),l.QueryLexer.lexBoost;if(s=="+"&&t.width()===1||s=="-"&&t.width()===1)return t.emit(l.QueryLexer.PRESENCE),l.QueryLexer.lexText;if(s.match(l.QueryLexer.termSeparator))return l.QueryLexer.lexTerm}},l.QueryParser=function(t,s){this.lexer=new l.QueryLexer(t),this.query=s,this.currentClause={},this.lexemeIdx=0},l.QueryParser.prototype.parse=function(){this.lexer.run(),this.lexemes=this.lexer.lexemes;for(var t=l.QueryParser.parseClause;t;)t=t(this);return this.query},l.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]},l.QueryParser.prototype.consumeLexeme=function(){var t=this.peekLexeme();return this.lexemeIdx+=1,t},l.QueryParser.prototype.nextClause=function(){var t=this.currentClause;this.query.clause(t),this.currentClause={}},l.QueryParser.parseClause=function(t){var s=t.peekLexeme();if(s!=null)switch(s.type){case l.QueryLexer.PRESENCE:return l.QueryParser.parsePresence;case l.QueryLexer.FIELD:return l.QueryParser.parseField;case l.QueryLexer.TERM:return l.QueryParser.parseTerm;default:var e="expected either a field or a term, found "+s.type;throw s.str.length>=1&&(e+=" with value '"+s.str+"'"),new l.QueryParseError(e,s.start,s.end)}},l.QueryParser.parsePresence=function(t){var s=t.consumeLexeme();if(s!=null){switch(s.str){case"-":t.currentClause.presence=l.Query.presence.PROHIBITED;break;case"+":t.currentClause.presence=l.Query.presence.REQUIRED;break;default:var e="unrecognised presence operator'"+s.str+"'";throw new l.QueryParseError(e,s.start,s.end)}var o=t.peekLexeme();if(o==null){var e="expecting term or field, found nothing";throw new l.QueryParseError(e,s.start,s.end)}switch(o.type){case l.QueryLexer.FIELD:return l.QueryParser.parseField;case l.QueryLexer.TERM:return l.QueryParser.parseTerm;default:var e="expecting term or field, found '"+o.type+"'";throw new l.QueryParseError(e,o.start,o.end)}}},l.QueryParser.parseField=function(t){var s=t.consumeLexeme();if(s!=null){if(t.query.allFields.indexOf(s.str)==-1){var e=t.query.allFields.map(function(i){return"'"+i+"'"}).join(", "),o="unrecognised field '"+s.str+"', possible fields: "+e;throw new l.QueryParseError(o,s.start,s.end)}t.currentClause.fields=[s.str];var c=t.peekLexeme();if(c==null){var o="expecting term, found nothing";throw new l.QueryParseError(o,s.start,s.end)}switch(c.type){case l.QueryLexer.TERM:return l.QueryParser.parseTerm;default:var o="expecting term, found '"+c.type+"'";throw new l.QueryParseError(o,c.start,c.end)}}},l.QueryParser.parseTerm=function(t){var s=t.consumeLexeme();if(s!=null){t.currentClause.term=s.str.toLowerCase(),s.str.indexOf("*")!=-1&&(t.currentClause.usePipeline=!1);var e=t.peekLexeme();if(e==null){t.nextClause();return}switch(e.type){case l.QueryLexer.TERM:return t.nextClause(),l.QueryParser.parseTerm;case l.QueryLexer.FIELD:return t.nextClause(),l.QueryParser.parseField;case l.QueryLexer.EDIT_DISTANCE:return l.QueryParser.parseEditDistance;case l.QueryLexer.BOOST:return l.QueryParser.parseBoost;case l.QueryLexer.PRESENCE:return t.nextClause(),l.QueryParser.parsePresence;default:var o="Unexpected lexeme type '"+e.type+"'";throw new l.QueryParseError(o,e.start,e.end)}}},l.QueryParser.parseEditDistance=function(t){var s=t.consumeLexeme();if(s!=null){var e=parseInt(s.str,10);if(isNaN(e)){var o="edit distance must be numeric";throw new l.QueryParseError(o,s.start,s.end)}t.currentClause.editDistance=e;var c=t.peekLexeme();if(c==null){t.nextClause();return}switch(c.type){case l.QueryLexer.TERM:return t.nextClause(),l.QueryParser.parseTerm;case l.QueryLexer.FIELD:return t.nextClause(),l.QueryParser.parseField;case l.QueryLexer.EDIT_DISTANCE:return l.QueryParser.parseEditDistance;case l.QueryLexer.BOOST:return l.QueryParser.parseBoost;case l.QueryLexer.PRESENCE:return t.nextClause(),l.QueryParser.parsePresence;default:var o="Unexpected lexeme type '"+c.type+"'";throw new l.QueryParseError(o,c.start,c.end)}}},l.QueryParser.parseBoost=function(t){var s=t.consumeLexeme();if(s!=null){var e=parseInt(s.str,10);if(isNaN(e)){var o="boost must be numeric";throw new l.QueryParseError(o,s.start,s.end)}t.currentClause.boost=e;var c=t.peekLexeme();if(c==null){t.nextClause();return}switch(c.type){case l.QueryLexer.TERM:return t.nextClause(),l.QueryParser.parseTerm;case l.QueryLexer.FIELD:return t.nextClause(),l.QueryParser.parseField;case l.QueryLexer.EDIT_DISTANCE:return l.QueryParser.parseEditDistance;case l.QueryLexer.BOOST:return l.QueryParser.parseBoost;case l.QueryLexer.PRESENCE:return t.nextClause(),l.QueryParser.parsePresence;default:var o="Unexpected lexeme type '"+c.type+"'";throw new l.QueryParseError(o,c.start,c.end)}}},function(t,s){typeof define=="function"&&define.amd?define(s):typeof J=="object"?f.exports=s():t.lunr=s()}(this,function(){return l})})()});var q=ot(H(),1);var ct={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},it={"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'};function K(l){return l.replaceAll(/&lt;|&gt;|&#39;|&quot;/g,t=>it[t]||t).replaceAll(/&amp;/g,"&")}function P(l){return l.replaceAll(/&/g,"&amp;").replaceAll(/<>'"/g,t=>ct[t]||t)}var V=class{static async fetchAndGenerateIndex(t=this.endpoint){let e=await(await fetch(t)).json(),o=new this;return o.generateIndex(e),{searchIndex:e,searchEngine:o}}async generateIndex(t){this.index=(0,q.default)(function(){this.ref("id"),this.field("id",{boost:1e3}),this.field("title",{boost:100}),this.field("categories",{boost:10}),this.field("tags",{boost:10}),this.field("url",{boost:100}),this.field("content",{boost:1}),t.forEach(s=>{s.content&&(s.content=K(s.content),this.add(s))})}),this.indexData=t}performSearch(t,s=300,e=!0){if(e==null&&(e=!0),this.index){this.query=t;let o=t.trim().length>0,c=t.split(" ").map((L,b,n)=>`${L}${b===n.length-1?`* ${L}~1`:"~1"}`).join(" "),i=o?this.index.search(`${t} ${c}`):[];return i?.length>0?i.map(L=>{let b=this.indexData.find(N=>N.id==L.ref),n=this.previewTemplate(b.content,s,e),I=this.previewTemplate(b.title,s,e);return e===!0&&(I+=`<!-- (${L.score}) -->`),{id:b.id.trim(),score:L.score,title:b.title.trim(),collection:b.collection,content:b.content.trim(),categories:b.categories,url:b.url.trim(),heading:I,preview:n}}):[]}else throw new Error("Search index hasn't yet loaded. Run the generateIndex function")}previewTemplate(t,s=300,e=!0){s==null&&(s=300);let o=s/2,c;if(s){let i=t.toLowerCase(),r=this.query.toLowerCase().split(" ").map(L=>i.indexOf(L)).filter(L=>L!=-1).sort((L,b)=>L-b);r[1]&&(s=Math.min(r[1]-r[0],s)),c=t.substr(Math.max(0,r[0]-o),s+o)}else c=t;return t.startsWith(c)||(c="\u2026"+c),t.endsWith(c)||(c=c+"\u2026"),e&&(c=P(c),this.query.toLowerCase().split(" ").forEach(i=>{i!=""&&(c=c.replace(new RegExp(`(${i.replace(/[\.\*\+\(\)]/g,"")})`,"ig"),"<strong>$1</strong>"))})),c}};S(V,"endpoint","/bridgetown_quick_search/index.json");var _=V;var O=class extends Y{findMatches(t){let s=super.findMatches(t);return this.results.forEach(e=>{s.find(o=>o.id===e.id)||s.push(e)}),s}constructor(){super(),this.snippetLength=142,this.alwaysShowResults=!0,this.staticData=[],this.results=[],this.endpoint="/bridgetown_quick_search/index.json",this.handleInput=()=>{this.data=this.createData()}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,await this.fetchAndGenerateIndex()}willUpdate(t){t.has("endpoint")&&this.fetchAndGenerateIndex(),super.willUpdate(t)}open(){super.open(),this.data=this.createData()}async fetchAndGenerateIndex(){let{searchEngine:t,searchIndex:s}=await _.fetchAndGenerateIndex(this.endpoint);this.__searchEngine=t,this.__searchIndex=s,this.addEventListener("change",this.handleInput)}createData(){return this.results=this.showResultsForQuery(this._search),this.staticData.concat(this.results)}showResultsForQuery(t,s=100){if(this.latestQuery=t,this.alwaysShowResults===!0||t&&t.length>=1){let e=this.__searchEngine.performSearch(t,this.snippetLength,!1).slice(0,s),o=[];return e.length<=0?[]:(e.forEach(c=>{let i=this.transformResult(c);i&&o.push(i)}),o)}return[]}transformResult(t){let{id:s,url:e,preview:o,categories:c,heading:i,collection:r}=t;if(!e.endsWith(".json"))return c=c.split(/[-_]/).map(rt).join(" "),{id:s,title:i,section:r.name,href:e,content:o}}};S(O,"baseName","bridgetown-ninja-keys"),S(O,"properties",Object.assign(Y.properties,{snippetLength:{attribute:"snippet-length",type:Number},alwaysShowResults:{attribute:"always-show-results",reflect:!0,type:Boolean},endpoint:{reflect:!0},results:{state:!0,type:Array},staticData:{state:!0,type:Array}}));function rt(l){return l.charAt(0).toUpperCase()+l.slice(1)}(window.requestIdleCallback||window.setTimeout)(async()=>{let l=[{id:"theme-light",icon:"<sl-icon name='sun'></sl-icon>",title:"Light Mode",section:"Theme",keywords:"theme",handler(){return window.applyTheme("light"),{keepOpen:!0}}},{id:"theme-dark",icon:"<sl-icon name='moon'></sl-icon>",title:"Dark Mode",section:"Theme",keywords:"theme",handler(){return window.applyTheme("dark"),{keepOpen:!0}}},{id:"theme-system",icon:"<sl-icon name='display'></sl-icon>",title:"System",section:"Theme",keywords:"theme",handler(){return window.applyTheme("system"),{keepOpen:!0}}}];(class extends O{constructor(...t){super(...t),this.staticData=l}createData(){return this.results=this.showResultsForQuery(this._search||"*").reverse(),this.results.forEach(t=>{t.icon='<sl-icon name="link-45deg"></sl-icon>'}),[...this.staticData,...this.results]}open(){this.scrollTop=window.scrollY,document.body.classList.add("fixed-body"),document.body.scroll(0,this.scrollTop),this.nonModals.forEach(t=>{t.setAttribute("inert","")}),super.open()}close(){document.body.classList.remove("fixed-body"),window.scrollTo(0,this.scrollTop),super.close(),this.nonModals.forEach(t=>t.removeAttribute("inert"))}get nonModals(){return[...document.body.children].filter(t=>t.localName!=="bridgetown-ninja-keys")}}).define("bridgetown-ninja-keys")});
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
//# sourceMappingURL=/konnors-ninja-keys/bridgetown/static/javascript/defer.DKVB6PSI.js.map
