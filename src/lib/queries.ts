// GROQ queries for each content type

export const heroQuery = `*[_type == "hero"][0]`

export const projectsQuery = `*[_type == "project"] | order(order asc){
  _id,
  image,
  company,
  title,
  description,
  year
}`

export const appsQuery = `*[_type == "app"] | order(order asc){
  _id,
  image,
  title,
  description,
  category,
  year
}`

export const aboutQuery = `*[_type == "about"][0]`

export const ctaQuery = `*[_type == "cta"][0]`

export const seoQuery = `*[_type == "seo"][0]`