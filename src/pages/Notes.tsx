import { useParams, Link } from "react-router-dom";

const notesData: Record<string, { title: string; content: string }[]> = {
  javascript: [
    {
      title: "Closures",
      content: "Closures retain access to outer scope variables.",
    },
    { title: "Promises", content: "Promises handle asynchronous operations." },
  ],
  react: [
    {
      title: "useState Hook",
      content: "useState adds state to functional components.",
    },
    {
      title: "useEffect Hook",
      content: "useEffect runs after render for side effects.",
    },
  ],
};

const Notes = () => {
  const { subject } = useParams<{ subject: string }>();
  const notes = notesData[subject || ""] || [];

  return (
    <div
      data-t="wrapper"
      className="center min-h-screen flex-col gap-5 rounded-lg bg-bg"
    >
      <Link to="/" className="text-blue-500 hover:underline">
        ← Back to Home
      </Link>
      <h2 className="mb-6 mt-4 text-2xl font-bold">
        {subject ? subject.toUpperCase() : "Notes"}
      </h2>
      <div className="space-y-4">
        {notes.length > 0 ? (
          notes.map((note, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white p-4 shadow-md"
            >
              <h3 className="mb-2 text-lg font-semibold">{note.title}</h3>
              <p className="text-gray-700">{note.content}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No notes available for this subject.</p>
        )}
      </div>
    </div>
  );
};

export default Notes;
