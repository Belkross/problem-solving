    Algorithm: check if possible to rearrange a grid of letters alphabetically ascending in both its rows and columns.

    grid: string[]
    canBeOrdered <- true

    #start

    charCodes <- replace each character with its code
    ascendingRows <- sort each row ascending order
    for each column of ascendingRows
      rowIndex <- 0
      while canBeOrdered = true AND rowIndex < grid length - 1
        if currentElement > nextElement
          canBeOrdered <- false
        else
          ++rowIndex
      end while
    end for each

    write, if canBeOrdered "YES" else "NO"

    #end
