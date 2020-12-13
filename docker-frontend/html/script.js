var request = new XMLHttpRequest()

request.open('GET', 'http://localhost:4567/', false)

request.setRequestHeader('Access-Control-Request-Headers', '*')

request.onload = function () {
}

request.send()

var data = JSON.parse(request.responseText)

data["films"].forEach((k, v) =>
console.log(k.title)
)
