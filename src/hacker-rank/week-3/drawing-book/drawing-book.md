    Algorithm: find the minimum number of pages that must be turned to arrive at page p

    pageTotal: number
    pageGoal: number

    #start

    var book <- create an array that imitate the book
    var startBeginCount <- iterate in the array until it find pageGoal, ++startBeginCount each iteration
    var endBeginCount <- iterate in the array reversed until it find pageGoal, ++endBeginCount each iteration
    write the smallest between startBeginCount and endBeginCount

    #end
