    Algorithm: find minimum absolute difference in an array

    ARRAY: integer[]
    minAbsoluteDifference <- undefined

    #start

    sortedArray <- sort ARRAY ascending order
    for each integer of sortedArray
      if absolute difference with right neighbor < minAbsoluteDifference
        minAbsoluteDifference <- current asbsolute difference
    end for each
    write minAbsoluteDifference

    #end
