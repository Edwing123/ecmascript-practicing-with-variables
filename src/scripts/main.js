/**
 * We use variables to store values so that we can use them later,
 * in JavaScript almost anything can be store in a variable.
 */

// let's use var
var log = console.log.bind(console)

function getTime() {
  var today = new Date()
  var time = today.toLocaleTimeString("es-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  })
  return time
}

function getPrettyDate() {
  var today = new Date()
  var formattedDate = today.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })

  return formattedDate
}

function roughNotationInit() {
  var DEFAULT_COLOR = "#fed330"
  var PREFIX = ".rough-"
  var annotations = [
    {
      type: "circle",
      color: "#eb3b5a"
    },
    {
      type: "highlight",
      color: "#fed330"
    },
    {
      type: "box",
      color: "#26de81"
    },
    {
      type: "underline",
      color: ""
    }
  ]

  annotations.forEach(({ type, color }) => {
    var elements = document.querySelectorAll(PREFIX + type)

    elements.forEach((element) => {
      var annotationObj = RoughNotation.annotate(element, {
        type,
        color: color ? color : DEFAULT_COLOR
      })

      annotationObj.show()
    })
  })
}

function makeAsideContentSticky() {
  var windowWidth = window.innerWidth
  var allowedWindowWidthForStickyMenu = 900 // pixels

  if (windowWidth >= allowedWindowWidthForStickyMenu) {
    var asideContentMenu = document.getElementById("app-aside-content-menu")
    var windowScrollTop = document.documentElement.scrollTop
    var shouldBeSticky = windowScrollTop > 100
    var STICKY_CLASS_NAME = "--menu-sticky"

    // log(shouldBeSticky)
    if (shouldBeSticky) {
      var pointY = windowScrollTop - 100
      // log(pointY)

      asideContentMenu.classList.add(STICKY_CLASS_NAME)
      asideContentMenu.style.transform = `translateY(${pointY}px)`
    } else {
      asideContentMenu.classList.remove(STICKY_CLASS_NAME)
      asideContentMenu.style.transform = "none"
    }
  }
}

function initStickyAsideMenu() {
  makeAsideContentSticky()

  window.addEventListener("scroll", function () {
    makeAsideContentSticky()
  })
}

function App() {

  // random number example
  var getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + 1)
  }

  log(
    "random number returned from getRandomNumber -> " + getRandomNumber(1, 20)
  )

  // class example
  class User {
    constructor(name, age, country) {
      this.name = name
      this.age = age
      this.country = country
    }

    sayName() {
      console.log(`My name is ${this.name}`)
    }
  }

  // reference for User class
  var variableForUserClass = User

  // instantiate class
  var user = new variableForUserClass("Edwin", 19, "Nicaragua")

  // see console
  user.sayName()
}

function main() {
  initStickyAsideMenu()
  hljs.initHighlightingOnLoad()
  roughNotationInit()
  App()

  var timerElement = document.getElementById("timer")
  var DELAY_TIME = 1000

  // run code every second (1000ms) so time can be updated
  setInterval(function () {
    var time = getTime()
    timerElement.textContent = time
  }, DELAY_TIME)

  var dateElement = document.getElementById("date")
  dateElement.textContent = getPrettyDate()
}

main()


var isBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight
log(isBottom)