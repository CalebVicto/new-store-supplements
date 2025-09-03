import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
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
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold">Contáctanos</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes alguna pregunta sobre nuestros productos o necesitas asesoría? 
            Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nombre</label>
                    <Input placeholder="Tu nombre completo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="tu@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Asunto</label>
                  <Input placeholder="¿En qué podemos ayudarte?" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mensaje</label>
                  <Textarea 
                    placeholder="Describe tu consulta o necesidad..."
                    className="min-h-32"
                  />
                </div>
                <Button size="lg" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Teléfono</h3>
                      <p className="text-muted-foreground">+51 999 888 777</p>
                      <p className="text-sm text-muted-foreground">Lun - Vie: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">info@stylofitness.com</p>
                      <p className="text-sm text-muted-foreground">Respuesta en 24 horas</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Ubicación</h3>
                      <p className="text-muted-foreground">Lima, Perú</p>
                      <p className="text-sm text-muted-foreground">Envíos a todo el país</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Horarios</h3>
                      <p className="text-muted-foreground">Lun - Vie: 9:00 AM - 7:00 PM</p>
                      <p className="text-muted-foreground">Sáb: 9:00 AM - 3:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-primary text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">¿Necesitas asesoría nutricional?</h3>
                <p className="mb-6 opacity-90">
                  Nuestros expertos en nutrición deportiva pueden ayudarte a elegir 
                  los suplementos perfectos para tus objetivos.
                </p>
                <Button variant="secondary" size="lg">
                  Agendar Consulta Gratuita
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
