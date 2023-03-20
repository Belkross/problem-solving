    Algorithm: find the value that occurs the most in an array

    birds: integer[]

    #start

    var frequencies <- create an array of length 5 filled with 0
    for each bird of birds
      ++frequencies[bird-1]
    var highestFrequency <- get the highest integer in frequencies
    var indexOfHighestFrequency = get the index of the first element which is equal to highestFrequency
    write indexOfHighestFrequency+1

    #end
