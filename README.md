AFW - Another Framework
=======================

A very very very simple javascript framework to help teaching basic programming to small kids.

As a father who like to program I decided to give an introdution to my son on basic imperative programming when he was 9/10 years old.

We started using lua for basic programing, which was pretty nice bacause lua is simple and consistent.
Lua gave us some fun time with very simples console experimentations.
Lua and console basic programming is a very good start point, which I recommend.

But after that I thought of teaching a little about graphics, animation and things related.
For this purpose a browser with javascript sounded like a very good choice. It's available at hand for anyone with a browser.
Changing from to lua to java script cames with the benefit of lernning about a second language.

Imho, learning a second language as soon as possible is very positive.
It gives the sense that the language is the tool to express logic, and not the objetive by itself.
Be in contact soon with another language makes this perception very natural.

Of course, with time everyone picks theirs likes and their dont's in the language universe.
And specialization is key to performance. But we are talking about basic programming and having fun.

So here was me dealing with javascript for my son.

But the way javacript is used in browser has some implementation aspects that was out of escope.

I didn't want to explain why we needed HTML to embbed javascript neight about requestAnimationFrame to provice good syncronization.
In fact, I thought that goinging trought HTML and all this details would be borring for a kid, ans meaningless for basic programming concepts.

Afw borned basically to hide the temporization logic and offer a very simple programming model focused in drawing and animation.


Programming Model
=================

The framework deals with timing, and offer a simples API for basic drawing activities.
User has to provide only three functions to create a functional project and a HTML just to call awf and include a source with these functions:

setup()
  - Where the setup stuff lives. Initiating variable, loading images, etc...

animate(dt, time)
  - Where times goes by :-)
    In this functions the future software engineer (the kid) has to recalculate variable values based in a time lapse (dt)
    
redraw()
  - Called from times to times
    in this function our future software engineer has to call functions to redraw the scene.
	

There is a set os examples to help in the start.

Those examples are not intended as a course, or tutorial, and should not be used as this.
It's just a road map sugestion for the parent to follow.

Those examples presents what is possible to do with javascript/afw and gives some inspiration.

The best way to go is for parent to check out the example and try to achive same the results together with the kids as a team, urging the kid to think a little bit each step.

It's a support material for parent to teach the kid, having a nice and fun time together, and learning programming as a collateral.

So... have fun.


