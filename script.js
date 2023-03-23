const sha256 = async (text) => {
  const uint8  = new TextEncoder().encode(text)
  const digest = await crypto.subtle.digest('SHA-256', uint8)
  return Array.from(new Uint8Array(digest)).map(v => v.toString(16).padStart(2,'0')).join('')
}
function getCookieValue(key) {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
      var cookiesArray = cookie.split('='); 
      if (cookiesArray[0].trim() == key.trim()) { 
          return cookiesArray[1];
      }
  }
  return '';
}
let sold_nic_person_spaceAD_bwi = document.body.innerHTML;
document.body.innerHTML = "<br><br><br><br><br><br><b style = 'font-size:20px;'>Enter Password</b><br>";
let input = document.createElement("input");
input.id = "pass";
input.type = "text";
document.body.appendChild(input);
let button = document.createElement("button");
button.innerHTML = "OK";
button.onclick = async () => {
  if (await sha256(document.getElementById("pass").value) == "230661e0b854a75267ed8a5a7e410bb9b1a4256a18171c9b7122f07d8a75ac8c"){
    document.body.innerHTML = sold_nic_person_spaceAD_bwi;
    document.cookie = "sold = success;path = /;domain = ptbnth.github.io/study;max-age = 9999999999";
    location.reload();
  }else{
    console.error("パスワードが違います");
    alert("パスワードが違います");
  }
}
  document.body.appendChild(button);
  if(getCookieValue("sold") == "success"){
    document.body.innerHTML = sold_nic_person_spaceAD_bwi;
  }
