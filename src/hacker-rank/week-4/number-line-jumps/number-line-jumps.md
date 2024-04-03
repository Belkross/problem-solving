    Algorithm: check if two kangaroos moving forward at a different speed can meet at a location

    START1: number
    SPEED1: number
    START2: number
    SPEED2: number

    currentPosition1 <- START1
    currentPosition2 <- START2
    kangaroosMet <- undefined

    #start

    if SPEED1<=SPEED2, kangaroo1 will be forever behind
      kangaroosMet <- false
    else
      while kangaroo1 behind
        add a jump to each kangaroo current location
        if they are at the same location
          kangaroosMet <- true
          break
      end while
      if kangaroos didn’t met
        kangaroosMet <- false
    end else
    write kangaroosMet ? "YES" : "NO"

    #end
