    Algorithm: find in an array all the pairs leading to the smallest absolute difference 

    ARRAY: integer[]
    smallestDiffPairs <- []

    #start

    var sortedArray <- sort ARRAY
    var smallestAbsDifference <- get the smallest absolute difference between two elements in sortedArray
    
    for each integer in sortedArray
      if asbsolute difference with right neighbor === smallestAbsDifference
        push integer and right neighbor in smallestDiffPairs
    end for each
    write smallestDiffPairs

    #end