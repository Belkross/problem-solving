    Algorithm: find the number of pair value in an array

    array: number[]
    pairsCounter <- 0
    
    #start

    array <- sort array ascending order
    for i=0 to i<array.length-1 progressing ++i
      if array[i] = array[i+1]
        ++pairsCounter
        ++i
    end for loop
    write pairsCounter

    #end