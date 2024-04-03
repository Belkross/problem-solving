    Algorithm: counting the number of valleys the hiker went through

    STEPS: number
    PATH: string

    altitude <- 0
    inValley <- false
    valleyCounter <- 0

    #start

    var steps = convert PATH to an array of step
    for each step of steps
      if step = U
        ++altitude
      else if step = D
        --altitude
      
      if altitude<0 AND inValley = false
        inValley <- true
      if alitude = 0 AND inValley = true
        ++valleyCounter
        inValley <- false

    write valleyCounter

    #end