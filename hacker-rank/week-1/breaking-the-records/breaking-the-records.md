    Algorithm: count the time Maria broke her most points and least points scored in a match

    SCORES: integer[]
    minimumBreak <- 0
    maximumBreak <- 0
    currentMinimum <- SCORES[0]
    currentMaximum <- SCORES[0]

    #start

    for each score of SCORES, starting from the second element
      if score > currentMaximum
        ++maximumBreak
        currentMaximum <- score
        continue
      if score < currentMinimum
        ++minimumBreak
        currentMinimum <- score
      end for each
      write[maximumBreak, minimumBreak]

    #end
