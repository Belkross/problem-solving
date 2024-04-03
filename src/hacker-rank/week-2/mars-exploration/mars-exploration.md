    Algorithm: get the number of letters that have been changed from an initial string

    ALTERED_STRING: string
    REPEATED_STRING <- "SOS"
    alterationCounter <- 0
    messageCounter <- 0
  
    #start

    var letters <- get an array of letter from ALTERED_STRING
    for each letter of letters
      if messageCounter >= REPEATED_STRING length
        messageCounter <- 0
      if letter != REPEATED_STRING[messageCounter] 
        ++alterationCounter
      ++messageCounter
    end for each

    write alterationCounter

    #end