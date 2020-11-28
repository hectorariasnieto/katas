// Create a function that receives n parameters
// which are arrays and stitches them into a single array.
export function arrayDeArrays(...arrays){
  const result = []
  for (const array of arrays){
    result.push(...array)
  }
  return result

}