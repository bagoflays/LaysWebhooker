console.log(navigator.userAgent.toLowerCase())
if (/android|iphone|ipad/i.test(navigator.userAgent.toLowerCase())) {
   document.getElementById("stupidtitle").innerText = "Lays Webhooker for Discord for Mobile"
} else if (/windows/i.test(navigator.userAgent.toLowerCase())) {
    document.getElementById("stupidtitle").innerText = "Lays Webhooker for Discord for Windows"
} else if (/macintosh|mac os/i.test(navigator.userAgent.toLowerCase())) {
    document.getElementById("stupidtitle").innerText = "Lays Webhooker for Discord for MacOS"
} else if (/linux/i.test(navigator.userAgent.toLowerCase())) {
   document.getElementById("stupidtitle").innerText = "Lays Webhooker for Discord for Linux/Mobile Desktop Mode"
}
function jsSend() {
  const url = prompt('Add a Webhook URL (By Lays Webhooker)')
  const message = prompt('Add a message (By Lays Webhooker)')
  fetch(url,{method: 'POST',headers:{'Content-Type': 'application/json'},body: JSON.stringify({content: message})})
} 

function jsInstantSend(webHookURL, thaMessage) {
  fetch(webHookURL, {method: 'POST',headers:{"Content-Type": "application/json"},body: JSON.stringify({content:thaMessage})})
}
