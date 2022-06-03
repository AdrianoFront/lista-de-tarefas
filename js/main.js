const Main = {

  init: function () {
    this.cacheSelectors()
    this.bindEvents()
  },
  cacheSelectors: function () {
this.$checkButton = document.querySelectorAll('.check')
  },

  bindEvents: function () { 
    const self = this
    this.$checkButtons.forEach(function (button) {
      button.onclick = self.Events.checkButton_click 
    })
  }

  Events: {
    checkButton_click: function(e){
      const li = e.target.parentElement
      const isDone = li.classList.contains('done')
      
      if (!isDone) {
        return li.classList.remove('done')
      }
      li.classList.add('done')
      }

    }
  }
}

Main.init{}