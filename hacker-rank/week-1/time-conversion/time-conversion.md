    Algorithm: convert a time string written with 12-hour AM/PM format into 24-hour format

    input: string

    #start

    var hours, minutes, seconds, dayPart <- extract each value from the input string
    if dayPart = "PM" AND hours != "12" 
      hours <- add 12 to the string hours
    else if dayPart = "AM" AND hours = "12" 
      hours <- "00"
    write "hours:minutes:seconds"

    #end