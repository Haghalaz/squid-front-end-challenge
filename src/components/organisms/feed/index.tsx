import usePosts from "@hooks/usePosts.ts";

import Loader from "@atoms/loader";
import EmptyContent from "@molecules/empty-content";
import ErrorMessage from "@molecules/error-message";
import PhotoCard from "@molecules/photo-card";

export default function Feed() {
  const { data, error, isLoading } = usePosts();

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage />;
  if (!data || data?.length === 0) return <EmptyContent />;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
      {data.map((photo) => (
        <PhotoCard key={photo._id} data={photo} />
      ))}
    </div>
  );
}
