import { Link } from "react-router-dom";
import SubjectCard from "../components/SubjectCard";

const subjects = [
  { name: "JavaScript", path: "/notes/javascript" },
  { name: "React", path: "/notes/react" },
  { name: "CSS", path: "/notes/css" },
];

const Home = () => {
  return (
    <div>
      <h1>Welcome to jNote</h1>
      <div className="subjects-container">
        {subjects.map((subject, index) => (
          <Link key={index} to={subject.path}>
            <SubjectCard title={subject.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
