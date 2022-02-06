const $emojis = document.getElementById('emojis')
const emojis = []
for(let i=13; i<=91; i++){
    emojis.push(`<div class="emojibox"><p style="text-align: center;">
    <span style="font-size: 2rem;">&#1278${i};</span><br>
    <br>
    <code>1278${i}</code>
  </p></div>`)
    emojis.push(`<div class="emojibox"><p style="text-align: center;">
    <span style="font-size: 2rem;">&#1285${i};</span><br>
    <br>
    <code>1285${i}</code>
  </p></div>`)
}


console.log(emojis)

$emojis.innerHTML += emojis.join('')
console.log($emojis.innerHTML)