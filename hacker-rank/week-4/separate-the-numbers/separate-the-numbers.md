    Algorithm: determine if an integer string is beautiful

    query: string
    isBeautiful <- undefined
    firstNumber <- string[0]
    
    #start

    for a string length i between 1 and the middle of the query included
        var indexSeparator <- i
        firstNumber <- split with indexSeparator and get the left portion
        var nextNumber <- firstNumber + 1
        var rightPortion <- split with indexSeparator and get the right portion

        while indexSepartor < query last index
            if rightPortion start with nextNumber
                indexSeparator += nextNumber length
                ++nextNumber
            else 
                break
        end while

        if indexSeparator reached the query length 
            isBeautiful <- true
            break
    end for loop
    write isBeautiful ? `YES ${firstNumber}` : "NO"

    #end