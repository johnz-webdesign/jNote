const notesData: Record<string, { title: string; content: string }[]> = {
  javascript: [
    {
      title: "Closures",
      content: "Closures retain access to outer scope variables."
    },
    {
      title: "Promises",
      content: "Promises handle asynchronous operations."
    }
  ],
  react: [
    {
      title: "useState Hook",
      content: "`useState` adds state to functional components."
    }
  ]
};

export default notesData;
