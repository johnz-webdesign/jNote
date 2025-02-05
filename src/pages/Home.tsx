import { Link } from "react-router-dom";

const subjects = ["JavaScript", "React", "CSS", "Design"];

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 bg-bg">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold">Welcome to jNote</h1>
        <h2>Write down your thoughts, worries, hopes and dreams</h2>
        <hr className="border border-p" />
      </div>
      <div className="grid grid-cols-4 gap-7">
        {subjects.map((subject) => (
          <p key={subject}>
            <Link
              to={`/notes/${subject.toLowerCase()}`}
              className="bg-blue-500 hover:bg-blue-600 block rounded-lg px-6 py-3 text-center text-white shadow transition"
            >
              {subject}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Home;
