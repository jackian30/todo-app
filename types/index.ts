interface task {
  id: number,
  name: string,
  status: {
    done: boolean,
  }
}

interface taskProps {
  task: task
}