import "server-only"

const dictionaries: { [key: string]: () => Promise<{ [key: string]: { [key: string]: string } }> } = {
  es: () => import("./dictionaries/es.json").then((module) => module.default),
  en: () => import("./dictionaries/en.json").then((module) => module.default),
}

export const getDictionary = async (locale: "es" | "en") => {
  const loader = dictionaries[locale]
  if (!loader) {
    throw new Error(`Locale '${locale}' is not supported`)
  }
  return loader()
}
