    Algorithm: find the minimum unfairness possible in a sub-array
    
    array: integer[]
    subArrayLength: integer
    minUnfairness: integer

    #start

    var sortedArray <- sort array ascending order
    for i=0 to i<=sortedArray length - subArrayLength progressing ++i
      var currentUnfairness = sortedArray[i+subArrayLength-1] - sortedArray[i]
      if currentUnfairness < minUnfairness
        minUnfairness <- currentUnfairness
    end for loop
    write minUnfairness

    #end