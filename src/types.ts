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
  digitalLift: string;
  agency: string;
  diy: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface QuizAnswers {
  category: string;
  service: string;
  operatingTime: string;
  enquiriesPerMonth: string;
  clientSource: string;
  pipelineChallenge: string;
  firstName: string;
  businessName: string;
  email: string;
  phone: string;
}
