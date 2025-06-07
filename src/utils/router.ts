export class Router {
  private routes: Map<string, Function> = new Map()
  private currentPage: any = null

  addRoute(path: string, handler: Function) {
    this.routes.set(path, handler)
  }

  init() {
    window.addEventListener("popstate", () => this.handleRoute())
    this.handleRoute()
  }

  navigate(path: string) {
    history.pushState(null, "", path)
    this.handleRoute()
  }

  private handleRoute() {
    const path = window.location.pathname
    const app = document.getElementById("app")

    if (!app) return

    if (this.currentPage && this.currentPage.destroy) {
      this.currentPage.destroy()
    }

    let handler = this.routes.get(path)
    let params: any = {}

    if (!handler) {
      for (const [route, routeHandler] of this.routes) {
        const match = this.matchRoute(route, path)
        if (match) {
          handler = routeHandler
          params = match.params
          break
        }
      }
    }

    if (handler) {
      this.currentPage = handler(params)
      app.innerHTML = this.currentPage.render()
      if (this.currentPage.mount) {
        this.currentPage.mount()
      }
    } else {
      app.innerHTML =
        '<div class="flex items-center justify-center min-h-screen"><h1 class="text-2xl">404 - Page Not Found</h1></div>'
    }
  }

  private matchRoute(route: string, path: string) {
    const routeParts = route.split("/")
    const pathParts = path.split("/")

    if (routeParts.length !== pathParts.length) {
      return null
    }

    const params: any = {}
    for (let i = 0; i < routeParts.length; i++) {
      if (routeParts[i].startsWith(":")) {
        params[routeParts[i].slice(1)] = pathParts[i]
      } else if (routeParts[i] !== pathParts[i]) {
        return null
      }
    }

    return { params }
  }
}

export const router = new Router()
