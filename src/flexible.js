var os = (function () {
  var ua = navigator.userAgent,
    isWindowsPhone = /(?:Windows Phone)/.test(ua),
    isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
    isAndroid = /(?:Android)/.test(ua),
    isFireFox = /(?:Firefox)/.test(ua),
    isChrome = /(?:Chrome|CriOS)/.test(ua),
    isTablet =
      /(?:iPad|PlayBook)/.test(ua) ||
      (isAndroid && !/(?:Mobile)/.test(ua)) ||
      (isFireFox && /(?:Tablet)/.test(ua)),
    isPhone = /(?:iPhone)/.test(ua) && !isTablet,
    isPc = !isPhone && !isAndroid && !isSymbian
  return {
    isTablet: isTablet,
    isPhone: isPhone,
    isAndroid: isAndroid,
    isPc: isPc
  }
})();

(function (win, lib) {
  var doc = win.document
  var docEl = doc.documentElement
  var metaEl = doc.querySelector('meta[name="viewport"]')
  var flexibleEl = doc.querySelector('meta[name="flexible"]')
  var dpr = 0
  var scale = 0
  var tid
  var flexible = lib.flexible || (lib.flexible = {})

  if (metaEl) {
    console.warn("将根据已有的meta标签来设置缩放比例")
    var match = metaEl
      .getAttribute("content")
      .match(/initial\-scale=([\d\.]+)/)
    if (match) {
      scale = parseFloat(match[1])
      dpr = parseInt(1 / scale)
    }
  } else if (flexibleEl) {
    var content = flexibleEl.getAttribute("content")
    if (content) {
      var initialDpr = content.match(/initial\-dpr=([\d\.]+)/)
      var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/)
      if (initialDpr) {
        dpr = parseFloat(initialDpr[1])
        scale = parseFloat((1 / dpr).toFixed(2))
      }
      if (maximumDpr) {
        dpr = parseFloat(maximumDpr[1])
        scale = parseFloat((1 / dpr).toFixed(2))
      }
    }
  }

  if (!dpr && !scale) {
    dpr = 1
    scale = 1 / dpr
  }

  docEl.setAttribute("data-dpr", dpr)
  if (!metaEl) {
    metaEl = doc.createElement("meta")
    metaEl.setAttribute("name", "viewport")
    metaEl.setAttribute(
      "content",
      "initial-scale=" +
      scale +
      ", maximum-scale=" +
      scale +
      ", minimum-scale=" +
      scale +
      ", user-scalable=no"
    )
    if (docEl.firstElementChild) {
      docEl.firstElementChild.appendChild(metaEl)
    } else {
      var wrap = doc.createElement("div")
      wrap.appendChild(metaEl)
      doc.write(wrap.innerHTML)
    }
  }

  function refreshRem () {
    var width = docEl.getBoundingClientRect().width
    if (width / dpr > width) {
      width = width * dpr
    }
    var rem
    if (width < 540) {
      rem = width / (375 / 80)
    } else {
      rem = width / 24
    }
    docEl.style.fontSize = rem + "px"
    flexible.rem = win.rem = rem

  }

  win.addEventListener(
    "resize",
    function () {
      clearTimeout(tid)
      tid = setTimeout(refreshRem, 300)
    },
    false
  )
  win.addEventListener(
    "pageshow",
    function (e) {
      if (e.persisted) {
        clearTimeout(tid)
        tid = setTimeout(refreshRem, 300)
      }
    },
    false
  )

  if (doc.readyState === "complete") {
    doc.body.style.fontSize = 12 * dpr + "px"
  } else {
    doc.addEventListener(
      "DOMContentLoaded",
      function (e) {
        doc.body.style.fontSize = 12 * dpr + "px"
      },
      false
    )
  }

  refreshRem()

  flexible.dpr = win.dpr = dpr
  flexible.refreshRem = refreshRem
  flexible.rem2px = function (d) {
    var val = parseFloat(d) * this.rem
    if (typeof d === "string" && d.match(/rem$/)) {
      val += "px"
    }
    return val
  }
  flexible.px2rem = function (d) {
    var val = parseFloat(d) / this.rem
    if (typeof d === "string" && d.match(/px$/)) {
      val += "rem"
    }
    return val
  }
})(window, window["lib"] || (window["lib"] = {}))
