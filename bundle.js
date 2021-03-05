class Int extends Number{
  constructor(x){super(parseInt(x))}
}
class Tuple extends Array{
  constructor(...x){let n=x.length;super(n);for(let i=0;i<n;i++){this[i]=x[i]}}
}

function __newWebGLProgram__(gl,v,f){
  let vs=gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vs,v);
  gl.compileShader(vs);
  let ve=gl.getShaderInfoLog(vs);
  if(ve.length!=0){if(gl.getError()==gl.NO_ERROR){console.log(ve)}else{throw new Error('VertexShader '+ve);}}
  let fs=gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fs,f);
  gl.compileShader(fs);
  let fe=gl.getShaderInfoLog(fs);
  if(fe.length!=0){if(gl.getError()==gl.NO_ERROR){console.log(fe)}else{throw new Error('FragmentShader '+fe);}}
  let p=gl.createProgram();
  gl.attachShader(p,vs);
  gl.attachShader(p,fs);
  gl.linkProgram(p);
  return p;
}
const IN=0;
const OUT=1;
const IN_OUT=2;
class Easing{
  static __implementations__=[];
}
;
class AbstractEasing{
  constructor(duration,type){
    this._duration=duration;
    this._type=type
  }
  get duration(){
    return this._duration
  }
  map(time){
    let t=time/this._duration;
    let f;
    if(t<0){
      f=0
    }
    else if(t>1){
      f=1
    }
    else{
      switch(this._type){
        case IN:{
          f=this.mapInternal(t);
          break;
        }
        case OUT:{
          f=1-this.mapInternal(1-t);
          break;
        }
        case IN_OUT:{
          if(t<0.5){
            f=0.5*this.mapInternal(2*t)
          }
          else{
            f=1-0.5*this.mapInternal(2*(1-t))
          };
          break;
        }
        default:{
          throw new Error('unhandled Easing type');
          break;
        }
      }
    };
    return f
  }
  interp(time,y0,y1){
    let f=this.map(time);
    return y0*(1-f)+y1*f
  }
};
class Linear extends AbstractEasing{
  constructor(duration){
    super(duration,IN)
  }
  mapInternal(x){
    return x
  }
};
class EaseSine extends AbstractEasing{
  mapInternal(x){
    return 1-Math.cos((x*Math.PI)*0.5)
  }
};
class EaseInSine extends EaseSine{
  constructor(duration){
    super(duration,IN)
  }
};
class EaseOutSine extends EaseSine{
  constructor(duration){
    super(duration,OUT)
  }
};
class EaseInOutSine extends EaseSine{
  constructor(duration){
    super(duration,IN_OUT)
  }
};
class EasePoly extends AbstractEasing{
  mapInternal(x){
    return Math.pow(x,this.p)
  }
};
class EaseQuad extends EasePoly{
  get p(){
    return 2
  }
};
class EaseInQuad extends EaseQuad{
  constructor(duration){
    super(duration,IN)
  }
};
class EaseOutQuad extends EaseQuad{
  constructor(duration){
    super(duration,OUT)
  }
};
class EaseInOutQuad extends EaseQuad{
  constructor(duration){
    super(duration,IN_OUT)
  }
};
class EaseCubic extends EasePoly{
  get p(){
    return 3
  }
};
class EaseInCubic extends EaseCubic{
  constructor(duration){
    super(duration,IN)
  }
};
class EaseOutCubic extends EaseCubic{
  constructor(duration){
    super(duration,OUT)
  }
};
class EaseInOutCubic extends EaseCubic{
  constructor(duration){
    super(duration,IN_OUT)
  }
};
class EaseQuart extends EasePoly{
  get p(){
    return 4
  }
};
class EaseInQuart extends EaseQuart{
  constructor(duration){
    super(duration,IN)
  }
};
class EaseOutQuart extends EaseQuart{
  constructor(duration){
    super(duration,OUT)
  }
};
class EaseInOutQuart extends EaseQuart{
  constructor(duration){
    super(duration,IN_OUT)
  }
};
class EaseQuint extends EasePoly{
  get p(){
    return 5
  }
};
class EaseInQuint extends EaseQuint{
  constructor(duration){
    super(duration,IN)
  }
};
class EaseOutQuint extends EaseQuint{
  constructor(duration){
    super(duration,OUT)
  }
};
class EaseInOutQuint extends EaseQuint{
  constructor(duration){
    super(duration,IN_OUT)
  }
};
class EaseExpo extends AbstractEasing{
  mapInternal(x){
    return Math.pow(2,10*x-10)
  }
};
class EaseInExpo extends EaseExpo{
  constructor(duration){
    super(duration,IN)
  }
};
class EaseOutExpo extends EaseExpo{
  constructor(duration){
    super(duration,OUT)
  }
};
class EaseInOutExpo extends EaseExpo{
  constructor(duration){
    super(duration,IN_OUT)
  }
};
class EaseCirc extends AbstractEasing{
  mapInternal(x){
    return 1-Math.sqrt(1-x*x)
  }
};
class EaseInCirc extends EaseCirc{
  constructor(duration){
    super(duration,IN)
  }
};
class EaseOutCirc extends EaseCirc{
  constructor(duration){
    super(duration,OUT)
  }
};
class EaseInOutCirc extends EaseCirc{
  constructor(duration){
    super(duration,IN_OUT)
  }
};
class EaseBack extends AbstractEasing{
  mapInternal(x){
    const c2=1.70158;
    const c3=c2+1;
    return c3*x*x*x-c2*x*x
  }
};
class EaseInBack extends EaseBack{
  constructor(duration){
    super(duration,IN)
  }
};
class EaseOutBack extends EaseBack{
  constructor(duration){
    super(duration,OUT)
  }
};
class EaseInOutBack extends EaseBack{
  constructor(duration){
    super(duration,IN_OUT)
  }
};
class EaseElastic extends AbstractEasing{
  mapInternal(x){
    const c=(2*Math.PI)/3;
    return -Math.pow(2,10*x-10)*Math.sin((x*10-10.75)*c)
  }
};
class EaseInElastic extends EaseElastic{
  constructor(duration){
    super(duration,IN)
  }
};
class EaseOutElastic extends EaseElastic{
  constructor(duration){
    super(duration,OUT)
  }
};
class EaseInOutElastic extends EaseElastic{
  constructor(duration){
    super(duration,IN_OUT)
  }
};
class PageScore{
  constructor(keys,page){
    let nKeys=keys.length;
    this._keys=keys;
    this._page=page;
    this._keyDistance=new Array(nKeys);
    this._keyDistance.fill(-1)
  }
  matchKey(i,distance){
    this._keyDistance[i]=distance
  }
  countMatches(){
    let c=0;
    for(let i=0;i<this._keys.length;i++){
      let d=this._keyDistance[i];
      if(d>-1){
        c+=1
      };
      let re=new RegExp(this._keys[i],'gi');
      while(re.exec(this._page.title)!==null){
        c+=1
      }
    };
    return c
  }
  sumTotalDistance(){
    let s=0;
    this._keyDistance.forEach((d)=>{if(d>-1){s+=d}});
    return s
  }
};
function compareScore(a,b){
  let ac=a.countMatches();
  let bc=b.countMatches();
  if(ac===bc){
    return a.sumTotalDistance()-b.sumTotalDistance()
  }
  else{
    return bc-ac
  }
};
function sortPages(r,filter=false){
  let pageIDs=[];
  for(let pair of r){
    let key=pair[0];
    pageIDs.push(key)
  };
  pageIDs.sort(function(a,b){return compareScore(r.get(a),r.get(b))});
  if(filter){
    let highestMatchCount=0;
    for(let pair of r){
      highestMatchCount=Math.max(highestMatchCount,pair[1].countMatches())
    };
    pageIDs=pageIDs.filter(function(i){let ps=r.get(i);return ps.countMatches()===highestMatchCount})
  };
  return pageIDs
};
class SearchIndex{
  constructor(url,opt={}){
    this._onready=[];
    this._data={'pages':[null]};
    fetch(url).then((resp)=>{return resp.json()}).catch((e)=>{console.log('unable to fetch '+url)}).then((d)=>{this._data=d;this._onready.forEach((fn)=>{fn()});this._onready=[]})
  }
  page(i){
    return this._data.pages[i]
  }
  ignore(word){
    return !((this._data.ignore[word]) === undefined)
  }
  collect(data,s){
    for(let k in data){
      if(k==='pages'){
        data.pages.forEach((i)=>{s.add(i)})
      }
      else{
        this.collect(data[k],s)
      }
    }
  }
  search(data,query,sw,s){
    if(query.length===0){
      if(sw){
        this.collect(data,s)
      }
      else if(!((data.pages) === undefined)){
        data.pages.forEach((i)=>{s.add(i)});
        return
      }
    };
    let c=query.slice(0,1);
    let subData=data[c];
    if(!((subData) === undefined)){
      this.search(subData,query.slice(1),sw,s)
    }
  }
  match(query){
    let s=new Set();
    this.search(this._data.index,query,false,s);
    return s
  }
  matchPrefix(query){
    let s=new Set();
    this.search(this._data.index,query,true,s);
    return s
  }
  matchSuffix(query){
    let s=new Set();
    this.search(this._data.partial,query,false,s);
    return s
  }
  matchSubstring(query){
    let s=new Set();
    this.search(this._data.partial,query,true,s);
    return s
  }
  initFuzzy(limit){
    if(limit<0){
      throw new Error('fuzzy limit must be positive')
    };
    let sets=new Array(limit+1);
    for(let i=0;i<=limit;i++){
      sets[i]=new Set()
    };
    return sets
  }
  fuzzyInternal(data,query,r,t,limit,sw,sets){
    let n=query.length;
    let i=t.length;
    let R=new Array(n+1);
    R[0]=i;
    for(let j=1;j<=n;j++){
      if(i===0){
        R[j]=j
      }
      else{
        let dc=r[j]+1;
        let ic=R[j-1]+1;
        let sc=r[j-1]+((query.codePointAt(j-1)===t.codePointAt(i-1))?0:1);
        R[j]=Math.min(dc,Math.min(ic,sc))
      }
    };
    let ll=R[(i<n+1)?i:n];
    let ul=R[n];
    if(ll>limit){
      return
    };
    if(sw&&ul<=limit){
      this.collect(data,sets[ul]);
      return
    };
    for(let k in data){
      if(k==='pages'){
        if(ul<=limit){
          data.pages.forEach((i_)=>{sets[ul].add(i_)})
        }
      }
      else{
        this.fuzzyInternal(data[k],query,R,t+k,limit,sw,sets)
      }
    }
  }
  fuzzy(query,limit){
    let sets=this.initFuzzy(limit);
    this.fuzzyInternal(this._data.index,query,null,'',limit,false,sets);
    return sets
  }
  fuzzyPrefix(query,limit){
    let sets=this.initFuzzy(limit);
    this.fuzzyInternal(this._data.index,query,null,'',limit,true,sets);
    return sets
  }
  fuzzySuffix(query,limit){
    let sets=this.initFuzzy(limit);
    this.fuzzyInternal(this._data.partial,query,null,'',limit,false,sets);
    return sets
  }
  fuzzySubstring(query,limit){
    let sets=this.initFuzzy(limit);
    this.fuzzyInternal(this._data.partial,query,null,'',limit,true,sets);
    return sets
  }
  set onready(fn){
    if(this.page(0)!==null){
      fn()
    }
    else{
      this._onready.push(fn)
    }
  }
};
function sanitizeQuery(q_){
  let q=q_.replace(new RegExp('<[/]?[a-z]*[/]?>','g'),'');
  q=q.replace(new RegExp('&nbsp;','g'),' ');
  q=q.replace(new RegExp('[\\,;:\]','g'),' ');
  let raw=q.split(' ');
  let fs=[];
  for(let f_ of raw){
    let f=f_.trim();
    if(f.length>1){
      let unique=true;
      for(let check of fs){
        if(check===f){
          unique=false;
          break;
        }
      };
      if(unique){
        fs.push(f)
      }
    }
  };
  return fs
};
function highlightQuery(txt,keys){
  txt=txt.replace(new RegExp('&nbsp;','g'),'      ');
  var rawRanges=[];
  for(let key of keys){
    let re=new RegExp(key,'gi');
    while(true){
      let match=re.exec(txt);
      if(match===null){
        break;
      };
      let start=match.index;
      let stop=start+match[0].length;
      rawRanges.push([start,stop])
    }
  };
  let n=rawRanges.length;
  if(n===0){
    return txt
  };
  rawRanges.sort(function(a,b){return a[0]-b[0]});
  let ranges=[];
  let start=rawRanges[0][0];
  let stop=rawRanges[0][1];
  for(let i=1;i<n;i++){
    if(rawRanges[i][0]>rawRanges[i-1][1]){
      ranges.push([start,stop]);
      start=rawRanges[i][0];
      stop=rawRanges[i][1]
    }
    else if(rawRanges[i][1]>stop){
      stop=rawRanges[i][1]
    }
  };
  ranges.push([start,rawRanges[n-1][1]]);
  let highlightedTxt=[];
  let prev=0;
  for(let i=0;i<ranges.length;i++){
    highlightedTxt.push(txt.slice(prev,ranges[i][0]));
    highlightedTxt.push('<b>'+txt.slice(ranges[i][0],ranges[i][1])+'</b>');
    prev=ranges[i][1]
  };
  if(prev<txt.length){
    highlightedTxt.push(txt.slice(prev))
  };
  return highlightedTxt.join('')
};
function determineFuzzyness(key){
  let fuzzyness=2;
  if(key.length<4){
    fuzzyness=0
  }
  else if(key.length<5){
    fuzzyness=1
  };
  return fuzzyness
};
function searchPages(si,keys,lastPrefix=false){
  let nKeys=keys.length;
  return new Promise(function(resolve,reject){si.onready=function(){let ranking=new Map();for(let i=0;i<nKeys;i++){let key=keys[i].toLowerCase();let fuzzyness=determineFuzzyness(key);if(!si.ignore(key)){let groups;if(i===nKeys-1&&lastPrefix){groups=si.fuzzyPrefix(key,fuzzyness)}else{groups=si.fuzzy(key,fuzzyness);let n=0;groups.forEach(function(g){n+=g.size});if(n<5){groups=si.fuzzySubstring(key,fuzzyness)}};for(let d=0;d<groups.length;d++){let pages=Array.from(groups[d]);for(let pageID_ of pages){let pageID=pageID_;let pageScore=null;if(!ranking.has(pageID)){pageScore=new PageScore(keys,si.page(pageID));ranking.set(pageID,pageScore)}else{pageScore=ranking.get(pageID)};pageScore.matchKey(i,d)}}}};let sorted=sortPages(ranking,true);resolve(sorted)}})
};
var baseURL="https://developer.mozilla.org/en-US/docs/Web/JavaScript";
class APIMessage{
  constructor(){}
};
class LoginRequest extends APIMessage{  static __propertyTypes__={
  host:String,
  code:String,
  };

  constructor(host,code){
    super();
    this.host=host;
    this.code=code
  }
};
class LoginResponse extends APIMessage{  static __propertyTypes__={
  token:String,
  };

  constructor(token){
    super();
    this.token=token
  }
};

function JNxIAs(){
const N=10;
const M=10;
const DURATION=60000;
class Mandelbrot{
  constructor(id){
    this._canvas=document.getElementById(id);
    this._ctx=this._canvas.getContext('webgl');
    this._program=((function(gl,v,f){return __newWebGLProgram__(gl,`attribute vec2 aPos;
attribute vec2 aDelta;
attribute vec2 aCenter;
varying highp vec2 vDelta;
varying highp vec2 vCenter;
void main(){
  vDelta=aDelta;
  vCenter=aCenter;
  gl_Position=vec4(aPos.x,aPos.y,0.0,1.0);

}

`,`precision lowp float;
const vec4 color0=vec4(0.0,0.0,0.0,1.0);
const vec4 color1=vec4(0.4414,0.0977,0.0508,1.0);
const vec4 color2=vec4(0.8555,0.0234,0.043,1.0);
const vec4 color3=vec4(0.9063,0.375,0.1094,1.0);
const vec4 color4=vec4(0.9531,0.6484,0.2148,1.0);
const vec4 color5=vec4(0.9648,0.9375,0.3398,1.0);
vec4 blackbody(float f){
  f=f*5.0;
  vec4 lower;
  vec4 upper;
  if(f<3.0){
    if(f<2.0){
      if(f<1.0){
        lower=color0;
        upper=color1;

      }
      else{
        lower=color1;
        upper=color2;

      };

    }
    else{
      lower=color2;
      upper=color3;

    };

  }
  else{
    if(f<5.0){
      if(f<4.0){
        lower=color3;
        upper=color4;

      }
      else{
        lower=color4;
        upper=color5;

      };

    }
    else{
      lower=color5;
      upper=color5;

    };

  };
  float rem=fract(f);
  return mix(lower,upper,rem);

}

precision highp float;
varying highp vec2 vDelta;
varying highp vec2 vCenter;
const int maxNaiveIter=300;
const vec4 color0_=vec4(0.0,0.0,0.0,1.0);
vec2 nextGen(vec2 z,vec2 z2,vec2 c){
  float x=z2.x-z2.y+c.x;
  float y=2.0*z.x*z.y+c.y;
  return vec2(x,y);

}

vec4 pickColor(float iter){
  iter=mod(iter,100.0);
  if(iter<50.0){
    return blackbody(iter/50.0);

  }
  else{
    return blackbody((50.0-iter)/50.0);

  };

}

float naive(vec2 c){
  vec2 z2=vec2(0.0,0.0);
  vec2 z=vec2(0.0,0.0);
  float iterRes=float(maxNaiveIter);
  vec2 z2Res=z2;
  for(int iter=1;iter<maxNaiveIter;iter++){    float prev=z2.x+z2.y;
    z=nextGen(z,z2,c);
    z2=vec2(z.x*z.x,z.y*z.y);
    float next=z2.x+z2.y;
    if(prev<=4.0&&next>4.0){
      iterRes=float(iter);
      z2Res=z2;

    };
  };
  if(iterRes<float(maxNaiveIter)){
    float log_zn=0.5*log(z2Res.x+z2Res.y);
    float nu=log(log_zn/log(2.0))/log(2.0);
    iterRes=iterRes+1.0-nu;

  };
  return iterRes;

}

void main(){
  float iter=naive(vec2(vCenter.x+vDelta.x,vCenter.y+vDelta.y));
  gl_FragColor=pickColor(iter);

}

`)})(this._ctx,{},{}));
    this._ctx.useProgram(this._program);
    this._scaleX=3.5/2;
    this._offset=[-0.7746806106269039,-0.1374168856037867];
    this._time=0;
    this._paused=true;
    window.addEventListener('resize',(_)=>{this.onResize()});
    this.onResize()
  }
  calcScaleY(){
    let rect=this._canvas.parentElement.getBoundingClientRect();
    return this._scaleX/rect.width*rect.height
  }
  onResize(){
    let rect=this._canvas.parentElement.getBoundingClientRect();
    this._canvas.width=rect.width;
    this._canvas.height=rect.width;
    this._ctx.viewport(0,0,this._canvas.width,this._canvas.height);
    this._ctx.clearColor(0,0,0,1);
    this._ctx.clear(this._ctx.COLOR_BUFFER_BIT);
    this.draw();
    this._paused=true
  }
  preCalcTri(x0,y0,x1,y1,x2,y2,k,aDeltaDst,aCenterDst){
    let xc=(x0+x1+x2)/3;
    let yc=(y0+y1+y2)/3;
    aCenterDst[k*6+0]=xc;
    aCenterDst[k*6+1]=yc;
    aCenterDst[k*6+2]=xc;
    aCenterDst[k*6+3]=yc;
    aCenterDst[k*6+4]=xc;
    aCenterDst[k*6+5]=yc;
    aDeltaDst[k*6+0]=x0-aCenterDst[k*6+0];
    aDeltaDst[k*6+1]=y0-aCenterDst[k*6+1];
    aDeltaDst[k*6+2]=x1-aCenterDst[k*6+2];
    aDeltaDst[k*6+3]=y1-aCenterDst[k*6+3];
    aDeltaDst[k*6+4]=x2-aCenterDst[k*6+4];
    aDeltaDst[k*6+5]=y2-aCenterDst[k*6+5]
  }
  draw(){
    let gl=this._ctx;
    let aPosBuffer=gl.createBuffer();
    let aPosLoc=gl.getAttribLocation(this._program,'aPos');
    if(aPosLoc<0){
      throw new Error('bad loc for aPos')
    };
    gl.bindBuffer(gl.ARRAY_BUFFER,aPosBuffer);
    gl.vertexAttribPointer(aPosLoc,2,gl.FLOAT,false,0,0);
    gl.enableVertexAttribArray(aPosLoc);
    let aDeltaBuffer=gl.createBuffer();
    let aDeltaLoc=gl.getAttribLocation(this._program,'aDelta');
    if(aDeltaLoc<0){
      throw new Error('bad loc for aDeltaLoc')
    };
    gl.bindBuffer(gl.ARRAY_BUFFER,aDeltaBuffer);
    gl.vertexAttribPointer(aDeltaLoc,2,gl.FLOAT,false,0,0);
    gl.enableVertexAttribArray(aDeltaLoc);
    let aCenterBuffer=gl.createBuffer();
    let aCenterLoc=gl.getAttribLocation(this._program,'aCenter');
    gl.bindBuffer(gl.ARRAY_BUFFER,aCenterBuffer);
    gl.vertexAttribPointer(aCenterLoc,2,gl.FLOAT,false,0,0);
    gl.enableVertexAttribArray(aCenterLoc);
    let aPosDst=new Float32Array(2*N*M*3*2);
    let aDeltaDst=new Float32Array(2*N*M*3*2);
    let aCenterDst=new Float32Array(2*N*M*3*2);
    let scaleY=this.calcScaleY();
    for(let i=0;i<N;i++){
      let x0_=-1+2*i/N;
      let x1_=-1+2*(i+1)/N;
      for(let j=0;j<M;j++){
        let y0_=-1+2*j/M;
        let y1_=-1+2*(j+1)/M;
        let x0=x0_*this._scaleX+this._offset[0];
        let x1=x1_*this._scaleX+this._offset[0];
        let y0=y0_*scaleY+this._offset[1];
        let y1=y1_*scaleY+this._offset[1];
        let k=2*(i*M+j);
        this.preCalcTri(x0,y0,x1,y0,x1,y1,k,aDeltaDst,aCenterDst);
        aPosDst[k*6+0]=x0_;
        aPosDst[k*6+1]=y0_;
        aPosDst[k*6+2]=x1_;
        aPosDst[k*6+3]=y0_;
        aPosDst[k*6+4]=x1_;
        aPosDst[k*6+5]=y1_;
        let k_=k+1;
        this.preCalcTri(x0,y0,x1,y1,x0,y1,k_,aDeltaDst,aCenterDst);
        aPosDst[k_*6+0]=x0_;
        aPosDst[k_*6+1]=y0_;
        aPosDst[k_*6+2]=x1_;
        aPosDst[k_*6+3]=y1_;
        aPosDst[k_*6+4]=x0_;
        aPosDst[k_*6+5]=y1_
      }
    };
    gl.bindBuffer(gl.ARRAY_BUFFER,aPosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER,aPosDst,gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER,aDeltaBuffer);
    gl.bufferData(gl.ARRAY_BUFFER,aDeltaDst,gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER,aCenterBuffer);
    gl.bufferData(gl.ARRAY_BUFFER,aCenterDst,gl.STATIC_DRAW);
    gl.drawArrays(gl.TRIANGLES,0,2*N*M*3)
  }
  playFromBeginning(){
    this._paused=true;
    this._time=0;
    setTimeout(()=>{this.play()},300)
  }
  play(){
    this._paused=false;
    let xStart=Math.log10(3.5/2);
    let xStop=Math.log10(xStart/100000);
    let easing=new Linear(DURATION);
    let animStart=null;
    let prevTS=null;
    var fn=(ts)=>{if(animStart===null){animStart=ts}else{this._time+=ts-prevTS};prevTS=ts;let scaleX=Math.pow(10,easing.interp(this._time%DURATION,xStart,xStop));this._scaleX=scaleX;if(this._time>DURATION){this._time-=DURATION;this.draw();this._paused=true}else{this.draw();if(Math.abs(scaleX-Math.pow(10,xStop))>1e-10){if(!this._paused){window.requestAnimationFrame(fn)}}}};
    window.requestAnimationFrame(fn)
  }
  pause(){
    this._paused=true
  }
};
class MandelbrotPage{
  constructor(){
    this._mandelbrot=new Mandelbrot('mandelbrot-canvas');
    this._replayButton=document.getElementById('mandelbrot-replay');
    this._replayButton.addEventListener('click',(_)=>{this._mandelbrot.playFromBeginning()})
  }
  focus(){
    this._mandelbrot.play()
  }
  blur(){
    this._mandelbrot.pause()
  }
};
new MandelbrotPage();
}
function gIMdzq(){
class Page{
  constructor(){
    this._searchIndex=new SearchIndex('search-index-mdn-javascript.json');
    this._input=document.getElementById('example-search-input');
    this._message=document.getElementById('example-search-message');
    this._results=document.getElementById('example-search-results');
    this._input.addEventListener('input',(e)=>{this.updateResults()});
    this._input.value=''
  }
  async updateResults(){
    let query=this._input.value;
    if(query.length<1){
      return
    };
    let keys=sanitizeQuery(query);
    let pages=await searchPages(this._searchIndex,keys,false);
    if(pages.length===0){
      this._message.innerHTML='';
      this._results.innerHTML='';
      return
    };
    let titles=[];
    let urls=[];
    for(let i of pages){
      let p=this._searchIndex.page(i);
      let title=highlightQuery(p.title,keys);
      titles.push(title);
      urls.push(baseURL+p.url)
    };
    for(let i=0;i<titles.length;i++){
      let link=document.createElement('a');
      link.href=urls[i];
      link.innerHTML=titles[i];
      if(i<this._results.children.length){
        this._results.replaceChild(link,this._results.children[i])
      }
      else{
        this._results.appendChild(link)
      }
    };
    for(let i=this._results.children.length-1;i>=titles.length;i--){
      this._results.removeChild(this._results.children[i])
    };
    if(this._message!==null){
      let msg='Found '+titles.length.toString()+' article';
      if(titles.length>1){
        msg+='s'
      };
      this._message.innerHTML=msg
    }
  }
};
new Page();
}
function OMXuIS(){
function isLocalhost(){
  return window.location.href.startsWith('http://localhost')
};
function CLIENT_ID(){
  return isLocalhost()?'a056f6d90d816da9d53b':'f0b32b533ad2d66d5e64'
};
function THIS_URL(){
  return isLocalhost()?'http://localhost:8080/wtaas.html':'https://www.wtsuite.com/wtaas.html'
};
function API_URL(){
  return isLocalhost()?'http://localhost:7000':'https://api.wtsuite.com/ssg'
};
const WTAAS_TOKEN='wtaas-token';
function setToken(token){
  window.localStorage.setItem(WTAAS_TOKEN,token)
};
function getToken(){
  return window.localStorage.getItem(WTAAS_TOKEN)
};
function hasToken(){
  return getToken()!==null
};
function clearToken(){
  window.localStorage.removeItem(WTAAS_TOKEN)
};
class TopicError extends Error{
  constructor(msg,topic=''){
    super(msg);
    this._topic=topic===null?'':topic
  }
  get topic(){
    return this._topic
  }
};
function apiRequest(relURL,method,payload=''){
  return new Promise(function(resolve,reject){let req=new XMLHttpRequest();req.open(method,API_URL()+relURL);req.setRequestHeader('Content-Type','application/json');let token=getToken();if(token!==null){req.setRequestHeader('Auth-Token',token)};req.onerror=function(){reject(new Error(method+' to '+relURL+' failed'))};req.onload=function(){if(req.status===200){resolve(req.responseText)}else if(req.status===403){clearToken();window.location.href=THIS_URL();reject(new Error('forbidden'))}else{try{let obj=JSON.parse(req.responseText);if(((obj['error']) === undefined)){throw new Error()};let topic='';if(!((obj['topic']) === undefined)){topic=obj['topic']};let err=new TopicError(obj['error'],topic);reject(err)}catch(_){let msg=method+' to '+relURL+' failed ('+req.responseText+')';reject(new Error(msg))}}};req.send(payload)})
};
async function apiPost(relURL,obj){
  let payload=JSON.stringify(obj);
  let resp=await apiRequest(relURL,'POST',payload);
  return JSON.parse(resp)
};
async function apiGet(relURL){
  let resp=await apiRequest(relURL,'GET','');
  return JSON.parse(resp)
};
function stripHostAndOwner(repoURL){
  let parts=repoURL.split('/');
  return parts.slice(2).join('/')
};
function cleanEditableValue(el){
  let ih=el.innerHTML;
  return ih.replace(new RegExp('<.*?>','g'),'')
};
class Page_{
  constructor(){
    this._appContainer=document.getElementById('app');
    this._loginForm=document.getElementById('login');
    this._githubLogin=document.getElementById('github-login');
    this._hostInfo=document.getElementById('host-info');
    this._nameInfo=document.getElementById('name-info');
    this._lastBuildInfo=document.getElementById('last-build-info');
    this._sshKey=document.getElementById('ssh-key');
    this._addPipelineUpstreamName=document.getElementById('add-pipeline-upstream-name');
    this._addPipelineUpstreamBranch=document.getElementById('add-pipeline-upstream-branch');
    this._addPipelineUpstreamDir=document.getElementById('add-pipeline-upstream-dir');
    this._addPipelineDownstreamName=document.getElementById('add-pipeline-downstream-name');
    this._addPipelineDownstreamBranch=document.getElementById('add-pipeline-downstream-branch');
    this._addPipelineButton=document.getElementById('add-pipeline-button');
    this._addPipelineMessage=document.getElementById('add-pipeline-message');
    this._allPipelines=document.getElementById('all-pipelines');
    this._registerLibraryName=document.getElementById('register-library-name');
    this._registerLibraryButton=document.getElementById('register-library-button');
    this._allLibraries=document.getElementById('all-libraries');
    this._refreshMessagesButton=document.getElementById('refresh-messages');
    this._clearMessagesButton=document.getElementById('clear-messages');
    this._allMessages=document.getElementById('all-messages');
    if(!hasToken()){
      this.attemptAuth()
    }
    else{
      this.loadUserData()
    };
    this._addPipelineButton.addEventListener('click',(_)=>{this.addPipeline()});
    this._registerLibraryButton.addEventListener('click',(_)=>{this.registerLibrary()});
    this._refreshMessagesButton.addEventListener('click',(_)=>{this.loadMessages()});
    this._clearMessagesButton.addEventListener('click',(_)=>{this.clearMessages()})
  }
  async attemptAuth(){
    if((await this.attemptGithubAuth())){
      this.loadUserData()
    }
    else{
      this.showLoginForm()
    }
  }
  async attemptGithubAuth(){
    let params=new URLSearchParams(window.location.search.substring(1));
    let code=params.get('code');
    if(code!==null){
      let state=params.get('state');
      if(state===null||state!==window.sessionStorage.getItem('github-state')){
        console.log('Something went wrong during the login');
        return false
      }
      else{
        console.log('Complete login with: ',code);
        try{
          let resp=await apiPost('/login',{'host':'github.com','code':code});
          let token=resp['token'];
          setToken(token)
        }catch(e){
          console.log(e);
          return false
        };
        return true
      }
    }
    else{
      return false
    }
  }
  randomState(){
    let rnd=new Uint8Array(64);
    window.crypto.getRandomValues(rnd);
    let str=Array.from(rnd).map((dec)=>{return dec.toString(16).padStart(2,'00')});
    return str.join('')
  }
  showLoginForm(){
    this._loginForm.setAttribute('show','');
    let state=this.randomState();
    let redirect_uri=THIS_URL();
    let url=(['https://github.com/login/oauth/authorize?','client_id=',CLIENT_ID(),'&redirect_uri=',encodeURIComponent(redirect_uri),'&state=',state]).join('');
    window.sessionStorage.setItem('github-state',state);
    this._githubLogin.href=url
  }
  async loadUserData(){
    this._appContainer.setAttribute('show','');
    try{
      let details=await apiGet('/user');
      this._hostInfo.innerHTML=details['host'];
      this._nameInfo.innerHTML=details['name'];
      this._lastBuildInfo.innerHTML=(new Date((new Int(details['lastBuild']))*1000)).toLocaleString('sv');
      this._sshKey.innerHTML=details['sshKey'];
      this.loadLibraries();
      this.loadPipelines();
      this.loadMessages()
    }catch(e){
      console.log(e.message)
    }
  }
  async loadLibraries(){
    let resp=await apiGet('/libraries');
    let libs=resp['libraries'];
    while(this._allLibraries.firstChild!==null){
      this._allLibraries.removeChild(this._allLibraries.firstChild)
    };
    for(let lib of libs){
      let div=document.createElement('div');
      let p1=document.createElement('p');
      p1.setAttribute('class','url');
      p1.innerHTML=lib.url;
      let p2=document.createElement('p');
      p2.setAttribute('class','state');
      p2.innerHTML=lib.state;
      let p3=document.createElement('p');
      p3.setAttribute('class','webhook');
      p3.innerHTML=lib.webhook;
      let b1=document.createElement('button');
      b1.innerHTML='new webhook';
      b1.addEventListener('click',(_)=>{this.updateLibraryWebhook(lib.url)});
      let b2=document.createElement('button');
      b2.innerHTML='trigger';
      b2.addEventListener('click',(_)=>{this.triggerWebhook(lib.webhook)});
      let b3=document.createElement('button');
      b3.innerHTML='delete';
      b3.addEventListener('click',(_)=>{this.removeLibrary(lib.url)});
      div.appendChild(p1);
      div.appendChild(p2);
      div.appendChild(p3);
      div.appendChild(b1);
      div.appendChild(b2);
      div.appendChild(b3);
      this._allLibraries.appendChild(div)
    }
  }
  async loadPipelines(){
    let resp=await apiGet('/pipelines');
    let pipelines=resp['pipelines'];
    while(this._allPipelines.firstChild!==null){
      this._allPipelines.removeChild(this._allPipelines.firstChild)
    };
    for(let pl of pipelines){
      let div=document.createElement('div');
      let p1=document.createElement('p');
      p1.setAttribute('class','upstream-url');
      p1.setAttribute('contenteditable','true');
      p1.innerHTML=stripHostAndOwner(pl.upstreamURL);
      let p2=document.createElement('p');
      p2.setAttribute('class','upstream-branch');
      p2.setAttribute('contenteditable','true');
      p2.innerHTML=pl.upstreamBranch;
      let p3=document.createElement('p');
      p3.setAttribute('class','upstream-dir');
      p3.setAttribute('contenteditable','true');
      p3.innerHTML=pl.upstreamDir;
      let p4=document.createElement('p');
      p4.setAttribute('class','downstream-url');
      p4.setAttribute('contenteditable','true');
      p4.innerHTML=stripHostAndOwner(pl.downstreamURL);
      let p5=document.createElement('p');
      p5.setAttribute('class','downstream-branch');
      p5.setAttribute('contenteditable','true');
      p5.innerHTML=pl.downstreamBranch;
      let p6=document.createElement('p');
      p6.setAttribute('class','state');
      p6.innerHTML=pl.state;
      let p7=document.createElement('p');
      p7.setAttribute('class','webhook');
      p7.innerHTML=pl.webhook;
      let b1=document.createElement('button');
      b1.innerHTML='new webhook';
      b1.addEventListener('click',(_)=>{this.updatePipelineWebhook(pl.upstreamURL)});
      let b2msg=document.createElement('span');
      let b2=document.createElement('button');
      b2.innerHTML='update';
      b2.addEventListener('click',(_)=>{this.updatePipeline(pl.upstreamURL,p1,p2,p3,p4,p5,b2msg)});
      let b3=document.createElement('button');
      b3.innerHTML='trigger';
      b3.addEventListener('click',(_)=>{this.triggerWebhook(pl.webhook)});
      let b4=document.createElement('button');
      b4.innerHTML='delete';
      b4.addEventListener('click',(_)=>{this.removePipeline(pl.upstreamURL)});
      div.appendChild(p1);
      div.appendChild(p2);
      div.appendChild(p3);
      div.appendChild(p4);
      div.appendChild(p5);
      div.appendChild(p6);
      div.appendChild(p7);
      div.appendChild(b1);
      div.appendChild(b2);
      div.appendChild(b2msg);
      div.appendChild(b3);
      div.appendChild(b4);
      this._allPipelines.appendChild(div)
    }
  }
  async addPipeline(){
    this._addPipelineMessage.innerHTML='';
    this._addPipelineUpstreamName.setCustomValidity('');
    this._addPipelineUpstreamBranch.setCustomValidity('');
    this._addPipelineUpstreamDir.setCustomValidity('');
    this._addPipelineDownstreamName.setCustomValidity('');
    this._addPipelineDownstreamBranch.setCustomValidity('');
    let upstreamName=this._addPipelineUpstreamName.value;
    let upstreamBranch=this._addPipelineUpstreamBranch.value;
    let upstreamDir=this._addPipelineUpstreamDir.value;
    let downstreamName=this._addPipelineDownstreamName.value;
    let downstreamBranch=this._addPipelineDownstreamBranch.value;
    if(upstreamName===''||upstreamBranch===''||downstreamName===''||downstreamBranch===''){
      return
    };
    try{
      await apiPost('/pipeline/add',{'upstreamName':upstreamName,'upstreamBranch':upstreamBranch,'upstreamDir':upstreamDir,'downstreamName':downstreamName,'downstreamBranch':downstreamBranch});
      this.loadPipelines()
    }catch(e){
      this._addPipelineMessage.innerHTML=e.message;
      if((e instanceof TopicError)){
        switch(e.topic){
          case 'upstreamName':{
            this._addPipelineUpstreamName.setCustomValidity(e.message);
            break;
          }
          case 'downstreamName':{
            this._addPipelineDownstreamName.setCustomValidity(e.message);
            break;
          }
          case 'upstreamBranch':{
            this._addPipelineUpstreamBranch.setCustomValidity(e.message);
            break;
          }
          case 'upstreamDir':{
            this._addPipelineUpstreamBranch.setCustomValidity(e.message);
            break;
          }
          case 'downstreamBranch':{
            this._addPipelineDownstreamBranch.setCustomValidity(e.message);
            break;
          }
        }
      }
    }
  }
  async removePipeline(url){
    try{
      await apiPost('/pipeline/remove',{'url':url});
      this.loadPipelines()
    }catch(e){
      console.log(e.message)
    }
  }
  async updatePipeline(url,upstreamNameElement,upstreamBranchElement,upstreamDirElement,downstreamNameElement,downstreamBranchElement,updateMessage){
    upstreamNameElement.removeAttribute('invalid');
    upstreamBranchElement.removeAttribute('invalid');
    upstreamDirElement.removeAttribute('invalid');
    downstreamNameElement.removeAttribute('invalid');
    downstreamBranchElement.removeAttribute('invalid');
    updateMessage.innerHTML='';
    let upstreamName=cleanEditableValue(upstreamNameElement);
    let invalidMsgParts=[];
    if(upstreamName===''){
      upstreamNameElement.setAttribute('invalid','');
      invalidMsgParts.push('upstream name empty')
    };
    let upstreamBranch=cleanEditableValue(upstreamBranchElement);
    if(upstreamBranch===''){
      upstreamBranchElement.setAttribute('invalid','');
      invalidMsgParts.push('upstream branch empty')
    };
    let upstreamDir=cleanEditableValue(upstreamDirElement);
    let downstreamName=cleanEditableValue(downstreamNameElement);
    if(downstreamName===''){
      invalidMsgParts.push('downstream name empty')
    };
    let downstreamBranch=cleanEditableValue(downstreamBranchElement);
    if(downstreamBranch===''){
      invalidMsgParts.push('downstream branch empty')
    };
    if(invalidMsgParts.length>0){
      updateMessage.innerHTML=invalidMsgParts.join(', ');
      return
    };
    let obj={'url':url,'upstreamName':upstreamName,'upstreamBranch':upstreamBranch,'upstreamDir':upstreamDir,'downstreamName':downstreamName,'downstreamBranch':downstreamBranch};
    try{
      await apiPost('/pipeline/update',obj)
    }catch(e){
      if((e instanceof TopicError)){
        switch(e.topic){
          case 'upstreamName':{
            upstreamNameElement.setAttribute('invalid','');
            break;
          }
          case 'upstreamBranch':{
            upstreamBranchElement.setAttribute('invalid','');
            break;
          }
          case 'upstreamDir':{
            upstreamDirElement.setAttribute('invalid','');
            break;
          }
          case 'downstreamName':{
            downstreamNameElement.setAttribute('invalid','');
            break;
          }
          case 'downstreamBranch':{
            downstreamBranchElement.setAttribute('invalid','');
            break;
          }
        }
      };
      updateMessage.innerHTML=e.message
    }
  }
  async registerLibrary(){
    let name=this._registerLibraryName.value;
    if(name===''){
      return
    };
    try{
      await apiPost('/library/add',{'name':name});
      this.loadLibraries()
    }catch(e){
      console.log(e.message)
    }
  }
  async removeLibrary(url){
    try{
      await apiPost('/library/remove',{'url':url});
      this.loadLibraries()
    }catch(e){
      console.log(e.message)
    }
  }
  async updatePipelineWebhook(url){
    try{
      await apiPost('/webhook/update',{'url':url});
      this.loadPipelines()
    }catch(e){
      console.log(e.message)
    }
  }
  async updateLibraryWebhook(url){
    try{
      await apiPost('/webhook/update',{'url':url});
      this.loadLibraries()
    }catch(e){
      console.log(e.message)
    }
  }
  async triggerWebhook(wh){
    try{
      await apiPost('?webhook='+encodeURIComponent(wh),{});
      this.loadLibraries()
    }catch(e){
      console.log(e.message)
    }
  }
  async clearMessages(){
    try{
      await apiGet('/messages/clear');
      this.loadMessages()
    }catch(e){
      console.log(e.message)
    }
  }
  async loadMessages(){
    let resp=await apiGet('/messages');
    let messages=resp['messages'];
    while(this._allMessages.firstChild!==null){
      this._allMessages.removeChild(this._allMessages.firstChild)
    };
    for(let msg of messages){
      let div=document.createElement('div');
      let p1=document.createElement('p');
      p1.setAttribute('class','message-pipeline');
      p1.innerHTML=stripHostAndOwner(msg.pipeline);
      let p2=document.createElement('p');
      p2.setAttribute('class','message-time-stamp');
      p2.innerHTML=(new Date(msg.timeStamp*1000)).toLocaleString('sv');
      let p3=document.createElement('p');
      p3.setAttribute('class','message-content');
      p3.innerHTML=msg.message;
      div.appendChild(p1);
      div.appendChild(p2);
      div.appendChild(p3);
      this._allMessages.appendChild(div)
    }
  }
};
new Page_();
}