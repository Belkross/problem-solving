    Algorithm: check if every pairs of two array can respect the relation A’[i] + B’[i] >= k

    Inputs
      K: integer
      A: integer[]
      B: integer[]

    #start

    var integerStorage <- B
    var descendingA <- sort A descending order
    for each integerA of A
      var respectingRelationInB <- get all integer that can fit for integerA
      if nothing found 
        write "NO"
      var smallestInRespectingRelation <- get the smallest integer in that can fit for IntegerA
      remove smallestInRespectingRelation from integerStorage
    end for each
    write "YES"
    
    #end