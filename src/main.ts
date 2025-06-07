import { Router } from "./utils/router"
import { ThemeManager } from "./utils/theme"
import { IntroPage } from "./pages/IntroPage"
import { ListPage } from "./pages/ListPage"
import { DetailPage } from "./pages/DetailPage"

class App {
  private router: Router
  private themeManager: ThemeManager

  constructor() {
    this.themeManager = new ThemeManager()
    this.router = new Router()
    this.setupRoutes()
    this.init()
  }

  private setupRoutes() {
    this.router.addRoute("/", () => new IntroPage())
    this.router.addRoute("/coffees", () => new ListPage())
    this.router.addRoute("/coffee/:id", (params: { id: string }) => new DetailPage(params.id))
  }

  private init() {
    this.themeManager.init()
    this.router.init()
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new App()
})
