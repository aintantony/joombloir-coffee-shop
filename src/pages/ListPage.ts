import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { CoffeeCard } from "../components/CoffeeCard"
import { ApiService } from "../utils/api"
import type { Coffee } from "../types/coffee"

export class ListPage {
  private navbar = new Navbar()
  private footer = new Footer()
  private coffees: Coffee[] = []
  private filteredCoffees: Coffee[] = []
  private isLoading = true
  private error: string | null = null

  render(): string {
    return `
            ${this.navbar.render()}
            
            <main class="min-h-screen bg-gray-50 dark:bg-gray-900">
                <!-- Header -->
                <section class="bg-white dark:bg-gray-800 py-16">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 class="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Our Artisanal Coffees
                        </h1>
                        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Discover our collection of premium coffees, each with its own personality and unique aromas.
                        </p>
                    </div>
                </section>

                <!-- Search and Filter -->
                <section class="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
                            <div class="relative flex-1 max-w-md">
                                <input 
                                    type="text" 
                                    id="search-input"
                                    placeholder="Search for a coffee..." 
                                    class="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                >
                                <svg class="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <div class="flex items-center space-x-4">
                                <span class="text-gray-600 dark:text-gray-400" id="results-count">
                                    ${this.isLoading ? "Loading..." : `${this.filteredCoffees.length} coffee(s) found`}
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Coffee Grid -->
                <section class="py-12">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div id="coffee-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            ${this.renderContent()}
                        </div>
                        
                        ${
                          this.error
                            ? `
                            <div class="text-center py-12">
                                <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 max-w-md mx-auto">
                                    <svg class="w-12 h-12 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <h3 class="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">Loading Error</h3>
                                    <p class="text-red-600 dark:text-red-300 mb-4">${this.error}</p>
                                    <button id="retry-button" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors">
                                        Retry
                                    </button>
                                </div>
                            </div>
                        `
                            : ""
                        }
                    </div>
                </section>
            </main>
            
            ${this.footer.render()}
        `
  }

  private renderContent(): string {
    if (this.isLoading) {
      return this.renderSkeletons()
    }

    if (this.error) {
      return ""
    }

    if (this.filteredCoffees.length === 0) {
      return `
                <div class="col-span-full text-center py-12">
                    <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">No coffees found</h3>
                    <p class="text-gray-600 dark:text-gray-400">Try modifying your search.</p>
                </div>
            `
    }

    return this.filteredCoffees.map((coffee) => new CoffeeCard(coffee).render()).join("")
  }

  private renderSkeletons(): string {
    return Array(8)
      .fill(0)
      .map(
        () => `
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div class="skeleton bg-gray-200 dark:bg-gray-700 h-48"></div>
                <div class="p-6">
                    <div class="skeleton bg-gray-200 dark:bg-gray-700 h-6 mb-2 rounded"></div>
                    <div class="skeleton bg-gray-200 dark:bg-gray-700 h-4 mb-4 rounded"></div>
                    <div class="flex gap-2 mb-4">
                        <div class="skeleton bg-gray-200 dark:bg-gray-700 h-6 w-16 rounded-full"></div>
                        <div class="skeleton bg-gray-200 dark:bg-gray-700 h-6 w-20 rounded-full"></div>
                    </div>
                    <div class="skeleton bg-gray-200 dark:bg-gray-700 h-4 w-24 rounded"></div>
                </div>
            </div>
        `,
      )
      .join("")
  }

  async mount() {
    this.navbar.mount()
    await this.loadCoffees()
    this.setupEventListeners()
  }

  private async loadCoffees() {
    try {
      this.isLoading = true
      this.error = null
      this.updateGrid()

      this.coffees = await ApiService.getCoffees()
      this.filteredCoffees = [...this.coffees]
      this.isLoading = false
      this.updateGrid()
    } catch (error) {
      this.isLoading = false
      this.error = error instanceof Error ? error.message : "Une erreur est survenue"
      this.updateGrid()
    }
  }

  private updateGrid() {
    const grid = document.getElementById("coffee-grid")
    const resultsCount = document.getElementById("results-count")

    if (grid) {
      grid.innerHTML = this.renderContent()
      this.setupCardClickListeners()
    }

    if (resultsCount) {
      resultsCount.textContent = this.isLoading ? "Loading..." : `${this.filteredCoffees.length} coffee(s) found`
    }
  }

  private setupEventListeners() {
    const searchInput = document.getElementById("search-input") as HTMLInputElement
    const retryButton = document.getElementById("retry-button")

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        const query = (e.target as HTMLInputElement).value.toLowerCase()
        this.filteredCoffees = this.coffees.filter(
          (coffee) =>
            coffee.title.toLowerCase().includes(query) ||
            coffee.description.toLowerCase().includes(query) ||
            coffee.ingredients.some((ingredient) => ingredient.toLowerCase().includes(query)),
        )
        this.updateGrid()
      })
    }

    if (retryButton) {
      retryButton.addEventListener("click", () => {
        this.loadCoffees()
      })
    }
  }

  private setupCardClickListeners() {
    const cards = document.querySelectorAll(".coffee-card")
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-id")
        if (id) {
          window.history.pushState(null, "", `/coffee/${id}`)
          window.dispatchEvent(new PopStateEvent("popstate"))
        }
      })
    })
  }
}
