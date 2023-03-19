    Algorithm: check if a string is a pangram

    STRING: string
    isPangram <- false

    #start

    var letterFrequencies <- create an array of length 26 filled with 0
    var characters <- get an array of character from STRING 

    for each character in characters
      var characterCode <- get code from character

      if character is a space
        continue
      else if character is lowercase
        ++letterFrequencies[characterCode - code of "a"]
      else if character is uppercase
        ++letterFrequencies[characterCode - code of "A]

      if letterFrequencies includes no 0 
        isPangram <- true
        break
    end for each

    write isPangram ? "pangram" : "not pangram"
    
    #end