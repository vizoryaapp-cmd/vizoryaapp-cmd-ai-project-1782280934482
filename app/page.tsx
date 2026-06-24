import React from 'react';
import Menu from './components/Menu';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-gradient-to-r from-yellow-500 to-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Restoran Menüsü</h1>
        </div>
      </header>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <Menu />
        </div>
      </section>
    </main>
  );
}