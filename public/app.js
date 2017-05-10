(function() {
  var api = {
    getProfile: function() {
      return fetchJsonp('https://api.instagram.com/v1/users/self?client_id=50f2841b06404abdba5b88d2630b0b0e&access_token=2060496825.50f2841.1cb78c067d9a46fc81b5048f1531b48a&callback=testIg')
        .then(function(result) {
          return result.json()
        })
        .then(function(response) {
          return response.data
        })
    }
  }

  function createInfoItem(strText, desc) {
    var container = document.querySelector('.instagram-profile .info')
    var info = document.createElement('span')
    var infoNum = document.createElement('strong')
    infoNum.innerText = strText
    info.appendChild(infoNum)
    info.append(' ' + desc)
    container.appendChild(info)
  }

  api.getProfile()
    .then(function(data) {
      createInfoItem(data.counts.media, 'Gönderi')
      createInfoItem(Math.round(data.counts.followed_by/100)/10, 'Bin Takipçi')
    })
})()