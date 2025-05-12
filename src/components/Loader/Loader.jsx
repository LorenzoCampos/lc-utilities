import { LoaderCircle } from 'lucide-react';

const Loader = () => {
  return (
    <div className="text-gray-500 flex justify-center items-center h-full">
      <LoaderCircle className="animate-spin" size={24} />
    </div>
  );
}

export default Loader;