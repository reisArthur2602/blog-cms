"use server";

import prisma from "@/lib/db";
import { signIn as authSignIn } from "@/lib/auth";
import { redirect } from "@/lib/navigation";

export const signIn = async ({ data }: { data: { email: string } }) => {
  const user = await prisma.user.findUnique({ where: { email: data.email } });
  if (!user) return { error: "ACCOUNT_NOT_FOUND" };

  await authSignIn("nodemailer", {
    email: user.email,
    redirect: false,
  });

  redirect({ href: "/auth/verify-email", locale: "pt-BR" });
};

export const signUp = async ({ data }: { data: { name: string, email: string } }) => {
  
  const user = await prisma.user.findUnique({
      where: {
          email: data.email
      }
  })

  if (user) return { error: 'ACCOUNT_ALREADY_EXISTS' }

  await prisma.user.create({ data })

  await authSignIn('nodemailer', {
      email: data.email,
      redirect: false
  })

  redirect({ href: "/auth/verify-email", locale: "pt-BR" });
}