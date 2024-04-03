    Algorithm: get the result of a string crypted by Caesar’s cipher

    message: string
    ALPHABET_LENGTH <- 26
    ROTATION <- k % ALPHABET_LENGTH
    MIN_MINUSCULE_CODE, MAX_MINUSCULE_CODE, MIN_CAPITAL_CODE, MAX_CAPITAL_CODE

    #start

    var charCodes <- get an array of the code of each character
    for each code in charCodes
      if minuscule
        if code + ROTATION <= MAX_MINUSCULE_CODE
          replace code with code + ROTATION
        else
          rotate until the end of MAX_MINUSCULE_CODE and rotate back to the front of MIN_MINUSCULE_CODE
      else if majuscule
        if code + ROTATION <= MAX_CAPITAL_CODE
          replace code with code + ROTATION
        else
          rotate until the end of MAX_CAPITAL_CODE and rotate back to the front of MIN_CAPITAL_CODE
      else
        do nothing
    end for each
    write the transformation of codes into string

    #end
