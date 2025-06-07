export class ThemeManager {
  private isDark = false

  init() {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    this.isDark = savedTheme === "dark" || (!savedTheme && prefersDark)
    this.applyTheme()
  }

  toggle() {
    this.isDark = !this.isDark
    this.applyTheme()
    localStorage.setItem("theme", this.isDark ? "dark" : "light")
  }

  private applyTheme() {
    if (this.isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  get currentTheme() {
    return this.isDark ? "dark" : "light"
  }
}

export const themeManager = new ThemeManager()
