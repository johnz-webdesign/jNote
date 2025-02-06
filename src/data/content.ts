const notesData: Record<string, { title: string; content: string }[]> = {
  Sleep: [
    {
      title: "Lorem Ipsom",
      content: "Closures retain access to outer scope variables."
    },
    {
      title: "Promises",
      content: "Promises handle asynchronous operations."
    }
  ],
  React: [
    {
      title: "useState Hook",
      content: "`useState` adds state to functional components."
    }
  ]
};

export default notesData;
