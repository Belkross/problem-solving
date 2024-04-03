Before writting the pseudo-code, I googled: how to know if three segment can form a triangle ?
 
    Algorithm: get the maximum perimeter triangle from a set of segment

    STICKS: integer[]
    outputStick <- undefined

    #start

    var descendingSticks <- sort STICKS decreasing order
    for each integer of descendingSticks
      if the sum of the two element next to integer is higher than integer
        outputStick <- an array of these three elements in increasing order
        break
    end for each
    
    write outputStick || [-1]

    #end
