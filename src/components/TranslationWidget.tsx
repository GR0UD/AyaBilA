"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    TranslationWidget: (
      publicKey: string,
      config?: {
        pageLanguage?: string;
        position?: string;
        autoDetectLanguage?: boolean;
        theme?: {
          baseColor?: string;
          textColor?: string;
        };
        showUI?: boolean;
      }
    ) => void;
    translate: (
      languageCode: string,
      successCallback?: (res: unknown) => void,
      errorCallback?: (err: unknown) => void
    ) => void;
    resetTranslation: (
      languageCode: string,
      successCallback?: (res: unknown) => void,
      errorCallback?: (err: unknown) => void
    ) => void;
  }
}

export default function TranslationWidgetComponent() {
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_TRANSLATION_WIDGET_KEY;
    
    if (!publicKey) {
      console.warn("Translation widget key not configured");
      return;
    }

    // Preload the script for faster loading
    const preloadLink = document.createElement("link");
    preloadLink.rel = "preload";
    preloadLink.as = "script";
    preloadLink.href = "https://unpkg.com/translation-widget@1.1.4/dist/index.min.js";
    document.head.appendChild(preloadLink);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/translation-widget@1.1.4/dist/index.min.js";
    script.defer = true;

    const initWidget = () => {
      if (window.TranslationWidget) {
        window.TranslationWidget(publicKey, {
          pageLanguage: "da",
          position: "bottom-right",
          autoDetectLanguage: false,
          showUI: false,
          theme: {
            baseColor: "#ffffff",
            textColor: "#1a1a1a",
          },
        });
        // Add aria-label to translation widget iframe
        const iframe = document.querySelector('iframe[src*="translation-widget"]') as HTMLIFrameElement;
        if (iframe) {
          iframe.setAttribute("aria-label", "Translation widget");
          iframe.setAttribute("title", "Translation widget");
        }
      }
    };

    script.onload = () => {
      if (document.readyState === "complete") {
        initWidget();
      } else {
        window.addEventListener("load", initWidget);
      }
    };

    document.body.appendChild(script);

    return () => {
      window.removeEventListener("load", initWidget);
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      if (document.head.contains(preloadLink)) {
        document.head.removeChild(preloadLink);
      }
    };
  }, []);

  return null;
}
