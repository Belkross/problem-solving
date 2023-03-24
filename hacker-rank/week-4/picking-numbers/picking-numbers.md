    Algorithm: find the length of the longest subarray where the absolute difference between any two elements is less or equal to 1

    ARRAY: integer[]
    longestLength <- 1

    #start

    sortedArray <- sort array acending order
    for each testedInteger of sortedArray
      var currentLongestLength <- 1
      for each integer folowing testedInteger of sortedArray
        if absolute difference between testedInteger and integer is less or equal to 1
          ++currentLongestLength
          if currentLongestLength > longestLength
            longestLength <- currentLongestLength
        else
          break
      end for each
    end for each
    write longestLength

    #end
