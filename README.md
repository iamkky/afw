AFW - Another Framework

A simple javascript framework to help teaching basic programming to small kids.

The objective is to hide the details of HTML and specifics of javascript running on browser to focus on basic programmig.

The framework deals with timing using requestAnimationFrame and provides a simple programming model.

User has to provide only three functions to create a functional project:

setup()
  - Where o setup stuff lives. Initiating variable, loading images, etc...

animate(dt, time)
  - Where times goes by :-)
    In this functions the future software engineer (the kid) has to recalculate variable values based in a time lapse (dt)
    
redraw()
  - Called from times to times
    in this function our future software engineer has to call functions to redraw the scene.