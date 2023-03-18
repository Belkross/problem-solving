    Algorithm: given a square matrix, calculate the absolute difference between the sums of its diagonals

    ROWS: number[][]
    firstDiagonalElements <- []
    secondDiagonalElements <- []

    #start

    from i=0 to i<ROWS length progressing ++i
      save ROWS[i][i] in firstDiagonalElements
      save ROWS[i][ROWS length - 1 - i] in secondDiagonalElements 

    var firstDiagonalSum <- sum all elements of firstDiagonalElements
    var secondDiagonalSum <- sum all elements of secondDiagonalElements

    write absolute difference between firstDiagonalSum and secondDiagonalSum
    
    #end