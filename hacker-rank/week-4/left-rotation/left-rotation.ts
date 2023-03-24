function rotateLeft(ROTATION_NUMBER: number, ARRAY: number[]): number[] {
  const output = new Array(ARRAY.length)

  for(const [index, integer] of ARRAY.entries()) {
    let newIndex = index - ROTATION_NUMBER
    if(newIndex<0) newIndex += ARRAY.length
    output[newIndex] = integer
  }

  return output
}

