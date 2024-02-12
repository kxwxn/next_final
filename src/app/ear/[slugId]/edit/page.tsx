import SpotifyPostForm from "@/components/SpotifyPostForm/SpotifyPostForm";
import EarEditForm from "@/components/EarEditForm/EarEditForm";

interface paramsType {
  params: {
    slugId: number;
  };
}
export default function Edit({ params }: paramsType) {
  console.log(params);
  return (
    <div>
      <EarEditForm slugId={params.slugId} />
    </div>
  );
}
