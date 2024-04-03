    Algorithm: split or combine a string following some rules

    input: string
    output: string 

    #start

    var operation, type, words <- extract data from input
    if split
        replace all the uppercased character with a space followed by the lowercased version of character
        if class
            delete empty spaces at the start of the string
        else if method
            remove parentheses
    end if split
    else if combine
        replace a character by its uppercase version if it is preceeded by a space
        replace spaces by an empty space
        if class
            replace the first letter of the string with its uppercase version
        if method
            add parentheses
    end if combine
    write output
    
    #end