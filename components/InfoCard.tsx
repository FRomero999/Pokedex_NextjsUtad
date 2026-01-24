import { InfoCardProps } from "@/interfaces/InfoCardProps";

export default function InfoCard({ title, description }: InfoCardProps) {
  return (
    <div className="bg-blue-200 dark:bg-blue-950 rounded-xl p-6 shadow flex flex-col items-center">
      <h2 className="font-bold text-xl mb-2 text-blue-900 dark:text-blue-100">{title}</h2>
      <p className="text-blue-900 dark:text-blue-100 text-center">
        {description}
      </p>
    </div>
  );
}

