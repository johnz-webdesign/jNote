import { useParams, Link } from "react-router-dom";
import notesData from "../data/content";

console.log("Imported notesData:", notesData);

const Notes = () => {
  const { subject } = useParams<{ subject: string }>();

  // Normalize keys in notesData and match subject (case-insensitive)
  const normalizedData = Object.keys(notesData).reduce(
    (acc, key) => {
      acc[key.toLowerCase()] = notesData[key];
      return acc;
    },
    {} as Record<string, { title: string; content: string }[]>
  );

  const notes = normalizedData[subject?.toLowerCase() || ""] || [];

  return (
    <div
      data-t="wrapper"
      className="center min-h-screen flex-col gap-5 rounded-lg bg-bg p-6"
    >
      <Link
        to="/"
        className="relative mx-0 p-0 pb-1 text-3xl text-h transition-colors duration-200 after:absolute after:bottom-[1px] after:left-0 after:h-[1px] after:w-0 after:bg-h after:transition-all after:duration-500 after:ease-in-out hover:text-white hover:after:w-full"
      >
        - Home -
      </Link>

      <h2 className="mb-4 mt-4 text-2xl font-bold">
        {subject ? subject : "Notes"}
      </h2>

      <div className="space-y-5">
        {notes.length > 0 ? (
          notes.map((note, index) => (
            <div
              data-t="card-content"
              key={index}
              className="rounded-lg border border-white/35 bg-card p-5"
            >
              <h3 className="text-lg text-blue">{note.title}</h3>
              <p>{note.content}</p>
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
