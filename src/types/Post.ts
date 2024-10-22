import { Prisma } from "@prisma/client";

export type PostWithUsers = Prisma.PostGetPayload<{
  include: {
    user: true;
  };
}>;
