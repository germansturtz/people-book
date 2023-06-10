import makeApp from './app';

const PORT = 4000;

(async () => {
    const app = await makeApp();

    app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
})();
