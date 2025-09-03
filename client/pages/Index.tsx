import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  ShoppingCart,
  Search,
  Menu,
  Star,
  Truck,
  Shield,
  Award,
  Users,
  Heart,
  ArrowRight,
  Check,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    {
      name: "Proteínas",
      image:
        "https://images.pexels.com/photos/13779116/pexels-photo-13779116.jpeg",
      description: "Whey, Caseína, Vegetal",
    },
    {
      name: "Pre-Entreno",
      image:
        "https://images.pexels.com/photos/13779103/pexels-photo-13779103.jpeg",
      description: "Energía y Rendimiento",
    },
    {
      name: "Aminoácidos",
      image:
        "https://images.pexels.com/photos/6475117/pexels-photo-6475117.jpeg",
      description: "BCAA, Glutamina, Creatina",
    },
    {
      name: "Vitaminas",
      image:
        "https://images.pexels.com/photos/13787562/pexels-photo-13787562.jpeg",
      description: "Multivitamínicos y Minerales",
    },
    {
      name: "Pérdida de Peso",
      image:
        "https://images.pexels.com/photos/13779110/pexels-photo-13779110.jpeg",
      description: "Quemadores y Termogénicos",
    },
    {
      name: "Ganancia Muscular",
      image:
        "https://images.pexels.com/photos/6475116/pexels-photo-6475116.jpeg",
      description: "Mass Gainers y Anabólicos",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Whey Protein Isolate",
      brand: "NutriMax Pro",
      price: 159.9,
      originalPrice: 199.9,
      image:
        "https://images.pexels.com/photos/13779116/pexels-photo-13779116.jpeg",
      rating: 4.8,
      reviews: 234,
      badge: "Bestseller",
    },
    {
      id: 2,
      name: "Creatina Monohidrato",
      brand: "PowerFit",
      price: 89.9,
      originalPrice: 119.9,
      image:
        "https://images.pexels.com/photos/13779110/pexels-photo-13779110.jpeg",
      rating: 4.9,
      reviews: 156,
      badge: "Oferta",
    },
    {
      id: 3,
      name: "Pre-Entreno Extremo",
      brand: "BeastMode",
      price: 129.9,
      originalPrice: null,
      image:
        "https://images.pexels.com/photos/13779103/pexels-photo-13779103.jpeg",
      rating: 4.7,
      reviews: 89,
      badge: "Nuevo",
    },
    {
      id: 4,
      name: "BCAA 2:1:1",
      brand: "AminoMax",
      price: 79.9,
      originalPrice: 99.9,
      image:
        "https://images.pexels.com/photos/6475117/pexels-photo-6475117.jpeg",
      rating: 4.6,
      reviews: 167,
      badge: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Promotional Carousel */}
      <div className="bg-gradient-to-r from-primary via-accent to-primary text-white py-3 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative z-10">
          <div className="flex items-center justify-center text-center">
            <div className="flex items-center space-x-2 animate-pulse">
              <span className="text-yellow-300">🔥</span>
              <span className="font-bold text-sm md:text-base">
                ¡MEGA OFERTA! 40% OFF en Proteínas Whey
              </span>
              <span className="text-yellow-300">🔥</span>
            </div>
            <div className="hidden md:flex items-center ml-6 text-sm opacity-90">
              <Truck className="w-4 h-4 mr-2" />
              <span>Envío gratis desde S/150</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`border-b sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-gray-200"
            : "bg-white/98 backdrop-blur-md shadow-md border-gray-100"
        }`}
      >
        <div className="container">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? "h-14 lg:h-16" : "h-16 lg:h-18"
            }`}
          >
            {/* Logo */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <div
                className={`bg-gradient-primary rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isScrolled
                    ? "w-7 h-7 md:w-9 md:h-9"
                    : "w-8 h-8 md:w-10 md:h-10"
                }`}
              >
                <span
                  className={`text-white font-bold transition-all duration-300 ${
                    isScrolled ? "text-base md:text-lg" : "text-lg md:text-xl"
                  }`}
                >
                  S
                </span>
              </div>
              <span
                className={`font-bold text-foreground truncate transition-all duration-300 ${
                  isScrolled ? "text-base md:text-lg" : "text-lg md:text-xl"
                }`}
              >
                StyloFitness
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="/"
                className="text-foreground hover:text-primary transition-colors"
              >
                Inicio
              </a>
              <a
                href="/productos"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Productos
              </a>
              <a
                href="/categorias"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Categorías
              </a>
              <a
                href="/marcas"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Marcas
              </a>
              <a
                href="/contacto"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contacto
              </a>
            </nav>

            {/* Search and Cart */}
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Desktop Search */}
              <div className="hidden lg:flex items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Buscar productos..."
                    className="pl-10 w-64"
                  />
                </div>
              </div>

              {/* Mobile Search Button */}
              <Button variant="ghost" size="sm" className="lg:hidden p-2">
                <Search className="w-5 h-5 text-muted-foreground" />
              </Button>

              {/* Cart Button */}
              <Button size="sm" className="relative p-2 md:px-3">
                <ShoppingCart className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-xs bg-orange text-white border-2 border-white">
                  3
                </Badge>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden p-2 ml-1"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white/98 backdrop-blur-md shadow-lg">
            <div className="container py-6 space-y-6">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Buscar productos..."
                  className="pl-12 h-12 text-base border-2 focus:border-primary"
                />
              </div>

              {/* Mobile Navigation */}
              <nav className="space-y-1">
                <a
                  href="/"
                  className="flex items-center justify-between text-foreground hover:text-primary hover:bg-primary/5 transition-all py-4 px-4 rounded-lg font-medium text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </a>
                <a
                  href="/productos"
                  className="flex items-center justify-between text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all py-4 px-4 rounded-lg font-medium text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Productos
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </a>
                <a
                  href="/categorias"
                  className="flex items-center justify-between text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all py-4 px-4 rounded-lg font-medium text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Categorías
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </a>
                <a
                  href="/marcas"
                  className="flex items-center justify-between text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all py-4 px-4 rounded-lg font-medium text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Marcas
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </a>
                <a
                  href="/contacto"
                  className="flex items-center justify-between text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all py-4 px-4 rounded-lg font-medium text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </a>
              </nav>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200">
                <Button
                  className="w-full h-12 text-base font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ver Todos los Productos
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              {/* Quick Contact */}
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  ¿Necesitas ayuda?
                </p>
                <p className="font-semibold text-primary">+51 999 888 777</p>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 lg:py-32 overflow-hidden min-h-[75vh] md:min-h-[85vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg"
            alt="Gym background"
            className="w-full h-full object-cover scale-110 animate-pulse"
            style={{ animationDuration: "8s" }}
          />
          <div className="absolute inset-0 bg-black/70 md:bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50 md:from-black/70 md:via-black/50 md:to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        <div className="container relative z-10 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="space-y-4 md:space-y-6">
                <Badge className="bg-primary/20 text-primary border-primary/30 backdrop-blur-sm text-sm md:text-base px-4 py-2">
                  ✨ Los mejores suplementos del mercado
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Potencia tu
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {" "}
                    rendimiento{" "}
                  </span>
                  al máximo
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-lg mx-auto lg:mx-0">
                  Transforma tu entrenamiento con suplementos premium.
                  Resultados garantizados y la confianza de miles de atletas.
                </p>
              </div>

              <div className="flex justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="text-base md:text-lg bg-primary hover:bg-primary/90 shadow-lg px-6 md:px-8 h-12 md:h-14 w-full sm:w-auto"
                >
                  Explorar Productos
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-8 pt-6 md:pt-8">
                <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-3 md:p-4 border border-white/20">
                  <div className="text-xl md:text-2xl font-bold text-white">
                    500+
                  </div>
                  <div className="text-xs md:text-sm text-gray-300">
                    Productos
                  </div>
                </div>
                <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-3 md:p-4 border border-white/20">
                  <div className="text-xl md:text-2xl font-bold text-white">
                    10K+
                  </div>
                  <div className="text-xs md:text-sm text-gray-300">
                    Clientes
                  </div>
                </div>
                <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-3 md:p-4 border border-white/20">
                  <div className="text-xl md:text-2xl font-bold text-white">
                    50+
                  </div>
                  <div className="text-xs md:text-sm text-gray-300">Marcas</div>
                </div>
              </div>
            </div>

            {/* Desktop Feature Card */}
            <div className="relative hidden xl:block">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl transform rotate-6 opacity-80"></div>
              <div className="relative bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl overflow-hidden border border-white/20">
                <div className="relative z-10 text-center space-y-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-lg">
                    <img
                      src="https://images.pexels.com/photos/16216609/pexels-photo-16216609.jpeg"
                      alt="Fitness supplements"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Calidad Premium
                  </h3>
                  <p className="text-gray-600">
                    Suplementos certificados y de las mejores marcas
                    internacionales
                  </p>
                  <div className="flex justify-center space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <div className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    +15,000 clientes satisfechos
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Feature Banner */}
            <div className="xl:hidden mt-8 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  Calidad Premium
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  Suplementos certificados de las mejores marcas
                </p>
                <div className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                  +15,000 clientes satisfechos
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3612932/pexels-photo-3612932.jpeg"
            alt="Abstract pattern background"
            className="w-full h-full object-cover opacity-5"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-secondary/50 to-white"></div>
        </div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg">Envío Gratis</h3>
              <p className="text-muted-foreground">
                En compras mayores a S/150
              </p>
            </div>
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg">100% Seguro</h3>
              <p className="text-muted-foreground">Productos certificados</p>
            </div>
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg">Mejor Precio</h3>
              <p className="text-muted-foreground">Garantía de mejor precio</p>
            </div>
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg">Atención 24/7</h3>
              <p className="text-muted-foreground">Soporte especializado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary/5"></div>
        <div className="container relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Categorías Populares
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Encuentra exactamente lo que necesitas para tu rutina de
              entrenamiento
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary/20 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  <div className="p-6 text-center space-y-4">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                    <Button
                      variant="ghost"
                      className="group-hover:bg-primary group-hover:text-white transition-all"
                    >
                      Ver Productos
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6296123/pexels-photo-6296123.jpeg"
            alt="Fitness equipment background"
            className="w-full h-full object-cover opacity-5"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-gray-50/80 to-gray-100"></div>
        </div>
        <div className="container relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Productos Destacados
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Los suplementos más vendidos y mejor valorados por nuestros
              clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="aspect-square overflow-hidden bg-secondary">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {product.badge && (
                      <Badge
                        className={`absolute top-3 left-3 ${
                          product.badge === "Bestseller"
                            ? "bg-orange"
                            : product.badge === "Oferta"
                              ? "bg-red-500"
                              : "bg-blue"
                        }`}
                      >
                        {product.badge}
                      </Badge>
                    )}
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {product.brand}
                      </p>
                      <h3 className="font-semibold text-lg leading-tight">
                        {product.name}
                      </h3>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium ml-1">
                          {product.rating}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({product.reviews})
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-primary">
                          S/{product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-lg text-muted-foreground line-through">
                            S/{product.originalPrice}
                          </span>
                        )}
                      </div>

                      <Button className="w-full group-hover:bg-primary group-hover:text-white transition-all">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Agregar al Carrito
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Ver Todos los Productos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/33742401/pexels-photo-33742401.jpeg"
            alt="Abstract gradient background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80"></div>
        </div>
        <div className="container relative z-10">
          <Card className="bg-black/20 backdrop-blur-md text-white overflow-hidden border border-white/20 shadow-2xl">
            <CardContent className="p-12 text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Mantente al día con las últimas ofertas
                </h2>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                  Suscríbete a nuestro newsletter y recibe descuentos
                  exclusivos, nuevos productos y consejos de nutrición
                  deportiva.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Tu correo electrónico"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
                <Button
                  variant="secondary"
                  className="text-primary font-semibold"
                >
                  Suscribirse
                </Button>
              </div>

              <div className="flex items-center justify-center space-x-4 text-sm opacity-75">
                <div className="flex items-center">
                  <Check className="w-4 h-4 mr-2" />
                  Sin spam
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 mr-2" />
                  Ofertas exclusivas
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="text-xl font-bold">StyloFitness</span>
              </div>
              <p className="text-background/70">
                StyloFitness - Tu tienda especializada en suplementos deportivos
                y nutrición. Productos premium, calidad garantizada y los
                mejores precios del mercado.
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="w-4 h-4" />
                    <span>+51 999 888 777</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="w-4 h-4" />
                    <span>info@stylofitness.com</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>Lima, Perú</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">
                    Síguenos en redes sociales:
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="w-9 h-9 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href="https://wa.me/51999888777"
                      className="w-9 h-9 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                      aria-label="WhatsApp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
              <div className="space-y-3">
                <a
                  href="/"
                  className="block text-background/70 hover:text-primary transition-colors"
                >
                  Inicio
                </a>
                <a
                  href="/productos"
                  className="block text-background/70 hover:text-primary transition-colors"
                >
                  Productos
                </a>
                <a
                  href="/categorias"
                  className="block text-background/70 hover:text-primary transition-colors"
                >
                  Categorías
                </a>
                <a
                  href="/marcas"
                  className="block text-background/70 hover:text-primary transition-colors"
                >
                  Marcas
                </a>
                <a
                  href="/ofertas"
                  className="block text-background/70 hover:text-primary transition-colors"
                >
                  Ofertas
                </a>
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Categorías</h3>
              <div className="space-y-3">
                <a
                  href="/proteinas"
                  className="block text-background/70 hover:text-primary transition-colors"
                >
                  Proteínas
                </a>
                <a
                  href="/pre-entreno"
                  className="block text-background/70 hover:text-primary transition-colors"
                >
                  Pre-Entreno
                </a>
                <a
                  href="/aminoacidos"
                  className="block text-background/70 hover:text-primary transition-colors"
                >
                  Aminoácidos
                </a>
                <a
                  href="/vitaminas"
                  className="block text-background/70 hover:text-primary transition-colors"
                >
                  Vitaminas
                </a>
                <a
                  href="/perdida-peso"
                  className="block text-background/70 hover:text-primary transition-colors"
                >
                  Pérdida de Peso
                </a>
              </div>
            </div>

            {/* Support */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Soporte</h3>
              <div className="space-y-3">
                <a
                  href="/contacto"
                  className="block text-background/70 hover:text-primary transition-colors"
                >
                  Contacto
                </a>
                <a
                  href="/ayuda"
                  className="block text-background/70 hover:text-primary transition-colors"
                >
                  Centro de Ayuda
                </a>
                <a
                  href="/envios"
                  className="block text-background/70 hover:text-primary transition-colors"
                >
                  Envíos
                </a>
                <a
                  href="/devoluciones"
                  className="block text-background/70 hover:text-primary transition-colors"
                >
                  Devoluciones
                </a>
                <a
                  href="/garantia"
                  className="block text-background/70 hover:text-primary transition-colors"
                >
                  Garantía
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-background/70 text-sm">
                © 2024 StyloFitness Supplements. Todos los derechos reservados.
              </p>
              <div className="flex space-x-6 text-sm">
                <a
                  href="/privacidad"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Política de Privacidad
                </a>
                <a
                  href="/terminos"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Términos y Condiciones
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
