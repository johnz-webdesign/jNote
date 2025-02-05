import { Link } from "react-router-dom";

const subjects = ["JavaScript", "React", "CSS", "Design"];

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-5">
      <div className="flex flex-col gap-2.5">
        <h1 className="text-5xl font-bold">Welcome to jNote</h1>
        <h2>Write down your thoughts, worries, hopes and dreams</h2>
      </div>
      <ul className="space-y-4">
        {subjects.map((subject) => (
          <li key={subject}>
            <Link
              to={`/notes/${subject.toLowerCase()}`}
              className="block px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            >
              {subject}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
