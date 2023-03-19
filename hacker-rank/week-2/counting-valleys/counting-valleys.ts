function countingValleys(stepsLength: number, path: string): number {
  let altitude = 0
  let inValley = false
  let valleyCounter = 0
  const steps = Array.from(path)

  for(const step of steps) {
    const upHill = step === "U"
    const downHill = step === "D"
    const belowSea = altitude < 0

    if(upHill) ++altitude
    else if(downHill) --altitude

    if(belowSea && !inValley) inValley = true
    if(altitude === 0 && inValley) {
      ++valleyCounter
      inValley = false
    }
  }

  return valleyCounter
}
