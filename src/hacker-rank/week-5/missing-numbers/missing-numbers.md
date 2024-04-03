    Algorithm: find in an array elements that are missing from another

    missing: integer[]
    original: integer[]
    output <- []

    #start

    for each element of missing
      if elementMiss
        do nothing
      else
        remove element from original
    end for each

    var doublonLessMissing <- remove all doublon from original
    write sorted doublonLessMissing

    #end
