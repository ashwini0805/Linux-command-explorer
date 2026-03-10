function showCommands(category){

let container=document.getElementById("commandList")

container.innerHTML=""

commands[category].forEach(cmd=>{

container.innerHTML+=`

<div class="command">

<h3>${cmd.name}</h3>

<p>${cmd.desc}</p>

<div class="terminal">
$ ${cmd.example}
<button onclick="copyCommand('${cmd.example}')">Copy</button>
</div>

</div>

`

})

}

function copyCommand(text){

navigator.clipboard.writeText(text)

alert("Command Copied: "+text)

}