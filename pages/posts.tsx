import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import React from "react";

export interface PostPageQuery extends ParsedUrlQuery {
  page?: string;
  sort_by?: string;
  sort_order?: string;
  slug?: string;
}

const PostsPage = () => {
  const router = useRouter();
  const query = router.query as PostPageQuery;

  return (
    <div>
      <pre>{JSON.stringify(query, null, 4)}</pre>
    </div>
  );
};

export default PostsPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const query = ctx.query as PostPageQuery;

  return {
    props: {},
  };
};
