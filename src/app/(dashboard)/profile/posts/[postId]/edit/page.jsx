import { getPostById } from "@/services/postServices";
import { notFound } from "next/navigation";
import CreatePostForm from "../../create/_/CreatePostForm";
import Breadcrumbs from "@/ui/BreadCrumbs";

async function EditPage({ params: { postId } }) {
  const { post } = await getPostById(postId);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "پست ها",
            href: "/profile/posts",
          },
          {
            label: "ویرایش پست",
            href: `/profile/posts/${postId}/edit`,
            active: true,
          },
        ]}
      />
      <CreatePostForm postToEdit={post}/>
    </div>
  );
}

export default EditPage;
