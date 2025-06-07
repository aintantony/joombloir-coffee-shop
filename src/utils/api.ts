import type { Coffee } from "../types/coffee"

const API_BASE_URL = "https://api.sampleapis.com/coffee"

export class ApiService {
  static async getCoffees(): Promise<Coffee[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/hot`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      return data.slice(0, 20)
    } catch (error) {
      console.error("Error fetching coffees:", error)
      throw new Error("Failed to fetch coffee data")
    }
  }

  static async getCoffeeById(id: string): Promise<Coffee | null> {
    try {
      const coffees = await this.getCoffees()
      return coffees.find((coffee) => coffee.id.toString() === id) || null
    } catch (error) {
      console.error("Error fetching coffee by ID:", error)
      throw new Error("Failed to fetch coffee details")
    }
  }
}
