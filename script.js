(async()=>{
  const sha256 = async (text) => {
    const uint8  = new TextEncoder().encode(text)
    const digest = await crypto.subtle.digest('SHA-256', uint8)
    return Array.from(new Uint8Array(digest)).map(v => v.toString(16).padStart(2,'0')).join('')
}
  let pass = prompt('Enter Password');
  if(await sha256(pass) == "0c87ed818fb90f3f88faa6b362cf1e99025f3c1248f8fe513cdb38d03d9dce65"){
    alert('success');
    console.log('success');
  }else{
    alert('誰だお前');
    console.log('誰だお前');
    location.href="https://google.com";
  }
