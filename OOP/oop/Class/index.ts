class Task {
  private id: number;
  private title: string;
  private dueDate: Date;
  private completed: boolean;

  constructor(taskInfo: { id: number; title: string; dueDate: Date }) {
    this.id = taskInfo.id;
    this.title = taskInfo.title;
    this.dueDate = taskInfo.dueDate;
    this.completed = false;
  }

  public complete() {
    this.completed = true;
  }

  public inComplete() {
    this.completed = false;
  }
}

const task1 = new Task({ id: 1, title: "Fizz", dueDate: new Date() });

task1.complete();
console.log(task1);
