

export const isObjectEmpty = (obj: object) => {
  return Object.keys(obj).length === 0
}

export const convertLfToBr = (str: string) => {
  return str.replace(/\n/g, "<br />")
}