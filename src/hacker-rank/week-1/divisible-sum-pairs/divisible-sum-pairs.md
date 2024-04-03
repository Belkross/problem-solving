    Algorithm: find the number of pairs in a array that are divisible by k

    input: integer[]
    pairCounter <- 0

    #start

    from i<-0 to i<input length progressing ++i
      from j<-i+1 to j<input length progressing ++j
        if array[i] + array[j] % k = 0
          ++pairCounter
    end loop
    write pairCounter

    #end