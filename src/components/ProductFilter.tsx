interface ProductFilterProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const categories = [
  { id: null, name: 'Todos os Produtos' },
  { id: 'buque-eterno', name: 'Buquê Eterno' },
  { id: 'buque-borboleta', name: 'Buquê de Borboleta' }
];

export default function ProductFilter({ selectedCategory, onSelectCategory }: ProductFilterProps) {
  return (
    <div className="mb-12">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category.id ?? 'all'}
            onClick={() => onSelectCategory(category.id)}
            className={`px-8 py-3 rounded-full transition-all text-lg ${
              selectedCategory === category.id
                ? 'bg-brand-accent text-brand-light shadow-md'
                : 'bg-white text-brand-dark hover:bg-brand-accent/10 border-2 border-brand-accent/20'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
} 