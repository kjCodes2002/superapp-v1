import { AppSchema } from '../types/AppSchema';

export const demoApp: AppSchema = {
  appName: 'Expense Tracker',
  entities: [
    {
      name: 'expense',
      fields: [
        { name: 'title', label: 'Title', type: 'text' },
        { name: 'amount', label: 'Amount', type: 'number' },
        { name: 'date', label: 'Date', type: 'date' },
      ],
    },
  ],
  screens: [
    { type: 'list', entity: 'expense' },
    { type: 'form', entity: 'expense' },
  ],
};