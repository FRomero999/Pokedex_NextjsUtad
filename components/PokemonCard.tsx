import React from "react";
import Image from "next/image";

interface PokemonCardProps {
  image: string;
  number: number;
  name: string;
}

export default function PokemonCard({ image, number, name }: PokemonCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md p-4 flex flex-col items-center w-56 border border-blue-200 dark:border-blue-900">
      <Image src={image} alt={name} width={96} height={96} className="w-24 h-24 object-contain mb-3" />
      <span className="text-sm text-blue-500 font-semibold mb-1">#{number.toString().padStart(3, '0')}</span>
      <h3 className="text-lg font-bold capitalize text-blue-900 dark:text-blue-100">{name}</h3>
    </div>
  );
}
