function breakingRecords(scores: number[]): number[] {
  let minimumBreak = 0
  let maximumBreak = 0
  let currentMinimum = scores[0]
  let currentMaximum = scores[0]
  
  for (let i=1; i<scores.length; ++i) {
      if(scores[i] > currentMaximum) {
          ++maximumBreak
          currentMaximum = scores[i]
          continue
      }
      if(scores[i] < currentMinimum) {
          ++minimumBreak
          currentMinimum = scores[i]
      }
  }

  return [maximumBreak, minimumBreak]
}