import { client } from './sanity'
import {
  heroQuery,
  projectsQuery,
  appsQuery,
  aboutQuery,
  ctaQuery,
  seoQuery,
} from './queries'

export async function getHero() {
  return client.fetch(heroQuery)
}

export async function getProjects() {
  return client.fetch(projectsQuery)
}

export async function getApps() {
  return client.fetch(appsQuery)
}

export async function getAbout() {
  return client.fetch(aboutQuery)
}

export async function getCTA() {
  return client.fetch(ctaQuery)
}

export async function getSEO() {
  return client.fetch(seoQuery)
}