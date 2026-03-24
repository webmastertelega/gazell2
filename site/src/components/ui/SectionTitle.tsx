interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  label,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="text-center mb-8 md:mb-10">
      {label && (
        <span className="inline-block text-primary font-unbounded text-sm font-semibold tracking-wider uppercase mb-3">
          {label}
        </span>
      )}
      <h2 className="font-unbounded text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
