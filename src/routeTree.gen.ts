/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ReadImport } from './routes/read'
import { Route as ProjectsImport } from './routes/projects'
import { Route as ArtImport } from './routes/art'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const ReadRoute = ReadImport.update({
  id: '/read',
  path: '/read',
  getParentRoute: () => rootRoute,
} as any)

const ProjectsRoute = ProjectsImport.update({
  id: '/projects',
  path: '/projects',
  getParentRoute: () => rootRoute,
} as any)

const ArtRoute = ArtImport.update({
  id: '/art',
  path: '/art',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/art': {
      id: '/art'
      path: '/art'
      fullPath: '/art'
      preLoaderRoute: typeof ArtImport
      parentRoute: typeof rootRoute
    }
    '/projects': {
      id: '/projects'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof ProjectsImport
      parentRoute: typeof rootRoute
    }
    '/read': {
      id: '/read'
      path: '/read'
      fullPath: '/read'
      preLoaderRoute: typeof ReadImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/art': typeof ArtRoute
  '/projects': typeof ProjectsRoute
  '/read': typeof ReadRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/art': typeof ArtRoute
  '/projects': typeof ProjectsRoute
  '/read': typeof ReadRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/art': typeof ArtRoute
  '/projects': typeof ProjectsRoute
  '/read': typeof ReadRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/art' | '/projects' | '/read'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/art' | '/projects' | '/read'
  id: '__root__' | '/' | '/art' | '/projects' | '/read'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ArtRoute: typeof ArtRoute
  ProjectsRoute: typeof ProjectsRoute
  ReadRoute: typeof ReadRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ArtRoute: ArtRoute,
  ProjectsRoute: ProjectsRoute,
  ReadRoute: ReadRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/art",
        "/projects",
        "/read"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/art": {
      "filePath": "art.tsx"
    },
    "/projects": {
      "filePath": "projects.tsx"
    },
    "/read": {
      "filePath": "read.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
