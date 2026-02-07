import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
    base: mode === "production" ? "/gitanjali-maam/" : "/",
    plugins: [
        tailwindcss(),
        {
            name: "build-uuid-generator",

            generateBundle() {
                const uuid = crypto.randomUUID();

                this.emitFile({
                    type: "asset",
                    fileName: "build.txt",
                    source: uuid,
                });
            },
        },
    ],
}));
