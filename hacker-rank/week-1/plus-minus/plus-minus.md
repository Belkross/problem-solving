    Algorithm: print the ratio of positive/negative/null elements in an array with a precision of 6 decimal

    ARRAY: integer[]
    PRECISION <- 6
    positiveAmount <- 0
    negativeAmount <- 0
    nullAmount <- 0

    #start

    for each integer of ARRAY
      if integer > 0
        ++positiveAmount
      else if integer < 0
        ++negativeAmount
      else
        ++nullAmount

    var positiveRatio <- positiveAmount / ARRAY length
    var negativeRatio <- negativeAmount / ARRAY length
    var nullRatio <- nullAmount / ARRAY length

    print each ratio with a precision of 6 decimal

    #end
