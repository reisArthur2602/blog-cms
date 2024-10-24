"use client";

import React, { useEffect } from "react";

import { useLocale } from "next-intl";
import { theme as antdTheme, ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { useTheme } from "@/hooks/usetheme";

import ptBR from "antd/locale/pt_BR";
import enUS from "antd/locale/en_US";
import "react-quill/dist/quill.snow.css";

const { darkAlgorithm, defaultAlgorithm } = antdTheme;

export const ANTDProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme, getThemeSaved } = useTheme();

  const locate = useLocale();

  const selectThemeAlgorith =
    theme === "dark" ? darkAlgorithm : defaultAlgorithm;

  const selectLanguage = locate === "pt-BR" ? ptBR : enUS;

  useEffect(() => {
    getThemeSaved();
  }, [getThemeSaved]);

  return (
    <StyleProvider>
      <AntdRegistry>
        <ConfigProvider
          theme={{
            algorithm: selectThemeAlgorith,
          }}
          locale={selectLanguage}
        >
          {children}
        </ConfigProvider>
      </AntdRegistry>
    </StyleProvider>
  );
};
