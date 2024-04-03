    find the unique element that occurs once in an array

    INTEGERS: integer[]
    output: number

    #start
      sort all the elements of the array in ascending order
      from i=0 to i<INTEGERS.length progressing i+2
        if INTEGERS[i] is the last element OR INTEGERS[i] != INTEGERS[i+1]
          output <- INTEGERS[i]
          break
        else continue
    #end