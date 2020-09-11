export interface ITodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}
export interface ITodo {
  id: string;
  text: string;
}
