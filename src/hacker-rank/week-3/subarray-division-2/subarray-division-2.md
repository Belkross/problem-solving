    Algorithm: determine how many segment respecting a certain condition it is possible to extract from an array

    inputs
      squares: integer[]
      MONTH: integer
      DAY: integer

    waysCounter <- 0
    
    #start

    while it’s possible to slice a segment of length MONTH starting from integer
      if sum of the segment elements = DAY
        ++waysCounter
    end while
    write waysCounter

    #end

