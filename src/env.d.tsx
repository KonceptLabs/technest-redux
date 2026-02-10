/// <reference types="astro/client" />

type KVNamespace = import('@cloudflare/workers-types').KVNamespace;

declare global {
  namespace App {
    interface Locals {
      runtime: {
        env: {
          ZAPIER_WEBHOOK_URL?: string;
          ZAPIER_WEBHOOK_CONTACT_US?: string;
          [key: string]: string | undefined;
        };
        cf?: {
          colo?: string;
          country?: string;
          [key: string]: any;
        };
        ctx?: {
          waitUntil: (promise: Promise<any>) => void;
        };
      };
    }
  }
}

export {};
