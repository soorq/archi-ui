module.exports = {
    plugins: {
        tailwindcss: { config: "./tailwind.config.cjs" },
        autoprefixer: { overrideBrowserslist: "last 1 version" },
    },
};
