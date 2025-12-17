"use client"

import { useState } from "react";
import WelcomeCard from "./WelcomeCard";

export default function CardSection(){

    const [selectedCard, setSelectedCard] = useState<number|null>(null)
    

    return(

        
      <section className="w-full flex flex-col gap-8 mt-12">
      <div className="flex flex-col gap-8 w-full">
        <WelcomeCard
          isSelected={selectedCard===1}
          selection={ ()=>setSelectedCard(1) }
          title="Tarjeta 1"
          imageSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=cover&w=256&q=80"
          description="Esta es la descripción de la primera tarjeta. Explica brevemente el contenido o función."
          imageAlt="Imagen representativa 1"
        />
        <WelcomeCard
          isSelected={selectedCard===2}
          selection={ ()=>setSelectedCard(2) }
          title="Tarjeta 2"
          imageSrc="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=cover&w=256&q=80"
          description="Esta es la descripción de la segunda tarjeta. Aquí puedes resaltar otra característica."
          imageAlt="Imagen representativa 2"
        />
        <WelcomeCard
          isSelected={selectedCard===3}
          selection={ ()=>setSelectedCard(3) }
          title="Tarjeta 3"
          imageSrc="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=cover&w=256&q=80"
          description="Esta es la descripción de la tercera tarjeta. Destaca información relevante adicional."
          imageAlt="Imagen representativa 3"
        />
      </div>
    </section>

    )
}
