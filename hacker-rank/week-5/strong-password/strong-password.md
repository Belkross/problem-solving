    Algorithm: find the minimum number of character to add to get a strong password

    password: string
    passwordLength: number
    PASSWORD_MIN_LENGTH <- 6 
    minCharToAdd <- 0

    #start

    if password miss a special character
      ++minCharToAdd
    if password miss an uppercase character
      ++minCharToAdd
    if password miss an lowercase character 
      ++minCharToAdd
    if password miss a digit
      ++minCharToAdd

    if(passwordLength + minCharToAdd < PASSWORD_MIN_LENGTH) 
      minCharToAdd <- PASSWORD_MIN_LENGTH - passwordLength
    
    write minCharToAdd

    #end