/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__createElement__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__move__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return movePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return swipe; });




var arr = [];
var text = void 0;
var nextPageToken = void 0;
var startX = void 0;

function search(e) {
    var dataVideo = void 0;
    if (typeof e === 'number' && arr.indexOf(e) === -1) {
        arr.push(e);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* requestList */])(text, 'pageToken=' + nextPageToken + '&').then(function (data) {
            dataVideo = data;
            nextPageToken = data.nextPageToken;
            return Promise.all(data.items.map(function (name) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__request__["b" /* requestView */])(name.id.videoId);
            }));
        }).then(function (statistics) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__createElement__["b" /* createVideo */])(dataVideo, statistics);
        }).catch(alert);
    } else if (e.target && e.target.className === 'search-button') {
        var input = document.getElementById('search');
        e.preventDefault();
        text = input.value;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* requestList */])(text).then(function (data) {
            dataVideo = data;
            nextPageToken = data.nextPageToken;
            return Promise.all(data.items.map(function (name) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__request__["b" /* requestView */])(name.id.videoId);
            }));
        }).then(function (statistics) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__createElement__["c" /* createListVideo */])(dataVideo, statistics);
        }).catch(alert);
        arr = [];
        input.blur();
    }
}
function movePage(e) {
    if (e.target.classList.contains('page')) {
        e.preventDefault();
        var numberPrev = document.querySelector('.active').innerHTML;
        var numberActual = e.target.innerHTML;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__move__["a" /* default */])(numberPrev - numberActual, e.target);
    }
}
function swipe(e) {
    if (e.target.className !== 'search') {
        e.preventDefault();
        e.stopPropagation();
        switch (e.type) {
            case 'mousedown':
                {
                    startX = e.screenX;
                    break;
                }
            case 'mouseup':
                {
                    if (e.screenX - startX >= 60) {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__move__["a" /* default */])(1);
                    } else if (e.screenX - startX <= -60) {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__move__["a" /* default */])(-1);
                    }
                    break;
                }
            case 'touchstart':
                {
                    startX = e.changedTouches[0].pageX;
                    break;
                }
            default:
                {
                    if (e.changedTouches[0].pageX - startX >= 60) {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__move__["a" /* default */])(1);
                    } else if (e.changedTouches[0].pageX - startX <= -60) {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__move__["a" /* default */])(-1);
                    }
                    break;
                }
        }
    }
}



/***/ }),
/* 1 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parseData__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createListVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createVideo; });



function createForm() {
    var form = document.createElement('form');
    form.setAttribute('for', '#');
    form.setAttribute('method', 'GET');
    form.innerHTML = '<input type="text" id="search" class="search" placeholder="search...">\n                      <label for="search" class="search-icon"></label>\n                      <input class="search-button" type="submit" value="Add">';
    document.body.appendChild(form);
}
function createWrapperVideo() {
    var div = document.createElement('div');
    div.className = 'wrapper-video';
    div.innerHTML = '<ul class="list-video"></ul>';
    document.body.appendChild(div);
}
function createWrapperPages() {
    var div = document.createElement('div');
    div.className = 'wrapper-pages';
    div.innerHTML = '<ul></ul>';
    document.body.appendChild(div);
}
function createPages() {
    var ul = document.querySelector('.wrapper-pages ul');

    var _getWrapperWidth = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__parseData__["a" /* getWrapperWidth */])(),
        numberForLoad = _getWrapperWidth.numberForLoad;

    var amount = ul.children.length + 1;
    var max = amount + numberForLoad + 4;
    while (amount < max) {
        var li = document.createElement('li');
        var className = 'page';
        if (amount === 1) {
            className = 'active page';
        }
        li.innerHTML = '<a href="/" class="' + className + '">' + amount + '</a>';
        ul.appendChild(li);
        amount += 1;
    }
    ul.addEventListener('click', __WEBPACK_IMPORTED_MODULE_1__events__["b" /* movePage */]);
}
function createVideo(data, arr) {
    var listVideo = document.querySelector('.list-video');
    data.items.forEach(function (name, i) {
        if (!name.snippet.thumbnails) {
            return;
        }
        var url = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__parseData__["b" /* parseUrl */])(name.snippet.thumbnails);
        var li = document.createElement('li');
        var discription = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__parseData__["c" /* parseDiscription */])(name.snippet.description);
        var view = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__parseData__["d" /* parseView */])(arr[i]);
        li.className = 'content';
        li.innerHTML = '<img src="' + url + '" alt="#">\n                        <p class="info name-video fa">' + name.snippet.channelTitle + '</p>\n                        <p class="info date-video fa">' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__parseData__["e" /* parseDate */])(name.snippet.publishedAt) + '</p>\n                        <p class="info views-video fa">' + view + '</p>\n                        <p class="discription-video">' + discription + '</p>\n                        <a href="https://www.youtube.com/embed/' + name.id.videoId + '" class="link-video" target="_blank">' + name.snippet.title + '</a>';
        listVideo.appendChild(li);
    });
    createPages();
}
function createListVideo(data, arr) {
    var ulPages = document.querySelector('.wrapper-pages ul');
    var listVideo = document.querySelector('.list-video');
    if (listVideo) {
        listVideo.innerHTML = '';
        ulPages.innerHTML = '';
        listVideo.style.transform = 'translateX(0px)';
        ulPages.style.transform = 'translateX(0px)';
    } else {
        createWrapperVideo();
        createWrapperPages();
    }
    createVideo(data, arr);
}



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return parseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return parseDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return parseDiscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return parseView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getWrapperWidth; });
function parseUrl(value) {
    if (!value) {
        return '#';
    }
    return value.medium.url;
}
function parseDate(value) {
    var date = new Date(value);
    var month = date.getMonth() + 1;
    var day = date.getDate();
    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }
    return day + ' - ' + month + ' - ' + date.getFullYear();
}
function parseDiscription(value) {
    return value.slice(0, 40) || 'NA';
}
function parseView(value) {
    if (!value.items[0]) {
        return 'NA';
    }
    return value.items[0].statistics.viewCount;
}
function getWrapperWidth() {
    var wrapperVideo = getComputedStyle(document.querySelector('.wrapper-video'));
    var wrapperVideoWidth = parseInt(wrapperVideo.width, 10);
    var numberForLoad = Math.round((1492 - wrapperVideoWidth) / 302) + 2;
    return { wrapperVideoWidth: wrapperVideoWidth, numberForLoad: numberForLoad };
}



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_whatwg_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__createElement__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events__ = __webpack_require__(0);




window.onload = function init() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__createElement__["a" /* createForm */])();
    document.querySelector('.search-button').addEventListener('click', __WEBPACK_IMPORTED_MODULE_2__events__["a" /* search */]);
    document.body.addEventListener('touchstart', __WEBPACK_IMPORTED_MODULE_2__events__["b" /* movePage */], false);
    document.body.addEventListener('mousedown', __WEBPACK_IMPORTED_MODULE_2__events__["c" /* swipe */], false);
    document.body.addEventListener('mouseup', __WEBPACK_IMPORTED_MODULE_2__events__["c" /* swipe */], false);
    document.body.addEventListener('touchstart', __WEBPACK_IMPORTED_MODULE_2__events__["c" /* swipe */], false);
    document.body.addEventListener('touchend', __WEBPACK_IMPORTED_MODULE_2__events__["c" /* swipe */], false);
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parseData__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = move;



function move(value, next) {
    var active = document.querySelector('.active');
    var listVideo = document.querySelector('.list-video');
    var listPages = document.querySelector('.wrapper-pages ul');

    var _getWrapperWidth = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__parseData__["a" /* getWrapperWidth */])(),
        wrapperVideoWidth = _getWrapperWidth.wrapperVideoWidth,
        numberForLoad = _getWrapperWidth.numberForLoad;

    var listVideoLeft = Number(listVideo.style.transform.slice(11, -3));
    var moveVideo = listVideoLeft + value * (wrapperVideoWidth + 16);
    var movePages = Number(listPages.style.transform.slice(11, -3)) + value * 40;
    var copyNext = next;
    var nextNumber = void 0;
    if (listVideoLeft < 0 || listVideoLeft === 0 && value < 0) {
        if (!copyNext) {
            if (value < 0) {
                copyNext = active.parentElement.nextElementSibling.firstElementChild;
            } else {
                if (!active.parentElement.previousElementSibling) {
                    return;
                }
                copyNext = active.parentElement.previousElementSibling.firstElementChild;
            }
        }
        nextNumber = Number(copyNext.innerHTML);
        active.classList.remove('active');
        copyNext.classList.add('active');
        listVideo.style.transform = 'translateX(' + moveVideo + 'px)';
        if (nextNumber === 3 && Number(active.innerHTML) === 1) {
            movePages = Number(listPages.style.transform.slice(11, -3)) - 40;
        }
        if (nextNumber > 2 || nextNumber === 2 && Number(active.innerHTML) === 3) {
            listPages.style.transform = 'translateX(' + movePages + 'px)';
        }
        if (nextNumber % numberForLoad === 0) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__events__["a" /* search */])(nextNumber);
        }
    }
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return requestList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return requestView; });
function requestList(text) {
    var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    var url = 'https://www.googleapis.com/youtube/v3/search?' + page + 'part=snippet&q=' + text + '&key=AIzaSyDBTM_MwKpEHaT2IYMYO10UiLIZ4JQDswk&maxResults=15&q=js';
    return fetch(url).then(function (data) {
        return data.json();
    });
}
function requestView(id) {
    var url = 'https://www.googleapis.com/youtube/v3/videos?part=statistics&id=' + id + '&key=AIzaSyDBTM_MwKpEHaT2IYMYO10UiLIZ4JQDswk';
    return fetch(url).then(function (data) {
        return data.json();
    });
}



/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(4);


/***/ })
/******/ ]);