    Algorithm: rotate a array x times

    ARRAY: integer[]
    ROTATION_NUMBER: integer

    #start

    var output <- create an array of size n full of empty slot
    for each integer of ARRAY
      var newIndex <- integer index - ROTATION_NUMBER
      if newIndex < 0
        newIndex = ARRAY length + newIndex
      output[newIndex] = integer
    end for each
    write output

    #end