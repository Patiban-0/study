//変数
let a1;　//const var

//関数
function aiueo(bb){
  return console.log(bb);
}
aiueo('(ﾟ∀ﾟ)ｱﾋｬ');
let vv=(bbb)=>{
  return console.log(bbb);
}
vv('(ﾟ∀ﾟ)ｱﾋｬ2');
(()=>{
  console.log('test00');
})();

//if文
let ur=prompt('数字を入力');
if(ur=='0'||ur=='０'){
  console.log('〇');
}else{
  console.log('✕');
}

//繰り返し文(while)
let o=0;
while(o<1001){
  console.log(o);
  if(o%10==0){
    console.log(o+'は10の倍数');
  }
  o++;
}
//繰り返し分(for)
for (let ue = 0; ue<=1001; ue++){
  if(ue%10==0){
    console.log(ue+'は10の倍数');
  }
}
