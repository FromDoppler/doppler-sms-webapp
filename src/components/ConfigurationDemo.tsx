import { useAppServices } from "./application";

export const ConfigurationDemo = () => {
  const { appConfigurationRenderer } = useAppServices();
  const configurationAsJson =
    appConfigurationRenderer.getConfigurationAsJsonString();
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Configuration content</h2>
      <code>
        <pre>{configurationAsJson}</pre>
      </code>
    </main>
  );
};
