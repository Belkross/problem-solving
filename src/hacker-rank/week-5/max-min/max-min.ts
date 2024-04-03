function maxMin(subArrayLength: number, array: number[]): number {
  let minUnfairness = Infinity
  
  const sortedArray = [...array].sort((a, b) => a-b)
  for(let i=0; i<=sortedArray.length - subArrayLength; ++i) {
      const currentUnfairness = sortedArray[i+subArrayLength-1] - sortedArray[i]
      if(currentUnfairness < minUnfairness) minUnfairness = currentUnfairness 
  }
  
  return minUnfairness
}