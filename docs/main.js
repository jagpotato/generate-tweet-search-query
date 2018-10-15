const user = document.getElementById('user')
const since = document.getElementById('since')
const until = document.getElementById('until')
const generate = document.getElementById('generate')
const output = document.getElementById('output')
let query = ''

generate.addEventListener('click', () => {
  query = 'from:' + user.value + ' since:' + since.value + ' until:' + until.value
  output.innerHTML = query
})