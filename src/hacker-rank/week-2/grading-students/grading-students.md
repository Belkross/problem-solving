    Round grades following HackerRank University policy

    GRADES: integer[]
    FAILING_GRADE <- 40
    ROUNDING_LIMIT <- 2
    roundedGrades <- []

    #start

    for each grade of GRADES
      if grade < FAILING_GRADE - ROUNDING_LIMIT
        save grade in roundedGrades
      else 
        var gapToNextMultipleOfFive <- 5 - (grade % 5)
        var nextMultipleOfFive <- grade + gapToNextMultipleOfFive
        var needToBeRounded <- nextMultipleOfFive - grade <= ROUNDING_LIMIT

        if needToBeRounded
          save nextMultipleOfFive in roundedGrades
        else 
          save grade in roundedGrades
    write roundedGrades

    #end