webpackHotUpdate("static\\development\\pages\\team.js",{

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./static/scripts/team_members.js":
/*!****************************************!*\
  !*** ./static/scripts/team_members.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {var database = process.env.DATABASE; // Create team member

function Member(name, role, email, about, image, color) {
  this.name = name;
  this.role = role;
  this.email = email;
  this.about = about;
  this.image = image;
  this.color = color;
} // Angled square color palette


var green = '#a6d5cd';
var blue = '#032c4a';
var red = '#b91e1e';
var yellow = '#e9df81'; // Add new team members below this line

var Whitney = new Member('Whitney Neugebauer', 'Director', 'director@whalescout.org', 'Whitney Neugebauer completed degrees in Geology and Anthropology from Eckerd College prior to receiving her master’s degree in Marine and Environmental Affairs from the University of Washington. She went on to found Whale Scout in 2013. Previously, Whitney served on the board of Sound Action and she currently serves on the board of One Bothell and Friends of North Creek Forest. She teaches kids jiu jitsu at Evergreen Karate and Jiu Jitsu in Bothell with her husband, Bryan Alvarez. Together they have one daughter and too many cats.', 'https://lederconsulting.dreamhosters.com/wp-content/uploads/2019/03/whitney.jpg', green);
var Juliana = new Member('Juliana Houghton', 'Board Member', 'houghtonjuliana@gmail.com', 'Juliana is a graduate of the University of Washington’s School of Aquatic and Fishery Sciences. She completed her Master’s thesis in 2014 on the relationship between vessel traffic and the noise levels received by killer whales. She and her collaborators aimed to figure out what whale’s actually experience at depth by attaching digital acoustic recording tags (Dtags) to them with suction cups. She found that vessel speed was the most important contributor to noise levels received by whales (Houghton et al. 2015). Juliana hopes her findings will allow more boat-based whale-watchers to be as respectful of the whales as possible. Check out a talk that Juliana gave at Seattle’s Town Hall for more information and her current LinkedIn profile to see what she’s up to now. When Juliana is not working, she is spending time with her family. They enjoy boating, beach-combing, hiking, and camping.', './static/images/juliana.jpg', red);
var Bryan = new Member('Bryan Alvarez', 'Board Member', 'Bryan@wrestlingobserver.com', 'Bryan Alvarez has been the editor and publisher of Figure Four Weekly since 1995. Besides the newsletter, which covers pro-wrestling and mixed martial arts, he has also written wrestling columns for Penthouse Magazine (Mat Max!) in 1999 and 2000; The Fight Network in Canada and Fighting Spirit Magazine in the UK; co-authored Death of WCW with RD Reynolds in 2004; wrestled professionally throughout the US and Canada since 1993; and trains extensively in Gracie Jiu-Jitsu where he holds a brown belt under Master Pedro Sauer. He currently works as host of Wrestling Observer Live on the Sports Byline Radio Network and Sirius Satellite Radio channel 92/94/794 every Sunday night from 3-5 PM PST; and hosts Figure Four Daily, Wrestling Observer Radio, and the Bryan & Vinny Show at www.wrestlingobserver.com. He has also appeared on a number of broadcast and cable television programs talking pro-wrestling, including Nancy Grace and ABC Nightline.  He lives in Bothell with his wife and three cats.', './static/images/bryan.jpg', blue);
var Kailey = new Member('Kailey Genther', 'Board Member, San Juan Island Naturalist Program Coordinator', 'SJINaturalist@gmail.com', 'Kailey holds a B.S. from the University of Washington School of Aquatic and Fishery Science and a M.M.A. from the University of Washington’s School of Marine and Environmental Affairs. Her undergraduate work focused on the effects of the aquarium trade on the Southern Resident Killer Whale population, whereas her masters work investigated the similarities and differences in the rare cooperative fisheries that have existed and exist throughout the world between humans and 5 cetacean species. Kailey currently works at NOAA in the Protected Resources Division with the Northwest Marine Mammal Stranding Network. Kailey currently lives in Friday Harbor, WA with her husband, son, two cats, and a dog. When she is not involved in marine mammal work she can be found in ballet class (she’s danced many forms of dance since a little girl), enjoying the outdoors and spending time with friends and family.', './static/images/kailey.jpg', yellow);
var David = new Member('David Bain', 'Program Advisor', 'dbaing17@gmail.com', 'David Bain is a marine mammal biologist and environmental educator who has worked with killer whales for 40 years. “It has become clear to me that improving habitat at the base of the food web is the key to recovering endangered killer whales. To accomplish this, I’ve chosen to complement my research by working with government officials who make decisions that influence the environment on a large scale and educating individuals whose day-to-day decisions add up to determine environmental health. He has a Ph.D. in Biology from the University of California at Santa Cruz, with post-doctoral work at the UC-Davis and the National Marine Mammal Lab in Seattle. He helped develop killer whale recovery strategies in the US and Canada, and the marine-life portion of the Northwest’s oil spill response plan. Dave is president of Cascadia Environmental Science Center and Vice President of Friends of North Creek Forest. He serves on the boards of Sound Action, SnoKing Watershed Council, NaWhare and Orca Conservancy and has been active in the King and Snohomish/Camano ECO Nets. He received a Puget Sound Hero Award  from People for Puget Sound for his work protecting the nearshore habitat of Maury Island from development. He has lived in Bothell since 1998.', './static/images/david.jpg', green);
var Lindsey = new Member('Lindsey Mann', 'Volunteer Book Club Coordinator', 'thundershire@live.com', 'Originally born in South Dakota, Lindsey currently resides in Seattle, WA. She was trained as a certified Marine Naturalist through The Whale Museum on San Juan Island. She’s a Clinical Trials Assistant with Seattle Children’s Hospital focusing on Cystic Fibrosis research. When she’s not busy organizing our book club or nose deep in a whale book, she is usually spending time with her family or her corgi Dougan. In the meantime, she likes to horseback ride and read Tolkien books while cuddling her 2 cats. She also enjoys playing video games, going on walks with her husband Sam, or playing her Irish fiddle. You can also find her taking pictures of beautiful PNW scenery; she loves macro photography in particular. She has been interested in whales ever since she was little. Her mom would take her to San Juan Island every summer as a sort of holy pilgrimage. It was the magical chance each year to see orcas.  She’s been fortunate a few times to see our Southern Resident killer whales up close. The spectacular encounters left her inspired and enraptured with them. She can’t remember a time when she wasn’t a passionate advocate for all whales, but especially for our local Southern Resident killer whales.', './static/images/lindsey.jpg', red);
var Ariel = new Member('Ariel Yseth', 'Newsletter Editor and Podcast Producer', 'Ariel@whalescout.org', 'Ariel is originally from eastern South Dakota but has always had the Pacific Northwest in her heart.  She first fell in love with our Southern Resident Killer Whales at the age of two when J1 Ruffles and J2 Granny appeared in the opening sequence of the movie Free Willy. Between her junior and senior year of college, Ariel got her first taste of the PNW when she worked at a summer camp on Orcas Island, WA, in 2012. She moved to Lynnwood, WA, in fall 2013 and began working as a registered nurse on the organ transplant unit at Swedish Hospital in downtown Seattle. She completed the Marine Naturalist Training Program in the fall of 2015 and has since spent hundreds of hours on the shores of the Salish Sea educating the public about our killer whales. In the summertime, Ariel can most often be found wandering the trails of American Camp, San Juan Island. Her favorite activity involves dragging her friends and family on camping trips to the San Juan’s to see the whales. Ariel also loves kayaking (if you meet her be sure to ask about her folding kayak), photography, and considers herself to be a movie buff. You can bet that so long as the activity has something to do with whales or the sea, Ariel loves it. After all, what do you expect from a mermaid?', './static/images/ariel.jpg', blue); // All team members

var team = [Whitney, Juliana, Bryan, Kailey, David, Lindsey, Ariel];
/* harmony default export */ __webpack_exports__["default"] = (team);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=team.js.50f673286b0fd37087cb.hot-update.js.map