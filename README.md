# Pokémon Gallery

A responsive Pokémon gallery built with **Next.js 15**, **Tailwind CSS**, and the **PokeAPI**.  
Browse through hundreds of Pokémon with pagination, skeleton loading, and optimized image handling.

![Preview](https://placehold.co/800x400/efefef/333333?text=Pokemon+Gallery+Preview) <!-- Ganti dengan screenshot asli jika deploy -->

## ✨ Features

- 📡 Fetch Pokémon data from [PokeAPI](https://pokeapi.co/)
- 🔢 Client-side pagination using `offset` & `limit`
- 🦴 **Skeleton loading** for smooth UX during data fetching
- 🖼️ Optimized image loading with `next/image` (sprites from GitHub)
- 📱 Fully **responsive** layout (mobile → desktop)
- ⚡ Built with **Next.js App Router** + **Server Components**
- 🎨 Clean architecture & organized folder structure

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router, Turbopack)
- **Styling**: Tailwind CSS
- **API**: [PokeAPI](https://pokeapi.co/)
- **Fonts**: Geist (via `next/font`)
- **Deployment Ready**: Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18.x
- npm / yarn / pnpm / bun

### Installation
```bash
git clone https://github.com/your-username/pokemon-gallery.git
cd pokemon-gallery
npm install