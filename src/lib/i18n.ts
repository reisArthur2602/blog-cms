import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { intl } from "@/config/intl";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!locale || !intl.locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../langs/${locale}.json`)).default,
  };
});
