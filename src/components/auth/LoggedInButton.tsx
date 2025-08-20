import { FaRegUserCircle } from 'react-icons/fa';

interface Props {
  onLogout: () => void;
}

export const LoggedInButton = ({ onLogout }: Props) => {
  return (
    <div>
      <button
        style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
        onClick={onLogout}
      >
        <FaRegUserCircle style={{ fontSize: '2.6rem' }} />
      </button>
    </div>
  );
};
