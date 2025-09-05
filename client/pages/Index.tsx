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
        "https://images.pexels.com/photos/1552104/pexels-photo-1552104.jpeg",
      description: "Recuperación y crecimiento muscular",
    },
    {
      name: "Pre-Entreno",
      image:
        "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
      description: "Energía y enfoque para rendir al máximo",
    },
    {
      name: "Aminoácidos",
      image:
        "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg",
      description: "Resistencia y recuperación",
    },
    {
      name: "Vitaminas",
      image:
        "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
      description: "Salud integral y bienestar",
    },
    {
      name: "Pérdida de Peso",
      image:
        "https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg",
      description: "Quema de grasa y metabolismo activo",
    },
    {
      name: "Ganancia Muscular",
      image:
        "https://images.pexels.com/photos/3838389/pexels-photo-3838389.jpeg",
      description: "Fuerza y volumen",
    },
  ];

  const categoryTags = ["Músculo","Energía","Recovery","Salud","Cardio","Fuerza"];

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
      {/* Banda de Anuncio (encabezado superior) */}
      <div className="bg-gradient-to-r from-primary via-accent to-primary text-white py-3 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative z-10">
          <div className="flex items-center justify-center text-center">
            <div className="flex items-center space-x-2">
              <span className="text-yellow-300">🔥</span>
              <span className="font-bold text-sm md:text-base">
                Envío gratis desde S/150 + 20% OFF en pre-entrenos
              </span>
              <span className="text-yellow-300">🔥</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`border-b sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md shadow-md border-black/40"
            : "bg-black/90 backdrop-blur-md shadow-md border-black/40"
        }`}
      >
        <div className="container">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? "h-12 lg:h-14" : "h-14 lg:h-16"
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
                className={`font-bold text-white truncate transition-all duration-300 ${
                  isScrolled ? "text-base md:text-lg" : "text-lg md:text-xl"
                }`}
              >
                StyloFitness
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-white/90 hover:text-white">
                Inicio
              </a>
              <a href="/productos" className="text-white/80 hover:text-white">
                Productos
              </a>
              <a href="/categorias" className="text-white/90 hover:text-white px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 border border-white/20">
                Categorías
              </a>
              <a href="/marcas" className="text-white/80 hover:text-white">
                Marcas
              </a>
              <a href="/contacto" className="text-white/80 hover:text-white">
                Contacto
              </a>
            </nav>

            {/* Search and Cart */}
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Desktop Search */}
              <div className="hidden lg:flex items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 w-4 h-4" />
                  <Input
                    placeholder="Buscar productos..."
                    className="pl-10 w-64 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                </div>
              </div>

              {/* Mobile Search Button */}
              <Button variant="ghost" size="sm" className="lg:hidden p-2 text-white">
                <Search className="w-5 h-5 text-white/90" />
              </Button>

              {/* Cart Button */}
              <Button size="sm" className="relative p-2 md:px-3 bg-white/10 hover:bg-white/20 text-white">
                <ShoppingCart className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-xs bg-orange text-white border-2 border-foreground">
                  3
                </Badge>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden p-2 ml-1 text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-foreground/95 backdrop-blur-md shadow-lg border-foreground/20">
            <div className="container py-6 space-y-6">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/80 w-5 h-5" />
                <Input
                  placeholder="Buscar productos..."
                  className="pl-12 h-12 text-base bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
              </div>

              {/* Mobile Navigation */}
              <nav className="space-y-1">
                {[
                  { href: "/", label: "Inicio" },
                  { href: "/productos", label: "Productos" },
                  { href: "/categorias", label: "Categorías" },
                  { href: "/marcas", label: "Marcas" },
                  { href: "/contacto", label: "Contacto" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between text-white/90 hover:text-white hover:bg-white/10 transition-all py-4 px-4 rounded-lg font-medium text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                    <ArrowRight className="w-4 h-4 opacity-70" />
                  </a>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-white/10">
                <Button
                  className="w-full h-12 text-base font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ver Todos los Productos
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              {/* Quick Contact */}
              <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                <p className="text-sm text-white/80 mb-2">¿Necesitas ayuda?</p>
                <p className="font-semibold text-white">+51 999 888 777</p>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Quick Search + Category Hero (just after header) */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg"
            alt="Gym background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
              ¿Qué buscas hoy?
            </h1>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/70 w-6 h-6" />
              <Input
                placeholder="Proteínas, creatina, pre-entreno, vitaminas..."
                className="pl-14 h-16 text-xl bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button className="absolute right-3 top-1/2 -translate-y-1/2 h-12 px-7 text-base">
                Buscar
              </Button>
            </div>
            <div className="text-white/80 text-sm">
              Explora por objetivos:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-5">
              {categories.slice(0, 6).map((cat, i) => (
                <div key={i} className="relative group rounded-lg overflow-hidden">
                  <img src={cat.image} alt={cat.name} className="h-28 w-full object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-base font-semibold drop-shadow-md">
                      {cat.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2261482/pexels-photo-2261482.jpeg"
            alt="People training background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/30 to-black/70"></div>
        </div>
        <div className="container relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Explora por Categorías</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Imágenes reales de entrenamiento para inspirar tu objetivo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group relative rounded-xl p-[1px] bg-gradient-to-br from-primary/40 via-accent/40 to-transparent hover:from-primary hover:via-accent hover:to-primary/30 transition-colors"
              >
                <Card className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transform transition-all hover:-translate-y-1 hover:shadow-2xl">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover duration-300 transform group-hover:scale-105"
                        />
                      </div>
                      {(() => {
                        const overlay = ["from-primary/60", "from-blue/60", "from-orange/60"][index % 3];
                        return (
                          <div className={`absolute inset-0 bg-gradient-to-t ${overlay} via-black/40 to-transparent`}></div>
                        );
                      })()}
                      <span className="absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full bg-white/15 text-white border border-white/20 backdrop-blur">
                        {categoryTags[index % categoryTags.length]}
                      </span>
                    </div>
                    <div className="p-6 space-y-3 text-center">
                      <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-white/80 text-sm">{category.description}</p>
                      <Button className="w-full bg-gradient-to-r from-primary to-accent text-white border-0 hover:opacity-90">
                        Ver Productos
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Productos Destacados</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Los más vendidos y mejor valorados por nuestros clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transform transition-transform hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover duration-300 transform group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                        {product.badge && (
                          <Badge
                            className={`${
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
                        {(() => {
                          const pct = product.originalPrice
                            ? Math.round((1 - product.price / (product.originalPrice || 1)) * 100)
                            : null;
                          return pct && pct > 0 ? (
                            <span className="text-xs font-bold px-2 py-1 rounded-md bg-green-600/10 text-green-700 border border-green-600/20">
                              -{pct}%
                            </span>
                          ) : null;
                        })()}
                      </div>
                      <div className="absolute top-3 right-3 w-3.5 h-3.5 rounded-full bg-red-600 ring-2 ring-white" aria-hidden="true" />
                      <Button
                        size="icon"
                        variant="secondary"
                        className="absolute top-3 right-11 opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Añadir a favoritos"
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="p-6 space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">{product.brand}</p>
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
                        <span className="text-sm text-white/70">({product.reviews})</span>
                      </div>

                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-2xl font-bold text-primary">S/{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-lg text-muted-foreground line-through">S/{product.originalPrice}</span>
                          )}
                          {product.price >= 150 && (
                            <span className="ml-auto text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-700 border border-emerald-600/20">
                              Envío gratis
                            </span>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <Button variant="outline" className="text-foreground">
                            Detalles
                          </Button>
                          <Button className="bg-gradient-to-r from-primary to-accent text-white border-0 hover:opacity-90">
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Agregar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
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
                <Button variant="secondary" className="text-primary font-semibold">
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

      {/* Features (moved just before footer) */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3612932/pexels-photo-3612932.jpeg"
            alt="Abstract pattern background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/90 via-foreground/85 to-foreground/90"></div>
        </div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg text-white">Envío Gratis</h3>
              <p className="text-white/80">En compras mayores a S/150</p>
            </div>
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg text-white">100% Seguro</h3>
              <p className="text-white/80">Productos certificados</p>
            </div>
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg text-white">Mejor Precio</h3>
              <p className="text-white/80">Garantía de mejor precio</p>
            </div>
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg text-white">Atención 24/7</h3>
              <p className="text-white/80">Soporte especializado</p>
            </div>
          </div>
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
                  <p className="text-sm font-medium">Síguenos en redes sociales:</p>
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
                <a href="/" className="block text-background/70 hover:text-primary transition-colors">
                  Inicio
                </a>
                <a href="/productos" className="block text-background/70 hover:text-primary transition-colors">
                  Productos
                </a>
                <a href="/categorias" className="block text-background/70 hover:text-primary transition-colors">
                  Categorías
                </a>
                <a href="/marcas" className="block text-background/70 hover:text-primary transition-colors">
                  Marcas
                </a>
                <a href="/ofertas" className="block text-background/70 hover:text-primary transition-colors">
                  Ofertas
                </a>
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Categorías</h3>
              <div className="space-y-3">
                <a href="/proteinas" className="block text-background/70 hover:text-primary transition-colors">
                  Proteínas
                </a>
                <a href="/pre-entreno" className="block text-background/70 hover:text-primary transition-colors">
                  Pre-Entreno
                </a>
                <a href="/aminoacidos" className="block text-background/70 hover:text-primary transition-colors">
                  Aminoácidos
                </a>
                <a href="/vitaminas" className="block text-background/70 hover:text-primary transition-colors">
                  Vitaminas
                </a>
                <a href="/perdida-peso" className="block text-background/70 hover:text-primary transition-colors">
                  Pérdida de Peso
                </a>
              </div>
            </div>

            {/* Support */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Soporte</h3>
              <div className="space-y-3">
                <a href="/contacto" className="block text-background/70 hover:text-primary transition-colors">
                  Contacto
                </a>
                <a href="/ayuda" className="block text-background/70 hover:text-primary transition-colors">
                  Centro de Ayuda
                </a>
                <a href="/envios" className="block text-background/70 hover:text-primary transition-colors">
                  Envíos
                </a>
                <a href="/devoluciones" className="block text-background/70 hover:text-primary transition-colors">
                  Devoluciones
                </a>
                <a href="/garantia" className="block text-background/70 hover:text-primary transition-colors">
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
                <a href="/privacidad" className="text-background/70 hover:text-primary transition-colors">
                  Política de Privacidad
                </a>
                <a href="/terminos" className="text-background/70 hover:text-primary transition-colors">
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
