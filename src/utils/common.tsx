import { titleCategory } from '../configs'

export const clearAllStorage = () => {
  localStorage.clear()
}

export const getTitleArticle = (type: string, description: string): string => {
  const keyTitle = Object.keys(titleCategory)
  const valueTitle = Object.values(titleCategory)
  let indexOfTitle = keyTitle.indexOf(type)
  const resultTitle = valueTitle[indexOfTitle]
    ? `${valueTitle[indexOfTitle]}: ${description}`
    : description
  return resultTitle
}
