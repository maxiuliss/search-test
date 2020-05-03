import { CustomerType } from 'src/app/shared/constants/customer-type';

export interface SearchResult {
  id: string;
  type: CustomerType;
  name: string;
  code: string;
}
