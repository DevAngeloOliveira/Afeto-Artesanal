interface ProductFilterProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const categories = [
  { id: null, name: 'Todos' },
  { id: 'buque-eterno', name: 'Buquê Eterno' },
  { id: 'buque-borboleta', name: 'Buquê de Borboleta' }
];

export default function ProductFilter({ selectedCategory, onSelectCategory }: ProductFilterProps) {
  return (
    <div className="overflow-x-auto pb-4 mb-8">
      <div className="flex justify-start md:justify-center gap-4 min-w-max px-4">
        {categories.map((category) => (
          <button
            key={category.id ?? 'all'}
            onClick={() => onSelectCategory(category.id)}
            className={`px-6 py-2 rounded-full transition whitespace-nowrap ${
              selectedCategory === category.id
                ? 'bg-brand-accent text-brand-light'
                : 'bg-brand-beige text-brand-dark hover:bg-brand-accent/10'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
} 