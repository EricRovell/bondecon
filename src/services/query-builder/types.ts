export type QueryParams = Record<string, any>;

export interface Options<T extends string> {
  limit?: number;
  sort?: -1 | 1;
  projection?: T;
}