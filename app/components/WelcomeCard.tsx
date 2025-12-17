interface WelcomeCardProps {
  title: string;
  imageSrc: string;
  description: string;
  imageAlt?: string;
  isSelected: boolean;
  selection? : ()=>void; 
}

export default function WelcomeCard({
  title,
  imageSrc,
  description,
  imageAlt,
  isSelected = false,
  selection

  /* Pendiente de terminar */

}: WelcomeCardProps) {
  return (
    <article className={ `rounded-lg shadow-md p-6 flex flex-col items-center text-center ${ isSelected ? "bg-amber-600":"bg-zinc-500" } `}
             onClick={selection}
        >
      <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">
        {title}
      </h3>
      <img
        src={imageSrc}
        alt={imageAlt || `Imagen representativa ${title}`}
        className="w-28 h-28 object-cover rounded-full mb-4"
      />
      <p className="text-zinc-700 dark:text-zinc-300">{description}</p>
    </article>
  );
}

