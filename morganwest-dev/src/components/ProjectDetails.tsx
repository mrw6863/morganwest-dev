import { useParams } from 'react-router-dom';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return <h2>Details for project {id}</h2>;
};
