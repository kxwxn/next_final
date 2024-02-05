import SpotifyPostForm from "@/components/SpotifyPostForm/SpotifyPostForm";
import EarEditForm from "@/components/EarEditForm/EarEditForm";

export default function Edit({ params }) {
  console.log(params);
  return (
    <div>
      <EarEditForm slugId={params.slugId} />
    </div>
  );
}
