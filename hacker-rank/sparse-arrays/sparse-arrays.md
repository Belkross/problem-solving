# input

strings: string[]  
queries: string[]

# output

occurences: number[]

# corner cases

strings and queries are never empty arrays  
strings and queries elements are never empty strings

# pseudo code

    count occurences of each query in an array of strings

    STRINGS <- string[]
    QUERIES <- string[]
    occurences <- []

    #start
    for each element of QUERIES
      var counter <- 0 
      for each element of STRINGS
        if QUERIES element = STRINGS element
          ++counter
      save counter in occurences
    
    write occurences
    #end


