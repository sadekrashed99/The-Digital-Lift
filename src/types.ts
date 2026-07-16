export interface MethodologyStep {
  number: string;
  title: string;
  description: string;
  iconName: string; // Used to reference Lucide icons dynamically
}

export interface DeliverableItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ComparisonRow {
  feature: string;
  agency: string;
  digitalLift: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface QuizAnswers {
  goal: string;
  industry: string;
  revenue: string;
  name: string;
  email: string;
}
