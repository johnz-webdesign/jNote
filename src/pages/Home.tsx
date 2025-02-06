import { Link } from "react-router-dom";

const subjects = ["Testing", "React", "CSS", "Design"];

const Home = () => {
  return (
    <div
      data-t="wrapper"
      className="center min-h-screen flex-col gap-7 rounded-lg bg-bg"
    >
      <div className="center flex-col gap-3.5">
        <h1 className="text-6xl text-blue">Welcome to jNote</h1>
        <h2 className="mb-2.5">
          Write down your thoughts, worries, hopes and dreams
        </h2>
        <hr className="w-full border border-p" />
      </div>
      <div className="grid grid-cols-4 gap-7">
        {subjects.map((subject) => (
          <p key={subject}>
            <Link
              to={`/notes/${subject.toLowerCase()}`}
              className="center hover:brightness-120 rounded-lg bg-card p-5 text-lg text-h shadow-[0_0_8px_3px_#A9F2FF] transition-all duration-300 hover:-translate-y-2 hover:opacity-75"
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
