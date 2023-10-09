package tech.pavelartemev.bookslibrary.config;

public final class Environment {
    private final String host;

    private static Environment instance;

    private Environment() {
        this.host = "http://localhost:3000";
    }

    public static Environment getInstance() {
        if (instance == null) {
            instance = new Environment();
        }
        return instance;
    }

    public static String getHost() {
        return instance.host;
    }
}
