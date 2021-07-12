export interface Task {
  id: number;
  description: string;
  owner: string;
  mail: string;
  done: number;
  undoCount: number;
}
