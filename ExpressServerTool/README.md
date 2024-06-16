// We are going to try to run an express server in the browser.
// It probably won't work, but want to see what kind of magic webpack would
// Try to do if we try to transpile express into browser code.
// From there we will hack away

// As I suspected this doesn't work...
// Let's pull down the express source code
// My idea is to mock some of the core components that are not available in the browser.
// By doing this, we can provide the facades necessary for the express library
// to integrate with, and emulate their behavior

// We will likely only emulate the behavior of localhost...
// But it should theoretically be possible to do some magic to make this "publicly accessible"

// One approach may be A) to just have a proxy instance that we use as our public endpoint
// And route to the browser express instance via polling to the proxy instance.
// Another approach B) may be to modify (hack) the browser code source code to allow us to do what we want
// I think chrome is OSS, so may be possible... anyway, let's get coding...

So we found that the polyfills don't cover everything we need, let's see what we need to provide...
Looking at the following:

net
fs
async_hooks
view.js - Critical dependency: the request of a dependency is an expression

For FS, we could potentially create a wrapper on local or session storage :)!

This is looking good, just going to insall all this...
https://stackoverflow.com/questions/64557638/how-to-polyfill-node-core-modules-in-webpack-5\

let me give this a shot

Have another idea, I'll extend this (https://www.npmjs.com/package/node-polyfill-webpack-plugin) package
to add my polyfill that will make express work. Then anyone can use it!
Doesn't look like it has much love on github,
let's fork it
and star
should have probably forked all branches :(
all cloned...
making sure I'm still streaming

Cloned in the tools repo accidentally, oh well.

So this repo looks like it's just an aggregate of actual polyfills
Good to know, but not what we want.. someday if I make a polyfill that is good it can make it here.
Let's find an actual impl, we'll see what they are exposing...

we're going to make a new directory for pollyfills, then we're going to create a polyfil for each of the above
missing functionalities.

Got the fs to stop complaining, have the other ones now. Going to take a step back and look back into cleaning up our
existing functionality.


