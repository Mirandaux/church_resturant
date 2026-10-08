import * as THREE from 'three';
// Deterministic hand-weathered maps: no external textures or runtime requests.
export function agedSurface(base, kind='brick') {
 const canvas=document.createElement('canvas');canvas.width=canvas.height=512;
 const ctx=canvas.getContext('2d');ctx.fillStyle=base;ctx.fillRect(0,0,512,512);
 let seed=42;const rand=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
 for(let i=0;i<42000;i++){const g=rand()>.5?255:0;ctx.fillStyle=`rgba(${g},${g},${g},${rand()*.13})`;ctx.fillRect(rand()*512,rand()*512,1+rand()*3,1+rand()*3);}
 for(let i=0;i<90;i++){const x=rand()*512,y=rand()*512,r=10+rand()*70;const g=ctx.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,kind==='brick'?'rgba(220,193,143,.19)':'rgba(30,23,15,.15)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(x-r,y-r,r*2,r*2);}
 for(let i=0;i<24;i++){ctx.strokeStyle='rgba(24,17,10,.16)';ctx.lineWidth=.5+rand();ctx.beginPath();let x=rand()*512,y=rand()*512;ctx.moveTo(x,y);for(let j=0;j<6;j++){x+=(rand()-.5)*16;y+=rand()*8;ctx.lineTo(x,y);}ctx.stroke();}
 const map=new THREE.CanvasTexture(canvas);map.colorSpace=THREE.SRGBColorSpace;map.wrapS=map.wrapT=THREE.RepeatWrapping;map.anisotropy=4;
 const bump=map.clone();bump.colorSpace=THREE.NoColorSpace;bump.needsUpdate=true;
 return new THREE.MeshStandardMaterial({color:'#ffffff',map,bumpMap:bump,bumpScale:kind==='brick'?.035:.012,roughness:.92});
}
