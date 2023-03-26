    Algorithm: determine the number of characters to change to make two substrings into anagrams of one another

    input: string

    #start

    if string length is odd
      return -1
    else
      split the string in two equal parts
      var commonChar <- get how many character in common
      return (string length / 2) - commonChar

    #end
