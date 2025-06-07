import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { ApiService } from "../utils/api"
import type { Coffee } from "../types/coffee"

export class DetailPage {
  private navbar = new Navbar()
  private footer = new Footer()
  private coffee: Coffee | null = null
  private isLoading = true
  private error: string | null = null

  constructor(private coffeeId: string) {}

  render(): string {
    return `
            ${this.navbar.render()}
            
            <main class="min-h-screen bg-gray-50 dark:bg-gray-900">
                ${this.renderContent()}
            </main>
            
            ${this.footer.render()}
        `
  }

  private renderContent(): string {
    if (this.isLoading) {
      return this.renderSkeleton()
    }

    if (this.error || !this.coffee) {
      return `
                <div class="flex items-center justify-center min-h-screen">
                    <div class="text-center p-8">
                        <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                            ${this.error || "Coffee not found"}
                        </h2>
                        <p class="text-gray-600 dark:text-gray-400 mb-6">
                            The coffee you're looking for doesn't exist or is no longer available.
                        </p>
                        <div class="space-x-4">
                            <a href="/coffees" class="bg-coffee-600 hover:bg-coffee-700 text-white px-6 py-3 rounded-lg transition-colors">
                                View all coffees
                            </a>
                            <a href="/" class="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg transition-colors">
                                Back to home
                            </a>
                        </div>
                    </div>
                </div>
            `
    }

    return `
            <!-- Breadcrumb -->
            <nav class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-4">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center space-x-2 text-sm">
                        <a href="/" class="text-coffee-600 dark:text-coffee-400 hover:text-coffee-700 dark:hover:text-coffee-300">Home</a>
                        <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <a href="/coffees" class="text-coffee-600 dark:text-coffee-400 hover:text-coffee-700 dark:hover:text-coffee-300">Our Coffees</a>
                        <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-gray-500 dark:text-gray-400">${this.coffee.title}</span>
                    </div>
                </div>
            </nav>

            <!-- Coffee Detail -->
            <section class="py-12">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <!-- Image -->
                        <div class="space-y-4">
                            <div class="aspect-w-1 aspect-h-1 bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden">
                                <img 
                                    src="${this.coffee.image}" 
                                    alt="${this.coffee.title}"
                                    class="w-full h-96 lg:h-full object-cover"
                                    onerror="this.src='https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'"
                                >
                            </div>
                        </div>

                        <!-- Details -->
                        <div class="space-y-8">
                            <div>
                                <h1 class="font-serif text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                                    ${this.coffee.title}
                                </h1>
                                <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                                    ${this.coffee.description}
                                </p>
                            </div>

                            <!-- Ingredients -->
                            <div>
                                <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Ingredients</h3>
                                <div class="flex flex-wrap gap-3">
                                    ${this.coffee.ingredients
                                      .map(
                                        (ingredient) =>
                                          `<span class="px-4 py-2 bg-coffee-100 dark:bg-coffee-800 text-coffee-800 dark:text-coffee-200 rounded-full text-sm font-medium">${ingredient}</span>`,
                                      )
                                      .join("")}
                                </div>
                            </div>

                            <!-- Actions -->
                            <div class="space-y-4">
                                <div class="flex flex-col sm:flex-row gap-4">
                                    <button class="flex-1 bg-coffee-600 hover:bg-coffee-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path>
                                        </svg>
                                        <span>Order</span>
                                    </button>
                                    <button class="border-2 border-coffee-600 text-coffee-600 dark:text-coffee-400 dark:border-coffee-400 hover:bg-coffee-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                        </svg>
                                        <span>Favorites</span>
                                    </button>
                                </div>
                                
                                <button id="back-button" class="w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 rounded-lg transition-colors">
                                    ← Back to list
                                </button>
                            </div>

                            <!-- Additional Info -->
                            <div class="bg-coffee-50 dark:bg-coffee-900/20 rounded-xl p-6">
                                <h4 class="text-lg font-semibold text-coffee-800 dark:text-coffee-200 mb-3">
                                    Preparation Tips
                                </h4>
                                <ul class="space-y-2 text-coffee-700 dark:text-coffee-300">
                                    <li class="flex items-start space-x-2">
                                        <span class="text-coffee-500 mt-1">•</span>
                                        <span>Ideal temperature: 85-90°C</span>
                                    </li>
                                    <li class="flex items-start space-x-2">
                                        <span class="text-coffee-500 mt-1">•</span>
                                        <span>Recommended ratio: 1:15 (coffee:water)</span>
                                    </li>
                                    <li class="flex items-start space-x-2">
                                        <span class="text-coffee-500 mt-1">•</span>
                                        <span>Extraction time: 4-6 minutes</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
  }

  private renderSkeleton(): string {
    return `
            <div class="py-12">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div class="skeleton bg-gray-200 dark:bg-gray-700 h-96 lg:h-[600px] rounded-2xl"></div>
                        <div class="space-y-8">
                            <div>
                                <div class="skeleton bg-gray-200 dark:bg-gray-700 h-12 mb-4 rounded"></div>
                                <div class="skeleton bg-gray-200 dark:bg-gray-700 h-6 mb-2 rounded"></div>
                                <div class="skeleton bg-gray-200 dark:bg-gray-700 h-6 w-3/4 rounded"></div>
                            </div>
                            <div>
                                <div class="skeleton bg-gray-200 dark:bg-gray-700 h-8 w-32 mb-4 rounded"></div>
                                <div class="flex gap-3">
                                    <div class="skeleton bg-gray-200 dark:bg-gray-700 h-8 w-20 rounded-full"></div>
                                    <div class="skeleton bg-gray-200 dark:bg-gray-700 h-8 w-24 rounded-full"></div>
                                    <div class="skeleton bg-gray-200 dark:bg-gray-700 h-8 w-16 rounded-full"></div>
                                </div>
                            </div>
                            <div class="skeleton bg-gray-200 dark:bg-gray-700 h-12 rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
        `
  }

  async mount() {
    this.navbar.mount()
    await this.loadCoffee()
    this.setupEventListeners()
  }

  private async loadCoffee() {
    try {
      this.isLoading = true
      this.error = null

      this.coffee = await ApiService.getCoffeeById(this.coffeeId)
      this.isLoading = false

      const main = document.querySelector("main")
      if (main) {
        main.innerHTML = this.renderContent()
        this.setupEventListeners()
      }
    } catch (error) {
      this.isLoading = false
      this.error = error instanceof Error ? error.message : "An error occurred"

      const main = document.querySelector("main")
      if (main) {
        main.innerHTML = this.renderContent()
        this.setupEventListeners()
      }
    }
  }

  private setupEventListeners() {
    const backButton = document.getElementById("back-button")

    if (backButton) {
      backButton.addEventListener("click", () => {
        window.history.pushState(null, "", "/coffees")
        window.dispatchEvent(new PopStateEvent("popstate"))
      })
    }
  }
}
