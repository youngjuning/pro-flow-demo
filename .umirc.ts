import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/proflow", component: "ProFlow" },
    { path: "/reactflow", component: "ReactFlow" },
  ],
  npmClient: 'pnpm',
});
