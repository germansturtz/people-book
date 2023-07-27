import makeApp from './app';
import { AppDataSource } from './data-source/data-source';

const PORT = 4000;

(async () => {
    await AppDataSource().initialize();

    const app = await makeApp();

    app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
})();
