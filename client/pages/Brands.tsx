import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Brands() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Placeholder */}
      <header className="border-b bg-white/95 backdrop-blur-md">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold text-foreground">StyloFitness</span>
            </div>
            <Button variant="ghost" asChild>
              <a href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al Inicio
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container py-20">
        <div className="text-center space-y-8 max-w-2xl mx-auto">
          <div className="text-6xl mb-8">🏷️</div>
          <h1 className="text-4xl font-bold">Marcas Premium</h1>
          <p className="text-xl text-muted-foreground">
            Descubre todas las marcas de suplementos que tenemos disponibles. 
            Solo trabajamos con los mejores fabricantes del mercado.
          </p>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Próximamente: Optimum Nutrition, Dymatize, BSN, Muscletech y muchas más.
            </p>
            <Button size="lg" asChild>
              <a href="/">Explorar Productos</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
