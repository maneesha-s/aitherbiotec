export type Product = {
  _id: string;
  name: string;
  slug: string;
  category: string;
  ingredient: string;
  strength: string;
  form: string;
  description: string;
  featured?: boolean;
  imageUrl?: string;
};

export const products: Product[] = [
  { _id: "ab-001", name: "Aether-C 500", slug: "aether-c-500", category: "Vitamins & Nutrition", ingredient: "Ascorbic acid", strength: "500 mg", form: "Tablets", description: "A vitamin C supplement formulated for everyday nutritional support.", featured: true },
  { _id: "ab-002", name: "Aether-D3", slug: "aether-d3", category: "Vitamins & Nutrition", ingredient: "Cholecalciferol", strength: "60,000 IU", form: "Capsules", description: "A vitamin D3 supplement for clinician-guided nutritional support." },
  { _id: "ab-003", name: "Aether-Zinc", slug: "aether-zinc", category: "Vitamins & Nutrition", ingredient: "Zinc sulphate", strength: "20 mg", form: "Tablets", description: "A zinc supplement produced with a focus on consistent quality." },
  { _id: "ab-004", name: "Aether-Panto", slug: "aether-panto", category: "Gastrointestinal", ingredient: "Pantoprazole", strength: "40 mg", form: "Tablets", description: "An acid-reducing medicine. Use only as directed by a qualified healthcare professional." },
  { _id: "ab-005", name: "Aether-Cal", slug: "aether-cal", category: "Bone & Joint", ingredient: "Calcium carbonate + Vitamin D3", strength: "500 mg + 250 IU", form: "Tablets", description: "A calcium and vitamin D combination for clinician-guided nutritional support." },
  { _id: "ab-006", name: "Aether-Mont", slug: "aether-mont", category: "Respiratory Care", ingredient: "Montelukast", strength: "10 mg", form: "Tablets", description: "A prescription medicine. Use only under the supervision of a qualified healthcare professional." },
];
