import { createRoute } from '@tanstack/react-router'

export const createLayoutRoute = (id: string, component: any, parentRoute: any) => {
  return createRoute({
    getParentRoute: () => parentRoute,
    id,
    component,
  })
}

export const createPageRoute = (
  path: string,
  component: any,
  layoutRoute: any,
  validateSearch?: (search: Record<string, unknown>) => any,
) => {
  const routeConfig: any = {
    getParentRoute: () => layoutRoute,
    path,
    component,
  }

  if (validateSearch) {
    routeConfig.validateSearch = validateSearch
  }

  return createRoute(routeConfig)
}
